$(document).ready(function() {
    $.ajax('https://api.parse.com/1/classes/newsitem', 
  {
    beforeSend: function(request) {
      request.setRequestHeader('X-Parse-Application-Id', 'zPvN2A3mKMHXsXiASLkCcj4u7QWPMvZGFpQRawNq');
            request.setRequestHeader('X-Parse-REST-API-Key', 'ldUlwNPuFIpyzhq2jfeV7Ssms0tkV423N3VbJiJe');
        }
    }
).done(function(response) {
        //populate list here with jquery
    console.log(response.results);
    $.each(response.results, function(index, article) {
        //build html
        alert("key: " + myvar + ", value: ");
        
        
        var NewsItems = "<h1>" + myvar + "<body>";
         
        //prepend to .newsfeed
        NewsItem.prependTo('.newsfeed');
    });               
});
});