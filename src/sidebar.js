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
                setTimeout(openTab, 250);
                evt.currentTarget.className += " active";
            }
            else {
                tabOpened = false;
                closeTab();
                evt.currentTarget.className = "sidebar-button";
            }
            break;

        case false:
            currentTab = tab;
            closingTab = currentTab;
            openTab();
            tabOpened = true;
            evt.currentTarget.className += " active";
            break;

    }
}

function closeTab() {
    document.getElementById(`${closingTab}Button`).className = "sidebar-button";
    document.getElementById(currentTab).style.transform = "translateX(-250px)";
    setTimeout(hideTab, 250);
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
    setTimeout(showTab, 15);
    document.getElementById("Main").style.boxShadow = "none";
}

function showTab() {
    document.getElementById(currentTab).style.transform = "translateX(0px)";
    document.getElementById(currentTab).style.boxShadow = "rgba(18, 18, 18, 0.8) 0px 0px 10px 0px";
}
 

  