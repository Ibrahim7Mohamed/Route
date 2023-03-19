let submitBtn = document.getElementById("submitBtn");
let submitBtn1 = document.getElementById("submitBtn1");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let ageInput = document.getElementById("ageInput");
let passwordInput = document.getElementById("passwordInput");
let repasswordInput = document.getElementById("repasswordInput");
let NameErr = document.getElementById("NameErr");
let MailErr = document.getElementById("MailErr");
let numberErr = document.getElementById("numberErr");
let AgeErr = document.getElementById("AgeErr");
let passErr = document.getElementById("passErr");
let REpassErr = document.getElementById("REpassErr");

$(".nav-menu").animate({ left: -$(".nav-tab").innerWidth() }, 0)
$(".nav-menu i.fa-bars").click(function () {
    if ($(".nav-menu").css("left") == "0px") {
        let NavWidth = $(".nav-menu .nav-tab").outerWidth();
        $(".nav-menu").animate({ left: -NavWidth, }, 750);
        $(".fa-bars").addClass("fa-align-justify");
        $(".fa-bars").removeClass("fa-x");
    } else {
        $(".nav-menu").animate({ left: 0, }, 750);
        $(".fa-bars").removeClass("fa-align-justify");
        $(".fa-bars").addClass("fa-x");
    }
})


function inputsValidation() {
  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    repasswordValidation()
  ) {
    submitBtn1.classList.remove("d-none");
    submitBtn.classList.add("d-none");
  }else{
    submitBtn1.classList.add("d-none");
    submitBtn.classList.remove("d-none");
  }
}

function nameValidate() {
  if (nameInput) {
    if (nameValidation()) {
      NameErr.classList.replace("d-block", "d-none");
    } else {
      NameErr.classList.replace("d-none", "d-block");
    }
  }
}

function mailValidate() {
  if (emailInput) {
    if (emailValidation()) {
      MailErr.classList.replace("d-block", "d-none");
    } else {
      MailErr.classList.replace("d-none", "d-block");
    }
  }
}

function PhoneValidate() {
  if (phoneInput) {
    if (phoneValidation()) {
      numberErr.classList.replace("d-block", "d-none");
    } else {
      numberErr.classList.replace("d-none", "d-block");
    }
  }
}

function ageValidate() {
  if (ageInput) {
    if (ageValidation()) {
      AgeErr.classList.replace("d-block", "d-none");
    } else {
      AgeErr.classList.replace("d-none", "d-block");
    }
  }
}

function passValidate() {
  if (passwordInput) {
    if (passwordValidation()) {
      passErr.classList.replace("d-block", "d-none");
    } else {
      passErr.classList.replace("d-none", "d-block");
    }
  }
}

function RePassValidate() {
  if (repasswordInput) {
    if (repasswordValidation()) {
      REpassErr.classList.replace("d-block", "d-none");
    } else {
      REpassErr.classList.replace("d-none", "d-block");
    }
  }
}

function nameValidation() {
  return /^[a-zA-Z ]+$/.test(nameInput.value);
}

function emailValidation() {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value);
}

function phoneValidation() {
  return /^01[0125][0-9]{8}$/.test(phoneInput.value);
}

function ageValidation() {
  return /^(1[89]|[2-9]\d)$/gm.test(ageInput.value);
}

function passwordValidation() {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm.test(passwordInput.value);
}

function repasswordValidation() {
  return (repasswordInput.value == passwordInput.value);
}
