// tiny.init.js


// Testi slider
if (document.getElementsByClassName('testi-slider')[0] != undefined) {
    var slider = tns({
        container: '.testi-slider',
        loop: true,
        navPosition: "bottom",
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {
            1024: {
                gutter: 24,
                items: 2,
            },
            768: {
                gutter: 24,
                items: 2,
            },
            576: {
                gutter: 24,
                items: 1,
            }
        }
    });
}


// Screenshot slider
if (document.getElementsByClassName('screenshot-slider')[0] != undefined) {
    var slider1 = tns({
        container: '.screenshot-slider',
        loop: true,
        navPosition: "bottom",
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        responsive: {
            1024: {
                gutter: 30,
                items: 4,
            },
            768: {
                gutter: 30,
                items: 3,
            },
            576: {
                gutter: 20,
                items: 2,
            }
        }
    });
}



// Screenshot slider
if (document.getElementsByClassName('testimonial-1-slider')[0] != undefined) {
    var slider1 = tns({
        container: '.testimonial-1-slider',
        loop: true,
        gutter: 20,
        items: 1,
        navPosition: "bottom",
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
    });
}


