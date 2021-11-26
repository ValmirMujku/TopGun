// Validimi per length te inputave
const validateLenght = (element, minLength) => {
  var span = element.parentNode.querySelector("span");

  if (element.value.length < minLength) {
    if (span.className.indexOf("no-display") !== -1) {
      span.classList.toggle("no-display");
    }
    span.textContent =
      "*" +
      element.id +
      " should be greater than " +
      minLength +
      " characters long.";
  } else {
    if (span.className.indexOf("no-display") === -1) {
      span.classList.toggle("no-display");
    }
  }
};

var inputs = document.getElementsByClassName("form-control");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function () {
    validateLenght(this, this.getAttribute("min"));
  });
}

// Validimi i FullName
(function validateFullName() {
  const inputFullName = document.getElementById("FullName");
  const spanFullName = document.getElementById("spanFullName");

  inputFullName.addEventListener("keyup", () => {
    if (/\d/.test(inputFullName.value) === true) {
      if (spanFullName.className.indexOf("no-display") !== -1) {
        spanFullName.classList.toggle("no-display");
      }
      spanFullName.textContent = `*Full Name should contains only letters`;
    } else {
      if (spanFullName.className.indexOf("no-display") === -1) {
        spanFullName.classList.toggle("no-display");
      }
    }
  });
})();

// Validimi i passwordit te njejte
(function samePassword() {
  const psw1 = document.getElementById("Password");
  const psw2 = document.getElementById("ConfirmPassword");

  const spanConfrimPsw = document.getElementById("confrimPswSpan");

  psw2.addEventListener("keyup", () => {
    if (psw1.value !== psw2.value) {
      if (spanConfrimPsw.className.indexOf("no-display") !== -1) {
        spanConfrimPsw.classList.toggle("no-display");
      }
      spanConfrimPsw.textContent = `*Password is not the same`;
    } else {
      if (spanConfrimPsw.className.indexOf("no-display") === -1) {
        spanConfrimPsw.classList.toggle("no-display");
      }
    }
  });
})();

(function validateAge() {
  const inputAge = document.getElementById("Age");
  const spanAge = document.getElementById("spanAge");
  inputAge.addEventListener("keyup", () => {
    if (inputAge.value < 18 || inputAge.value > 65) {
      if (spanAge.className.indexOf("no-display") !== -1) {
        spanAge.classList.toggle("no-display");
      }
      spanAge.textContent = `*Aget between 18-65`;
    } else {
      if (spanAge.className.indexOf("no-display") === -1) {
        spanAge.classList.toggle("no-display");
      }
    }
  });
})();

// Validimi i Email
(function validateEmail() {
  const inputEmail = document.getElementById("email");
  const spanEmail = document.getElementById("spanEmail");

  inputEmail.addEventListener("keyup", () => {
    function validateEmail(g) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(g).toLowerCase());
    }
    var emailvalidate = validateEmail(inputEmail.value);

    if (emailvalidate === false) {
      if (spanEmail.className.indexOf("no-display") !== -1) {
        spanEmail.classList.toggle("no-display");
      }
      spanEmail.textContent = `*Wrong email format`;
    } else {
      if (spanEmail.className.indexOf("no-display") === -1) {
        spanEmail.classList.toggle("no-display");
      }
    }
  });
})();

const getNullResults = () => {
  const allInputs = document
    .getElementById("signInForma")
    .getElementsByClassName("form-control");
  var count = 0;

  for (var i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value == "") {
      count++;
    }
  }

  if (count == 0) {
    return true;
  } else {
    return false;
  }
};

const submit_btn = document.querySelector("#submitbtn");
var allSpan = document.getElementsByClassName("validation-error");

submit_btn.addEventListener("click", (e) => {
  const terms_cond = document.getElementById("inlineCheckDefault");
  var count = 0;

  for (var i = 0; i < allSpan.length; i++) {
    if (allSpan[i].className.indexOf("no-display") === -1) {
      count++;
    }
  }

  console.log(count);
  console.log(getNullResults());

  if (count == 0 && terms_cond.checked === true && getNullResults() === true) {
    window.location.href = `FormSubmitted.html`;
    e.preventDefault();
  }
});
