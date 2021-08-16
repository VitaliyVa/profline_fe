import './index.scss';


window.onload = function () {
    let delivery_hint_close = document.getElementsByClassName('delivery_hint_close')[0];
    delivery_hint_close.addEventListener("click", hide_hint);



    function hide_hint() {
        let hint_delivery__block = document.getElementsByClassName('delivery_hint__block')[0];
        let header_nav = document.getElementsByClassName('header_navigation')[0];
        hint_delivery__block.classList.add('hidden');
        header_nav.classList.remove('header_navigation_delivery');
        let bottom_navigation = document.getElementsByClassName('bottom_navigation')[0];
        bottom_navigation.classList.remove('delivery');
    }

    {
        let navigation_phone_arrow = document.getElementsByClassName('navigation_phone_arrow')[0];
        navigation_phone_arrow.addEventListener("click", open_phones);

        function open_phones() {
            let navigation_another_phone = document.getElementsByClassName('navigation_another_phone')[0];
            navigation_another_phone.classList.toggle('active');
        }
    }

    let header_navigation = document.getElementsByClassName('header_navigation')[0];
    let menu_btn = document.getElementsByClassName('menu_btn')[0];
    menu_btn.addEventListener("click", menu_action);

    function menu_action() {
        let header_navigation = document.getElementsByClassName('header_navigation')[0];
        let menu_btn = document.getElementsByClassName('menu_btn')[0];
        menu_btn.classList.toggle('active');
        header_navigation.classList.toggle('active');
    }

    window.addEventListener('scroll', function (e) {
        let scrollTop = getBodyScrollTop();
        if (scrollTop >= 350) {
            header_navigation.classList.add('scroll');
            header_navigation.classList.add('fixed');
            hide_hint();
        } else if (scrollTop >= 220 && scrollTop <= 350) {
            header_navigation.classList.add('animation');
            header_navigation.classList.remove('active');
            menu_btn.classList.remove('active');
        } else {
            header_navigation.classList.remove('scroll');
            header_navigation.classList.remove('animation');
            header_navigation.classList.remove('fixed');
        }
    });

    function getBodyScrollTop() {
        return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    }





    let location__block = document.getElementsByClassName('location__block')[0];
    let mobile__block = document.getElementsByClassName('mobile__block')[0];
    let location_triger = document.querySelectorAll('.location_triger');
    let mobile_triger = document.querySelectorAll('.mobile_triger');
    let mini_modal_close = document.querySelectorAll('.mini_modal_close');

    location_triger.forEach(item => {
        item.addEventListener("click", function () {
            mobile__block.classList.remove('active');
            location__block.classList.toggle('active');
        });
    });
    mobile_triger.forEach(item => {
        item.addEventListener("click", function () {
            location__block.classList.remove('active');
            mobile__block.classList.toggle('active');
        });
    });

    mini_modal_close.forEach(item => {
        item.addEventListener("click", function () {
            // this.target.classList.remove('active');
            this.closest(".mini_modal").classList.remove('active');
        });
    });

    // document.onclick = function (e) {
    //     let check_location_triger = event.target.classList.contains('location_triger');
    //     let check_mobile_triger = event.target.classList.contains('mobile_triger');
    //     let check_mobile_active = mobile__block.classList.contains('active');
    //     let check_location_active = location__block.classList.contains('active');

    //     if (check_location_triger == false && check_location_active == true) {
    //         location__block.classList.remove('active');
    //     }

    //     if (check_mobile_triger == false && check_mobile_active == true) {
    //         mobile__block.classList.remove('active');
    //     }
    // };

};
