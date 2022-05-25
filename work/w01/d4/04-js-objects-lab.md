![ga](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)

# Weather Object Lab


Title: **Let's talk about the weather**<br>
Type: Lab<br>
Creator: Reuben Ayres<br>
Competencies: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Objects, Mixed datatypes.**<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Reading documentation.**<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Breaking bigger problems into smaller ones.**<br>
             
<hr>

## Let's talk about the weather

Notice that at the bottom of this file under ["The Data"](#the-data) is an enormous object. It describes the weather in Evanston over a period from 3/16/2018 to 3/21/2018. It's simply too large for a human to read in any reasonable amount of time. Therefore, visit this link: [OpenWeatherMap.org API Documentation](http://openweathermap.org/forecast5#JSON). 

It contains an explanation of how to use this data. Focus on the bulleted list with the red property names under "Parameters," under "JSON," under "Weather parameters in API respond"—the above link should take you pretty close to there on the page. **Remember**: JavaScript objects do not guarantee that properties will be in any particular order. Also pay attention to what the notation/brackets/parentheses tell you about what data types you're working with. 

Read each question closely, and don't worry about anything other than what you're being asked to do. There is more information on this API documentation page than you need, including stuff we have not talked about.  This is common when using outside resources.  You should practice finding just the information you need in more complex contexts.

### Questions

#### For this assignment, and every assignment, read **all** of each question carefully before you start doing any work.

1. Access the city information using some kind of object notation.
    * print the name of the city in the console.
    * by pulling the city name and the latitude and longitude out of the object and interpolating them, print a sentence in the console that reads: `"The coordinates of Evanston are 42.0447 latitude and -87.6931 longitude."`
    * put all of the above logic in a function called `getCity` that takes the entire object as a parameter and uses that parameter to get the data, and additionally uses it to return the city name (and call the function within your code).

2. Write logic to console.log the weather description for 3-20 at 6pm. Make the output a nice English sentence.

3. Write logic to print out the forecasted temperature for 3-20 at 9am.  Make the output a nice English sentence, and code any conversion necessary (Temp is given in Kelvin)

4. Write logic to find wind speed and direction on St. Patrick's day at 3pm.  Do some googling to figure out how to convert meters/second to mph, and how to convert the meteorological description of wind direction into human-understandable format. Write logic to do the conversions (don't just plug 3m/s in mph into Google or some other online converter).  When you get it all figured out, you will use all of it to console.log a sentence that reads "The wind will be blowing (some cardinal direction that you will figure out--N, NE, E, SE, S, SW, W, NW are the choices) at (whatever mph you calculated from the given m/s).  There is a pretty substantial amount of research and calculation required to do this, plus thinking outside the box.

5. Write logic to print the humidity each day at noon.  If it's over 75%, also print the word "gross" in parentheses like this:

```
2014-06-19: 60%
2014-06-20: 77% (gross)
etc
```

