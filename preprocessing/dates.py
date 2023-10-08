import os
import glob


for file in reversed(sorted(glob.glob("./data/GRACEDADM_CLSM025GL_7D_3.0/"))):
    for file in reversed(sorted(glob.glob(input + "/*"))):
        file_out = os.path.basename(file)
        data = file_out.split(".")[1].replace("A", "")
        print(data)
        # print(data[:4], data[4:6], data[6:8])
