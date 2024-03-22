const shareBtn = document.getElementById("share-btn");
const profile = document.querySelector(".footer-container");
const share = document.querySelector(".share-container");

shareBtn.addEventListener("click", () => {
  profile.style.display = "none";
  share.classList.remove("hide-container");
});
