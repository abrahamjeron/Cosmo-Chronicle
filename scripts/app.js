const pod = document.querySelector(".pod").addEventListener('click',function(){
    location.href="./NASApod.html"
});
const cosmoinfo = document.querySelector(".pod2").addEventListener('click',function(){
    location.href="./cosmicinfo.html"
})




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

const apiUrl2 = 'http://api.open-notify.org/astros.json';
fetch (apiUrl2)
    .then(response=>{
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
    })
    .then(res =>{
        console.log(res);
        const people = document.getElementById("getlon5")
        people.innerText = res.number + " people"
    })
    .catch(error=>{
        console.error('Fetch error:', error);
    })


const apiUrl3 = 'https://fdo.rocketlaunch.live/json/launches/next/5'

fetch(apiUrl3)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let currentIndex = Math.floor(Math.random() * 5);
        var getlon3 = document.getElementById("getlon3")
        getlon3.innerText = data.result[currentIndex].est_date.day + " / "  +  data.result[currentIndex].est_date.month  + " / "  +  data.result[currentIndex].est_date.year
        var getlat3 = document.getElementById("getlat3")
        getlat3.innerText = data.result[currentIndex].name
        console.log(data)
        console.log(data.result[currentIndex].name)
        console.log(data.result[currentIndex].est_date)
        var todaydate = document.getElementById("todaydate")
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
    // est_date

    const Api_Key = 'AFGbNcuphIlWLfQEBhVhDKxPhbPUkpx8i6uF0soL';
    const apiUrl4 = 'https://api.nasa.gov/planetary/apod?api_key=AFGbNcuphIlWLfQEBhVhDKxPhbPUkpx8i6uF0soL';
    fetch (apiUrl4)
        .then(response=>{
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })
        .then(data =>{
            console.log(data);
            var todaydate = document.getElementById("todaydate")
            todaydate.innerHTML = data.date
        })
        .catch(error=>{
            console.error('Fetch error:', error);
        })
document.querySelector(".pod5").addEventListener("click",function(){
    location.href="./NASArover.html"
})