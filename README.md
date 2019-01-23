# Leaflet.ChineseTmsProviders

An extension to [Leaflet](http://leafletjs.com/) that contains configurations for various Chinese tile providers.

## Usage

```bash
npm i leaflet.chinatmsproviders
```

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

[./examples/indexTianDiTu.html](http://htoooth.github.io/Leaflet.ChineseTmsProviders/examples/indexTianDiTu.html)

[./examples/indexGaoDe.html](http://htoooth.github.io/Leaflet.ChineseTmsProviders/examples/indexGaoDe.html)

[./examples/indexGoogle.html](http://htoooth.github.io/Leaflet.ChineseTmsProviders/examples/indexGoogle.html)

[./examples/indexGeoq.html](http://htoooth.github.io/Leaflet.ChineseTmsProviders/examples/indexGeoq.html)

[./examples/indexOSM.html](http://htoooth.github.io/Leaflet.ChineseTmsProviders/examples/indexOSM.html)

Above all maps use Coordinate Reference Systems (CRS), which are EPSG:3857. 

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
    * Geoq.Normal.PurplishBlue
    * Geoq.Normal.Gray
    * Geoq.Normal.Warm
    * Geoq.Normal.Hydro
* OSM
    * OSM.Normal.Map

## About

This work was inspired from <https://github.com/tontita/Leaflet.KoreanTmsProviders>, and <https://github.com/leaflet-extras/leaflet-providers>.
