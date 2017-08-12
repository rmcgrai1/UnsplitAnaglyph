function createContext(doAppend, width, height) {
  var $canvas = $("<canvas>");

  if(doAppend) {
    $canvas.appendTo(document.body);
  }
  ctx = $canvas[0].getContext("2d");

  ctx.setSize = function(width, height) {
    this.width = this.canvas.width =width;
    this.height = this.canvas.height = height;
  }

  if(!!width && !!height) {
    ctx.setSize(width, height);
  }

  return ctx;
}

var leftCtx, rightCtx;
leftCtx = createContext(true);
rightCtx = createContext(true);

function splitImage(img) {
  var width, height;
  width = img.width;
  height = img.height;

  leftCtx.setSize(width, height);
  rightCtx.setSize(width, height);

  var ctx = createContext(false, width, height);
  ctx.drawImage(img, 0, 0);

  leftCtx.drawImage(img, 0, 0);
  rightCtx.drawImage(img, 0, 0);

  var leftData = leftCtx.getImageData(0, 0, width, height);
  var rightData = rightCtx.getImageData(0, 0, width, height);
}

$(document).ready(function() {

  $("<img>", {src: "img/0.jpg"}).load(function() {
    splitImage(this);
  });
});
