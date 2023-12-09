const apiUrl = 'http://api.open-notify.org/iss-now';
fetch (apiUrl)
    .then(response=>{
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
    })
    .then(data =>{
        console.log(data);
        console.log(data.timestamp)
        var latitude = document.getElementById("getlat")
        latitude.innerHTML=data.iss_position.latitude
        var longitude = document.getElementById("getlon")
        longitude.innerHTML=data.iss_position.longitude
    })
    .catch(error=>{
        console.error('Fetch error:', error);
    })
const roadster = document.querySelector(".pod2")
roadster.addEventListener("click",function(){
    location.href="./roadster.html"
})
