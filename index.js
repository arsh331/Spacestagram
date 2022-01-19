window.onload = function(){

var url = "https://api.nasa.gov/planetary/apod?api_key=ou0LJEahLWPl1YE5luSNLtf4PEHPjJklnYpPQIUq";
var date = "2021-09-10";
var btn = document.getElementById("btn");
var inputBtn = document.getElementById("inputBtn");
api(url);
inputBtn.addEventListener("click", function(){
    btn.innerHTML = "Like";
    date = document.getElementById("inputDate").value;
    url = url + "&date=" + date;
    api(url);
    url = "https://api.nasa.gov/planetary/apod?api_key=ou0LJEahLWPl1YE5luSNLtf4PEHPjJklnYpPQIUq";
    
});
function api(url)
{
fetch(url)
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
}
function editData(data)
{
    

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
}
