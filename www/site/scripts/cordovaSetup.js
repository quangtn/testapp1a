/**
 * Created by robpassante on 3/25/14.
 */

var cordovaScript;
var isIOS = (/iPhone|iPod|iPad/).test(navigator.userAgent);
var p;
var requiredPlugins = [
    'org.apache.cordova.device/www/device.js',
    'org.apache.cordova.geolocation/www/Coordinates.js',
	'org.apache.cordova.geolocation/www/PositionError.js',
	'org.apache.cordova.geolocation/www/Position.js',
	'org.apache.cordova.geolocation/www/geolocation.js',
    'org.apache.cordova.network-information/www/network.js',
	'org.apache.cordova.network-information/www/Connection.js',
    'org.apache.cordova.splashscreen/www/splashscreen.js'
]
if (isIOS) {
    cordovaScript = 'ios/cordova.js';
    p = 1.0;
}else{
    //Testing for existance of cordova.  This may not be the best way
    //Attempting to distinguish between cordova and mobile web

    if (navigator.device) {
        //navigator.device.cordova kept blowing up at random times for some reason
        //p = navigator.device.cordova; //Cordova Version #
        p = 1.0
    } else {
        p = 'NM'; //Non-Cordova
    }

    if (p != 'NM') {

        var isDroid = (/Android/).test(navigator.userAgent);

        if (isDroid) {
            cordovaScript = '/plugins/android/cordova.js';
            requiredPlugins.push(cordovaScript);
        }
    }
}

if(p != 'NM'){
    var deviceType = 'ios';
    if(isDroid)deviceType = 'android';
	document.write('\x3Cscript src="plugins/' + deviceType + '/cordova.js">\x3C/script>');
    //for(var plugin in requiredPlugins){
        //document.write('\x3Cscript src="plugins/' + deviceType + '/' + requiredPlugins[plugin] +'">\x3C/script>');
    //}
}