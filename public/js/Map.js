




fetch("http://localhost:3000/cords")
    .then(response => response.json())
    .then(data => {
        

        let mymap = L.map('mapid').setView([data.lat, data.lng], 7);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: data.key
        }).addTo(mymap);

        L.marker([data.lat, data.lng]).addTo(mymap)
        .bindPopup(`${data.region}, ${data.city}`)
        .openPopup();


    })
    
    




    
    
    