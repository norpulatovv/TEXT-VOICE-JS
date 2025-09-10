const textInput = document.getElementById("text");
const voiceList = document.getElementById("voiceList");
const speakBtn = document.getElementById("speakBtn");

let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
  voiceList.innerHTML = "";
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceList.appendChild(option);
  });
}

speechSynthesis.onvoiceschanged = loadVoices;

speakBtn.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(textInput.value);
  utterance.voice = voices[voiceList.value];
  speechSynthesis.speak(utterance);
});
