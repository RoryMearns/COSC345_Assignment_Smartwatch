/* Raw Weather Data for 345 Assignment: Rory Mearns (ID.3928873) */

/* 
Note that this weather data format is very similar to the JSON 
data delivered by the many weather API's avialable. Refer to the 
magicseaweed weather api as an example:
http://magicseaweed.com/developer/forecast-api

For simplicity this app runs on the premise that the weather data
is delivered daily at midnight. It contains the forecast for up to
4 full days in advace with 6 hour intervals.

I have included 4 'deliveries' of data below titled: weatherData0 - 3
*/

// The raw weather data:
var weatherData0 = {	
	// The weather forecast for now (0000) and the following 90 hours (at 6 hour intervals)
	forecast: {
		timePlus0000: {
			weatherDescription: "Rain, high seas, gale",
			temp: 5,
			tempUnit: "c",
			wind: {
				speed: 20,
				gusts: 28,
				compassDirection: "SW",
				unit: "knt"
			}
		},
		timePlus0600: {
			weatherDescription: "Rain, high seas, gale",
			temp: 7,
			tempUnit: "c",
			wind: {
				speed: 28,
				gusts: 32,
				compassDirection: "SW",
				unit: "knt"
			}
		},
		timePlus1200: {
			weatherDescription: "Rain, high seas, gale",
			temp: 8,
			tempUnit: "c",
			wind: {
				speed: 32,
				gusts: 38,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus1800: {
			weatherDescription: "Rain, high seas, gale",
			temp: 7,
			tempUnit: "c",
			wind: {
				speed: 30,
				gusts: 33,
				compassDirection: "S",
				unit: "knt"
			}
		},
		// Midnight / start of Day 2
		timePlus2400: {
			weatherDescription: "Strong winds, overcast",
			temp: 6,
			tempUnit: "c",
			wind: {
				speed: 25,
				gusts: 28,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus3000: {
			weatherDescription: "Strong winds, overcast",
			temp: 10,
			tempUnit: "c",
			wind: {
				speed: 23,
				gusts: 28,
				compassDirection: "SE",
				unit: "knt"
			}
		},
		timePlus3600: {
			weatherDescription: "Strong winds, overcast",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 20,
				gusts: 26,
				compassDirection: "SE",
				unit: "knt"
			}
		},
		timePlus4200: {
			weatherDescription: "Strong winds, overcast",
			temp: 12,
			tempUnit: "c",
			wind: {
				speed: 18,
				gusts: 23,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus4800: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 9,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus5400: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 14,
			tempUnit: "c",
			wind: {
				speed: 13,
				gusts: 16,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus6000: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 17,
			tempUnit: "c",
			wind: {
				speed: 15,
				gusts: 18,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus6600: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 16,
			tempUnit: "c",
			wind: {
				speed: 15,
				gusts: 16,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		// Midnight / start of Day 4
		timePlus7200: {
			weatherDescription: "Sunny, light breeze",
			temp: 11,
			tempUnit: "c",
			wind: {
				speed: 7,
				gusts: 10,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus7800: {
			weatherDescription: "Sunny, light breeze",
			temp: 14,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 11,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus8400: {
			weatherDescription: "Sunny, light breeze",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 11,
				gusts: 13,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus9000: {
			weatherDescription: "Sunny, light breeze",
			temp: 16,
			tempUnit: "c",
			wind: {
				speed: 8,
				gusts: 10,
				compassDirection: "N",
				unit: "knt"
			}
		}
	}
}

var weatherData1 = {
	// The weather forecast for now (0000) and the following 90 hours (at 6 hour intervals)
	forecast: {
		timePlus0000: {
			weatherDescription: "Strong winds, overcast",
			temp: 6,
			tempUnit: "c",
			wind: {
				speed: 25,
				gusts: 28,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus0600: {
			weatherDescription: "Strong winds, overcast",
			temp: 9,
			tempUnit: "c",
			wind: {
				speed: 25,
				gusts: 27,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus1200: {
			weatherDescription: "Strong winds, overcast",
			temp: 11,
			tempUnit: "c",
			wind: {
				speed: 25,
				gusts: 27,
				compassDirection: "SE",
				unit: "knt"
			}
		},
		timePlus1800: {
			weatherDescription: "Strong winds, overcast",
			temp: 10,
			tempUnit: "c",
			wind: {
				speed: 24,
				gusts: 26,
				compassDirection: "SE",
				unit: "knt"
			}
		},
		// Midnight / start of Day 2
		timePlus2400: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 9,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus3000: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 14,
				gusts: 15,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus3600: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 15,
			tempUnit: "c",
			wind: {
				speed: 16,
				gusts: 18,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus4200: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 15,
			tempUnit: "c",
			wind: {
				speed: 15,
				gusts: 16,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus4800: {
			weatherDescription: "Fine, light breeze",
			temp: 12,
			tempUnit: "c",
			wind: {
				speed: 5,
				gusts: 6,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus5400: {
			weatherDescription: "Fine, light breeze",
			temp: 15,
			tempUnit: "c",
			wind: {
				speed: 6,
				gusts: 6,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus6000: {
			weatherDescription: "Fine, light breeze",
			temp: 19,
			tempUnit: "c",
			wind: {
				speed: 8,
				gusts: 10,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus6600: {
			weatherDescription: "Fine, light breeze",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 4,
				gusts: 5,
				compassDirection: "N",
				unit: "knt"
			}
		},
		// Midnight / start of Day 4
		timePlus7200: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 12,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 5,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus7800: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 5,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus8400: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 21,
			tempUnit: "c",
			wind: {
				speed: 5,
				gusts: 6,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		timePlus9000: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 20,
			tempUnit: "c",
			wind: {
				speed: 6,
				gusts: 7,
				compassDirection: "NW",
				unit: "knt"
			}
		}
	}
}

var weatherData2 = {
	// The weather forecast for now (0000) and the following 90 hours (at 6 hour intervals)
	forecast: {
		timePlus0000: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 10,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus0600: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 15,
				gusts: 16,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus1200: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 15,
			tempUnit: "c",
			wind: {
				speed: 17,
				gusts: 20,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		timePlus1800: {
			weatherDescription: "Cloudy, moderate winds",
			temp: 15,
			tempUnit: "c",
			wind: {
				speed: 16,
				gusts: 19,
				compassDirection: "NE",
				unit: "knt"
			}
		},
		// Midnight / start of Day 2
		timePlus2400: {
			weatherDescription: "Fine, light breeze",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 5,
				gusts: 6,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus3000: {
			weatherDescription: "Fine, light breeze",
			temp: 15,
			tempUnit: "c",
			wind: {
				speed: 6,
				gusts: 8,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus3600: {
			weatherDescription: "Fine, light breeze",
			temp: 21,
			tempUnit: "c",
			wind: {
				speed: 7,
				gusts: 8,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus4200: {
			weatherDescription: "Fine, light breeze",
			temp: 19,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 5,
				compassDirection: "N",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus4800: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 5,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		timePlus5400: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 5,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		timePlus6000: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 23,
			tempUnit: "c",
			wind: {
				speed: 5,
				gusts: 8,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		timePlus6600: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 18,
			tempUnit: "c",
			wind: {
				speed: 6,
				gusts: 8,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus7200: {
			weatherDescription: "Overcast, southerlies",
			temp: 12,
			tempUnit: "c",
			wind: {
				speed: 10,
				gusts: 13,
				compassDirection: "SW",
				unit: "knt"
			}
		},
		timePlus7800: {
			weatherDescription: "Overcast, southerlies",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 12,
				gusts: 13,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus8400: {
			weatherDescription: "Overcast, southerlies",
			temp: 10,
			tempUnit: "c",
			wind: {
				speed: 20,
				gusts: 23,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus9000: {
			weatherDescription: "Overcast, southerlies",
			temp: 9,
			tempUnit: "c",
			wind: {
				speed: 24,
				gusts: 25,
				compassDirection: "S",
				unit: "knt"
			}
		}
	}
}

var weatherData3 = {
	// The weather forecast for now (0000) and the following 90 hours (at 6 hour intervals)
	forecast: {
		timePlus0000: {
			weatherDescription: "Fine, light breeze",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 5,
				gusts: 6,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus0600: {
			weatherDescription: "Fine, light breeze",
			temp: 15,
			tempUnit: "c",
			wind: {
				speed: 6,
				gusts: 8,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus1200: {
			weatherDescription: "Fine, light breeze",
			temp: 22,
			tempUnit: "c",
			wind: {
				speed: 7,
				gusts: 9,
				compassDirection: "N",
				unit: "knt"
			}
		},
		timePlus1800: {
			weatherDescription: "Fine, light breeze",
			temp: 20,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 5,
				compassDirection: "N",
				unit: "knt"
			}
		},
		// Midnight / start of Day 2
		timePlus2400: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 13,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 5,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		timePlus3000: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 19,
			tempUnit: "c",
			wind: {
				speed: 3,
				gusts: 6,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		timePlus3600: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 24,
			tempUnit: "c",
			wind: {
				speed: 5,
				gusts: 9,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		timePlus4200: {
			weatherDescription: "Sunny, afternoon breeze",
			temp: 17,
			tempUnit: "c",
			wind: {
				speed: 6,
				gusts: 8,
				compassDirection: "NW",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus4800: {
			weatherDescription: "Overcast, southerlies",
			temp: 11,
			tempUnit: "c",
			wind: {
				speed: 12,
				gusts: 13,
				compassDirection: "SW",
				unit: "knt"
			}
		},
		timePlus5400: {
			weatherDescription: "Overcast, southerlies",
			temp: 11,
			tempUnit: "c",
			wind: {
				speed: 15,
				gusts: 19,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus6000: {
			weatherDescription: "Overcast, southerlies",
			temp: 10,
			tempUnit: "c",
			wind: {
				speed: 24,
				gusts: 28,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus6600: {
			weatherDescription: "Overcast, southerlies",
			temp: 8,
			tempUnit: "c",
			wind: {
				speed: 25,
				gusts: 28,
				compassDirection: "S",
				unit: "knt"
			}
		},
		// Midnight / start of Day 3
		timePlus7200: {
			weatherDescription: "Rain, gale southerlies",
			temp: 6,
			tempUnit: "c",
			wind: {
				speed: 25,
				gusts: 30,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus7800: {
			weatherDescription: "Rain, gale southerlies",
			temp: 7,
			tempUnit: "c",
			wind: {
				speed: 28,
				gusts: 35,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus8400: {
			weatherDescription: "Rain, gale southerlies",
			temp: 9,
			tempUnit: "c",
			wind: {
				speed: 34,
				gusts: 38,
				compassDirection: "S",
				unit: "knt"
			}
		},
		timePlus9000: {
			weatherDescription: "Rain, gale southerlies",
			temp: 7,
			tempUnit: "c",
			wind: {
				speed: 35,
				gusts: 40,
				compassDirection: "S",
				unit: "knt"
			}
		}
	}
}
