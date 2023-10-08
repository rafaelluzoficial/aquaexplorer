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


input = "/home/andre/Projects/spaceapps/geoserver/maps/datalake/br/*"
files = list(glob.glob(input))
df = [pd.read_csv(file) for file in files[:2]]
df = pd.concat(df)
print(df)
