document.addEventListener("DOMContentLoaded", function () {
  const secretButton = document.createElement("button");
  secretButton.textContent = "Click for a surprise!";
  secretButton.style.marginTop = "20px";
  secretButton.style.padding = "10px 20px";
  secretButton.style.background = "#d6336c";
  secretButton.style.color = "white";
  secretButton.style.border = "none";
  secretButton.style.borderRadius = "6px";

  const secretMessage = document.createElement("p");
  secretMessage.textContent = "You’re the best thing that ever happened to me.";
  secretMessage.style.display = "none";

  secretButton.addEventListener("click", function () {
    secretMessage.style.display = "block";
    secretButton.style.display = "none";
  });

  const wishesSection = document.getElementById("wishes");
  wishesSection.appendChild(secretButton);
  wishesSection.appendChild(secretMessage);
});
