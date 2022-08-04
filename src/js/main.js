/*var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


//pozoruje klik na našem tlačítku
button.addEventListener('click', function () {
    modal.classList.add('modal_active');
}
)

close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
}
)

*/

$(document).ready(function () {



    //(napojení knihvny wow.js) napojení souboru wow js pro animaci při scrollování na daný element na stránce

    new WOW().init();



    // modální okno
    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');
    button.on('click', function () {
        modal.addClass('modal_active');
    });

    close.on('click', function () {
        modal.removeClass('modal_active');
    });


    // validace formulářů


    $('#brief-form').validate({
        rules: {
            username: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required"
        },
        messages: {
            username: "Uveďte vaše jméno",
            phone: "Uveďte vaše telefonní číslo",
            email: "Potřebujeme váš email"
        }
    });




    //přidání rolování na slider - obrázky se nám po kliknutí budou přebíhat z jednoho na druhý
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),

        //odebrání zobrazených obrázků pro užší prostředí např. tablety a pro mobily
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,

                }
            },


        ]
    });

});