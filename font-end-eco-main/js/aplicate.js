var  map  =  new  google.maps.Map(document.getElementById('map'),  {  
    center:  new  google.maps.LatLng([15.35041,108.16041]),  
    mapTypeId:  google.maps.MapTypeId.ROADMAP,  
    zoom:  11  
});  

var  t  =  new  Date().getTime();  
var  waqiMapOverlay  =  new  google.maps.ImageMapType({  
    getTileUrl:  function  (coord,  zoom)  {  
            return  'https://tiles.aqicn.org/tiles/usepa-aqi/'  +  zoom  +  "/"  +  coord.x  +  "/"  +  coord.y  +  ".png?token=10eff006ec31b515737b4e48647a0d535de258a8";  
    },  
    name:  "Air  Quality",  
});  

map.overlayMapTypes.insertAt(0,  waqiMapOverlay);   