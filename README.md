# Leaflet.ChineseTmsProviders

An extension to [Leaflet](http://leafletjs.com/) that contains configurations for various Chinese tile providers.

## Usage

Leaflet-ChineseTmsProviders [providers](#providers) are refered to with a provider[.<variant>]-string. Let's say you want to add the nice `Normal` base layers from `www.tianditu.com` to your map, you pass `TianDiTu.Normal` to the `L.china.provider`-constructor, which will return a `L.TileLayer` instance for TianDiTu Normal tile layer.
```Javascript
//add TianDiTu Normal Layer to map.
L.china.provider('TianDiTu.Normal').addTo(map);
```

## Example

```Javascript
var map = L.map('map', {
    center: [31.59, 120.29],
    zoomLevel: 12
});

L.china.provider('TianDiTu.Normal',{maxZoom:18,minZoom:2}).addTo(map);
L.china.provider('TianDiTu.Satellite',{maxZoom:18,minZoom:2}).addTo(map);

```
There are more examples at the examples folder like below.
```
./examples/indexTianDiTu.html
./examples/indexMapABC.html
./examples/indexGaoDe.html
```
All maps use Coordinate Reference Systems (CRS), which are EPSG:4326. Therefore, they are compatible with other international tile providers that are based on EPSG:4326 or EPSG:900913. So they can be used with other tile providers (e.g. googlemap, OpenStreetMap, OpenWeatherMap, etc.) that are using the same CRS (i.e. EPSG:4326 or EPSG:900913). 

<a name="providers"></a>
## Providers

Current options suitable for tile layers are:
* TianDiTu
    * TianDiTu.Normal
    * TianDiTu.Satellite
* MapABC
    * MapABC.Normal
    * MapABC.Satellite
* GaoDe
    * GaoDe.Normal
    * GaoDe.Satellite

## About

This work was inspired from <https://github.com/tontita/Leaflet.KoreanTmsProviders>, and <https://github.com/leaflet-extras/leaflet-providers>.