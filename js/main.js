var burger = document.getElementById("burger");
var menu = document.getElementById("menu");
var bg = document.getElementById("bg");


burger.addEventListener("click", function() {
    var isCross = this.classList.contains("cross");

    if (isCross) {
        this.classList.remove("cross");
        menu.classList.remove("visible");
        bg.classList.remove("visible")
    } else {
        this.classList.add("cross");
        menu.classList.add("visible");
        bg.classList.add("visible");
    }

})

$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});