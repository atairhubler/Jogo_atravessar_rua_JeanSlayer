//código do ator
let yAtor = 366
let xAtor = 90
let colisao = false
let meusPontos = 0;



function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor-=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){yAtor+=3;}
  }
  if (keyIsDown(LEFT_ARROW)){
    if(podeSeMoverEsquerda()){xAtor-=3}
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(podeSeMoverDireita()){xAtor+=3}
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i=0; i<imagemCarros.length; i++){
    colisao=collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if(colisao){
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
    if(pontosMaiorQueZero()){meusPontos-=1;}    
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor=385;
}

function incluiPontos(){
  
  textAlign(CENTER);
  textSize(35);
  fill(color(127, 255, 0))
  text(meusPontos, width/5, 30);
}

function marcaPonto(){
  if(yAtor<15){
    meusPontos ++;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos>0
}

function podeSeMover(){
  return yAtor<366;
}
function podeSeMoverEsquerda(){
  return xAtor>0; 
}
function podeSeMoverDireita(){
  return xAtor<470;
}
