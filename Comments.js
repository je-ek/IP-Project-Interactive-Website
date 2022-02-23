$(document).ready(function(){

    const APIKEY = "620a546534fd6215658584ff";

    $("#CS").on("click", function(e){
        e.preventDefault();

        let comment = $("#comments").val();
        
        let jsondata = {
          "comments": comment
        };

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://ipweb-2564.restdb.io/rest/comments",
          "method": "POST", 
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata),

        $.ajax(settings).done(function (response) {
          console.log(response);
              
          //update our table 
          getContacts();
        })
    })

    function getContacts(all = true) {

        //[STEP 7]: Create our AJAX settings
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://ipweb-2564.restdb.io/rest/comments",
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
        }
        $.ajax(settings).done(function (response) {
      
            let content = "";
            var myDiv = document.getElementById("comment-body");

            for (var i = 0; i < response.length && i < limit; i++) {
                var divClone = myDiv.cloneNode(true);
                $("#comment-section-container").body.appendChild(divClone);
            }
        })

    }
})