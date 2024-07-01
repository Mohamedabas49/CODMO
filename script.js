document.getElementById("menuButton").onclick = function() {
    var menuContent = document.getElementById("menuContent");
    var menuButton = document.getElementById("menuButton");
    menuContent.classList.toggle("show");
    menuButton.classList.toggle("show");
};

window.onclick = function(event) {
    if (!event.target.matches('.menu-button') && !event.target.matches('.menu-button *')) {
        var dropdowns = document.getElementsByClassName("menu-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        var menuButton = document.getElementById("menuButton");
        if (menuButton.classList.contains('show')) {
            menuButton.classList.remove('show');
        }
    }
};