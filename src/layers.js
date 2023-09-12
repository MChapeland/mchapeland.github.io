function layerGroupVisibility(event, groupID) {
    if (document.getElementById(`${groupID}`).checked == true) {
        var elems = document.getElementById(`${groupID}Parent`).querySelectorAll(".layer-grid input[type=checkbox]");
        
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].checked = true;
            elems[index].onchange();
        }
    }
    else {
        var elems = document.getElementById(`${groupID}Parent`).querySelectorAll(".layer-grid input[type=checkbox]");
        
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].checked = false;
            elems[index].onchange();
        }
    }
}

function markerGroupVisibility(event, groupID, layerID) {
    if (document.getElementById(`CB_${layerID}`).checked == true) {

        window[`${layerID}`].addTo(map);

        if (document.getElementById(`CB_${layerID}`).checked != document.getElementById(`${groupID}`).checked) {
            document.getElementById(`${groupID}`).checked = document.getElementById(`CB_${layerID}`).checked;

            if (document.getElementById(`CB_${layerID}`).checked != document.getElementById(`viewLayersCheckbox`).checked) {
                document.getElementById(`viewLayersCheckbox`).checked = document.getElementById(`CB_${layerID}`).checked;
            }
        }
    }
    else {
        window[`${layerID}`].removeFrom(map);
    }


}

function toggleViewLayers(event) {
    var groups = document.getElementById("Layers").querySelectorAll(".visibility-box input[type=checkbox]");

    var indexGroups = 0, length = groups.length;
    for ( ; indexGroups < length; indexGroups++) {
        if (event.target.checked == true) {
            groups[indexGroups].checked = true;
        }
        else {
            groups[indexGroups].checked = false;
        }
        groups[indexGroups].onchange();
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

