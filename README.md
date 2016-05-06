# Leaflet.ChineseTmsProviders

An extension to [Leaflet](http://leafletjs.com/) that contains configurations for various Chinese tile providers.

## Usage

Leaflet-ChineseTmsProviders [providers](#providers) are refered to with a `provider.<variant>.<type>` -string. Let's say you want to add the nice `Normal.Map` base layers from `www.tianditu.com` to your map, you pass `TianDiTu.Normal.Map` to the `L.tileLayer.chinaProvider`-constructor, which will return a `L.TileLayer` instance for TianDiTu Normal Map tile layer.
```Javascript
//add TianDiTu Normal Map Layer to map.
L.tileLayer.chinaProvider('TianDiTu.Normal.Map').addTo(map);
```

## Example

```Javascript
var map = L.map('map', {
    center: [31.59, 120.29],
    zoom: 12
});

L.tileLayer.chinaProvider('TianDiTu.Normal.Map',{maxZoom:18,minZoom:5}).addTo(map);
L.tileLayer.chinaProvider('TianDiTu.Normal.Annotion',{maxZoom:18,minZoom:5}).addTo(map);

```
There are more examples at the examples folder like below.
```
./examples/indexTianDiTu.html
./examples/indexGaoDe.html
./examples/indexGoogle.html
./examples/indexGeoq.html

```
All maps use Coordinate Reference Systems (CRS), which are EPSG:4326. Therefore, they are compatible with other international tile providers that are based on EPSG:4326 or EPSG:900913. So they can be used with other tile providers (e.g. googlemap, OpenStreetMap, OpenWeatherMap, etc.) that are using the same CRS (i.e. EPSG:4326 or EPSG:900913). 

<a name="providers"></a>
## Providers

Current options suitable for tile layers are:
* TianDiTu
    * TianDiTu.Normal.Map
    * TianDiTu.Normal.Annotion
    * TianDiTu.Satellite.Map
    * TianDiTu.Satellite.Annotion
    * TianDiTu.Terrain.Map
    * TianDiTu.Terrain.Annotion
* GaoDe
    * GaoDe.Normal.Map (include Annotion)
    * GaoDe.Satellite.Map
    * GaoDe.Satellite.Annotion
* Google
    * Google.Normal.Map (include Annotion)
    * Google.Satellite.Map
* Geoq
    * Geoq.Normal.Map
    * Geoq.Normal.Color
    * Geoq.Normal.PurplishBlue
    * Geoq.Normal.Gray
    * Geoq.Normal.Warm
    * Geoq.Normal.Cold

## About

This work was inspired from <https://github.com/tontita/Leaflet.KoreanTmsProviders>, and <https://github.com/leaflet-extras/leaflet-providers>.
