function openNav() {
  document.getElementById("sidebar").style.height = "63px";
  document.getElementById("textbox").style.marginTop = "83px";
}

function closeNav() {
  document.getElementById("sidebar").style.height = "0";
  document.getElementById("textbox").style.marginTop= "0";
}

function change() {
  var change = document.getElementById("openbtn");
  if (change.innerHTML == "↓")
  {
      change.innerHTML = "↑";
      document.getElementById("openbtn").setAttribute("onclick", "javascript: change(); closeNav();")
  }
  else {
      change.innerHTML = "↓";
      document.getElementById("openbtn").setAttribute("onclick", "javascript: change(); openNav();")
  }
}
