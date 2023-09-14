function searchMarkers() {
    
    document.getElementById('Search').querySelectorAll(".search-result").forEach((node) => {
        document.getElementById('Search').removeChild(node);
    });

    markersData.forEach((obj) => {

        if ( obj.name.toLowerCase().includes( document.getElementById('searchInput').value.toLowerCase() ) && document.getElementById('searchInput').value.toLowerCase() != "" ) {
            
            let newSearchResult = document.createElement("div");
            newSearchResult.classList.add('search-result');
            newSearchResult.id = `SR_${obj.name}`;
            
                //In the search result create an icon
                let newIcon = document.createElement("img");
                newIcon.src = `src/images/markers/${obj.color.toLowerCase()}/${obj.icon.toLowerCase()}.svg`;
                newIcon.onclick = function () { moveToMarker(window[`M_${obj.name}-${obj.layer}-${obj.group}`], obj.lod) }
                newSearchResult.appendChild(newIcon);

                //In the search result create a label
                let newLabel = document.createElement("label");
                newLabel.innerText = `${obj.name}`;
                newLabel.onclick = function () { moveToMarker(window[`M_${obj.name}-${obj.layer}-${obj.group}`], obj.lod) }
                newSearchResult.appendChild(newLabel);
                
                //In the search result create a label
                let newP = document.createElement("p");
                newP.innerText = `${obj.description}`;
                newP.onclick = function () { moveToMarker(window[`M_${obj.name}-${obj.layer}-${obj.group}`], obj.lod) }
                newSearchResult.appendChild(newP);

            //Append the whole thing to the Search tab
            document.getElementById("Search").appendChild(newSearchResult);

        }
    });
}


function moveToMarker(markerToShow, zoomLevel) {
    map.setView(markerToShow.getLatLng(), zoomLevel+1);
    markerToShow.fireEvent( 'onmouseover' );
}