document.addEventListener("DOMContentLoaded", function() {
const wheel = document.getElementById("wheel");
  const btn = document.getElementById("btn");
  const click = document.getElementById("clickSound");
  const spin = document.getElementById("spinSound");
  const cheer = document.getElementById("cheerSound");
 const creeking = document.getElementById("creekingSound");
 const winDisplay = document.getElementById("winDisplay");
 let isClicked;
 btn.className = "";
const canvas = document.getElementById("canvas");
const loaderCont = document.getElementById("loadCont");

setTimeout(()=>{
  loaderCont.innerHTML = "";
},2000)



function initializePixi(){
const app = new PIXI.Application({
    width: canvas.width,  
    height: canvas.height, 
    view: canvas,         
    backgroundColor: 0x000000, 
    resolution: window.devicePixelRatio,
});

const backgroundTexture = PIXI.Texture.from("./assets/showdown/header.webp");
const texture1 = PIXI.Texture.from("./assets/showdown/showdown-off.webp");
const texture2 = PIXI.Texture.from("./assets/showdown/vegas_2x.webp");
const texture3 = PIXI.Texture.from("./assets/showdown/slots_2x.webp");
const texture4 = PIXI.Texture.from("./assets/showdown/s@2x.webp");
const texture5 = PIXI.Texture.from("./assets/showdown/h@2x.webp");
const texture6 = PIXI.Texture.from("./assets/showdown/o-1@2x.webp");
const texture7 = PIXI.Texture.from("./assets/showdown/w-1_2x.webp");
const texture8 = PIXI.Texture.from("./assets/showdown/d@2x.webp");
const texture9 = PIXI.Texture.from("./assets/showdown/o-2@2x.webp");
const texture10 = PIXI.Texture.from("./assets/showdown/w-2_2x.webp");
const texture11 = PIXI.Texture.from("./assets/showdown/n@2x.webp");
const texture12 = PIXI.Texture.from("./assets/showdown/bolt-off@2x.webp");
const texture13 = PIXI.Texture.from("./assets/showdown/bolt@2x.webp");
const texture14 = PIXI.Texture.from("./assets/showdown/must_drop.webp");
const backgroundSprite = new PIXI.Sprite(backgroundTexture);
const sprite1 = new PIXI.Sprite(texture1);
const sprite2 = new PIXI.Sprite(texture2);
const sprite3 = new PIXI.Sprite(texture3);
const sprite4 = new PIXI.Sprite(texture4);
const sprite5 = new PIXI.Sprite(texture5);
const sprite6 = new PIXI.Sprite(texture6);
const sprite7 = new PIXI.Sprite(texture7);
const sprite8 = new PIXI.Sprite(texture8);
const sprite9 = new PIXI.Sprite(texture9);
const sprite10 = new PIXI.Sprite(texture10);
const sprite11 = new PIXI.Sprite(texture11);
const sprite12 = new PIXI.Sprite(texture12);
const sprite13 = new PIXI.Sprite(texture13);
const sprite14 = new PIXI.Sprite(texture14);
backgroundSprite.width = app.screen.width;
sprite1.width = app.screen.width/1.1;
sprite1.height = app.screen.height/1.3;
sprite1.anchor.set(0.5);
sprite1.position.set(app.screen.width / 2, app.screen.height / 2);

sprite2.width = app.screen.width/2.3;
sprite2.height = app.screen.height/3;
sprite2.anchor.set(0.5);
sprite2.position.set(app.screen.width / 2, app.screen.height / 2);
sprite2.y = app.screen.height/4
sprite2.x = app.screen.height/1.6

sprite3.width = app.screen.width/2.7;
sprite3.height = app.screen.height/3.5;
sprite3.anchor.set(0.5);
sprite3.position.set(app.screen.width / 2, app.screen.height / 2);
sprite3.y = app.screen.height/4.1
sprite3.x = app.screen.height/0.69

sprite4.width = app.screen.width/3.7;
sprite4.height = app.screen.height/1.05;
sprite4.anchor.set(0.5);
sprite4.position.set(app.screen.width / 2, app.screen.height / 2);
sprite4.y = app.screen.height/1.7
sprite4.x = app.screen.height/4.5

sprite5.width = app.screen.width/3.7;
sprite5.height = app.screen.height/1.05;
sprite5.anchor.set(0.5);
sprite5.position.set(app.screen.width / 2, app.screen.height / 2);
sprite5.y = app.screen.height/1.7
sprite5.x = app.screen.height/2.2

sprite6.width = app.screen.width/8;
sprite6.height = app.screen.height/1.05;
sprite6.anchor.set(0.5);
sprite6.position.set(app.screen.width / 2, app.screen.height / 2);
sprite6.y = app.screen.height/1.7
sprite6.x = app.screen.height/1.6

sprite7.width = app.screen.width/3.8;
sprite7.height = app.screen.height/1.09;
sprite7.anchor.set(0.5);
sprite7.position.set(app.screen.width / 2, app.screen.height / 2);
sprite7.y = app.screen.height/1.8
sprite7.x = app.screen.height/1.13

sprite8.width = app.screen.width/3.8;
sprite8.height = app.screen.height/1.2;
sprite8.anchor.set(0.5);
sprite8.position.set(app.screen.width / 2, app.screen.height / 2);
sprite8.y = app.screen.height/1.9
sprite8.x = app.screen.height/0.87

sprite9.width = app.screen.width/3.8;
sprite9.height = app.screen.height/1.15;
sprite9.anchor.set(0.5);
sprite9.position.set(app.screen.width / 2, app.screen.height / 2);
sprite9.y = app.screen.height/1.85
sprite9.x = app.screen.height/0.745

sprite10.width = app.screen.width/3.7;
sprite10.height = app.screen.height/1.13;
sprite10.anchor.set(0.5);
sprite10.position.set(app.screen.width / 2, app.screen.height / 2);
sprite10.y = app.screen.height/1.75
sprite10.x = app.screen.height/0.65

sprite11.width = app.screen.width/3.7;
sprite11.height = app.screen.height/1.05;
sprite11.anchor.set(0.5);
sprite11.position.set(app.screen.width / 2, app.screen.height / 2);
sprite11.y = app.screen.height/1.7
sprite11.x = app.screen.height/0.56

sprite12.anchor.set(0.5);
sprite12.position.set(app.screen.width / 2, app.screen.height / 2);
sprite12.y = app.screen.height/4.4
sprite12.x = app.screen.height/0.96
sprite12.scale.set(0.23)

sprite13.anchor.set(0.5);
sprite13.position.set(app.screen.width / 2, app.screen.height / 2);
sprite13.y = app.screen.height/4.4
sprite13.x = app.screen.height/0.96
sprite13.scale.set(0.35)

sprite14.width = app.screen.width/1.8; 
sprite14.height = app.screen.height/2; 
sprite14.anchor.set(0.5);
sprite14.position.set(app.screen.width / 2, app.screen.height / 2);
sprite14.y = app.screen.height/1.2
app.stage.addChild(backgroundSprite);
app.stage.addChild(sprite1);
app.stage.addChild(sprite4);
app.stage.addChild(sprite5);
app.stage.addChild(sprite6);
app.stage.addChild(sprite7);
app.stage.addChild(sprite8);
app.stage.addChild(sprite9);
app.stage.addChild(sprite10);
app.stage.addChild(sprite11);
app.stage.addChild(sprite2);
app.stage.addChild(sprite3);
app.stage.addChild(sprite12);
app.stage.addChild(sprite13);
app.stage.addChild(sprite14);
app.renderer.render(app.stage);
sprite2.alpha = 0;
sprite3.alpha = 0;
sprite4.alpha = 0;
sprite5.alpha = 0;
sprite6.alpha = 0;
sprite7.alpha = 0;
sprite8.alpha = 0;
sprite9.alpha = 0;
sprite10.alpha = 0;
sprite11.alpha = 0;
sprite12.alpha = 0;
sprite13.alpha = 0;
sprite14.alpha = 0;
setTimeout(animatePinkStable,3000)
setTimeout(animatePink,3400)
setTimeout(animatePinkStable,3800)
setTimeout(animatePink,4000)
setTimeout(animatePinkStable,4200)
setTimeout(function(){
app.ticker.add(animateS)
},3500)
setTimeout(function(){
app.ticker.add(animateH)
},3800)
setTimeout(function(){
app.ticker.add(animateO)
},4100)

setTimeout(function () {
    app.ticker.add(animateLight);
    setInterval(function () {
        app.ticker.remove(animateLight);
        setTimeout(function () {
            app.ticker.add(animateLight);
        }, 3000);
    }, 10000);
}, 4200);
setTimeout(function(){
app.ticker.add(animateW)
},4400)
setTimeout(function(){
app.ticker.add(animateD)
},4700)
setTimeout(function(){
app.ticker.add(animateOo)
},5000)
setTimeout(function(){
app.ticker.add(animateWw)
},5300)
setTimeout(function(){
app.ticker.add(animateN)
},5600)
setTimeout(animatDropStable,6300)
setTimeout(animatDrop,6500)
setTimeout(animatDropStable,6700)

function animatePink(){
  sprite2.alpha = 0
  sprite3.alpha = 0
}
function animatePinkStable(){
  sprite2.alpha = 1
  sprite3.alpha = 1
}
function animateS(){
  sprite4.alpha = 1;
}
function animateH(){
  sprite5.alpha = 1;
}
function animateO(){
  sprite6.alpha = 1;
}
function animateW(){
  sprite7.alpha = 1;
}
function animateD(){
  sprite8.alpha = 1;
}
function animateOo(){
  sprite9.alpha = 1;
}
function animateWw(){
  sprite10.alpha = 1;
}
function animateN(){
  sprite11.alpha = 1;
}
let delta = 1;
  let omega = 0;
function animateLight(){
  delta += 0.75
  omega += 0.75
  sprite12.alpha = Math.sin(omega)
  sprite13.alpha = Math.sin(delta)
}

function animatDrop(){
  sprite14.alpha = 0
}

function animatDropStable(){
  sprite14.alpha = 1
}
};


  
 
document.addEventListener('click', function(event) {
  if (event.target.closest('.winCard button')) {
    removeWin();
  }
});

  
function displayWin(num) {
  cheer.play();
  winDisplay.innerHTML = `<div class="winCardCont">
    <div id="winCard" class="winCard">
      <div class="avatarCont">
        <img class="avatar" src="./assets/avatars/position${num}.webp">
        <img class="winMarker" src="./assets/wheel/marker.webp">
      </div>
      <h1>Congratulations</h1>
      <p>You have just received POSITION ${num} !!</p>
      <button>Got It 👍</button>
    </div>
  </div>
`;
}

function removeWin() {
  btn.className ="";
  cheer.pause();
  winDisplay.innerHTML = "";
  wheel.className = `rot-pos-${
Math.floor(Math.random() * 4) + 1
  }-0`
}

  
  function getApiPostition () {
    fetch('./api.json')
    .then(response => response.json())
    .then(data => {
     let position = data.POSITION
     handleSpin(position)
  })
  .catch(error => console.error('Error fetching JSON:', error));
  }

  
function handleSpin (pos) {
    const randomDuration = Math.floor(Math.random() * (10000 - 3000 + 1) + 3000);
    wheel.className = "";
    wheel.classList.add("rotating");
    wheel.style.animationDuration = randomDuration + "ms";
    setTimeout(function() {
      spin.pause();
      wheel.classList.remove("rotating");
      const randomPosition = Math.floor(Math.random() * 3) + 1;
      wheel.className = "rot-pos-"+randomDuration+"-1";
      creeking.play();
  
function validPosSet(position){

function finalPosition(num){
wheel.className = "rot-pos-"+num+"-"+randomPosition;
setTimeout(function(){
displayWin(num);
isClicked = false;
},6000)

}

      switch(position){
        case "1" :
         finalPosition(1)
         break;
        case "2" :
         finalPosition(2)
         break;
        case "3" :
         finalPosition(3)
         break;
        case "4" :
         finalPosition(4)
         break;
         default:
         wheel.className = "rot-pos-"+randomPosition+ "-0";
         break;
      }
      }
      setTimeout(function(){
         validPosSet(pos)
      },1000)
    }, randomDuration);
}

function handleBtnClicked(){
isClicked = true;
    btn.className = "spinbtn";
    click.play();
    spin.play();
    getApiPostition()
}

  btn.addEventListener("click", function() {
    !isClicked && handleBtnClicked()
  });

  initializePixi();

});


