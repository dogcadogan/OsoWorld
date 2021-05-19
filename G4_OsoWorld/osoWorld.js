/*

ixd310s21
p2
point and click game
game name : oso's world
Dogca and yasemin

*/
var debug = false;

let imgOpeningPlay, imgOpeningScreen, imgStory;
let imgLvl1_Bkg, imgLvl1_Cake, imgLvl1_ClueSign;
let imgLvl1_MapIcon, imgLvl1_Map_Popup, imgLvl1_map_exitButon, imgLvl1_map_lvlCircle;
let imgMouse_speech1, imgMouse_speech2, imgMouse_speech3, imgOsoSpeech_mouse1, imgOsoSpeech_mouse2, imgOsoSpeech_mouse3;
let imgOsoSpeech_scarecrow, imgScarecrowSpeech;
let imgLvl1_puzzlePopup, imgLvl1_puzzleExitButton, imgLvl1_puzzleDifferenceSign, imgLvl1_puzzleDifferenceCake, imgLvl1_puzzleDifferenceButterfly;
let imgLvl1_puzzleSymbol1, imgLvl1_puzzleSymbol2, imgLvl1_puzzleSymbol3, imgLvl1_hiddenElement;
let imgLvl2_Bkg, imgLvl2_transitionButton, imgLvl2_transitionButton2;
let currentScene;
let bkgSound;


var mouseDia;
var osoDia;
//var scarecrowDia;
//var osoDia;

let b1x = 1000; // Button 1 x-coordinate
let b1y = 650; // Button 1 y-coordinate
let bdiameter = 500; // Button diameter

let b2x = 450; // Cake button x- coordinate
let b2y = 700; // Cake button y- coordinate
let bdiameter2 = 80;  // Button diameter

let b3x = 50; // map button x- coordinate
let b3y = 50; // map button y- coordinate
let bdiameter3 = 80;  // Button diameter

let b4x = 400; // mouseOsoDia button x- coordinate
let b4y = 700; // mouseOsoDia button y- coordinate
let bdiameter4 = 400;  // Button diameter

let b5x = 1480; // mapExit /puzzleExit button x- coordinate
let b5y = 200; // mapExit /puzzleExit button y- coordinate
let bdiameter5 = 80;  // Button diameter

let b6x = 1800; // scarecrowOsoDia  button x- coordinate
let b6y = 500; // scarecrowOsoDia button y- coordinate
let bdiameter6 = 400;  // Button diameter

let b7x = 1400; // puzzlePopup   button x- coordinate
let b7y = 750; // puzzlePopup button y- coordinate
let bdiameter7 = 80;  // Button diameter

let b8x = 950; // differenceSign   button x- coordinate
let b8y = 470; // differenceSign  button y- coordinate
let bdiameter8 = 200;  // Button diameter

let b9x = 730; // differenceCake   button x- coordinate
let b9y = 620; // differenceCake  button y- coordinate
let bdiameter9 = 80;  // Button diameter

let b10x = 1270; // differenceButterfly   button x- coordinate
let b10y = 520; // differenceButterfly  button y- coordinate
let bdiameter10 = 80;  // Button diameter

let b11x = 1050; // hiddenElement   button x- coordinate
let b11y = 550; // hiddenElement  button y- coordinate
let bdiameter11 = 200;  // Button diameter

let b12x = 2000; // Lvl2Transition   button x- coordinate
let b12y = 550; // Lvl2Transition    button y- coordinate
let bdiameter12 = 400;  // Button diameter

let b13x = 20; // Lvl1Transition   button x- coordinate
let b13y = 550; // Lvl1Transition    button y- coordinate
let bdiameter13 = 400;  // Button diameter


let oso;
let osoIdleAnimation, osoFlyingAnimation;



