fetch("https://api.nasa.gov/planetary/apod?api_key=ou0LJEahLWPl1YE5luSNLtf4PEHPjJklnYpPQIUq&date=2021-03-03")
.then(
    function(response){
        if(response.status != 200){
            console.log("There was an error " + response.status);
            return;
        }

        response.json().then(function(data){
            editData(data);
            console.log(data);
        });
    }
)
.catch(function(err)
{
    console.log("Fetch error", err);
});

function editData(data)
{
    var btn = document.getElementById("btn");

    document.getElementById("image").setAttribute("src",data.url);
    document.getElementById("title").innerHTML = data.title + " - " + data.date;
    document.getElementById("description").innerHTML = data.explanation;
    
    btn.addEventListener("click", function(){
        if(btn.textContent == "Like")
        btn.innerHTML = "Unlike";
        else if(btn.textContent == "Unlike")
        btn.innerHTML = "Like";
    });
}

