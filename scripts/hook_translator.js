import { initWithVideoElement, TranslatorAi } from 'ai-video-subtitle-translator';

var videoElement = document.querySelector("video");
console.log(videoElement)
var currentAiEnginee = new TranslatorAi({sourceLanguage: "fr", targetLanguage: "en"});
console.log(currentAiEnginee)

// Add content to the div
var stickyDiv = document.querySelector("#stickyDiv")
console.log("sticky:", stickyDiv);
if (stickyDiv === undefined || stickyDiv === null) {
  stickyDiv = document.createElement("div");
  stickyDiv.id = "stickyDiv"
    
  // Add content to the div
  stickyDiv.textContent = "I am a Sticky Div at the Bottom!";
  
  // Apply styles to make it sticky
  stickyDiv.style.position = "sticky";
  stickyDiv.style.bottom = "10px"; // Stickiness offset from the bottom
  stickyDiv.style.width = "100%";
  stickyDiv.style.backgroundColor = "green";
  stickyDiv.style.textAlign = "center";
  stickyDiv.style.padding = "10px";
  stickyDiv.style.zIndex = "1000";
  
  // Add the sticky div to the DOM
  videoElement.parentElement.append(stickyDiv);

}

initWithVideoElement(videoElement, stickyDiv, currentAiEnginee);


