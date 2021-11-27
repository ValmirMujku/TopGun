//Validimi i emri CC
(function validateFullName() {
  const inputFullName = document.getElementById("CardFullName");
  const spanFullName = document.getElementById("spanCreditCardFullName");

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

//Validimi i Credit Card Number
 
(function CcardNrValidation() {
  var CCnR = document.getElementById("CardNumberId");
  var CCsPan = document.getElementById("spanCreditCardNumber");

  //Libraria per Credit Card JS --> cleave.js
  var cleave = new Cleave(CCnR, {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
      //   console.log(type);
      CCnR.addEventListener("keyup", () => {
        if (type == "unknown") {
          if (CCsPan.className.indexOf("no-display") !== -1) {
            CCsPan.classList.toggle("no-display");
          }
          CCsPan.textContent = `*Uknown type of Card`;
        } else {
          if (CCsPan.className.indexOf("no-display") === -1) {
            CCsPan.classList.toggle("no-display");
          }
        }
      });
    },
  });
})();

//Validimi i Month
(function CcMonthValidation() {
  var CcInputMonth = document.getElementById("CardMonth");
  var spanMonth = document.getElementById("spanMonth");

  const getResult = () => {
    var months = 12;
    var count = 0;
    var nmString = "";
    for (var i = 1; i <= months; i++) {
      nmString = i.toString();
      if (CcInputMonth.value == nmString) {
        count++;
      }
    }
    return count;
  };
  getResult();


  CcInputMonth.addEventListener("keyup", () => {
    if (getResult() == 0) {
      if (spanMonth.className.indexOf("no-display") !== -1) {
        spanMonth.classList.toggle("no-display");
      }
      spanMonth.textContent = `*Month out of format(1-12)`;
    } else {
      if (spanMonth.className.indexOf("no-display") === -1) {
        spanMonth.classList.toggle("no-display");
      }
    }
  });
})();

// Validimi i CCYear
(function CCyEarValidation() {
  var ccYearInput = document.getElementById("CardYear");
  var spanYear = document.getElementById("spanYear");

  const getResult = () => {
    var d = new Date();
    var count = 0;

    var getNumberYear = Number(ccYearInput.value);
    var getActualYear = d.getFullYear();
    var results = getActualYear - getNumberYear;
    for (var i = 0; i < 5; i++) {
      if (results == i) {
        count++;
      }
    }
    return count;
  };
  getResult();

  ccYearInput.addEventListener("keyup", () => {
    if (getResult() == 0) {
      if (spanYear.className.indexOf("no-display") !== -1) {
        spanYear.classList.toggle("no-display");
      }
      spanYear.textContent = `*Expired or wrong Year`;
    } else {
      if (spanYear.className.indexOf("no-display") === -1) {
        spanYear.classList.toggle("no-display");
      }
    }
  });
})();

//CVV Validation

(function CVVvALIDATION() {
  var inputCVV = document.getElementById("CardCVV");
  var spanCVV = document.getElementById("spanCVV");

  inputCVV.addEventListener("keyup", () => {
    if (/\d/.test(inputCVV.value) === false || inputCVV.value.length != 3) {
      if (spanCVV.className.indexOf("no-display") !== -1) {
        spanCVV.classList.toggle("no-display");
      }
      spanCVV.textContent = `*CVV contains exactly 3 digits`;
    } else {
      if (spanCVV.className.indexOf("no-display") === -1) {
        spanCVV.classList.toggle("no-display");
      }
    }
  });
})();
