/* Magic Mirror
 * Original Module: MMM-BMW-DS
 * By Mykle1
 * Module: MMM-BMW-PW
 * Updated to used Pirateweather by Gonzonia
 * MIT Licensed
 */


var NodeHelper = require("node_helper");
var needle = require("needle");
var moment = require("moment");



module.exports = NodeHelper.create({

    start: function() {
        console.log("Starting node_helper for: " + this.name);
    },

    getWeather: function(url) {
        
		var self = this;
		 needle.get(url, function(error, response, body) {
         if (!error){
  			if(response.statusCode == 200) {
            	//Good response
				var result = body; //needle automagically parses the response as JSON
				//console.log(body);
                result.instanceId = url.instanceId;
                self.sendSocketNotification("WEATHER_RESULT", result);
               }
               else {
               	console.error("[MMM-BMW-PW] " + moment().format("D-MMM-YY HH:mm") + " ** unexpected response code ** " + response.statusCode);
                }
		 	} else {
                console.error("[MMM-BMW-PW] " + moment().format("D-MMM-YY HH:mm") + " ** ERROR ** " + error);
            }
		});	 
		/*		
		request({
            url: url,
            method: 'GET'
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
				var result = JSON.parse(body);
//					console.log(response.statusCode); // for checking
                    this.sendSocketNotification('WEATHER_RESULT', result);
            }
        ;*/
     },
    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_WEATHER') {
            this.getWeather(payload);
        }
        if (notification === 'CONFIG') {
            this.config = payload;
        }	
    }
});
