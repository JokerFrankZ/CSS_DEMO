const cube = document.querySelector(".cube-box");
const text = document.createElement("span");
cube.appendChild(text);
setInterval(() => {
  let date = new Date();
  text.textContent = `${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`;
}, 1000);
