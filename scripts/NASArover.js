        function fetchMarsPhotos() {
            const parameters = document.querySelector(".params")
            parameters.style.display='none'
            const parameters2 = document.querySelector(".aboutimg")
            parameters2.style.display='none'
            const description = document.querySelector(".Description")
            description.style.display = 'inherit'
            const sidedescription = document.querySelector(".sidedescription")
            sidedescription.style.display = 'inherit'
            var date = document.getElementById("enterdate").value;
            const Api_Key = 'AFGbNcuphIlWLfQEBhVhDKxPhbPUkpx8i6uF0soL';
            const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=' + date + '&api_key=' + Api_Key;

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                   let currentIndex = Math.floor(Math.random() * 15);
                   console.log(data)
                   var nasaImgElement = document.createElement("img");
                   nasaImgElement.id = "nasaimgs";
                   nasaImgElement.src = data.photos[currentIndex].img_src; 
                   var parentDiv = document.querySelector('.nasaimg');
                   parentDiv.replaceChild(nasaImgElement, document.getElementById("nasaimg"));
                   var title  = document.getElementById("title")
                   title.innerText = data.photos[currentIndex].rover.name
                   var cameraName = document.getElementById("camera")
                   cameraName.innerText = data.photos[currentIndex].camera.name
                   var earthDate = document.getElementById("date")
                   earthDate.innerText = data.photos[currentIndex].earth_date
                   var marsDate = document.getElementById("marsdate")
                   marsDate.innerText = data.photos[currentIndex].sol
                   var fullname = document.getElementById("fullname")
                   fullname.innerText = "("+ data.photos[currentIndex].camera.full_name+")"
                   var rovername = document.getElementById("rovername")
                   rovername.innerText = data.photos[currentIndex].rover.name
                   var landingdate = document.getElementById("landingdate")
                   landingdate.innerText = data.photos[currentIndex].rover.landing_date
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        }
const tryagain = document.getElementById("tryagain")
tryagain.addEventListener("click",function(){
    location.reload();
})