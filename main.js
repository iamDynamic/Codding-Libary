var py = document.getElementById("py");
var hcj = document.getElementById("hcj");
var hcr = document.getElementById("hcr");
var c = document.getElementById("c");

hcj.addEventListener("click", () => {
  location.href = `/index.html`;
});
py.addEventListener("click", () => {
  location.href = "/index.html?id=550e7812-90d1-45d2-a629-9b1511589de3";
});
hcr.addEventListener("click",()=>{
    location.href = "/index.html?id=289322ac-b636-4147-a094-701bdd8ddbf2"
})
c.addEventListener("click",()=>{
    location.href = "/index.html?id=1112"
})
function getParameter(x) {
  params = window.location.href.split("?")[1].split("&");
  for (i = 0; i < params.length; i++) {
    // ["id","example"]
    e = params[i].split("=");
    if (e[0] == x) {
      return e[1];
    }
  }
}
var id = getParameter("id");

if (id === "550e7812-90d1-45d2-a629-9b1511589de3") {
  var main = document.querySelector("main");

  main.innerHTML = `
    <article>
         <div class="apps">
         <img width="200px" src="x.avif" alt="">
         <h1>2 in 1 app</h1>
         <p>its is alarm and stopwatcch</p>
         <a href="https://github.com/iamDynamic/3-in-1-apps">visit</a>
      </div>
      <div class="apps">
        <img src="download.png" alt="">
        <h1>dowload youtube video mp3</h1>
        <p>in python </p>
        <a href="https://github.com/iamDynamic/youtube-dowload-video-python-">visit</a>
      </div>
      <div class="apps">
         <img src="download.jpeg" alt="">
         <h1>rock paper siccor</h1>
         <p>in python</p>
         <a href="https://github.com/iamDynamic/Rock--Paper--Scissors-Game">visit</a>
       </div>  
       <div class="apps">
          <img src="download (1).jpeg" alt="">
          <h1>timer</h1>
          <p>timer in py</p>
          <a href="https://github.com/iamDynamic/timer">visit</a>
       </div>
    </article>
    <article>
    <div class="apps">
            <img src="download.webp" alt=""><br>
            <h1>naruto characters</h1>
            <br>
            <p>api</p>
            <br>
            <a href="https://github.com/iamDynamic/naruto-character-info">visit</a>
         </div>
       <div class="apps">
         <img src="download (2).jpeg" alt="">
         <h1>todo list</h1>
         <p>python</p>
         <a href="https://github.com/iamDynamic/todo-list-python">visit</a>
      </div>
      <div class="apps">
        <img src="download (3).jpeg" alt="">
        <h1>weather api</h1>
        <p>python</p>
        <a href="https://github.com/iamDynamic/weather-api-with-py">visit</a>
      </div>
      <div class="apps">
        <img src="download (4).jpeg" alt="">
        <h1>word game</h1>
        <p>python</p>
        <a href="https://github.com/iamDynamic/word-game-python-">visit</a>
     </div>
     <div class="apps">
      <img src="download (5).jpeg" alt="">
      <h1>yalla shout</h1>
      <p>python</p>
      <a href=""https://github.com/iamDynamic/Yalla_Shout_Api>visit</a>
     </div>
      <div class="apps">
         <img width="200px" src="https://roppongi.fr/wp-content/uploads/Naruto-de-Masashi-Kishimoto.jpg" alt="">
         <h1>naruto api</h1>
         <br>
         <p>the api made by me</p>
         <br><a href="https://naruto-api-five.vercel.app/">visit</a>
      </div>
    </article>
 
    `;
}
if(id === "289322ac-b636-4147-a094-701bdd8ddbf2"){
  var main = document.querySelector("main");

    main.innerHTML = 
    `
    <article>
     <div class="apps">
       <img src="download (6).jpeg" alt="">
       <h1>react solar ball</h1>
       <p>solar ball is youtube </p>
       <a href="https://github.com/iamDynamic/SolarBalls--react-">visit</a>
     </div>
    </article>
    `
}
if(id === "1112"){
  var main = document.querySelector("main");
 main.innerHTML = 
 `
 <article>
   <div class="apps">
   <img src="download (1).png" alt="">
   <br>
   <a href="https://github.com/iamDynamic/apps">visit</a>
</div>
 </article>
 `
}