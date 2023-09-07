//Sidebar Setup
var tabOpened = false;
var currentTab = "None";
var closingTab = "None";
var currentButton = "None";

function toggleDrop(evt, tab) {

    switch (tabOpened) {

        case true:
            if (currentTab != tab) {
                closingTab = currentTab;
                closeTab();
                currentTab = tab;
                setTimeout(function() {openTab();}, 250);
                evt.currentTarget.className += " active";
            }
            else {
                tabOpened = false;
                closeTab();
                evt.currentTarget.className = "sidebar-button";
            }
        break;

        case false:
            tabOpened = true;
            currentTab = tab;
            closingTab = currentTab;
            openTab();
            evt.currentTarget.className += " active";
        break;

    }
}

function closeTab() {
    document.getElementById(currentTab).style.transform = "translateX(-100%)";
    document.getElementById(`${closingTab}Button`).className = "sidebar-button";
    setTimeout(function() {hideTab();}, 250);
}

function hideTab() {

    switch (tabOpened) {

        case true:
            document.getElementById(closingTab).style.display = "none";
            document.getElementById(closingTab).style.boxshadow = "none";
            break;

        case false:
            document.getElementById(currentTab).style.display = "none";
            document.getElementById(currentTab).style.boxshadow = "none";
            document.getElementById("Main").style.boxShadow = "rgba(18, 18, 18, 0.8) 0px 0px 10px 0px";
            break;

    }
}

function openTab() {
    document.getElementById(currentTab).style.display = "block";
    document.getElementById("Main").style.boxShadow = "none";
    setTimeout(function() {showTab();}, 50);
}

function showTab() {
    document.getElementById(currentTab).style.transform = "translateX(0%)";
    document.getElementById(currentTab).style.boxShadow = "rgba(18, 18, 18, 0.8) 0px 0px 10px 0px";
}
 








function layerGroupVisibility(event) {
    if (event.target.checked == true) {
        var elems = document.getElementById(`${event.target.id}Parent`).querySelectorAll(".layer-grid input[type=checkbox]");
        
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].checked = true;
            this.map.addLayer(myLayer);
        }
    }
    else {
        var elems = document.getElementById(`${event.target.id}Parent`).querySelectorAll(".layer-grid input[type=checkbox]");
        
        var index = 0, length = elems.length;
        for ( ; index < length; index++) {
            elems[index].checked = false;
            this.map.removeLayer(myLayer);
        }
    }
}

function markerGroupVisibility(event, groupID) {
    if (event.target.checked == true) {

        this.map.addLayer(myLayer);

        if (event.target.checked != document.getElementById(`${groupID}`).checked) {
            document.getElementById(`${groupID}`).checked = event.target.checked;

            if (event.target.checked != document.getElementById(`viewLayersCheckbox`).checked) {
                document.getElementById(`viewLayersCheckbox`).checked = event.target.checked;
            }
        }
    }
    else {
        this.map.removeLayer(myLayer);
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
  