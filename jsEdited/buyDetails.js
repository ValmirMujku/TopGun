var buyContent = document.getElementById("idBuyContent");

let getAllButons = document
  .getElementById("completeGallery")
  .getElementsByTagName("button");

let showPrice = document
  .getElementById("PayForma")
  .getElementsByTagName("h4")[0];

for (let i = 0; i < getAllButons.length; i++) {
  getAllButons[i].addEventListener("click", (e) => {
    buyContent.style.display = "block";
    // let price = document.getElementById(`gun${i}Details`).querySelector('h4');
    // let text = price[i].innerText;
    // console.log(text);

    let getPrice = document
      .getElementById(`gun${i}Details`)
      .getElementsByTagName("h4")[0];
    console.log();

    var text = document.createTextNode(getPrice.innerText);
    showPrice.appendChild(text);
    e.preventDefault();
  });
}

var btn = document.getElementById("buyBtn");

var span = document.getElementsByClassName("closeDiv")[0];

span.addEventListener("click", (e) => {
  buyContent.style.display = "none";
  showPrice.innerHTML = "";
  e.preventDefault();
});

window.onclick = function (event) {
  if (event.target == buyContent) {
    showPrice.innerHTML = "";
    buyContent.style.display = "none";
  }
};