function preload(){
  // put preload code here

  soundFormats('mp3');
  mySound = loadSound('assets/bkgSound');

      imgOpeningPlay = loadImage("assets/openingPlay.png");
      imgOpeningScreen = loadImage("assets/openingScreen.png");
      imgStory = loadImage("assets/story.png");
      imgLvl1_Bkg = loadImage("assets/lvl1_Background.png");
      imgLvl1_Cake = loadImage("assets/lvl1_Cake.png");
      imgLvl1_ClueSign = loadImage("assets/lvl1_ClueSign.png");
      imgLvl1_MapIcon = loadImage("assets/lvl1_MapIcon.png");
      imgLvl1_Map_Popup = loadImage("assets/lvl1_Map_popup.png");
      imgLvl1_map_exitButton = loadImage("assets/lvl1_Map_exitIcon.png");
      imgLvl1_map_lvlCircle = loadImage("assets/lvl1_Map_level2Circle.png");
      imgOsoSpeech_scarecrow = loadImage("assets/Osospeech_withScarecrow.png");
      imgScarecrowSpeech = loadImage("assets/ScarecrowSpeech1.png");
      imgLvl1_puzzlePopup = loadImage("assets/lvl1_Puzzlepopup.png");
      imgLvl1_puzzleExitButton = loadImage("assets/lvl1_PuzzlepopupExit.png");
      imgLvl1_puzzleDifferenceSign = loadImage("assets/lvl1_Puzzledifferent1.png");
      imgLvl1_puzzleDifferenceCake = loadImage("assets/lvl1_Puzzledifferent2.png");
      imgLvl1_puzzleDifferenceButterfly = loadImage("assets/lvl1_Puzzledifferent3.png");
      imgLvl1_puzzleSymbol1 = loadImage("assets/lvl1_Puzzleicon1.png");
      imgLvl1_puzzleSymbol2 = loadImage("assets/lvl1_Puzzleicon2.png");
      imgLvl1_puzzleSymbol3 = loadImage("assets/lvl1_Puzzleicon3.png");
      imgLvl1_hiddenElement = loadImage("assets/lvl1_Hiddenitem.png");
      imgLvl2_Bkg = loadImage("assets/lvl2.png");
      imgLvl2_transitionButton = loadImage("assets/lvl2_transitionButton.png");
      imgLvl2_transitionButton2 = loadImage("assets/lvl2_transitionButton2.png");


      mouseDia = loadAnimation('assets/Mouse_speech1.png', 'assets/Mouse_speech2.png', 'assets/Mouse_speech3.png');
      osoDia = loadAnimation('assets/Osospeech_withMouse1.png', 'assets/Osospeech_withMouse2.png', 'assets/Osospeech_withMouse3.png');
      //scarecrowDia = loadAnimation('assets/ScarecrowSpeech1.png' );
      //osoDia = loadAnimation( 'assets/Osospeech_withScarecrow.png' );

      osoIdleAnimation = loadAnimation('assets/stand.png');
      osoFlyingAnimation = loadSpriteSheet('assets/oso_Spritesheet.png', 154, 256, 0.25);



}

function setup() {
  //createCanvas(windowWidth,windowHeight)
  // put setup code here
  p5xgT_setCanvas(windowWidth, windowHeight);

  currentScene = 1;


    mySound.play();


  oso = createSprite(canvas.cx, canvas.cy);
  oso.addAnimation('idle', osoIdleAnimation);
  oso.addAnimation('fly', osoFlyingAnimation);

}

function draw() {
  // put drawing code here



    switch (currentScene) {
        case 1:
          openingScreen();
          break;
        case 2:
          openingScreenStory();
          break;
        case 3:
          lvl1();
          osoMouseDia();
          osoScarecrowDia();
          drawSprites(); //p5 play function
          p5xgT_drawSprites(oso);
          break;
        case 4:
          mScreen();
          break;
        case 5:
          puzzle();
          break;
        case 6:
          puzzleSymbol1();
          break;
        case 7:
          puzzleSymbol2();
          break;
        case 8:
          puzzleSymbol3();
          break;
        case 9:
          hiddenElement();
          break;
        case 10:
          lvl2();


  }

  //  drawSprites(); //p5 play function
    //p5xgT_drawSprites(oso);

//print(lvl1);

 //fill(0);
 //circle(2000,550,400);

}

function openingScreen(){

  image(imgStory, 0, 0);
  image(imgOpeningScreen, 0, 0);
  image(imgOpeningPlay, 950 , 600);
}

function openingScreenStory(){

  image(imgStory, 0, 0);

}

function lvl1(){
  image(imgLvl1_Bkg, 0, 0);
//  image(imgLvl1_Cake, 400, 650);

  if (overCircle(b2x, b2y, bdiameter2)) {
      image(imgLvl1_ClueSign, 650, 335);
    } else {
      image(imgLvl1_Cake, 400, 650);

    }
image(imgLvl1_MapIcon, 0, 0);

if (overCircle(b12x, b12y, bdiameter12)) {
    image( imgLvl2_transitionButton , 2000, 550);
  }
//image( imgLvl2_transitionButton , 2000, 550);

}

function mScreen(){
  image(imgLvl1_Map_Popup, 0, 0);
  image(imgLvl1_map_exitButton, 1450, 150);
  image(imgLvl1_map_lvlCircle, 1000, 300);

}

function osoMouseDia() {

if (overCircle(b4x, b4y, bdiameter4)) {

push();
frameRate(4);
scale(1.5);
animation(mouseDia, 450, 400);
pop();
push();
frameRate(1);
scale(1.5);
animation(osoDia, 200, 400);
pop();

  }



}

