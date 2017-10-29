// ==UserScript==
// @name         IITC plugin: Open GoogleMap
// @category       Portal Info
// @namespace      https://hodade.com
// @version      0.1
// @description  try to take over the world!
// @author       hodade
// @include        https://*.ingress.com/intel*
// @include        http://*.ingress.com/intel*
// @match          https://*.ingress.com/intel*
// @match          http://*.ingress.com/intel*
// @grant          none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();

window.plugin.showLinkedPortal.portalDetail = function (data) {
    console.log('test');
    console.log(data);
    
    var lat = parseFloat(data.portalDetails.latE6) / 1000000;
    var lng = parseFloat(data.portalDetails.lngE6) / 1000000;
    console.log(lat,lng);
    
    var googlemapurl = 'https://www.google.com/maps?q='+lat+','+lng;
    console.log(googlemapurl);
    
    var div = $('<aside>').addClass('hodade test' );
    div.append($('<span>').html('<a href="'+googlemapurl+'">show GoogleMap</a>'));
    div .appendTo('#portaldetails');

    
};
