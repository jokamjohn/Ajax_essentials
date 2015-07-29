
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $("#street").val();
    var city = $("#city").val();
    var address = street + ', '+ city;
    var scaddress = 'https://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    // YOUR CODE GOES HERE!
    $body.append('<img class="bgimg" src="'+scaddress+'" />');
//nytimes API
    var api_key = "2716a6dbe45cfbd34e4da2076a33ac52:11:72587342";
    var base_url_nyt = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ city + "&sort=newest&api-key="+api_key+ "";
    $.getJSON(base_url_nyt,function(data){
        //console.log(data);
        $nytHeaderElem.text('New york times article about' + city + '');
         articles = data.response.docs;
        for (var i = 0; i < articles.length; i++){
            var article = articles[i];
            $nytElem.append('<li class="article">' + '<a href="'+ article.web_url +'">'+article.headline.main+'</a>'+
                '<p>'+article.snippet+'</p>'+'</li>');
        }
    });

    return false;
};

$('#form-container').submit(loadData);
