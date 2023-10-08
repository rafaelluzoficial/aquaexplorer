import os
import glob
# import json
import pandas as pd
import reverse_geocode

input = "/home/andre/Projects/spaceapps/mnt/spaceapps/data/GRACEDADM_CLSM025GL_7D_3.0/csv"


f = open("datalake/outout.csv", "w")

csv = "lat,lon\n"
for file in reversed(sorted(glob.glob(input + "/**-csv"))):
    file_out = os.path.basename(file)
    file_out = "join_metadata/" + file_out + "_processed"
    with open(file_out, "w") as f:
        f.write("processed")

    df = pd.read_csv(file)
    df = df.dropna()
    for index, row in df.iterrows():
        # if row["lat"] > 13:
        #     continue
        # if row["lon"] > -83 and row["lon"] > -34:
        #     continue

        # http://download.geonames.org/export/dump/
        coords = reverse_geocode.search(((row["lat"], row["lon"]),))
        if coords[0]['country_code'] == 'BR':

            point = Point(0.5, 0.5)
            polygon = Polygon([(0, 0), (0, 1), (1, 1), (1, 0)])
            print(polygon.contains(point))

            # heartmap
            print(coords)
            # rows_gws_inst.append([row["lat"], row["lon"], row["gws_inst"]])
            # rtzsm_inst.append([row["lat"], row["lon"], row["rtzsm_inst"]])
            # sfsm_inst.append([row["lat"], row["lon"], row["sfsm_inst"]])

