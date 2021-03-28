const popup = L.popup({
    closeButton: true
});

function openPopUp(featureEvent) {
    console.log(featureEvent.data.scene)
    // set where the popup will be displayed
    // coordinates of clicked/hover geometry

    popup.setLatLng(featureEvent.latLng);
    // if it is not opened, display popup
    if (!popup.isOpen()) {
        let content = '';
        if (featureEvent.data.scene) {
            //content += `<iframe width="240" src= ${featureEvent.data.arrival} frameborder="0" allowfullscreen></iframe>`
            content += '<p>seeme</p>';
        }

        console.log(content)
        // add values to Leafet popup element
        popup.setContent(content);
        // displayn Leaflet popup on map
        popup.openOn(map);
        Cartolayer.openPopup();
    }
};

function closePopUp(featureEvent) {
    // remove popup from map object
    popup.removeFrom(map)
}

// define what will happen when we do the mouse event
// featureClick on the geometries of the CARTO layer


Cartolayer.on('featureClicked', openPopUp);
