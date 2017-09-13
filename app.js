var express = require('express');
var app=express();
var request = require('request');

var remoteUrl = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg';
app.use('/', function(req, res) {
var url = remoteUrl;
	request.get({
		url:remoteUrl
	},function(error,response,body){
 		if (!error && response.statusCode == 200) {
 			//var firstIndex=body.indexOf("("),
 			  //  lastIndex=body.lastIndexOf(")")
		   // res.send(body.slice(firstIndex+1,lastIndex));	   

		   res.send(body);
		 }
	})
	

});
 
app.listen(3000);