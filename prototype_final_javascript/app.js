/* Application for 345 Assignment: Rory Mearns (ID.3928873) */

/* ------ Global Variables ------ */
var appOn = true,
sailAlpha = 1.34,
skill = ["beginner", "experienced"],	// Skill options available to users
days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
currentDay = "monday", 
currentScreen = false,
warningMsg = "Severe Warning",
warningToday = true,
firstBoot = true,
sleepStatus = true,
daysFastFoward,
rawWeather;

/* ------ User Settings ------ */
var user = {
	riderWeight: 85,
	riderDays: ["wednesday", "friday", "saturday", "sunday"],
	riderSkill: "experienced",
	riderLocal: "St Clair",
	riderPreferenceUpper: 7.0,
	riderPreferenceLower: 5.2
}

/* ------ Weather Data ------ */
// Raw weather will be processed into the following format:
var weather = {
	day0: {					// Day0 = Today
		windLower: '',
		windUpper: '',
		windDir: '',
		temp: '',
		sailSize: '',
		outlook: '',
		icon: '',
		dName:''
	},
	day1: {	
		windLower: '',
		windUpper: '',
		windDir: '',
		temp: '',
		sailSize: '',
		outlook: '',
		icon: '',
		dName: ''
	},
	day2: {
		windLower: '',
		windUpper: '',
		windDir: '',
		temp: '',
		sailSize: '',
		outlook: '',
		icon: '',
		dName: ''
	},
	day3: {	
		windLower: '',
		windUpper: '',
		windDir: '',
		temp: '',
		sailSize: '',
		outlook: '',
		icon: '',
		dName: ''
	}
}

/* ------ Process Raw Weather Into Local Stored Data ------ */
function constructWeather () {
	/* 
	This functions parses the raw weather data into the more managable 
	locally stored data. If this app were to be changed to use a real 
	world weather API then this function is all that would need to be 
	changed to convert the raw API data into the managable local data.

	It is broken into several smaller more managable functions that each 
	deal with one aspect of the weather. First the actual weather
	attributes are imported following this the custom graphics and 
	sail sizes are determined using these values.

	Only this function in the app should access the raw data.
	*/

	// A way do dealing with idiosyncrasies in the raw data format 
	function timeString (time) {
		if(time == 0){
			return 'timePlus0000';
		} else if (time == 600) {
			return 'timePlus0600';
		} else {
			return ('timePlus'+time);
		}
	}

	// Build locally stored wind ranges from raw data:
	function windRange () {
		var timeStamp;

		for (var i=0; i<=3; i++) {
			var max, min, x;
			timeStamp = i*2400;

			min = rawWeather['forecast'][timeString(timeStamp)]['wind']['speed'];
			max = rawWeather['forecast'][timeString(timeStamp)]['wind']['gusts'];

			for (var j=1; j<=3; j++) {
					timeStamp += 600;

					x = rawWeather['forecast'][timeString(timeStamp)]['wind']['speed'];
					if (min > x) min = x;
					x = rawWeather['forecast'][timeString(timeStamp)]['wind']['gusts'];
					if (max < x) max = x;
			}
			weather['day'+i]['windLower'] = min;
			weather['day'+i]['windUpper'] = max;
		}
	}
	
	// Build locally stored wind direction:
	function windDirection () {
		// NOTE: The days wind direction as what the midday prediction will be
		var timeStamp;

		for (var i=0; i<=3; i++) {
			timeStamp = i*2400;
			weather['day'+i]['windDir'] = rawWeather['forecast'][timeString(timeStamp + 1200)]['wind']['compassDirection'];
		}
	}

	// Build locally stored temp:
	function temperature () {
		// NOTE: Temperature displayed for the day is defined as the daily max prediction
		// it would be nice to have a changing temp to display the current time prediction.
		var timeStamp;

		for (var i=0; i<=3; i++) {
			var max, x;
			timeStamp = i*2400;

			max = rawWeather['forecast'][timeString(timeStamp)]['temp'];

			for (var j=1; j<=3; j++) {
					timeStamp += 600;

					x = rawWeather['forecast'][timeString(timeStamp)]['temp'];
					if (max < x) max = x;
			}
			weather['day'+i]['temp'] = max;
		}
	}

	// Build locally stored outlook / weather description:
	function outlook () {
		var timeStamp;

		for (var i=0; i<=3; i++) {
			timeStamp = i*2400;
			weather['day'+i]['outlook'] = rawWeather['forecast'][timeString(timeStamp)]['weatherDescription'];
		}
	}

	// Build locally stored sail size:
	function sailSizes () {
		for (var i=0; i<=3; i++) {
			weather['day'+i]['sailSize'] = sailSizeSetter(weather['day'+i]['windLower'], weather['day'+i]['windUpper']);
		}
	}

	// Build locally stored day name:
	function dayNames () {
		for (var i=0; i<=3; i++) {
			// Set the day names
			weather['day'+i]['dName'] = capitalizeFirstLetter(getTodayPlusX(i));
		}
	}

	// Build locally stored icon:
	function icons () {
		var sentence;
		
		// Serch through the weather description for keywords and assign appropriate icon
		for (var i=0; i<=3; i++) {
			sentence = weather['day'+i]['outlook'];
			if (sentence.search(/rain/i) != -1 || sentence.search(/hail/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_rain_33x33.svg";
				}	
			} else if (sentence.search(/gale/i) != -1) {
				weather['day'+i]['icon'] = "weather_wind_33x33.svg";
			} else if (sentence.search(/storm/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_rain_33x33.svg";
				}
			} else if (sentence.search(/overcast/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_cloud_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_sun_cloud_33x33.svg";
				}
			} else if (sentence.search(/cloudy/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_cloud_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_sun_cloud_33x33.svg";
				}
			} else if (sentence.search(/cloud/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_cloud_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_sun_cloud_33x33.svg";
				}
			} else if (sentence.search(/sunny/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_sun_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_sun_33x33.svg";
				}
			} else if (sentence.search(/sun/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_sun_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_sun_33x33.svg";
				}
			} else if (sentence.search(/fine/i) != -1) {
				if (weather['day'+i]['windUpper'] > 20) {
					weather['day'+i]['icon'] = "weather_wind_sun_33x33.svg";
				} else {
					weather['day'+i]['icon'] = "weather_sun_33x33.svg";
				}
			} else {
				// Default to overcast if unable to find an appropriate icon
				weather['day'+i]['icon'] = "weather_sun_cloud_33x33.svg";
			}
		}
	}

	windRange();
	windDirection();
	temperature();
	outlook();
	sailSizes();
	dayNames();
	icons();
};