function osoScarecrowDia(){

if (overCircle(b6x, b6y, bdiameter6)) {
push();
  scale(1.5);
  image(imgScarecrowSpeech , 1200, 200);
  image(imgOsoSpeech_scarecrow, 1000, 300);

pop();
}


}

function puzzle(){

  image(imgLvl1_puzzlePopup , 0, 0);
  image( imgLvl1_puzzleExitButton, 1450, 150);
  image( imgLvl1_puzzleDifferenceSign , 850, 440);
  image( imgLvl1_puzzleDifferenceCake , 720, 620);
  image( imgLvl1_puzzleDifferenceButterfly , 1270, 520);

}

function puzzleSymbol1(){

  image( imgLvl1_puzzleSymbol1 , 870, 860);
}

function puzzleSymbol2(){

  image( imgLvl1_puzzleSymbol2 , 1020, 860);

}

function puzzleSymbol3(){

  image( imgLvl1_puzzleSymbol3 , 1140, 870);

}

function hiddenElement(){

  image( imgLvl1_hiddenElement  , 1000, 500);

}

function lvl2(){

  image( imgLvl2_Bkg , 0, 0);

  if (overCircle(b13x, b13y, bdiameter13)) {

    image( imgLvl2_transitionButton2 , 20, 550);
    }

  //image( imgLvl2_transitionButton2 , 20, 550);

}

function mousePressed() {
  switch (currentScene) {
    case 1: // openingScreen
      if (overCircle(b1x, b1y, bdiameter)) {
        currentScene = 2;
        print("go to scene 2");
      }
      break;
      case 2: // openingScreenStory
        if (overCircle(b1x, b1y, bdiameter)) {
          currentScene = 3;
          print("go to scene 3");
        }
        break;
        case 3:
          if (overCircle(b3x, b3y, bdiameter3)) {
            currentScene = 4;
            print("go to scene 4");
          } else if (overCircle(b7x, b7y, bdiameter7)) {
                  currentScene = 5;
                  print("go to scene 5");
                } else if (overCircle(b12x, b12y, bdiameter12)) {
                        currentScene = 10;
                        print("go to scene 10");
                      }
          break;
          case 4:
            if (overCircle(b5x, b5y, bdiameter5)) {
              currentScene = 3;
              print("go to scene 3");
            }
            break;
            case 5:
              if (overCircle(b8x, b8y, bdiameter8)) {
                      currentScene = 6;
                      fill(230,221,31,100);
                      circle(910,490,100);
                      print("go to scene 6");
                    } else if (overCircle(b9x, b9y, bdiameter9)) {
                       currentScene = 7
                       fill(230,221,31,100);
                       circle(730,620,80);
                       print("go to scene 7");
                     } else  if (overCircle(b10x, b10y, bdiameter10)) {
                           currentScene = 8
                           fill(230,221,31,100);
                           circle(1280,520,80);
                           print("go to scene 8");
                         } else  if (overCircle(b5x, b5y, bdiameter5)) {
                             currentScene = 3;
                             print("go to scene 3");
                           }

            break;
            case 6:
               if (overCircle(b9x, b9y, bdiameter9)) {
                  currentScene = 7
                  fill(230,221,31,100);
                  circle(730,620,80);
                  print("go to scene 7");
                } else if (overCircle(b8x, b8y, bdiameter8)) {
                        currentScene = 6;
                        fill(230,221,31,100);
                        circle(910,490,100);
                        print("go to scene 6");
                    } else  if (overCircle(b10x, b10y, bdiameter10)) {
                          currentScene = 8
                          fill(230,221,31,100);
                          circle(1280,520,80);
                          print("go to scene 8");
                        }
                break;
                case 7:
                  if (overCircle(b10x, b10y, bdiameter10)) {
                      currentScene = 8
                      fill(230,221,31,100);
                      circle(1280,520,80);
                      print("go to scene 8");
                    } else if (overCircle(b9x, b9y, bdiameter9)) {
                          currentScene = 7
                          fill(230,221,31,100);
                          circle(730,620,80);
                          print("go to scene 7");
                     } else if (overCircle(b8x, b8y, bdiameter8)) {
                             currentScene = 6;
                             fill(230,221,31,100);
                             circle(910,490,100);
                             print("go to scene 6");
                           }
                  break;
                  case 8:
                    if (overCircle(b5x, b5y, bdiameter5)) {
                          currentScene = 9;
                        print("go to scene 3");
                      }
                  break;
                  case 9:
                    if (overCircle(b11x, b11y, bdiameter11)) {
                        currentScene = 3;
                        print("go to scene 3");
                      }
                break;
                case 10:
                  if (overCircle(b13x, b13y, bdiameter13)) {
                      currentScene = 3;
                      print("go to scene 3");
                    }
    }

  }

  function overCircle(x, y, d) {
  // If the (x,y) are inside the circle, return 'true'
  if (dist(mouseX, mouseY, x, y) < d / 2) {
    return true;
  } else {
    return false;
  }
}

