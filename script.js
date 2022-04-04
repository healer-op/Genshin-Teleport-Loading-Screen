// _____         _         
// |  |  |___ ___| |___ ___ 
// |     | -_| .'| | -_|  _|
// |__|__|___|__,|_|___|_|  
//        github.com/healer-op
// Dark Mode
var audioElement = new Audio('https://github.com/healer-op/HealCloud/blob/main/mp3/Genshin%20Impact%20Teleport%20Sound%20Effect.mp3?raw=true');
(function () {
  window.addEventListener(
    "click",
    () => 
    document.documentElement.classList.toggle("dark"),
    false
  );

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const setting = localStorage.getItem("color-schema") || "auto";
  if (setting === "dark" || (prefersDark && setting !== "light"))
    document.documentElement.classList.toggle("dark", true);
})();

window.addEventListener('click', function() { audioElement.play() }, false);