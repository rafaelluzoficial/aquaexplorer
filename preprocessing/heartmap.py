import os
import glob
import json
import pandas as pd
import reverse_geocode


input = "/home/andre/Projects/spaceapps/mnt/spaceapps/data/GRACEDADM_CLSM025GL_7D_3.0/csv"
output = "./data/GRACEDADM_CLSM025GL_7D_3.0"


for file in reversed(sorted(glob.glob(input + "/**-csv"))):
    file_out = os.path.basename(file)
    file_out = output + "/" + ".".join(file_out.split(".")[:-1])
    file_out_rows_gws_inst = file_out + "_rows_gws_inst"
    file_out_rtzsm_inst = file_out + "_rtzsm_inst"
    file_out_sfsm_inst = file_out + "_sfsm_inst"

    print(file, file_out_rows_gws_inst)
    if os.path.exists(file_out_rows_gws_inst):
        continue

    # df = pd.read_parquet("./datalake/part-00160-625f3bd5-8b67-478c-9c6b-317e4d0c7568.c000.snappy.parquet")
    df = pd.read_csv(file)
    df = df.dropna()

    # object = json.loads("""                  {
    # "type": "FeatureCollection",
    # "features": []
    # }
    # """)
    rows_gws_inst = []
    rtzsm_inst = []
    sfsm_inst = []
    i = 0
    for index, row in df.iterrows():
        # if row["lat"] > 13:
        #     continue
        # if row["lon"] > -83 and row["lon"] > -34:
        #     continue

        # http://download.geonames.org/export/dump/
        coords = reverse_geocode.search(((row["lat"], row["lon"]),))
        if coords[0]['country_code'] == 'BR':
            # heartmap
            rows_gws_inst.append([row["lat"], row["lon"], row["gws_inst"]])
            rtzsm_inst.append([row["lat"], row["lon"], row["rtzsm_inst"]])
            sfsm_inst.append([row["lat"], row["lon"], row["sfsm_inst"]])

            # geojson
            # object["features"].append({
            #     "type": "Feature",
            #     "properties": {
            #         "gws_inst": row["gws_inst"],
            #         "rtzsm_inst": row["rtzsm_inst"],
            #         "sfsm_inst": row["sfsm_inst"],
            #     },
            #     "geometry": {
            #         "coordinates": [
            #             row["lon"], row["lat"]
            #         ],
            #         "type": "Point"
            #     }
            # })

    with open(file_out_rows_gws_inst, "w") as f:
        json.dump(rows_gws_inst, f)
    with open(file_out_rtzsm_inst, "w") as f:
        json.dump(rtzsm_inst, f)
    with open(file_out_sfsm_inst, "w") as f:
        json.dump(sfsm_inst, f)
