(function() {
  `use strict`;
  function displayHexClock() {
    /* รับเวลา */
    var clock = new Date(),
        h = clock.getHours(),
        m = clock.getMinutes(),
        s = clock.getSeconds();

    /*ตรวจสอบว่าเป็น 2 หลัก*/
    if(h.toString().length < 2) { h = `0` + h; }
    if(m.toString().length < 2) { m = `0` + m; }
    if(s.toString().length < 2) { s = `0` + s; }

    var time = h + `:` + m + `:` + s;
    var color = `#` + h + m + s;

    /*เปลี่ยนสีพื้นหลังตามเวลา*/
    document.body.style.background = color;

    /*อัพเดคเวลา*/
    document.getElementById(`time`).innerHTML = time;

    /*อัพเดตเลข6หลัก*/
    document.getElementById(`color`).innerHTML = color;
  }

  window.onload = function() {
    /* อัพทุกวิ*/
    displayHexClock();
    setInterval(displayHexClock, 1000);
  };
})();

