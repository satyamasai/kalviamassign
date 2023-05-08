var dragValue;
function move() {
  var elements = document.querySelectorAll(".square");

  elements.forEach((element) => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      dragValue = element;
      document.onmousemove = function (e) {
        var x = e.pageX;
        var y = e.pageY;
        if (dragValue) {
          dragValue.style.left = x - 50 + "px";
          dragValue.style.top = y - 40 + "px";
          //  console.log(dragValue)
        }
      };
    });
  });
}

document.onmouseup = function (e) {
  dragValue = null;
};