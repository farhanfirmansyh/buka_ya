const nama = prompt("Halo nama kamu siapa?");
const p = document.getElementById('p');
const animasi = document.getElementById("animasi");

p.innerText = `Halo ${nama}, Coba tebak apa hayo?`;

setTimeout(() => {
  animasi.style.opacity = "1";
}, 500);
