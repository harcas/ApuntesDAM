function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openPract() {
  if (document.getElementById("dropdown-content").style.display == "flex") {
    document.getElementById("dropdown-content").style.display = "none";
  }
  else {
    document.getElementById("dropdown-content").style.display = "flex";
  }
}
