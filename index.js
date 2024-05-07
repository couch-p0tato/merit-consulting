function toggleMenu() {
    var menu = document.querySelector(".right-nav");
    var menuIcon = document.querySelector(".bar-icon");
    var closeIcon = document.querySelector(".x-icon");
  
    if (menu.style.display === "block") {
      menu.style.display = "none";
      menuIcon.style.display = "inline-block";
      closeIcon.style.display = "none";
    } 
    else {
      menu.style.display = "block";
      menuIcon.style.display = "none";
      closeIcon.style.display = "inline-block";
    }
}