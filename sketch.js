var coiso, animation_2;
var estadojojo = "batalaal";
var estadomenu = "inativo";
var estadohuej = "antigravitacional";
var fight, fight_laranja, fight_amarelo;
var act, act_laranja, act_amarelo;
var item, item_laranja, item_amarelo;
var mercy, mercy_laranja, mercy_amarelo;
var huej, huej_vermelho, huej_azul;
var linhazinha1, linhazinha2, linhazinha3, linhazinha4;

function preload() {
  fight_laranja = loadAnimation("./assets/fight_laranja.png");
  fight_amarelo = loadAnimation("./assets/fight_amarelo.png");
  act_laranja = loadAnimation("./assets/act_laranja.png");
  act_amarelo = loadAnimation("./assets/act_amarelo.png");
  item_laranja = loadAnimation("./assets/item_laranja.png");
  item_amarelo = loadAnimation("./assets/item_amarelo.png");
  mercy_laranja = loadAnimation("./assets/mercy_laranja.png");
  mercy_amarelo = loadAnimation("./assets/mercy_amarelo.png");
  huej_vermelho = loadAnimation("./assets/he.png");
  huej_azul = loadAnimation("./assets/he_azulo.png");
  animation_2 = loadAnimation(
    "./assets/animation_2/animation2_00.png",
    "./assets/animation_2/animation2_01.png",
    "./assets/animation_2/animation2_02.png",
    "./assets/animation_2/animation2_03.png",
    "./assets/animation_2/animation2_04.png",
    "./assets/animation_2/animation2_05.png",
    "./assets/animation_2/animation2_06.png",
    "./assets/animation_2/animation2_07.png",
    "./assets/animation_2/animation2_08.png",
    "./assets/animation_2/animation2_09.png",
    "./assets/animation_2/animation2_10.png",
    "./assets/animation_2/animation2_11.png",
    "./assets/animation_2/animation2_12.png",
    "./assets/animation_2/animation2_13.png",
    "./assets/animation_2/animation2_14.png",
    "./assets/animation_2/animation2_15.png",
    "./assets/animation_2/animation2_16.png",
    "./assets/animation_2/animation2_17.png",
    "./assets/animation_2/animation2_18.png",
    "./assets/animation_2/animation2_19.png",
    "./assets/animation_2/animation2_20.png"
  );

  animation_2.looping = false;
}

function setup() {
  createCanvas(400, 400);

  coiso = createSprite(215, 302);
  coiso.shapeColor = "black";
  (coiso.scale = 3), 3;

  fight = createSprite(200, 383);
  fight.addAnimation("fight1", fight_laranja);
  fight.addAnimation("fight2", fight_amarelo);
  fight.scale = 0.8;

  act = createSprite(200, 383);
  act.addAnimation("act1", act_laranja);
  act.addAnimation("act2", act_amarelo);
  act.scale = 0.8;

  item = createSprite(200, 383);
  item.addAnimation("item1", item_laranja);
  item.addAnimation("item2", item_amarelo);
  item.scale = 0.8;

  mercy = createSprite(200, 383);
  mercy.addAnimation("mercy1", mercy_laranja);
  mercy.addAnimation("mercy2", mercy_amarelo);
  mercy.scale = 0.8;

  huej = createSprite(195, 331, 10, 10);
  huej.shapeColor = "red";
  huej.addAnimation("huej1", huej_vermelho);
  huej.addAnimation("huej2", huej_azul);
  huej.scale = 0.06;

  linhazinha1 = createSprite(195, 235, 110, 4);
  linhazinha1.shapeColor = "white";

  linhazinha2 = createSprite(195, 340, 110, 4);
  linhazinha2.shapeColor = "white";
  linhazinha3 = createSprite(142, 288, 4, 109);
  linhazinha3.shapeColor = "white";
  linhazinha4 = createSprite(248, 288, 4, 109);
  linhazinha4.shapeColor = "white";
}

