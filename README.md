# gitbase table schemas for cube.js

## Some features(for now)

- table dimensions

## how to running

* install npm packages

```code
cd gitbase-schema && npm i or yarn
```

* start cube dev server


```code
cd gitbase-schema && yarn dev
```

* view dev webserver

```code
open http://localhost:4000
```

## some notes

* .env

```code
cube.js use dotenv for env management please change the file with your gitbase server info
```

* table schema

```code
cube.js 0.9.0 can  auth fetch table infos without information metadatabase

but you nedd  specific primary key filed
```