6. So, by now you've noticed that you're given the weather data for 3 hour time increments. For this question, write logic to figure out the high and low temp for each day, as well as a description of the weather overall for the day. You will create an object that stores all of it, as follows:<br>
• the date in a human-friendly format (like "Tue, Jan 30, 1997"--research JavaScript date stuff on MDN to see how to convert)<br>
• the high temp for that day (use the highest of the 8 values for a given day, don't forget to convert Kelvin to F -- again write logic to do this)<br>
• low temp (again, use the lowest of the 8 values for a given day, converted)<br>
• the weather description for that day -- this will be the weather description that occurs the 'most frequently.'  if multiple descriptions occur an equal number of times in a day, you can use whichever you like. <br><br>
After each object is built, push it into an array called `myWeather`.<br><br>
This will take some thinking. Plan out the steps required for each step carefully before you start writing code. You can use pencil and paper for this, or write on the desks/glass walls with dry erase marker.  You may end up writing temporary code that you later replace with different code--that is a very common practice for developers.<br><br>
I'd suggest just getting it working for one piece of data for one day, then all the data for a day, before writing the final code to do all the days.

7. Put all of the logic (but don't delete your question 6 answer) from the previous question into a function called `getWeatherArray` that again takes the entire huge `evanstonWeather` object in as a parameter called `data`, and works with that parameter (instead of with the original object) to build and return an array like the `myWeather` one from the previous question. Refactor the logic as necessary to use the parameter to generate the objects/array of objects. <br><br>So your function might start out like this: 

    ```javascript
    const getWeatherArray = (data) => {
      // logic similar to question 6
    }
    ```
    You should then be able to use your function like this:

    ```javascript
    const myWeatherArray = getWeatherArray(evanstonWeather);
    ```

    **Refactoring**

    Changing/improving the organization of code without really changing the functionality is called **refactoring**. You just refactored code. Nice job.  That's something developers do all the time.

8. Write _another_ function `printForecast` that iterates over the array returned by `getWeatherArray` and console.logs the 5-day forecast data like this:<br>

    ```
    -------------------
    Date: Tue, Jan 30, 1997
    Weather: clear
    High Temp: 13°F
    Low Temp: 2°F
    -------------------

    -------------------
    Date: Wed, Jan 31, 1997
    Weather: heavy snow
    High Temp: 23°F
    Low Temp: 12°F
    -------------------

    etc....
    ```

<hr>

Thanks OpenWeatherMap for an awesome learning tool. This data came from an API call to one of their endpoints. Material reused acccording to the [Creative Commons License](https://creativecommons.org/licenses/by-sa/4.0/) as described in the [OpenWeatherMap Terms of Service](https://openweathermap.org/terms).

### The data:


```javascript
const evanstonWeather = {
    cod: "200",
    message: 0.0099,
    cnt: 40,
    list: [{
            dt: 1521223200,
            main: {
                temp: 273.61,
                temp_min: 273.363,
                temp_max: 273.61,
                pressure: 1014.07,
                sea_level: 1037.26,
                grnd_level: 1014.07,
                humidity: 100,
                temp_kf: 0.25
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 44
            },
            wind: {
                speed: 4.1,
                deg: 93.0003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-16 18:00:00"
        },
        {
            dt: 1521234000,
            main: {
                temp: 273.28,
                temp_min: 273.091,
                temp_max: 273.28,
                pressure: 1012.07,
                sea_level: 1035.03,
                grnd_level: 1012.07,
                humidity: 100,
                temp_kf: 0.19
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 64
            },
            wind: {
                speed: 3.31,
                deg: 93.503
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-16 21:00:00"
        },
        {
            dt: 1521244800,
            main: {
                temp: 272.45,
                temp_min: 272.324,
                temp_max: 272.45,
                pressure: 1010.97,
                sea_level: 1034.19,
                grnd_level: 1010.97,
                humidity: 100,
                temp_kf: 0.12
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 3.91,
                deg: 64.0015
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 00:00:00"
        },
        {
            dt: 1521255600,
            main: {
                temp: 272.7,
                temp_min: 272.638,
                temp_max: 272.7,
                pressure: 1010.94,
                sea_level: 1034.36,
                grnd_level: 1010.94,
                humidity: 100,
                temp_kf: 0.06
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 3.87,
                deg: 74.0027
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 03:00:00"
        },
        {
            dt: 1521266400,
            main: {
                temp: 273.212,
                temp_min: 273.212,
                temp_max: 273.212,
                pressure: 1008.91,
                sea_level: 1032.47,
                grnd_level: 1008.91,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 92
            },
            wind: {
                speed: 4.32,
                deg: 66.5011
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 06:00:00"
        },
        {
            dt: 1521277200,
            main: {
                temp: 273.743,
                temp_min: 273.743,
                temp_max: 273.743,
                pressure: 1007.13,
                sea_level: 1030.56,
                grnd_level: 1007.13,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 80
            },
            wind: {
                speed: 4.36,
                deg: 78.0024
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 09:00:00"
        },
        {
            dt: 1521288000,
            main: {
                temp: 273.743,
                temp_min: 273.743,
                temp_max: 273.743,
                pressure: 1006.96,
                sea_level: 1030.51,
                grnd_level: 1006.96,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 76
            },
            wind: {
                speed: 4.32,
                deg: 81.0023
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 12:00:00"
        },
        {
            dt: 1521298800,
            main: {
                temp: 274.629,
                temp_min: 274.629,
                temp_max: 274.629,
                pressure: 1007.81,
                sea_level: 1031,
                grnd_level: 1007.81,
                humidity: 92,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 92
            },
            wind: {
                speed: 3.38,
                deg: 66.5022
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 15:00:00"
        },
        {
            dt: 1521309600,
            main: {
                temp: 275.358,
                temp_min: 275.358,
                temp_max: 275.358,
                pressure: 1008.39,
                sea_level: 1031.26,
                grnd_level: 1008.39,
                humidity: 88,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 80
            },
            wind: {
                speed: 3.6,
                deg: 49.5005
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 18:00:00"
        },
        {
            dt: 1521320400,
            main: {
                temp: 275.612,
                temp_min: 275.612,
                temp_max: 275.612,
                pressure: 1007.67,
                sea_level: 1030.47,
                grnd_level: 1007.67,
                humidity: 86,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 12
            },
            wind: {
                speed: 3.01,
                deg: 27.0012
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 21:00:00"
        },
        {
            dt: 1521331200,
            main: {
                temp: 274.579,
                temp_min: 274.579,
                temp_max: 274.579,
                pressure: 1008.51,
                sea_level: 1031.55,
                grnd_level: 1008.51,
                humidity: 90,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.97,
                deg: 2.00034
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 00:00:00"
        },
        {
            dt: 1521342000,
            main: {
                temp: 272.527,
                temp_min: 272.527,
                temp_max: 272.527,
                pressure: 1009.45,
                sea_level: 1032.99,
                grnd_level: 1009.45,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 0.91,
                deg: 359
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 03:00:00"
        },
        {
            dt: 1521352800,
            main: {
                temp: 271.773,
                temp_min: 271.773,
                temp_max: 271.773,
                pressure: 1009.43,
                sea_level: 1033.22,
                grnd_level: 1009.43,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 0.87,
                deg: 231.501
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 06:00:00"
        },
        {
            dt: 1521363600,
            main: {
                temp: 271.301,
                temp_min: 271.301,
                temp_max: 271.301,
                pressure: 1009.63,
                sea_level: 1033.47,
                grnd_level: 1009.63,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.66,
                deg: 233.002
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 09:00:00"
        },
        {
            dt: 1521374400,
            main: {
                temp: 271.276,
                temp_min: 271.276,
                temp_max: 271.276,
                pressure: 1010.25,
                sea_level: 1033.96,
                grnd_level: 1010.25,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.99,
                deg: 233.001
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 12:00:00"
        },
        {
            dt: 1521385200,
            main: {
                temp: 275.51,
                temp_min: 275.51,
                temp_max: 275.51,
                pressure: 1010.23,
                sea_level: 1033.61,
                grnd_level: 1010.23,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.81,
                deg: 245.506
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 15:00:00"
        },
        {
            dt: 1521396000,
            main: {
                temp: 277.975,
                temp_min: 277.975,
                temp_max: 277.975,
                pressure: 1009.22,
                sea_level: 1032.15,
                grnd_level: 1009.22,
                humidity: 75,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.06,
                deg: 130.003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 18:00:00"
        },
        {
            dt: 1521406800,
            main: {
                temp: 278.068,
                temp_min: 278.068,
                temp_max: 278.068,
                pressure: 1006.65,
                sea_level: 1029.29,
                grnd_level: 1006.65,
                humidity: 74,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 2.96,
                deg: 111
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 21:00:00"
        },
        {
            dt: 1521417600,
            main: {
                temp: 276.442,
                temp_min: 276.442,
                temp_max: 276.442,
                pressure: 1005.57,
                sea_level: 1028.56,
                grnd_level: 1005.57,
                humidity: 83,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 3.61,
                deg: 109.5
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 00:00:00"
        },
        {
            dt: 1521428400,
            main: {
                temp: 274.862,
                temp_min: 274.862,
                temp_max: 274.862,
                pressure: 1005.44,
                sea_level: 1028.68,
                grnd_level: 1005.44,
                humidity: 93,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 2.82,
                deg: 104
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 03:00:00"
        },
        {
            dt: 1521439200,
            main: {
                temp: 274.273,
                temp_min: 274.273,
                temp_max: 274.273,
                pressure: 1004.25,
                sea_level: 1027.55,
                grnd_level: 1004.25,
                humidity: 94,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 64
            },
            wind: {
                speed: 2.26,
                deg: 102.009
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 06:00:00"
        },
        {
            dt: 1521450000,
            main: {
                temp: 274.609,
                temp_min: 274.609,
                temp_max: 274.609,
                pressure: 1003.74,
                sea_level: 1027.08,
                grnd_level: 1003.74,
                humidity: 97,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 76
            },
            wind: {
                speed: 2.17,
                deg: 83.0033
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 09:00:00"
        },
        {
            dt: 1521460800,
            main: {
                temp: 274.975,
                temp_min: 274.975,
                temp_max: 274.975,
                pressure: 1003.61,
                sea_level: 1026.97,
                grnd_level: 1003.61,
                humidity: 94,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.37,
                deg: 58.0012
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 12:00:00"
        },
        {
            dt: 1521471600,
            main: {
                temp: 275.277,
                temp_min: 275.277,
                temp_max: 275.277,
                pressure: 1003.78,
                sea_level: 1026.89,
                grnd_level: 1003.78,
                humidity: 95,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.1,
                deg: 62.5003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 15:00:00"
        },
        {
            dt: 1521482400,
            main: {
                temp: 275.726,
                temp_min: 275.726,
                temp_max: 275.726,
                pressure: 1004.52,
                sea_level: 1027.3,
                grnd_level: 1004.52,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.66,
                deg: 54.5007
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 18:00:00"
        },
        {
            dt: 1521493200,
            main: {
                temp: 276.466,
                temp_min: 276.466,
                temp_max: 276.466,
                pressure: 1003.48,
                sea_level: 1026.26,
                grnd_level: 1003.48,
                humidity: 85,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 7.81,
                deg: 41.5045
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 21:00:00"
        },
        {
            dt: 1521504000,
            main: {
                temp: 275.721,
                temp_min: 275.721,
                temp_max: 275.721,
                pressure: 1003.97,
                sea_level: 1027.02,
                grnd_level: 1003.97,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 8.96,
                deg: 39.0012
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 00:00:00"
        },
        {
            dt: 1521514800,
            main: {
                temp: 274.464,
                temp_min: 274.464,
                temp_max: 274.464,
                pressure: 1004.75,
                sea_level: 1028.06,
                grnd_level: 1004.75,
                humidity: 96,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 9.42,
                deg: 51.0078
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 03:00:00"
        },
        {
            dt: 1521525600,
            main: {
                temp: 272.292,
                temp_min: 272.292,
                temp_max: 272.292,
                pressure: 1006.36,
                sea_level: 1029.72,
                grnd_level: 1006.36,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 9.75,
                deg: 58.0077
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 06:00:00"
        },
        {
            dt: 1521536400,
            main: {
                temp: 270.924,
                temp_min: 270.924,
                temp_max: 270.924,
                pressure: 1006.41,
                sea_level: 1030.1,
                grnd_level: 1006.41,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 9.71,
                deg: 51.0003
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 09:00:00"
        },
        {
            dt: 1521547200,
            main: {
                temp: 270.337,
                temp_min: 270.337,
                temp_max: 270.337,
                pressure: 1007.45,
                sea_level: 1031.19,
                grnd_level: 1007.45,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 12
            },
            wind: {
                speed: 9.25,
                deg: 52.5016
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 12:00:00"
        },
        {
            dt: 1521558000,
            main: {
                temp: 270.951,
                temp_min: 270.951,
                temp_max: 270.951,
                pressure: 1008.94,
                sea_level: 1032.57,
                grnd_level: 1008.94,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 24
            },
            wind: {
                speed: 8.61,
                deg: 51.5031
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 15:00:00"
        },
        {
            dt: 1521568800,
            main: {
                temp: 271.614,
                temp_min: 271.614,
                temp_max: 271.614,
                pressure: 1009.29,
                sea_level: 1032.63,
                grnd_level: 1009.29,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 48
            },
            wind: {
                speed: 7.91,
                deg: 40.5026
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 18:00:00"
        },
        {
            dt: 1521579600,
            main: {
                temp: 272.158,
                temp_min: 272.158,
                temp_max: 272.158,
                pressure: 1008.86,
                sea_level: 1032.15,
                grnd_level: 1008.86,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 48
            },
            wind: {
                speed: 7.47,
                deg: 28.0009
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 21:00:00"
        },
        {
            dt: 1521590400,
            main: {
                temp: 272.201,
                temp_min: 272.201,
                temp_max: 272.201,
                pressure: 1009.91,
                sea_level: 1033.42,
                grnd_level: 1009.91,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.91,
                deg: 16.0005
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 00:00:00"
        },
        {
            dt: 1521601200,
            main: {
                temp: 272.791,
                temp_min: 272.791,
                temp_max: 272.791,
                pressure: 1011.07,
                sea_level: 1034.92,
                grnd_level: 1011.07,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 5.81,
                deg: 18.5001
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 03:00:00"
        },
        {
            dt: 1521612000,
            main: {
                temp: 273.016,
                temp_min: 273.016,
                temp_max: 273.016,
                pressure: 1011.23,
                sea_level: 1035.2,
                grnd_level: 1011.23,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.19,
                deg: 63.5004
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 06:00:00"
        },
        {
            dt: 1521622800,
            main: {
                temp: 271.986,
                temp_min: 271.986,
                temp_max: 271.986,
                pressure: 1011.85,
                sea_level: 1035.8,
                grnd_level: 1011.85,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.56,
                deg: 76.5001
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 09:00:00"
        },
        {
            dt: 1521633600,
            main: {
                temp: 271.226,
                temp_min: 271.226,
                temp_max: 271.226,
                pressure: 1013.31,
                sea_level: 1037.46,
                grnd_level: 1013.31,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.32,
                deg: 64.0016
            },
            snow: {
                "3h": 0.01
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-21 12:00:00"
        },
        {
            dt: 1521644400,
            main: {
                temp: 271.676,
                temp_min: 271.676,
                temp_max: 271.676,
                pressure: 1015.19,
                sea_level: 1039,
                grnd_level: 1015.19,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.21,
                deg: 54.0007
            },
            snow: {},
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-21 15:00:00"
        }
    ],
    city: {
        id: 420011163,
        name: "Evanston",
        coord: {
            lat: 42.0447,
            lon: -87.6931
        },
        country: "US"
    }
}
```
