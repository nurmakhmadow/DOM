const toggle = document.getElementById("toggle");

toggle.addEventListener("change", function() {
  if (this.checked) {
    // переключатель в положении "On"
    console.log("On");
  } else {
    // переключатель в положении "Off"
    console.log("Off");
  }
});