function draw() {
  background("black");

  //-----------------------------------------------------------------
  //caos
  if (estadohuej === "karmicretribution") {
    huej.velocityY = huej.velocityY + 1;
  }

  //if (estadohuej === "karmicretribution" &&  keyDown("up")){
  //  huej.setVelocity(-3, 0);
  //}

  if (keyDown("k")) {
    estadohuej = "karmicretribution";
    huej.changeAnimation("huej2");
  }

  //-----------------------------------------------------------------
  //interações do menu
  manejarMenu();

  //-----------------------------------------------------------------
  //coisas aleatórias que quero guardar
  // if (keyDown("left")) {
  //   if (estadomenu === "item") {
  //     marcador.y = 200;
  //     setTimeout(function () {
  //       estado = 2;
  //     }, 200);
  //   }
  //   if (estado === 2) {
  //     marcador.y = 100;
  //     setTimeout(function () {
  //       estado = 1;
  //     }, 200);
  //   }
  // }
  // if (keyWentDown("right") && estadomenu === "fight") {
  //   huej.x = 119;
  //   huej.y = 379;
  //   estadomenu = "act";
  // }
  // if (keyWentDown("right") && estadomenu === "act") {
  //   huej.x = 119;
  //   huej.y = 379;
  // }
  // if (keyWentDown("LEFT") && estadomenu === "act") {
  //   estadomenu = "fight";
  //   huej.x = 18;
  //   huej.y = 380;
  // }

  //sprite.destroy();

  //-----------------------------------------------------------------
  //movimentos do huej no estadojojo 'batalaal';
  huej.setVelocity(0, 0);
  if (estadojojo === "batalaal") {
    if (keyDown("up")) {
      huej.setVelocity(0, -3);
    }
    if (keyDown("down")) {
      huej.setVelocity(0, 3);
    }
    if (keyDown("left")) {
      huej.setVelocity(-3, 0);
    }
    if (keyDown("right")) {
      huej.setVelocity(3, 0);
    }
  }

  //-----------------------------------------------------------------
  //collide
  huej.collide(linhazinha1);
  huej.collide(linhazinha2);
  huej.collide(linhazinha3);
  huej.collide(linhazinha4);

  //-----------------------------------------------------------------
  //funções de menu
  if (keyDown("ENTER")) {
    if (
      estadomenu === "fight" ||
      estadomenu === "act" ||
      estadomenu === "item" ||
      estadomenu === "mercy"
    ) {
      coiso.addAnimation("animation_2", animation_2);
    }
  }

  drawSprites();
}

//setTimeout(function(){ estadomenu = "fight"; }, 100);

function manejarMenu() {

  //-----------------------------------------------------------------
  //movimentação no menu
  if (keyDown("right")) {
    if (estadomenu === "fight") {
      huej.x = 118;
      setTimeout(function () {
        estadomenu = "act";
      }, 100);
    }
    if (estadomenu === "act") {
      huej.x = 222;
      setTimeout(function () {
        estadomenu = "item";
      }, 100);
    }

    if (estadomenu === "item") {
      huej.x = 326;
      setTimeout(function () {
        estadomenu = "mercy";
      }, 100);
    }
  }

  //-----------------------------------------------------------------
  //mudando os estados de menu
  if (keyDown("left")) {
    if (estadomenu === "mercy") {
      huej.x = 222;
      setTimeout(function () {
        estadomenu = "item";
      }, 100);
    }
    if (estadomenu === "item") {
      huej.x = 118;
      setTimeout(function () {
        estadomenu = "act";
      }, 100);
    }

    if (estadomenu === "act") {
      huej.x = 18;
      setTimeout(function () {
        estadomenu = "fight";
      }, 100);
    }
  }


  //-----------------------------------------------------------------
  //cor
  if (estadomenu === "fight") {
    fight.changeAnimation("fight2");
    act.changeAnimation("act1");
    item.changeAnimation("item1");
    mercy.changeAnimation("mercy1");
  }
  if (estadomenu === "act") {
    fight.changeAnimation("fight1");
    act.changeAnimation("act2");
    item.changeAnimation("item1");
    mercy.changeAnimation("mercy1");
  }
  if (estadomenu === "item") {
    fight.changeAnimation("fight1");
    act.changeAnimation("act1");
    item.changeAnimation("item2");
    mercy.changeAnimation("mercy1");
  }
  if (estadomenu === "mercy") {
    fight.changeAnimation("fight1");
    act.changeAnimation("act1");
    item.changeAnimation("item1");
    mercy.changeAnimation("mercy2");
  }

  //-----------------------------------------------------------------
  //transição do menu para outros estados
  if (keyDown("m") && estadojojo === "batalaal") {
    estadojojo = "menu";
    estadomenu = "fight";
    huej.x = 18;
    huej.y = 380;
  }
  if (estadomenu === "inativo") {
    fight.changeAnimation("fight1");
    fight.scale = 0.8;
    act.changeAnimation("act1");
    item.changeAnimation("item1");
    mercy.changeAnimation("mercy1");
  }
  if (keyDown("n") && estadojojo === "menu") {
    estadojojo = "batalaal";
    estadomenu = "inativo";
    huej.x = 195;
    huej.y = 287;
  }
}
