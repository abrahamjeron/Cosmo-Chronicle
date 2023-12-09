const Api_Key = 'AFGbNcuphIlWLfQEBhVhDKxPhbPUkpx8i6uF0soL';
const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=AFGbNcuphIlWLfQEBhVhDKxPhbPUkpx8i6uF0soL';
fetch (apiUrl)
    .then(response=>{
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json()
    })
    .then(data =>{
        console.log(data);
        var nasaImgElement = document.createElement("img");
        nasaImgElement.id = "nasaimgs";
        nasaImgElement.src = data.url; 
        var parentDiv = document.querySelector('.nasaimg');
        parentDiv.replaceChild(nasaImgElement, document.getElementById("nasaimg"));
        var imgcaption = document.getElementById("imgdescription")
        imgcaption.innerHTML = data.explanation
        var title = document.getElementById("title")
        title.innerHTML = data.title
        var imgdate = document.getElementById("date")
        imgdate.innerHTML = data.date
    })
    .catch(error=>{
        console.error('Fetch error:', error);
    })