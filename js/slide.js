function playSlideShow(id) {
    function show(n) {
        /*รูปทั้งหมด*/
       var imgs = document.getElementById(id).getElementsByTagName(`img`);
       var l = imgs.length;
       /*รูปแรกถึงสุดท้าย*/
       n = n == l ? 0 : n;
   
        for (var a = 0; a < l; a++) {
            var img = imgs[a];
            if (a == n) {
                 img.className = `select`; /*  รูปที่ต้องการ*/
            } else {
                 img.className = ``;
            }
       }
       return n;
    }
    /* แสดงรูปแรก */
    var position = show(0);
    /*เวลาเปลี่ยนรูป 2s*/
    window.setInterval(function() {
        /* รูปถัดไป*/
        position = show(position + 1);
    }, 2000);
}
playSlideShow(`slides`);