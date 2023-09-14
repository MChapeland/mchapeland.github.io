function searchMarkers() {
    
    document.getElementById('Search').querySelectorAll(".search-result").forEach((node) => {
        document.getElementById('Search').removeChild(node);
    });


    markersData.forEach((obj) => {

        if (obj.name.toUpperCase().indexOf(document.getElementById('searchInput').value.toUpperCase()) > -1 ) {
            
            let newSearchResult = document.createElement("div");
            newSearchResult.classList.add('search-result');
            newSearchResult.id = `SR_${obj.name}`;
            
                //In the search result create an icon
                let newIcon = document.createElement("img");
                newIcon.src = `src/images/markers/${obj.color.toLowerCase()}/${obj.icon.toLowerCase()}.svg`;
                newSearchResult.appendChild(newIcon);

                //In the search result create a label
                let newLabel = document.createElement("label");
                newLabel.innerText = `${obj.name}`;
                newSearchResult.appendChild(newLabel);
                
                //In the search result create a label
                let newP = document.createElement("p");
                newP.innerText = `${obj.description}`;
                newSearchResult.appendChild(newP);

            //Append the whole thing to the Search tab
            document.getElementById("Search").appendChild(newSearchResult);

        }

    });


}