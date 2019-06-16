function openNav() {
  document.getElementById("sidebar").style.height = "63px";
  document.getElementById("textbox").style.marginTop = "83px";
  document.getElementById("one").style.marginTop = "83px";
}

function closeNav() {
  document.getElementById("sidebar").style.height = "0";
  document.getElementById("textbox").style.marginTop= "0";
  document.getElementById("one").style.marginTop = "0";
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


function expand(yy){
  document.getElementById(yy).style.height = "300px";
}

function contract(yy){
  document.getElementById(yy).style.height = "50px";
}

function reply_click()
{
    alert(event.srcElement.id);
}

function change2(xx) {

  var change = document.getElementById(xx);

  if (change.innerHTML == "+")
  {
      change.innerHTML = "-";
      document.getElementById(xx).setAttribute("onclick", "javascript: change2(this.id); contract(this.parentNode.id);")
  }
  else {
      change.innerHTML = "+";
      document.getElementById(xx).setAttribute("onclick", "javascript: change2(this.id); expand(this.parentNode.id);")
  }
}
