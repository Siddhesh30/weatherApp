var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=e71308764b47e8501a4b0182d7689bcf&units=metric';

var server = http.createServer(function(request,response){

    var request = require('request');
    request(url,function(err,res,body){
    var data = JSON.parse(body);
    response.write("<html><body><div id ='container'>");
    response.write("<h1>" + 'City Name -:' + data['name'] + '<br>' + "</h1>");
    response.write("<h2>" + 'Temperature -:' + data.main['temp'] + '<br>' + "</h2>");
    response.write("<h3>" + 'Wind -:' + data.wind['speed'] + '<br>' + "</h3>");
    response.write("<h3>" + 'Deg -:' + data.wind['deg'] + '<br>' + "</h3>");
    response.write("<h4>" + 'SunRise time -:' + new Date(data.sys['sunrise']*1000) + "</h4>");
    response.write("<h4>" + 'SunSet time  -:' + new Date(data.sys['sunset']*1000) + "</h4>");
    response.write("</div></body></html>");
    response.end();
    });

}).listen(3000,function(){
    console.log("App are listening on 3000....");
  })
