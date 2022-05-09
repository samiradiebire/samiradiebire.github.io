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