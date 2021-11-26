const text = document.querySelector("#text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const animation = anime.timeline({
  targets: "#text span",
  easeing: "easeInOutExpo",
  loop: true,
});

animation.add({
  rotate: function () {
    return anime.random(-300, 300);
  },
  translateX: function () {
    return anime.random(-500, 500);
  },
  translateY: function () {
    return anime.random(-500, 500);
  },
  duration: 50000,
  delay: anime.stagger(200),
});
