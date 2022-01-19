fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-03-03")
.then(
    function(response){
        if(response.status != 200){
            console.log("There was an error " + response.status);
            return;
        }

        response.json().then(function(data){
            document.getElementById("image").setAttribute("src",data.url);
        });
    }
)
.catch(function(err)
{
    console.log("Fetch error", err);
});

