const apiUrl2 = 'https://api.spacexdata.com/v4/roadster';
fetch (apiUrl2)
    .then(response=>{
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
    })
    .then(data => {
        console.log(data);
        console.log(data.details);

        const flickrImages = data.flickr_images;
        let currentIndex = Math.floor(Math.random() * 4);

        const nasaImgElement = document.createElement("img");
        nasaImgElement.id = "nasaimgs";
        nasaImgElement.src = flickrImages[currentIndex];

        const parentDiv = document.querySelector('.nasaimg');
        parentDiv.replaceChild(nasaImgElement, document.getElementById("nasaimg"));

        const imgcaption = document.getElementById("imgdescription");
        imgcaption.innerHTML = data.details;

        const title = document.getElementById("title");
        title.innerHTML = data.name;

        var earthdist = document.getElementById("earthdist")
        earthdist.innerText = " "+data.earth_distance_km

        var marsdist = document.getElementById("marsdist")
        marsdist.innerText =" "+ data.mars_distance_km

        var speed = document.getElementById("speed")
        speed.innerText = data.speed_kph 
        const imgdate = document.getElementById("date");
        imgdate.innerHTML = data.launch_date_utc;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % flickrImages.length;
            nasaImgElement.src = flickrImages[currentIndex];
        }, 2000);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });