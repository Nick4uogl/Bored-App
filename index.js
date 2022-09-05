import activities from "./data.js"


document.getElementById("get-activity").addEventListener("click", function () {
  document.getElementById("activity").textContent = activities[Math.floor(Math.random() * activities.length)]
  document.getElementById("title").textContent = "🦾 Зроби це !🦿"
  document.querySelector('.colored').style.cssText = gradientArray[Math.floor(Math.random() * gradientArray.length)]
})


const gradientArray = [
  `background: #ee9ca7;background: -webkit-linear-gradient(to right, #ee9ca7, #ffdde1);background: linear-gradient(to right, #ee9ca7, #ffdde1)`,
  `background: #2193b0;background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);background: linear-gradient(to right, #6dd5ed, #2193b0);`,
  `background: #C6FFDD;background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);`,
  `background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
  `background: #12c2e9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f64f59, #c471ed, #12c2e9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f64f59, #c471ed, #12c2e9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
  `background: #b92b27;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1565C0, #b92b27);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1565C0, #b92b27); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
  `background: #2980B9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
  `background: #FF0099;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #493240, #FF0099);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #493240, #FF0099); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
  `background: #aa4b6b;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #3b8d99, #6b6b83, #aa4b6b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
  `background: #8E2DE2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */`,
  `background: #1f4037;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #99f2c8, #1f4037);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #99f2c8, #1f4037); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  `
]