import os
import glob
import json

for file in reversed(sorted(glob.glob("./data/GRACEDADM_CLSM025GL_7D_3.0/*"))):
    file_out = os.path.basename(file)
    # print(data[:4], data[4:6], data[6:8])

    coords = "lat,lon\n"
    with open(file, 'r') as f:
        data = json.load(f)
        for row in data:
            coords += f"{row[0]}, {row[1]}\n"

    with open(f"./datalake/coords/{file_out}.csv", "w") as f:
        f.write(coords)
