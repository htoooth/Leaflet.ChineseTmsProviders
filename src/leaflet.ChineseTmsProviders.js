L.TileLayer.ChinaProvider = L.TileLayer.extend({

    initialize: function(type, options) { // (type, Object)
        var providers = L.TileLayer.ChinaProvider.providers;

        var parts = type.split('.');

        var providerName = parts[0];
        var mapName = parts[1];
        var mapType = parts[2];

        var url = providers[providerName][mapName][mapType];
        options.subdomains =providers[providerName].Subdomains;

        L.TileLayer.prototype.initialize.call(this,url,options);
    }
});

L.TileLayer.ChinaProvider.providers ={
    TianDiTu : {
        Normal: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}",
        },
        Satellite: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}",
        },
        Terrain: {
            Map: "http://t{s}.tianditu.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}",
            Annotion: "http://t{s}.tianditu.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}",
        },
        Subdomains:['0','1','2','3','4','5','6','7']
    },

    MapABC:{
        Normal:{
            Map:'http://emap{s}.mapabc.com/mapabc/maptile?&x={x}&y={y}&z={z}'
        },
        Subdomains:["0","1", "2", "3"]
    },
    
    GaoDe:{
        Normal:{
            Map:'',
            Annotion:''
        },
        Satellite:{
            Map:'',
            Annotion:''
        },
        Subdomains:[]
    }
};

L.tileLayer.chinaProvider= function(type, options) {
    return new L.TileLayer.ChinaProvider(type, options);
};