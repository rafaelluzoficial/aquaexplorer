import os
import glob
import psycopg2
import pandas as pd

con = psycopg2.connect(
    host='localhost',
    database='spaceapps', user='postgres', password='postgres',
)
cur = con.cursor()

# https://github.com/eduardo-veras/kml-brasil
# https://www.ibge.gov.br/geociencias/downloads-geociencias.html
# stped /home/andre/Projects/spaceapps/mnt/spaceapps/data/GRACEDADM_CLSM025GL_7D_3.0/csv/GRACEDADM_CLSM025GL_7D.A20210628.030.nc4-csv
input = "/home/andre/Projects/spaceapps/mnt/spaceapps/data/GRACEDADM_CLSM025GL_7D_3.0/csv"
# \[ ([\-0-9\.]+), ([\-0-9\.]+) ]
#for file in reversed(sorted(glob.glob(input + "/*-csv"))):
for file in sorted(glob.glob(input + "/*-csv")):
    print(file)
    file_out = os.path.basename(file)
    df = pd.read_csv(file)
    df = df.dropna()
    values = []
    for index, row in df.iterrows():
        values.append(f"({row['gws_inst']},{row['rtzsm_inst']},{row['sfsm_inst']},'','','{row['time']}','{row['lat']}','{row['lon']}','SRID=4326;POINT({row['lon']} {row['lat']})', '{file_out}:{index}')")

    values = ",".join(values)
    sql = f"insert into grace (gws_inst,rtzsm_inst,sfsm_inst,state,city,time,lat,long,lat_long,file_index) VALUES {values}"
    cur.execute(sql)
    con.commit()

con.close()


# CREATE TABLE public.grace (
# 	id bigserial NOT NULL,
# 	gws_inst float8 NOT NULL,
# 	rtzsm_inst float8 NOT NULL,
# 	sfsm_inst float8 NOT NULL,
# 	state varchar NOT NULL,
# 	city varchar NOT NULL,
# 	"time" varchar NOT NULL,
# 	lat float8 NOT NULL,
# 	long float8 NOT NULL,
# 	lat_long public.geography NOT NULL,
# 	CONSTRAINT grace_pk PRIMARY KEY (id)
# );

# CREATE TABLE public.states (
# 	id serial4 NOT NULL,
# 	state varchar NOT NULL,
# 	geom public.geometry NOT NULL
# );

# SELECT st_dwithin('LINESTRING ( 0 0, 0 2 )'::geometry, 'POINT(0.0001 0.0001)'::geometry, 0.0001);
