window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description');
    let temperatureDegree=document.querySelector('.temperature-degree');
    let locationTimezone=document.querySelector('.location-timezone');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy='https://cors-anywhere.herokuapp.com/'
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=04773351841b41a19979f81d2863a5d5`
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
                console.log(data);
                const {temp}=data.main;
                const {description}=data.weather[0];
                temperatureDegree.textContent=temp;
                temperatureDescription.textContent=description;
                locationTimezone.textContent=data.name;
            
            });
        });

    }
    else{
        h1.textContent='not working'
    }
});