/* ------ Build Alert Screen ------ */
function buildAlertScreen (day) {
	// A day array = 	[0]sailSize, [1]day, [2]windLower, [3]windUpper, [4]temp, 
	// 					[5]image, [6]forecastDesc, [7]locations, [8]wind direction
	// Paint the background
	clearScreen();
	setBackgroundColor("#000");
	// Draw the sail recommendation
	drawCircle(235, 75, 52, "white");
	var size, shift;
	(day[0] < 10) ? (size = "60px", shift = 95) : (size = "50px", shift = 91);
	drawText(235, shift, ("bold "+size+" helvetica"), "black", day[0], "center");
	// Draw the current weather icon
	drawImage(55, 35, 90, 90, "../prototype_javascript/app_images/"+day[5]);
	// Write the day
	drawText(170, 173, "bold 42px helvetica", "#939597", day[1], "center");
	// Write the location
	drawText(170, 210, "100 30px helvetica ", "#939597", day[7], "center");
	// Draw the seperator line
	drawLine(20, 225, 320, 225, "white", 1);
	// Write the wind speed
	drawText(30, 268, "100 30px helvetica ", "#00ADEF", ("Wind: "+day[2]+"-"+day[3]+" kn"+", "+day[8]));
	// write the temperature 
	drawText(30, 308, "100 30px helvetica ", "#00ADEF", ("Temp: "+day[4]+"°C"));
};

