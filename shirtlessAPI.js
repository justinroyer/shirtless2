var imported = document.createElement('script');
imported.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js';
document.head.appendChild(imported);


var shirtlessAPI = {
    get: function(term){
        term = term + " " + "shirtless";
        console.log(term);
        //real logic
        //send fully created url "term" to internet and await results for transformation into array
        var bing_url='http://api.search.live.net/json.aspx?JsonType=callback&JsonCallback=?&Appid=oVYUBonrmdvn2cwUKLHsKpmsUdga1DYpsJRaQZdO1Xs&query='+term+'&sources=web';

        var $JSONdata = $.ajax({
        type: "GET",
        url: bing_url,
        dataType:"jsonp",
        success: function(response)
        {
            console.log(response);
        $("#result").html('');
        if(response.SearchResponse.Web.Results.length)
        {
        $.each(response.SearchResponse.Web.Results, function(i,data)
        {
        var title=data.Title;
        var dis=data.Description;
        var url=data.Url;


        var final="<div class='webresult'><div class='title'><a href='"+url+"'>"+title+"</a></div><div class='desc'>"+dis+"</div><div class='url'>"+url+"</div></div&gt;";

        $("#result").append(final); // Result

        });
        }
        else
        {
        $("#result").html("<div id='no'>No Results</div>");
        }
        }
        });


        console.log($JSONdata);
        //dummy logic
        if(term === 'monkey'){
            return [{title: term, src: "http://lorempixel.com/320/320/animals/2/"}];
        }
        if(term != ""){
            return [
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/1/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/2/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/3/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/4/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/5/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/6/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/7/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/8/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/9/",
                },
                {
                    title: term,
                    src: "http://lorempixel.com/320/320/animals/10/",
                }
            ];
        } else {
            return [];
        }
    }
};

(function() {
    var cx = '015206230483323128689:6amziptvy8s';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();