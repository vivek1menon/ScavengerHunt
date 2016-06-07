/**
 * Created by Vivek on 6/6/2016.
 */
var myLat = 40.627404016302734; var myLng = -74.17849394571912;
var myLat2 = 40.63419690000001; var myLng2 = -73.96612570000002;
var myLat3 = 40.638253;         var myLng3  =  -73.96890989999997;
var myLat4 =  40.633126;        var myLng4 = -73.97146299999997;
var coordinatesLat = [myLat, myLat2, myLat3, myLat4];
var coordinatesLng = [myLng, myLng2, myLng3, myLng4];
var counter1=0;
var geocordlat =  40.62754346868996; var geocordlng =  -74.17860145325043;

var newgeolat  = Math.floor(geocordlat * 1000) / 1000;
var newgeolng  = Math.ceil(geocordlng * 1000) / 1000;
var newcordlat = Math.floor(coordinatesLat[counter1] * 1000) / 1000;
var newcordlng = Math.ceil(coordinatesLng[counter1] * 1000) / 1000;

if((newgeolat == newcordlat) && (newgeolng == newcordlng))
{
    console.log(newgeolat,newgeolng,newcordlat, newcordlng);
    counter1++;
}