/* ------ Build Home Screen ------ */
function buildHomeScreen (day) {
	// A day array = 	[0]sailSize, [1]day, [2]windLower, [3]windUpper, [4]temp, 
	// 					[5]image, [6]forecastDesc, [7]locations, [8]wind direction
	// Paint the background
	clearScreen();
	setBackgroundColor("#000");
	// Draw the sail recommendation
	drawCircle(170, 81, 52, "white");
	var size, shift;
	(day[0] < 10) ? (size = "60px", shift = 101) : (size = "50px", shift = 98);
	drawText(170, shift, "bold "+size+" helvetica", "black", day[0], "center");
	// Draw the current weather icon
	drawImage(28, 53, 73, 73, "../prototype_javascript/app_images/"+day[5]);
	// Write the day
	var dayShort = shortenDay(day[1]);
	drawText(230, 97, "400 38px helvetica", "#939597", dayShort);
	// Write forecast:
	drawText(170, 175, "100 30px helvetica ", "#BBBDC0", day[6], "center");
	// Write the wind & temp:
	drawText(170, 212, "100 30px helvetica ", "#00ADEF", (+day[2]+"-"+day[3]+" kn, "+day[8]+", "+day[4]+"°C"), "center");
	// Write any warnings:
	if (weather['day0']['windUpper'] > 25) {
		drawText(170, 263, "100 30px helvetica ", "#ED1C24", warningMsg, "center");
		drawImage(25, 241, 27, 25, "../prototype_javascript/app_images/warning_27x25.svg");
		drawImage(285, 241, 27, 25, "../prototype_javascript/app_images/warning_27x25.svg");
	}
	// Write the location
	drawText(170, 315, "100 30px helvetica ", "#939597", day[7], "center");
	// Draw the calender & settings buttons
	drawImage(25, 280, 49, 44, "../prototype_javascript/app_images/cal_49x44.svg");
	drawImage(270, 280, 44, 44, "../prototype_javascript/app_images/settings_44x44.svg");
};

/* ------ Build Forecast Screen ------ */
function buildForecastScreen (day0, day1, day2, day3) {
	// A day array = 	[0]sailSize, [1]day, [2]windLower, [3]windUpper, [4]temp, 
	// 					[5]image, [6]forecastDesc, [7]locations, [8]wind direction
	// Paint the background
	clearScreen();
	setBackgroundColor("#000");
	// Draw the dividers & arrows (Baselines: 105, 270, 235, 300) 
	drawLine(20, 40, 320, 40, "white", 1);
	drawLine(20, 105, 320, 105, "white", 1);
	drawLine(20, 170, 320, 170, "white", 1);
	drawLine(20, 235, 320, 235, "white", 1);
	drawLine(20, 300, 320, 300, "white", 1);
	drawImage(155, 10, 30, 16, "../prototype_javascript/app_images/up_30x16.svg");
	drawImage(155, 314, 30, 16, "../prototype_javascript/app_images/down_30x16.svg");

	// All thats needed to build each line & then building all four forecasts:
	function drawDay (day, offset) {
		drawText(170, 92+offset, "bold 55px helvetica", "white", day[0], "center");
		drawText(62, 81+offset, "100 22px helvetica", "white", shortenDay(day[1]));
		drawText(320, 65+offset, "100 22px helvetica", "#939597", (day[2]+"-"+day[3]+" kn"), "right");
		drawText(320, 94+offset, "100 22px helvetica", "#00ADEF", (day[8]+", "+day[4]+"°C"), "right");
		drawImage(20, 56+offset, 33, 33, "../prototype_javascript/app_images/"+day[5]);
	}
	drawDay(day0, 0);
	drawDay(day1, 65);
	drawDay(day2, 130);
	drawDay(day3, 195);
};

/* ------ Build Settings Screen ------ */
function buildSettingsScreen () {
	// Paint the background
	clearScreen();
	setBackgroundColor("#000");
	drawText(170, 40, "100 30px helvetica ", "#FFFFFF", "Settings", "center");
	drawText(15, 80, "100 20px helvetica ", "#BBBDC0", ("Rider Location: "+user.riderLocal));
	drawText(15, 105, "100 20px helvetica ", "#BBBDC0", ("Rider Skill: "+user.riderSkill));
	drawText(15, 130, "100 20px helvetica ", "#BBBDC0", ("Rider Weight: "+user.riderWeight));
	drawText(15, 155, "100 20px helvetica ", "#BBBDC0", ("Sail Range: "+user.riderPreferenceLower+" - "+user.riderPreferenceUpper.toFixed(1)));

};

