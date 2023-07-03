function spinImage() {
  var image = document.getElementById("arrow-image");
  var rotation = 0;
  var startTime = Date.now();
  var duration = 3000; 

  // Get the audio elements
  var spinSound = new Audio("sound/ES_Stick Spin - SFX Producer.mp3");
  var stopSound = new Audio("sound/ES_Kids Yeah 2 - SFX Producer.mp3");

  function rotate() {
    var currentTime = Date.now();
    var deltaTime = currentTime - startTime;

    rotation = (Math.random() * 360) * (deltaTime / duration);

    image.style.transform = "rotate(" + rotation + "deg)";

    if (deltaTime < duration) {
      requestAnimationFrame(rotate);
      // Play the spinning sound
      spinSound.play();
    } else {
      // Stop the spinning sound
      spinSound.pause();
      spinSound.currentTime = 0;

      // Play the stop sound
      stopSound.play();
    }
  }

  rotate();
}

var button = document.getElementById("spin-button");
button.addEventListener("click", spinImage);