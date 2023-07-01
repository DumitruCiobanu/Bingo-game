// Function to rotate the image randomly
function spinImage() {
    var image = document.getElementById("wheel-image");
    var rotation = 0;
    var startTime = Date.now();
    var duration = 5000; // 5 seconds
    
    // Update the rotation angle every frame
    function rotate() {
      var currentTime = Date.now();
      var deltaTime = currentTime - startTime;
      
      // Calculate the new rotation angle randomly
      rotation = (Math.random() * 360) * (deltaTime / duration);
      
      // Apply the rotation transform to the image
      image.style.transform = "rotate(" + rotation + "deg)";
      
      // Keep rotating until the duration is reached
      if (deltaTime < duration) {
        requestAnimationFrame(rotate);
      }
    }
    
    // Start the rotation animation
    rotate();
  }
  
  // Add event listener to the button
  var button = document.getElementById("spin-button");
  button.addEventListener("click", spinImage);