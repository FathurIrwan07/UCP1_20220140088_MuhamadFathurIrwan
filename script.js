function showAlert() {
  alert("Muhamad Fathur Irwan, NIM : 20220140088");
}

function updateGreetings() {
  var today = new Date();
  var currentHour = today.getHours();
  var greetingsElement = document.getElementById("greetings");
  var currentTimeElement = document.getElementById("current-time");
  var greetings = "";

  if (currentHour < 12) {
    greetings = "Selamat Pagi Manis! ";
  } else if (currentHour < 18) {
    greetings = "Selamat Siang Manis!";
  } else if (currentHour < 20) {
    greetings = "Selamat Sore Manis!";
  } else {
    greetings = "Selamat Malam Manis!";
  }

  greetingsElement.innerText = greetings;
  currentTimeElement.innerText =
    "Waktu Sekarang: " +
    today.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });
}

updateGreetings();
setInterval(updateGreetings, 1000);

// Tambahkan JavaScript ini untuk membuat slider bekerja
var slideIndex = 0;
var slides = document.querySelectorAll(".card");
var carousel = document.querySelector(".carousel");

function showSlide() {
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  var offset = -slideIndex * 100; // Hitung offset berdasarkan indeks slide
  carousel.style.transform = "translateX(" + offset + "%)";
}

function nextSlide() {
  slideIndex++;
  showSlide();
}

function prevSlide() {
  slideIndex--;
  showSlide();
}

showSlide();
