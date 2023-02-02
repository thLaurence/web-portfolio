function responsiveNav() {
    var button_nav = document.getElementById("button_nav");
    var element_nav = document.getElementById("element_nav");
    var svg_off = document.getElementById("svg_off__nav");
    var svg_on = document.getElementById("svg_on__nav");
    element_nav.classList.toggle("visible")
    svg_off.classList.toggle("visible")
    svg_on.classList.toggle("visible")
}

function play() {
    const audio = document.getElementById("audio");
    const img = document.getElementById("img_audio");
    audio.play();
    audio.loop = true;
    audio.volume = 0.1;
    img.onclick = function() { stop(); }
}

function stop() {
    audio.pause();
    const img = document.getElementById("img_audio");
    img.onclick = function() { play(); }
}