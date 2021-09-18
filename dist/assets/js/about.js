$(() => {
    var geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    iconSize: [29,43]
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        60.65684612466901, 56.83341114733714
                    ]
                }
            }
        ]
    }

    mapboxgl.accessToken = 'pk.eyJ1IjoieGtvcmVkZXVzIiwiYSI6ImNrbGtxcmoybzNmMGIydnM4MWs5ZXo5cmMifQ._YIlgXTnQtUtNubeZg81dg';

    if ( $(window).width() > 1200 ) {
        centerPosition = [
            60.65277158116906, 56.83341114733714
        ]
    } else {
        centerPosition = [
            60.65684612466901, 56.83341114733714
        ];
    }

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/xkoredeus/cklkrgmef0qsx17mlzyqyo3ga',
        center: centerPosition,
        zoom: 15,
        attributionControl: false
    });

    // add markers to map
    geojson.features.forEach(function (marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage =
            'url(assets/img/balloon.svg)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';

        // add marker to map
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

    var elInner = $('.balloon__content');
    $('.marker').append(elInner);
});