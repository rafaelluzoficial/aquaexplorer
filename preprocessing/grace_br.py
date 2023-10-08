import sys
import os
import glob
import pandas as pd
import reverse_geocode

from shapely.geometry import Point
from shapely.geometry.polygon import Polygon
import states

states_polygon = {}
for state in states.states_polygon:
    polygon_str = states.states_polygon[state]
    polygon = []
    for lat_long in polygon_str.split(","):
        long_lat = lat_long.strip().split(' ')
        long = float(long_lat[0])
        lat = float(long_lat[1])
        polygon.append((lat, long))
    states_polygon[state] = Polygon(polygon)


def search_state(lat, long):
    point = Point(lat, long)
    for state in states_polygon:
        if states_polygon[state].contains(point):
            return state
    return ""


input = "/home/andre/Projects/spaceapps/mnt/spaceapps/data/GRACEDADM_CLSM025GL_7D_3.0/csv"
output = "./datalake/br"

# sys.argv[1]
for file in reversed(sorted(glob.glob(input + f"/*-csv"))):
    file_out = os.path.basename(file)
    file_out = output + "/" + ".".join(file_out.split(".")[:-1])
    print(file, file_out)
    if os.path.exists(file_out):
        continue

    df = pd.read_csv(file)
    df = df.dropna()
    rows_gws_inst = []
    rtzsm_inst = []
    sfsm_inst = []

    csv = "lat,lon,time,gws_inst,rtzsm_inst,sfsm_inst,state,city\n"
    for index, row in df.iterrows():
        coords = reverse_geocode.search(((row["lat"], row["lon"]),))
        if coords[0]['country_code'] == 'BR':
            state = search_state(row["lat"], row["lon"])
            city = coords[0]["city"]
            csv += f"{row['lat']},{row['lon']},{row['time']},{row['gws_inst']},{row['rtzsm_inst']},{row['sfsm_inst']},{state},{city}\n"

    # df_new.to_csv(file_out)
    with open(file_out, "w") as f:
        f.write(csv)