/* ------ Check For Alerts ------ */
function alertChecker () {
	// Check upcoming days for ideal weather conditions
	var daysCond;
	for (var i=0; i<=3; i++) {
			daysCond = weather['day'+i]['sailSize'];
			//alert("Days Cond: " + daysCond + " Lower: " + user['riderPreferenceLower'] + " Upper: " + )
			if (daysCond > user['riderPreferenceLower'] && daysCond < user['riderPreferenceUpper']) {
				setTimeout(function () {
        			beep();
        			buildAlertScreen(dayCompress(i));
					currentScreen = "alert";
    			}, 1600);
    			return;
			}
		}
};

/* ------ Some Helper Functions ------ */
// Capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Shorten day name:
function shortenDay (day) {
	switch (day.toLowerCase()){
		case "monday": 
		return "Mon";
		break;
		case "tuesday": 
		return "Tues";
		break;
		case "wednesday": 
		return "Wed";
		break;
		case "thursday": 
		return "Thurs";
		break;
		case "friday": 
		return "Fri";
		break;
		case "saturday": 
		return "Sat";
		break;
		case "sunday": 
		return "Sun";
		break;	
	}
};

// Calculate the sail size given a wind range
function sailSizeSetter (lower, upper) {
	// Sail size is: (Rider Weight X 1.34) / Windspeed in Knots
	var size = ((user.riderWeight*sailAlpha)/((lower+upper)/2)).toFixed(1);
	/*
	Sail size over 10 square meters only make sense to a select few people and 
	the 'science' of choosing a sail of such a size changes at this point.
	As such this app will only recommend sizes up to 10 square meters.
	*/
	if (size > 10) {
		return "10+";
	} else {
		return size;
	}
};

// Get the name of 'today'
function getToday () {
	return dateGetter("day");
};

// Calculate the name of the day that is X many days from 'today'
function getTodayPlusX (x) {
	var todayIndex;
	for (var i=0; i<days.length; i++) {
		(days[i].toLowerCase() == currentDay.toLowerCase()) ? todayIndex = i : '';
	}
	// I finally used modulo in a meaningful way!
	return days[(x+todayIndex+daysFastFoward)%7];
};

/* ------ Compress day into an array ------ */
// A day array = 	[0]sailSize, [1]day, [2]windLower, [3]windUpper, [4]temp, 
// 					[5]image, [6]forecastDesc, [7]locations, [8]wind direction
function dayCompress (day) {
	if (day == 0) {
		return [weather.day0.sailSize, weather.day0.dName, weather.day0.windLower, weather.day0.windUpper,
		weather.day0.temp, weather.day0.icon, weather.day0.outlook, user.riderLocal, weather.day0.windDir];
	} else if (day == 1) {
		return [weather.day1.sailSize, weather.day1.dName, weather.day1.windLower, weather.day1.windUpper,
		weather.day1.temp, weather.day1.icon, weather.day1.outlook, user.riderLocal, weather.day1.windDir];
	} else if (day == 2) {
		return [weather.day2.sailSize, weather.day2.dName, weather.day2.windLower, weather.day2.windUpper,
		weather.day2.temp, weather.day2.icon, weather.day2.outlook, user.riderLocal, weather.day2.windDir];
	} else if (day == 3) {
		return [weather.day3.sailSize, weather.day3.dName, weather.day3.windLower, weather.day3.windUpper,
		weather.day3.temp, weather.day3.icon, weather.day3.outlook, user.riderLocal, weather.day3.windDir];
	}
};

/* ------ Screen Taps ------ */
// Dealing with taps on the home screen
function homeTap (x,y) {
	if (x>0 && x<101 && y>269 && y<340) {
		buildForecastScreen(dayCompress(0), dayCompress(1), dayCompress(2), dayCompress(3));
		currentScreen = 'forecast'; 
	} else if (x>255 && x<340 && y>269 && y<340) {
		buildSettingsScreen();
		currentScreen = 'settings';
	}
};

