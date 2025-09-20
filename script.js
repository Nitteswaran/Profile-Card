document.addEventListener("DOMContentLoaded", () => {
  const text = "Software Engineer, Malaysia";
  const p = document.querySelector(".front p");
  p.textContent = "";  // clears text
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      p.textContent += text.charAt(i); // keeps spaces properly
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
});



document.querySelectorAll(".back a").forEach(icon => {
  icon.addEventListener("mouseenter", () => {
    icon.style.transform = "scale(1.2)";
    icon.style.boxShadow = "0 8px 15px rgba(0,0,0,0.3)";
  });
  icon.addEventListener("mouseleave", () => {
    icon.style.transform = "scale(1)";
    icon.style.boxShadow = "0 5px 10px rgba(0,0,0,0.2)";
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const followBtn = document.querySelector(".back button");

    function updateFollowBtn(isFollowing) {
        if (isFollowing) {
            followBtn.innerText = "Following";
            followBtn.style.background = "green";
            followBtn.style.boxShadow = "0 5px 10px rgba(12, 243, 16, 0.3)";
        }
        else {
            followBtn.innerText = "Follow";
            followBtn.style.background = "red";
            followBtn.style.boxShadow = "0 5px 10px rgba(231, 3, 3, 0.3)";
        }
    }

    const savedState = localStorage.getItem("isFollowing") === "true";
    updateFollowBtn(savedState);

    followBtn.addEventListener("click", () => {
        const newState = followBtn.innerText !== "Following";
        updateFollowBtn(newState);
        localStorage.setItem("isFollowing", newState);
    });
});






