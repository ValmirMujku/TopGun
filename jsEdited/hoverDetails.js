// const getAllSpan = document.querySelectorAll('span');

//Hover mbi produkte per details
const getAllSpan = document
  .getElementById("completeGallery")
  .getElementsByTagName("span");

for (let i = 0; i < getAllSpan.length; i++) {
  let elementi = document.getElementById(`btnGun${i}`);

  let div1 = document.getElementById(`gun${i}`);
  let div2 = document.getElementById(`gun${i}Details`);

  getAllSpan[i].addEventListener("mouseover", (e) => {
    div1.style.display = "none";
    div2.style.display = "";
  });

  getAllSpan[i].addEventListener("mouseout", (e) => {
    div1.style.display = "";
    div2.style.display = "none";
  });
}
