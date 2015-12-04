# CA-AngularJS
AngularJS coding assignments inspired by the CodeAcademy course

#### [**The Best Sellers page**](theBestSellers/app)
- My first AngularJS page. It contains
  - a main page that includes
    - a new module and
    - a controller with a data structure and two functions 

Web page pulls Amazon's top 10 selling books in 2015 and displays them.  
It also implements functions to add likes/dislikes for every book.
#### [**The Clash page**](theClash/app)
- In addition to previously introduced, the assignment contains custom made directive(s)

Web page shows short bios (taken from Wikipedia) of the four most important members of the band The Clash.
#### [**Weather22 page**](weather22/app)
- The assignment introduces the usage of a service

From the http://www.openweathermap.org/, using their API key (you have to register on the website in order to get one...it's free), I am showing the most recent weather information for the largest 22 cities (by population) in the world.  
  
Get your OpenWeatherMap API key at [**http://openweathermap.org/appid**](http://openweathermap.org/appid)  
Then create a file on the following path:  
&nbsp; &nbsp; &nbsp; &nbsp; [your path]/CA-AngularJS/weather22/app/config/no_pasaran.json  

as:  
&nbsp; &nbsp; &nbsp; &nbsp; {  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "owm_api_key": "[your OpenWeatherMap API key]"  
&nbsp; &nbsp; &nbsp; &nbsp; }  
      
Data is received in JSON format.  
The units are metric. 
#### [**Alphabet page(s)**](alphabet/app)
- The assignment introduces the usage of views/routing
- Also, a custom filter is built

The application represents a short guide through the English alphabet.  
The main page provides a link for each letter which loads the appropriate view.  
The app utilizes a custom directive and a custom service. The directive embeds YouTube video to a page. The service is used to read the data in JSON format from the local file.
#### [**Novak's superheroes page**](superheroes/app)
I wanted to create an application that would work on live public API. The direct inspiration was Novak's (my 4 year old son) interest in comic characters. So, I have found a nice API provided by [**Comic Vine**](http://www.comicvine.com/api/).  
The main page is a carousel of Novak's favorite characters/concepts read from the controller file. The data has been pulled down locally because the API doesn't support single call for multiple objects of various types ('characters' and 'concepts' in this case).  
The rest of the pages was supposed to utilize Comic Vine's APIs in order to create a hierarchical structure of different categories, but the API wasn't suitable for what I wanted to achieve. So, instead, just as an example, I am making simple API calls on each of the categories and display the results.  
  
In order to run run the app, get your Comic Vine API key at [**http://www.comicvine.com/api/**](http://www.comicvine.com/api/)  
Then create a file on the following path:  
&nbsp; &nbsp; &nbsp; &nbsp; [your path]/CA-AngularJS/superheroes/app/config/no_pasaran.json  

as:  
&nbsp; &nbsp; &nbsp; &nbsp; {  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; "cv_api_key": "[your Comic Vine API key]"  
&nbsp; &nbsp; &nbsp; &nbsp; }  
