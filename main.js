document.addEventListener("DOMContentLoaded", function () {
  const img = document.getElementById('mood-image');

  function setMoodImage(mood) {
    const moodImages = {
      happy: "https://cdn-icons-png.flaticon.com/512/742/742751.png",
      sad: "https://www.pngmart.com/files/19/Sad-Emoticon-Transparent-Background.png",
      neutral: "https://static-00.iconduck.com/assets.00/neutral-face-emoji-2048x1974-qdahu9yw.png"
    };

    if (moodImages[mood]) {
      img.src = moodImages[mood];
      console.log(`Mood set to: ${mood}`);
    }
  }

  if (annyang) {
    const commands = {
      'happy': () => setMoodImage('happy'),
      'sad': () => setMoodImage('sad'),
      'neutral': () => setMoodImage('neutral')
    };
    annyang.addCommands(commands);
    annyang.debug(); // optional: shows logs in console
    annyang.start();
    console.log("Annyang started");
  } else {
    console.error("Annyang not available");
  }
});
