img="";
status="";
objects=[];

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
     video=createCapture(VIDEO);
     video.hide();
}

function take_snapshot() {
  save('myfilterimage.png');
}

function draw() {
    background(rgb(26,51,45));
    fill('#F90093');
    stroke('#F90093');
}

Webcam.set({
  width:360,
  height:250,
  image_format:'png',
  png_quality:90,
});

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}