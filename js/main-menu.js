    var menu_open_btn = document.querySelector(".main-menu__btn");
    var main_menu = document.querySelector(".main-menu");

    main_menu.classList.add("main-menu--closed");

    menu_open_btn.addEventListener("click", function(event) {
        event.preventDefault();
        if (main_menu.classList.contains("main-menu--closed")) {
            main_menu.classList.remove("main-menu--closed");
        } else {
            main_menu.classList.add("main-menu--closed");
        }
    });

    window.onresize = function() {
        if ((window.innerWidth > 1200) &&
            !(main_menu.classList.contains("main-menu--closed"))) {
            main_menu.classList.add("main-menu--closed");
        }
    };

