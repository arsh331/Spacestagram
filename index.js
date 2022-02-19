window.onload = function(){

    let url = "https://api.nasa.gov/planetary/apod?api_key=ou0LJEahLWPl1YE5luSNLtf4PEHPjJklnYpPQIUq";
    let date = "";
    const inputBtn = document.getElementById("inputBtn");
    const todaysDate = new Date();
    document.getElementById("inputDate").value = todaysDate.toISOString().slice(0, 10);
    api(url);
    inputBtn.addEventListener("click", function(){
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
        if(response.status !== 200){
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

}
}
