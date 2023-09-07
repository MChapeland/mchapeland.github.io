function layerGroupVisibility(event) {
    if (event.target.checked == true) {
        var elems = document.getElementById(`${event.target.id}Parent`).querySelectorAll(".layer-grid input[type=checkbox]");
        
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].checked = true;
        }
    }
    else {
        var elems = document.getElementById(`${event.target.id}Parent`).querySelectorAll(".layer-grid input[type=checkbox]");
        
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].checked = false;
        }
    }
}

function markerGroupVisibility(event, groupID) {
    if (event.target.checked == true) {

        this.map.addLayer(document.getElementById("Layers").querySelectorAll("layer-container").id);

        if (event.target.checked != document.getElementById(`${groupID}`).checked) {
            document.getElementById(`${groupID}`).checked = event.target.checked;

            if (event.target.checked != document.getElementById(`viewLayersCheckbox`).checked) {
                document.getElementById(`viewLayersCheckbox`).checked = event.target.checked;
            }
        }
    }
    else {
        this.map.removeLayer(document.getElementById("Layers").querySelectorAll("layer-container").id);
    }


}

function toggleViewLayers(event) {
    var groups = document.getElementById("Layers").querySelectorAll(".layer-grid input[type=checkbox]");
    var individual = document.getElementById("Layers").querySelectorAll(".visibility-box input[type=checkbox]");

    var indexGroups = 0, length = groups.length;
    for ( ; indexGroups < length; indexGroups++) {
        if (event.target.checked == true) {
            groups[indexGroups].checked = true;
            this.map.addLayer(myLayer);
        }
        else {
            groups[indexGroups].checked = false;
            this.map.removeLayer(myLayer);
        }
    }

    var indexIndividual = 0, length = individual.length;
    for ( ; indexIndividual < length; indexIndividual++) {
        if (event.target.checked == true) {
            individual[indexIndividual].checked = true;
            this.map.addLayer(myLayer);
        }
        else {
            individual[indexIndividual].checked = false;
            this.map.removeLayer(myLayer);
        }
    }
}

function toggleListLayers(event) {
    var groups = document.getElementById("Layers").querySelectorAll(".arrow-container input[type=checkbox]");

    var indexGroups = 0, length = groups.length;
    for ( ; indexGroups < length; indexGroups++) {
        if (event.target.checked == true) {
            groups[indexGroups].checked = true;
        }
        else {
            groups[indexGroups].checked = false;
        }
    }
}


function toggleArrowLayers(event) {
    if (event.target.checked == true) {
        if (event.target.checked != document.getElementById(`listLayersCheckbox`).checked) {
            document.getElementById(`listLayersCheckbox`).checked = event.target.checked;
        }
    }
}