// Dealing with taps on the forecast screen
function forecastTap (x,y) {
	if (y>=40 && y<105) {
		buildAlertScreen(dayCompress(0));
		currentScreen = "alert";
	} else if (y>=105 && y<170) {
		buildAlertScreen(dayCompress(1));
		currentScreen = "alert";
	} else if (y>=170 && y<235) {
		buildAlertScreen(dayCompress(2));
		currentScreen = "alert";
	} else if (y>=235 && y<300) {
		buildAlertScreen(dayCompress(3));
		currentScreen = "alert";
	}
};

/* ------ Instruciton Processor ------ */
function instProcess (inst) {
	var input = inst[0];
	// What to do with taps on the screen
	if (input == "tap") {
		if (sleepStatus == true) {
			clearScreen();
			sleepStatus = true;
			currentScreen = 'sleep';
		} else if (currentScreen == "home") {
			// If on home screen go to function to deal with that
			homeTap(inst[1], inst[2]);
		} else if (currentScreen == "forecast") {
			// If on forecast screen go to funciton to deal with that
			forecastTap(inst[1], inst[2]);
		} else if (currentScreen == "alert") {
			// Return back to the home screen if alert screen it tapped
			buildHomeScreen(dayCompress(0));
			currentScreen = "home";
		} else if (currentScreen == "settings") {
			// Return back to the home screen if settings screen it tapped
			buildHomeScreen(dayCompress(0));
			currentScreen = "home";
		} 
	}
	// what to do with swipes
	else if (input == "swipe") {
		if (sleepStatus == true) {
			clearScreen();
			sleepStatus = true;
			currentScreen = 'sleep';
		} else if (currentScreen == "home") {
			// Do nothing
		} else if (currentScreen == "forecast") {
			// If a swipe is detected on the forecast screen, return to home screen
			buildHomeScreen(dayCompress(0));
			currentScreen = "home";
		} else if (currentScreen == "alert") {
			// If a swipe is detected on the alert screen, return to home screen
			buildHomeScreen(dayCompress(0));
			currentScreen = "home";
		} else if (currentScreen == "settings") {
			// If a swipe is detected on the settings screen, return to home screen
			buildHomeScreen(dayCompress(0));
			currentScreen = "home";
		}
	}
	// What to do if the app is put to sleep
	else if (input == "sleep") {
		clearScreen();
		sleepStatus = true;
		currentScreen = 'sleep';
	}
	// What to do if the app is 'woken' from a sleep
	else if (input == "wake") {
		if (sleepStatus == true) {
			buildHomeScreen(dayCompress(0));
			currentScreen = "home";
			sleepStatus = false;
		}
	}
	// What to do if the app is reset
	else if (input == "reset") {
		firstBoot = true;
	}
	// What to do if the emulator is advanced by one day
	else if (input == "advance") {
		daysFastFoward += 1;
		if (daysFastFoward == 1) {
			rawWeather = weatherData1;
			constructWeather();
			if (sleepStatus != true){
				buildHomeScreen(dayCompress(0));
				currentScreen = "home";
			}
			alertChecker();
		} else if (daysFastFoward == 2) {
			rawWeather = weatherData2;
			constructWeather();
			if (sleepStatus != true){
				buildHomeScreen(dayCompress(0));
				currentScreen = "home";
			}
			alertChecker();
		} else if (daysFastFoward == 3) {
			rawWeather = weatherData3;
			constructWeather();
			if (sleepStatus != true){
				buildHomeScreen(dayCompress(0));
				currentScreen = "home";
			}
			alertChecker();
		} else if (daysFastFoward > 3) {
			alert("You cannot advance time any further, The app will now be reset");
			firstBoot = true;
		} 
	}
};

/* ------ Main Function ------ */
function main () {

	// Routine for the first time the app is booted
	if (firstBoot) {
		daysFastFoward = 0;
		rawWeather = weatherData0;
		currentDay = getToday();
		constructWeather();
		buildHomeScreen(dayCompress(0));
		currentScreen = "home";
		sleepStatus = false;
		firstBoot = false;
		alertChecker();
	}

	// Fetch instructions from the queue if they exist
	if (instructionQueue.length()>0) {
		instProcess(instructionQueue.dequeue());
	}
	
	// Keep looping main function if app is on.
	appOn ? requestAnimationFrame(main) : ''; 	
};

