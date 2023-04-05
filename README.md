## MMM-BMW-PW
##UPDATED VERSION OF MMM-BMW-DS by https://github.com/mykle1
##
##Seriously, I just updated the module to use Pirateweather. Nothing else. 

**Bugger My Weather** PirateWeather

## Same church, different pew

I wanted to take a new approach at a weather module. Until now, I had only done WWI and WWI2 but I
wasn't really happy with those, although they were fun to do. This has a bit more style to it (not much)
and it doesn't resemble other modules in format or appearance. I learned a couple of new things while
doing it and I used what I learned in the module itself. Nothing monumental but very satisfying for me.

## Good-bye bottom_bar (Well, not really)

* This was designed for use in the bottom_bar position of your MagicMirror
* Can share bottom bar position with newsfeed module via Hello_Lucy
* Minutely updates for current conditions
* Support for a host of different languages from the API
* CSS provided for coloring and sizing. Make it your own.

## Simple sound support

By default it will play rain sound when raining (when darksky data says it's raining)
for one minute and then again every 5 minutes until the data changes. Same for thunder.
You will have to provide the wind mp3 file and name it wind.mp3 and place it in the 
sounds folder of this module. You can use any mp3 files you like as long as you name them
rain.mp3, thunder.mp3 and wind.mp3 and place them in the sounds folder of this module.

## Examples

* Default white

![](images/1.png)

* Colored and summary hidden

![](images/2.png)

## Installation and requirements

* `git clone https://github.com/gonzonia/MMM-BMW-PW` into the `~/MagicMirror/modules` directory.

* Free API key at `[https://pirateweather.net](http://pirateweather.net/)` (Required)

* Run 'npm install request' from within module directory

## Config.js entry and options

    {
    disabled: false,
    module: "MMM-BMW-PW",
    position: "bottom_bar",               // bottom_bar is best
    config: {
        apiKey: "YOUR API KEY GOES HERE", // Free API key @ [piratweather](http://pirateweather.net/)
        tempUnits: "F",	// MUST BE CAPITAL LETTER C or F
        lat: 'YOUR LATITUDE GOES HERE', 
        lng: 'YOUR LONGITUDE GOES HERE',
        css: "1", // 1=default, 2=Clean, 3=Lord of the Rings, 4=handwriting, 5=Julee, 6=Englebert, "" = returns default css
        ownTitle: "Current Conditions",   // Use your own language and statement
        playSounds: "yes", // yes = weather sounds, no = no weather sounds
        useHeader: false,               
        header: "Your header",
        maxWidth: "100%",
           }
    },
	
## Thanks to "Big Salty" for suggesting a rewrite of MMM-BMW

* The original MMM-BMW is still available. However, it requires an older WunderGround API key



