// When the user scrolls down 50px from the top of the document, show the button with animation
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.visibility = "visible";
        document.getElementById("myBtn").style.opacity = 1;
    } else {
        document.getElementById("myBtn").style.visibility = "hidden";
        document.getElementById("myBtn").style.opacity = 0;
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    scrollTo(document.body, 0, 600);
    scrollTo(document.documentElement, 0, 600);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};