const deg = 6;
const hr = document.querySelector('.clock-1 #hr');
const mn = document.querySelector('.clock-1 #mn');
const sc = document.querySelector('.clock-1 #sc');
const time_clock_2 = document.querySelector('.clock-2 .hour h1');


setInterval(() => {
  let date = new Date();

  let hh = date.getHours() * 30;
  let mm = date.getMinutes() * deg;
  let ss = date.getSeconds() * deg;

  hr.style.transform = `rotate(${hh + mm/12}deg)`;
  mn.style.transform = `rotate(${mm}deg)`;
  sc.style.transform = `rotate(${ss}deg)`;
  time_clock_2.textContent = `${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}:${date.getSeconds()<10?'0' + date.getSeconds():date.getSeconds()}`
})