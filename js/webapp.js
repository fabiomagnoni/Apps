(function () {
 // Ambient light
    var ambientLight = document.querySelector("#ambient-light"),
        ambientLightDisplay = document.querySelector("#ambient-light-display");
    if (ambientLight && ambientLightDisplay) {
        ambientLight.onclick = function () {
            ambientLightDisplay.style.display = "block";
            window.addEventListener("devicelight", function (event) {
                // Read out the lux value
                var darkside = "<strong>You're in the <b>Dark Side</b> </strong><br> <img src=/images/darkside.png> " + event.value;
                var brightside = "<strong>You're in the <i>Bright side</i> </strong><br> <img src=/images/brightside.png>" + event.value;
                if (event.value < 1000) {
                    ambientLightDisplay.innerHTML = darkside;    
                }
                if (event.value > 1000){
                    ambientLightDisplay.innerHTML = brightside;
                }
                });
        };
    }   
})();

