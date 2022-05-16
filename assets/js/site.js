// Menu function
function menuFunction() {
    //animate the button
    let x = document.getElementById("menu-icon");
    if (x.className === "menu-icon") {
      x.className += " active";
    } else {
      x.className = "menu-icon";
    }

    //drop down the menu
    let y = document.getElementById("nav");
    if (y.className === "nav") {
      y.className += " open";
    } else {
      y.className = "nav";
    }
}

// Scrolling function - https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (matchMedia('(min-width: 920px)').matches) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("name").style.fontSize = "16px";
      document.getElementById("nav").style.top = "30px";
    } else {
      document.getElementById("name").style.fontSize = "60px";
      document.getElementById("nav").style.top = "90px";
    }
  }
}