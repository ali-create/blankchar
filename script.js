let copyText = document.getElementById("hidden");
copyText.classList.add(".hide");
document.querySelector(".btn").addEventListener("click", function () {
  copyText.classList.remove(".hide");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyText.classList.add(".hide");
  alert("Copied");
});
