    var menu_open_btn = document.querySelector(".main-menu__btn");
    var main_menu = document.querySelector(".main-menu");
  
    menu_open_btn.addEventListener("click", function(event) {
      event.preventDefault();  
    if (main_menu.classList.contains("main-menu--opened")) {
      main_menu.classList.remove("main-menu--opened");
    }
    else {
      main_menu.classList.add("main-menu--opened");
    }
    });
