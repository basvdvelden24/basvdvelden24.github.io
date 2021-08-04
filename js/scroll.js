mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        $('myBtn').fadeIn();
    } else {
        mybutton.style.display = "none";
        $('myBtn').fadeOut();
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('html, body').animate({ scrollTop: 0 }, 800);
}