/* -------------------------------------------------------- IGNORE ALL FUNTIONS BELOW --------------------------------------------------------/
// -------------------------------------------------------- IGNORE ALL FUNTIONS BELOW --------------------------------------------------------/
// -------------------------------------------------------- IGNORE ALL FUNTIONS BELOW -------------------------------------------------------*/

var showInventory=false;
var walkingSpeed=2; // speed of character walk
var keyStep=2;      // above walkingSpeed creates a dragging walk (keep walking after key released)
var canvas=[{'cx':0,
            'cy':0,
            'w':0,
            'h':0
            }];

function p5xgT_setCanvas(w,h){
  canvas.w=w;
  canvas.h=h;
  createCanvas(canvas.w, canvas.h);
  canvas.cx = int(width * .5); //center fo the screen X
  canvas.cy = int(height * .5); //center fo the screen Y
}

function mouseClicked() {
  oso.tx=mouseX;
}

function p5xgT_drawSprites(obj){
  obj.changeAnimation('idle');
/*  if (obj.facing == "N") obj.changeAnimation('walk');
  else if (obj.facing == "S") obj.changeAnimation('walk'); else*/
  if (obj.facing == "E") {obj.mirrorX(-1);}
  else if (obj.facing == "W") {obj.mirrorX(1);}
  p5xgT_setPosition(obj);
}

function p5xgT_setPosition(obj) {
  if (keyDown('w')) {
    obj.position.y -= 1;
    obj.facing = "N";
  }
  if (keyDown('s')) {
    obj.position.y += 1;
    obj.facing = "S";
  }
  if (keyDown('a')) obj.tx-=keyStep;
  if (keyDown('d')) obj.tx+=keyStep;

  if(obj.tx<obj.position.x-2) {
      obj.changeAnimation('fly');
      obj.facing = "E";
      obj.velocity.x = -walkingSpeed;
    }
  else if(obj.tx>obj.position.x+2) {
      obj.changeAnimation('fly');
      obj.facing = "W";
      obj.velocity.x = +walkingSpeed;
  } else {
    obj.velocity.x = 0;
  }


  if(debug) text("x:" + (obj.position.x - canvas.cx) + " y:" + (-canvas.cy + obj.position.y) + "tx:" + obj.position.x, 20, 20);
  if(obj.position.x < 5) {obj.tx=5; obj.position.x=5; obj.velocity.x = 0;}
  if(obj.position.x > canvas.w-5) {obj.tx=canvas.w-5; obj.position.x=canvas.w-5; obj.velocity.x = 0;}
  p5xgT_roundPos(oso);
}



// function for rounding images to avoid split pixels alignemnt
function p5xgT_roundPos(obj) {
  obj.position.x = int(obj.position.x);
  obj.position.y = int(obj.position.y);
}

function p5xgT_dialogue() {
  text(testo, canvas.cx, canvas.cy);
}

// function to select different tools
function p5xgT_tool() {
  if (keyDown('c')) {
    toolSel = 'c';
    toolSpr.animation.changeFrame(0);
  } // inventory object
  if (keyDown('e')) {
    toolSel = 'e';
    toolSpr.animation.changeFrame(1);
  } // examine-skull
  if (keyDown('t')) {
    toolSel = 't';
    toolSpr.animation.changeFrame(2);
  } // talk-parrot
  if (keyDown('u')) {
    toolSel = 'u';
    toolSpr.animation.changeFrame(3);
  } // use-hand
  if (keyDown('i')) showInventory = true; // use-hand

  toolSpr.position.x = mouseX;
  toolSpr.position.y = mouseY;
}

function p5xgT_inventory() {
  if (showInventory) {

  }
}

// function that create the object and assign a text to them
// dx: distance in x-axis from the center
// dy: distance in y-axis from the center
// img: image
// caption: caption text
function p5xgT_createAnObject(dx, dy, img, caption) {
  var c = createSprite(cx + dx, cy + dy);
  c.addImage(img);
  if (caption != "") {
    c.onMouseOver = function() {
      testo = caption;
    }
    c.onMouseOut = function() {
      testo = "";
    }
  }
  p5xgT_roundPos(c);
  return c;
}
