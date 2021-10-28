    document.addEventListener("DOMContentLoaded", function(){

        const csrftoken = Cookies.get('csrftoken');

        var my_map = L.map('mapid').setView([53.0, 28.0], 7);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicDFqZTFkMTAwIiwiYSI6ImNrZnA3N2hncjA4ZXUycW10dDZzamdnbHYifQ.Hq8JChMraTtAUPl7L_Ye3A', {
            maxZoom: 20,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicDFqZTFkMTAwIiwiYSI6ImNrZnA3N2hncjA4ZXUycW10dDZzamdnbHYifQ.Hq8JChMraTtAUPl7L_Ye3A'
        }).addTo(my_map);

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("<b>Выбрана точка </b>" + e.latlng.toString())
                .openOn(my_map);
            sendData(e.latlng)
        }

        function sendData(coordinate){
            const request = new Request(
                "saved_coordinates",
                {
                    headers: {'X-CSRFToken': csrftoken},
                }
            );

            fetch(request, {
                method: 'POST',
                body: JSON.stringify(coordinate)
            })
        }
        my_map.on('click', onMapClick);
    });