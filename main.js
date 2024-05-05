// main.js

document.addEventListener("DOMContentLoaded", function() {
  const likeGlyph = document.getElementById("like-glyph");
  const emptyHeart = document.querySelector(".like-glyph-empty");
  const fullHeart = document.querySelector(".like-glyph-full");
  const modal = document.getElementById("modal");
  const modalMessage = document.querySelector(".modal-message");

  modal.classList.add("hidden");

  likeGlyph.addEventListener("click", function() {
    mimicServerCall()
      .then(() => {
        emptyHeart.classList.add("hidden");
        fullHeart.classList.remove("hidden", "activated-heart");
        setTimeout(() => {
          fullHeart.classList.add("hidden");
        }, 3000);
      })
      .catch(() => {
        modalMessage.textContent = "Error: Server request failed.";
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  });

  fullHeart.addEventListener("click", function() {
    emptyHeart.classList.remove("hidden");
    fullHeart.classList.add("hidden", "activated-heart");
  });
});

function mimicServerCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() < 0.5;
      if (success) {
        resolve("Success");
      } else {
        reject("Error");
      }
    }, 1000);
  });
}
