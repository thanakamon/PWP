function playSlideShow(id) {
    function show(n) {

       var imgs = document.getElementById(id).getElementsByTagName(`img`);
       var l = imgs.length;
       
       n = n == l ? 0 : n;
   
        for (var a = 0; a < l; a++) {
            var img = imgs[a];
            if (a == n) {
                 img.className = `select`;
            } else {
                 img.className = ``;
            }
       }
       return n;
    }
    var position = show(0);
    window.setInterval(function() {
        position = show(position + 1);
    }, 2000);
}
playSlideShow(`slides`);