let tela = 0

//Dimensões
let largura = 200
let altura =50
let xMenu = 100
let yMenu1 = 85
let yMenu2 = 145
let ydesafio1 = 50
let ydesafio2= 140
let raiobolinha = 20
let xRick = 20;
let xZumbi = 300;
let xSamuka = 180;
let raio = 0;

//Imagens
let grama,vitima1, emojiSom, emojiMudo,ftMe,ftSamuka, arvore, arbusto;
let rick = []
let zumbi = []
let dog = []



//Aúdio
let somZumbi, TWD, passos


//Variáveis de animação
let tempo = 0
let cont = 0
let cont2 = 0
let andarz = 0
let andarr = 0
let cont3 = 0

function preload() {
  soundFormats('mp3','wav')
  somZumbi = loadSound("Zumbi.mp3")
  TWD = loadSound("TWD.mp3")
  passos = loadSound("passos.wav")
  
  grama = loadImage('grama da corrida.png');
  arvore = loadImage('árvore1.png');
  arbusto = loadImage('arbusto1.png');
  emojiSom = loadImage('emojiSom.png')
  emojiMudo = loadImage('emojiMudo.png')
  ftMe = loadImage('Eu1.jpeg')
  ftSamuka = loadImage('Samuca.jpeg')
  
  zumbi[0] = loadImage('3.png');
  zumbi[1] = loadImage('1.png')
  zumbi[2] = loadImage('2.png')
  
  rick[0] = loadImage('h4.png');
  rick[1] = loadImage('hw3.png');
  rick[2] = loadImage('hw2.png');
  rick[3] = loadImage('hw4.png');
  rick[4] = loadImage('hw5.png');
  rick[5] = loadImage('hw6.png');
  
  dog[0] = loadImage('dog1.gif');
  dog[1] = loadImage('dogwalk.gif');
  dog[2] = loadImage('dogpaused.png');
}


function setup() {
  createCanvas(410, 400);
 
  TWD.loop(0,1,0.05,3.45,21)
   
}


function draw() {
  
  background('#3399ff')
  imagem();
  
  TWD.pan(0)               //CONF. DE SOM
  somZumbi.pan(1)
  somZumbi.setVolume(0.02)
  passos.pan(-1)
  
if(tempo==1 && cont<=8){
  
  andarz++
  cont = cont + andarz
  xZumbi-=cont                  ////AVANÇAR ZUMBI
  andarz=0
}
  if(tempo==2 && cont2<=5){
  
  andarr++
  cont2 = cont2 + andarr        ///AVANÇAR RICK
  xRick+=cont2
  andarr=0
}
  
 
  
  if(tela==0)
    menu();
  if(tela==1)
    niveis();
  if(tela==2)
    instruçoes();
   if(tela==-1)
    creditos();
  if(tela==3)
    facil();
  if(tela==4)
    dificil();

if(xSamuka>xRick && xZumbi>xSamuka){ 
  if(tela==5)
    desafio1facil(); 
  if(tela==20)
    desafio2facil();
  if(tela==60)  
    desafio1dificil()
  if(tela==80)
    desafio2dificil();
  if(tela==6)
    pergunta2facil();
  if(tela==7)
    pergunta3facil();
  if(tela==8)
    pergunta4facil();
  if(tela==9);
    pergunta5facil();
  if(tela==10)
    pergunta6facil();
  if(tela==11)
    pergunta7facil();
  if(tela==12)
    pergunta8facil();
  if(tela==13)
    pergunta9facil();
  if(tela==14)
    pergunta10facil();
  if(tela==21)
    pergunta12facil();
  if(tela==22)
    pergunta13facil();
  if(tela==23)
    pergunta14facil();
  if(tela==24)
    pergunta15facil();
  if(tela==25)
    pergunta16facil();
  if(tela==26)
    pergunta17facil();
  if(tela==27)
    pergunta18facil();
  if(tela==28)
    pergunta19facil();
  if(tela==29)
    pergunta20facil();
  if(tela==61)
    pergunta2dificil();
  if(tela==62)
    pergunta3dificil();
  if(tela==63)
    pergunta4dificil();
  if(tela==64)
    pergunta5dificil();
  if(tela==65)
    pergunta6dificil();
  if(tela==66)
    pergunta7dificil();
  if(tela==67)
    pergunta8dificil();
  if(tela==68)
    pergunta9dificil();
  if(tela==69)
    pergunta10dificil();
  if(tela==81)
    pergunta12dificil();
  if(tela==82)
    pergunta13dificil();
  if(tela==83)
    pergunta14dificil();
  if(tela==84)
    pergunta15dificil();
  if(tela==85)
    pergunta16dificil();
  if(tela==86)
    pergunta17dificil();
  if(tela==87)
    pergunta18dificil();
  if(tela==88)
    pergunta19dificil();
  if(tela==89)
    pergunta20dificil();

  }
else{                                                  ////////TELAS DE VITÓRIA OU DERROTA//////////////
    
    if(xSamuka>=xZumbi){
      tela=140  
      cont3=140           ////////PERDEU/////////
      if(raio<145){
  
  raio++
  strokeWeight(5)
  stroke(230,250,50)
  fill(20,250,50)
  circle(200,149,raio*2)
}

  else{
    
    strokeWeight(5)
    stroke(230,250,50)
    fill(20,250,50)
    circle(200,149,290)
    
    strokeWeight(1)
    stroke(255,0,0)  
    textSize(28)
    textAlign(LEFT)
    fill(255,50,10)
    text("VOCÊ PERDEU!",95,85)
  
    strokeWeight(1)
    stroke(255,0,0)
    textSize(20)
    textAlign(LEFT)
    fill(255,50,10)
    text("SAMUKA FOI PEGO",104,150)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(15)
    textAlign(LEFT)
    fill(20)
    text("(NÃO DESISTA! TENTE NOVAMENTE)",67,200)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(12)
    textAlign(LEFT)
    fill(20)
    text("APERTE",100,240)
    
   fill(255,100,0) 
   textAlign(CENTER);
   textSize(15)
   stroke(200,200,100)
   strokeWeight(5)
   text("ESC",173,240)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(12)
    textAlign(LEFT)
    fill(20)
    text("PARA IR AO MENU",195,240) 
    
    
    
  }
 }    
}
    if(xSamuka<=xRick){ /////////VENCEU/////////////
      tela = 120
      cont3 = 120
      xSamuka -= 1
      xRick -= 1
      if(raio<145){
  
  raio++
  strokeWeight(5)
  stroke(230,250,50)
  fill(20,250,50)
  circle(200,149,raio*2)
}

  else{ 
   
  
    strokeWeight(5)
    stroke(230,250,50)
    fill(20,250,50)
    circle(200,149,290)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(28)
    textAlign(LEFT)
    fill(255,50,10)
    text("PARABÉNS!!",117,70)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(20)
    textAlign(LEFT)
    fill(255,50,10)
    text("SAMUKA FOI SALVO",100,130)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(15)
    textAlign(LEFT)
    fill(20)
    text("(QUE TAL OUTRO DESAFIO?)",95,200)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(12)
    textAlign(LEFT)
    fill(20)
    text("APERTE",100,240)
    
   fill(255,100,0) 
   textAlign(CENTER);
   textSize(15)
   stroke(200,200,100)
   strokeWeight(5)
   text("ESC",173,240)
    
    strokeWeight(1)
    stroke(255,0,0)
    textSize(12)
    textAlign(LEFT)
    fill(20)
    text("PARA IR AO MENU",195,240) 
    
    
    
    }
  }
}
  
  function imagem(){ ///////////////IMAGENS DO JOGO
  
  
  image(grama,0,350)
  image(grama,127,350)
  image(grama,254,350)
  image(grama,381,350)
  image(arvore,50,300,50,50)
  image(arvore,202,300,50,50) 
 
    if(tempo==0 || tempo==2){image(zumbi[0],xZumbi,305,50,50)}   //ANIMAÇÃO ZUMBI
  
    else if(tempo==1 && xZumbi%2!=0 && xZumbi%3==0){image(zumbi[0],xZumbi,305,50,50)}
    
  else if(tempo==1 && xZumbi%2!=0 && xZumbi%3!=0){image(zumbi[1],xZumbi,305,50,50)}
     
  else if(tempo==1 && xZumbi%2==0){image(zumbi[2],xZumbi,305,50,50)}
  
   
    if(cont3!=120 && cont3!=140){     //ANIMAÇÃO DOG
      image(dog[0],xSamuka,330,30,25)}
   
    else if(cont3==120){
      image(dog[1],xSamuka,330,30,25)}
    
    else if(cont3==140){
      image(dog[2],xSamuka,330,30,25)
    }
  
   if(cont3!=120){
    
     if(tempo==0||tempo==1){         //ANIMAÇÃO RICK
      image(rick[0],xRick,300,40,60)}
      
    else if(tempo==2 && xRick%2==0 && xRick%3!=0){
      image(rick[0],xRick,300,40,60)}
    
    else if(tempo==2 && xRick%2==0 && xRick%3==0){
      image(rick[1],xRick,300,40,60)}
     
   else if(tempo==2 && xRick&2!=0){
      image(rick[2],xRick,300,40,60) }}
    
    else{
      
      if(xRick<200 && xRick>150||xRick<=50 && xRick>25){
        image(rick[3],xRick,300,40,60) }
   
      else if(xRick>100 && xRick<=150){
        image(rick[4],xRick,300,40,60)}
    
      else if(xRick>50 && xRick<=100||xRick<=25){
        image(rick[5],xRick,300,40,60)}
    }
 
    
  
    if(TWD.isLooping()){               // IMAGEM SOM
        image(emojiSom,370,360,40,40)
  }

    else{
        image(emojiMudo,370,360,40,40)} 
  }
  
  function menu(){ // TELA DE MENU
  
    if(tela==0){
    
     //menu com 2 opções
    //iniciar jogo
    strokeWeight(8)
    textStyle(NORMAL);
    textAlign(CENTER);
    textSize(30);
    if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    stroke(200);
    fill(200,0,10);
    rect(xMenu,yMenu1,largura,altura,15)}
    
    fill(255,255,0);
    noStroke();
    text("Iniciar",200,120);//BARRA DE INICIO
    
    //INFORMAÇÕES DO JOGO
   
      if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke(200);
    fill(200,0,10);
    rect(xMenu,yMenu2,largura,altura,15)}
    
    fill(255,255,0);
    noStroke();
    text("Instruções",200,180);//BARRA DE INSTRUÇÕES
  
    fill(20);
    strokeWeight(2)
    stroke("#eb8305"); //GAME NAME
    text("THE WALKING HISTORY",200,40);
      
    if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2+altura+10 && mouseY < yMenu2 + altura*2+10){
   
    strokeWeight(8)
    stroke(200);
    fill(200,0,10);
    rect(xMenu,yMenu2+altura+10,largura,altura,15)}
    
    fill(255,255,0);
    noStroke();
    text("Créditos",200,242);//BARRA DE CREDITOS
 }}


function niveis(){ //NÍVEIS DO JOGO
  
  if(tela==1){
 
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > 35 && mouseY < 35 + altura){
    
    stroke(200);
    fill(200,0,10);
    rect(xMenu,35,largura,altura,15)}
    
    textSize(20)
    fill(255,255,0);
    noStroke();
    text("NÍVEL FÁCIL",200,70);
  
 
  
  if ( mouseX > xMenu && mouseX < xMenu + largura && mouseY > 190 + altura && mouseY < 190 + altura*2){
    stroke(200);
    fill(200,0,10);
    rect(xMenu,190+altura,largura,altura,15)}
    
    textSize(20);
    fill(255,255,0);
    noStroke();
    text("NÍVEL DIFÍCIL",200,275);
}}


function instruçoes(){ //DESCRIÇÃO DO JOGO
  
  if(tela==2){
  
  fill(255,100,0)
  rect(8,30,384,250)
  
  textAlign(CENTER);
  textSize(14)
  stroke(20)
  strokeWeight(2)
  text("The Walking History é um jogo em forma de Quiz em que o  " + "\n" + " player tem como objetivo salvar o cachorro Samukinha do" + "\n" + "Zumbi. E para o Rick Grimes salvá-lo, será exigido de você"+ "\n" + "certos conhecimentos da história republicana brasileira," + "\n" + "em uma série de perguntas de múltipla escolha."+ "\n" +"" + "\n" + "A cada acerto, o personagem Rick avançará."+ "\n" +"A cada erro, o zumbi irá avançar na direção de Samuka. "+ "\n" +"Caso o jogador venha a errar 3 perguntas:"+ "\n" +"DERROTA"+ "\n" +"Caso contrário:"+ "\n" +"VITÓRIA",200,50)

  textAlign(CENTER);
  textSize(25)
  stroke(200,200,100)
  strokeWeight(5)
  text("ESC",138,270)
  
  textAlign(CENTER);
  textSize(17)
  stroke(200,200,100)
  strokeWeight(2)
  text("APERTE",68,270)

  textAlign(CENTER);
  textSize(17)
  stroke(200,200,100)
  strokeWeight(2)
  text("PARA VOLTAR AO MENU",273,270)}}

function creditos(){
  
  if(tela==-1){
    
    fill(255,100,0)
    rect(8,30,384,250)
    
     
    image(ftSamuka,270,140,90,90)
    image(ftMe,270,40,90,90)
   
   
  textAlign(LEFT);
  textSize(13)
  stroke(20)
  strokeWeight(2)
  text("DESENVOLVEDOR DO GAME :"+ "\n"+""+ "\n"+"Gustavo Henrique Bezerra Dantas Costa"+ "\n"+""+ "\n"+""+ "\n"+""+ "\n"+"COLABORAÇÃO EDUCATIVA :"+ "\n"+""+ "\n"+"Samuel Elpídio da Silva",20,50)
    
  
  textAlign(LEFT);
  textSize(10)
  stroke(20)
  strokeWeight(2)
  text("- Graduando em Ciências e Tecnologia pela UFRN"+ "\n"+""+ "\n"+""+ "\n"+""+ "\n"+""+ "\n"+""+ "\n"+""+ "\n"+""+ "\n"+"- Graduando em História Licenciatura pela UFRN",20,100)
    
  textAlign(CENTER);
  textSize(25)
  stroke(200,200,100)
  strokeWeight(5)
  text("ESC",138,260)
  
  textAlign(CENTER);
  textSize(17)
  stroke(200,200,100)
  strokeWeight(2)
  text("APERTE",68,260)

  textAlign(CENTER);
  textSize(17)
  stroke(200,200,100)
  strokeWeight(2)
  text("PARA VOLTAR AO MENU",273,260)
  }}


function facil(){
  
  if(tela==3){
  
    if(mouseX>110 && mouseX<110+180 && mouseY>90 && mouseY<90+40){
  strokeWeight(3)
  stroke(100,100,100)
  fill(200,100,100)
  rect(110,90,180,40)
}
  strokeWeight(2)
  textSize(25);
  fill(255,255,0);
  stroke(20);
  text(" DESAFIO 1",198,120)
  
  if(mouseX>110 && mouseX<110+180 && mouseY>140 && mouseY<140+40){
  strokeWeight(3)
  stroke(100,100,100)
  fill(200,100,100)
  rect(110,140,180,40)
}
  strokeWeight(2)
  textSize(25);
  fill(255,255,0);
  stroke(20);
  text(" DESAFIO 2",198,170)
  
 
 }}

  

function dificil(){
  
  if(tela==4){
 
    if(mouseX>110 && mouseX<110+180 && mouseY>90 && mouseY<90+40){
  
  strokeWeight(3)
  stroke(100,100,100)
  fill(200,100,100)
  rect(110,90,180,40)
}
  strokeWeight(2)
  textSize(25);
  fill(255,255,0);
  stroke(20);
  text(" DESAFIO 1",198,120)
  
  if(mouseX>110 && mouseX<110+180 && mouseY>140 && mouseY<140+40){
  
  strokeWeight(3)
  stroke(100,100,100)
  fill(200,100,100)
  rect(110,140,180,40)
}
  strokeWeight(2)
  textSize(25);
  fill(255,255,0);
  stroke(20);
  text(" DESAFIO 2",198,170)
  }}


function desafio1facil(){
  
  if(tela==5){
         
         ////// PADRÃO CENTRO//////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
     noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
     noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
   noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Qual corrente filosófica baseada no progresso contínuo da sociedade" + "\n" +"marcou a instauração da República brasileira em 1889?",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Liberalismo",160,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Positivismo",160,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Fascismo",160,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Socialismo",160,215)
}}

function desafio2facil(){
 
  if(tela==20){
  
    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Em que período histórico foi criada a primeira empresa de controle"+"\n"+" monopolizado da exploração de petróleo no Brasil (PETROBRÁS)?",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Era Vargas (1930-1945)",150,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Governo Lula (2003-2010)",150,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Governo Vargas (1951-1954)",150,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Governo JK (1956-1961)",150,215)
  }}

function desafio1dificil(){
  if(tela==60){
  
   if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A Proclamação da República foi realizada no 15 de novembro como"+"\n"+" resultado da mobilização de republicanistas e dos militares contra a"+"\n"+" monarquia. Este evento foi anunciado por:",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Benjamin Constant",150,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Deodoro da Fonseca",150,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Floriano Peixoto",150,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("José do Patrocínio",150,215)
  }}

function desafio2dificil(){
  
  if(tela==80){
     
  if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("O fim da escravidão trouxe consequências sociais diversas,"+"\n"+" dentre elas está o(a):",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Isonomia social entre negros e brancos",130,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Fim do racismo estrutural",130,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Crescimento da mão-de-obra imigrante",130,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Diminuição da pobreza",130,215)
  }}


function pergunta2facil(){
  
  if(tela==6){
  
  ////////// PADRÃO ESQUERDA////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
   
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("O conceito de progresso econômico adotado na Era Vargas" + "\n" + "se relaciona com :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A tomada dos meios de produção pelo Estado",60,85)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Abertura total para o mercado externo",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Abertura comercial exclusiva para países da América do Sul ",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Aumento de Estatais e inflação do Estado ",60,215)
}}

function pergunta3facil(){
  
  if(tela==7){
   
     if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Qual presidente priorizou a indústria de base nacional em seu" +"\n"+" Plano de Metas, o qual tinha como fundamento o lema '50 anos em 5' ?",195,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Juscelino Kubitschek",160,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Getúlio Vargas",160,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Cabo Daciolo",160,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("General Costa e Silva",160,215)
}}

function pergunta4facil(){
  
  if(tela==8){
  
     if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("O populismo é uma prática política recorrente desde a instauração"+"\n"+" da República brasileira. Identifique uma característica desse "+"\n"+"modelo de persuasão:",200,20)
  
  textAlign(LEFT)
  textSize(10)
  noStroke()
  text("Proposição de políticas de livre mercado",60,85)
  
  textAlign(LEFT)
  textSize(10)
  noStroke()
  text("Defesa de uma sociedade militarizada",60,125)
  
  textAlign(LEFT)
  textSize(10)
  noStroke()
  text("Liderança política baseada no carisma pessoal e na rede de clientelismo ",60,170)
  
  textAlign(LEFT)
  textSize(10)
  noStroke()
  text("Perseguição a minorias sociais ",60,215)
}}

function pergunta5facil(){
 
  if(tela==9){
  
     if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A alternância do poder na presidência entre líderes das oligarquias"+"\n"+" de Minas e São Paulo no início do século XX ficou conhecida como : ",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Parlamentarismo às avessas",150,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Política do feijão com arroz ",150,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Alternância bivalente",150,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Política do Café com Leite",150,215)
}}

function pergunta6facil(){
  
  if(tela==10){ 
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A complexa estrutura do coronelismo desempenhou papel importante no"+"\n"+" contexto da República Velha. Em que consiste essa prática?",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Controle da política por um pequeno grupo de privilegiados"+"\n"+" que definem os rumos políticos de uma cidade ou região",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Perseguição de minorias sociais, como  os negros e os lgbtqi+",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Na violência do bando de lampião para com a população"+"\n"+"sertaneja",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Nenhuma das alternativas anteriores ",60,215)
}}

function pergunta7facil(){
  
  if(tela==11){
   
     if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Mudanças políticas como o voto feminino, estabelecimento do ensino"+"\n"+" primário gratuito obrigatório e criação da Justiça do Trabalho foram"+"\n"+" medidas efetivadas em que período da história do Brasil?",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Governo Lula",160,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("República das Espadas",160,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Era Vargas",160,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Ditadura Militar",160,215)
}}
 
function pergunta8facil(){
  
  if(tela==12){
   
   if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Formado em meados da década de 20, a Coluna Prestes foi um grupo"+"\n"+" de guerrilha de militares de baixa patente movidos por diversos objetivos,"+"\n"+" como por exemplo :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Gerar uma nação de raça pura, dentro dos padrões arianos",60,85)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Ajuste do processo eleitoral a fim de torná-lo mais justo",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Transformar o Brasil em uma potência nuclear",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Acabar com a URSAL e extinguir o Partido Comunista do Brasil",60,215)
  }}

function pergunta9facil(){
  
  if(tela==13){
    
    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Qual produto tinha maior movimentação no Brasil no quesito rentabilidade"+"\n"+" no início do século XX?",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Pau-Brasil",160,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Diamante",160,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Café",160,170)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Hinode",160,215)
    
}}    

function pergunta10facil(){
  
  if(tela==14){
    
   if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("O plano SALTE adotado no governo Dutra no final da década de 50 tinha"+"\n"+" por objetivo a reorganização dos gastos públicos com :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Siderurgia, agricultura, legislativo, transporte e energia",60,85)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Siderurgia, alimentação, têxtil e esporte",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Saúde, alimentação, transporte e esporte",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Saúde, alimentação, transporte e energia",60,215)
  }}

           ///////FIM DESAFIO 1 FACIL//////////
            ///////////////////////////
            ////////////////////////////

 function pergunta12facil(){
   
   if(tela==21){
  
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("No início do século XX, 'a primeira onda' do movimento modernista"+"\n"+" visava preencher uma lacuna deixada em aberto pelos positivistas"+"\n"+" na fundação da república. Qual seria essa lacuna? ",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Formação de uma cultura brasileira mesclada com os valores "+"\n"+"glamurosos europeus",60,85)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Perpetuação de uma base cultural genuinamente brasileira,"+"\n"+"sem interferência externa ",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A desmoralização do sistema monárquico ",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Exaltação das etnias afro-descendentes",60,215) 
  
 }}

function pergunta13facil(){
 
  if(tela==22){

    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Entre as revoltas promovidas pelo movimento tenentista destacam-se:",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Revolta dos 18 do forte de Copacabana"+"\n"+"e Revolta Paulista (1924)",117,75)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Revolta da Chibata e"+"\n"+"Revolta da Vacina",117,125)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Revolta Paulista (1924) e"+"\n"+"Guerra de Canudos",117,175)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Revolta de Canudos e "+"\n"+"Revolta dos Emboabas",117,225)
    

  }}
  

function pergunta14facil(){

  if(tela==23){
    
  
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A guerra de Canudos, ocorrida no final do século XIX, "+"\n"+"foi ocasionada devido :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A pregação de uma doutina monárquica absolutista pelo líder"+"\n"+"do grupo e seguidores",60,85)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Ao medo de uma Revolução Comunista encabeçada pelo líder"+"\n"+"local Antônio Conselheiro",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A violência causada pelos habitantes locais no interior da Bahia ",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A perspectiva republicana de encarar o povoado como um"+"\n"+"potencial perigo ao sistema vingente",60,215)

}}

function pergunta15facil(){
 
  if(tela==24){
    
   if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Qual é o nome da reforma agrária que inflacionou"+"\n"+"a moeda brasileira em 1891?",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Cisilhamento",160,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Encilhamento",160,130)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Plano Real",160,175)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Plano Safra",160,220)
    
  }}    

function pergunta16facil(){
  if(tela==25){

    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Na história da República brasileira, a expressão Estado Novo identifica :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O período de 1930 a 1945, em que Getúlio Vargas governou"+"\n"+"o país de forma ditatorial, só com o apoio dos militares, sem a"+"\n"+"interferência de outros poderes.",60,70)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O período de 1950 a 1954, em que Getúlio Vargas governou"+"\n"+"com poderes ditatoriais.",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O período de 1937 a 1945, em que Getúlio Vargas fechou o"+"\n"+"Poder Legislativo, suspendeu as liberdades civis e governou"+"\n"+"por meio de decretos-leis.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O período de 1930 a 1934, quando se afirmou o respeito aos"+"\n"+"princípios democráticos.",60,225)

 }}

function pergunta17facil(){
  if(tela==26){

   if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Selecione uma mudança feita pela Constituição de 1891:",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Voto feminino",160,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Sufrágio Universal",160,130)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Ensino gratuito e obrigatório",160,175)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("Separação entre Estado e Igreja",160,220)
}}


function pergunta18facil(){
  if(tela==27){
    
   if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Em que consistiu a Política dos Governadores :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Foi um sistema de troca de favores entre Governo Federal"+"\n"+"e Oligarquias.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Foi um plano de Federalização dos Estados que entregava"+"\n"+"maior independência para o regimento de leis.",60,125)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("No Populismo adotado por governadores para conquistar votos"+"\n"+"no inicio do século XX.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("No controle vitalício da máquina do Estado por parte dos"+"\n"+"governadores da época.",60,220)

}}

function pergunta19facil(){
  if(tela==28){

   if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("O período da história brasileira que vai de 1894 até 1930 marcado pela"+"\n"+" presença de poderosas famílias exercendo o poder político,especialmente"+"\n"+" por São Paulo e Minas Gerais. Este período recebe o nome de :",200,20)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("República da espada",160,85)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("República oligárquica",160,130)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("República federalista",160,175)
  
  textAlign(LEFT)
  textSize(16)
  noStroke()
  text("República dos coronéis",160,220)
    
 }}


function pergunta20facil(){
  if(tela==29){
    
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Entre as características da nova ordem política brasileira"+"\n"+"implantada com o Estado Novo estava:",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("a mobilização política do campesinato, para fortalecer as"+"\n"+"bases de apoio das oligarquias tradicionais.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("a participação do Estado na economia, para assegurar a"+"\n"+"industrialização no contexto internacional, caracterizado pela"+"\n"+"ascensão de regimes fortes.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("a formação de uma aliança da esquerda com os liberais, numa"+"\n"+"frente única nacionalista.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("a formação de um governo democrático que fizesse frente à"+"\n"+"escalada da Ação Integralista Brasileira.",60,220)
}}
 

///////////FIM DO DESAFIO 2 FACIL/////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function pergunta2dificil(){
  if(tela==61){
    
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Sobre o golpe aplicado contra a Monarquia :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Contou com amplo apoio da população.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Foi financiado pelo ditador italiano Augusto Comte.  ",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Foi erguido com o suporte das elites latifundiárias do Brasil"+"\n"+"na época.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O exército da época utilizou-se meios violentos para alcançar"+"\n"+"o objetivo.",60,220)
    
}}


function pergunta3dificil(){
  
  if(tela==62){
    
    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Qual acontecimento deu fim às articulações políticas patrimonialistas"+"\n"+"entre as oligarquias regionais do Brasil?",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("O golpe contra a Monarquia Absolutista"+"\n"+"de Dom Pedro II.",132,75)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("A chegada do candidato da Aliança Liberal"+"\n"+"à presidência.",132,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("A anscensão de Getúlio Vargas ao Palácio"+"\n"+"do Planalto.",132,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("A Revolução de 1930 com a chegada"+"\n"+"de Júlio Prestes ao poder.",132,220)

 }}

function pergunta4dificil(){
 
   if(tela==63){
     
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Qual foi o motivo que levou o Brasil a declarar guerra a Alemanha?",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A ameaça americana de invadir o Brasil caso não declarasse"+"\n"+"guerra contra a Alemanha.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O ataque de submarinos alemães contra navios mercantes"+"\n"+"brasileiros.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A eclosão da Intentona Integralista.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O assassinato de um diplomata brasileiro por um general"+"\n"+"alemão na Itália.",60,220)
     
}}


function pergunta5dificil(){
  
  if(tela==64){

  if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A criação de uma legislação trabalhista que garantia, como por exemplo,"+"\n"+" a Previdência Social e salário mínimo, foi efetivada primeiramente em qual"+"\n"+" Constituição?",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Constituição Outorgada de 1937.",132,85)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Constituição Promulgada de 1934. ",132,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Constituição Outorgada de 1934.",132,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Constituição Promulgada de 1937.",132,220)
}}


function pergunta6dificil(){
  if(tela==65){

   if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Para garantir o apoio brasileiro na Segunda Guerra Mundial,"+"\n"+"os Estados Unidos aceitaram :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Doar milhões para um projeto de desenvolvimento social que"+"\n"+"estava sendo implementado no Nordeste.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Reduzir os preços de todas as mercadorias vendidas para o"+"\n"+"Brasil em 10% durante 20 anos.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Financiar a construção da Companhia Siderúrgica Nacional"+"\n"+"em Volta Redonda.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Dar apoio econômico para o desenvolvimento de um programa"+"\n"+"de inteligência que seria utilizado por Vargas para garantir"+"\n"+"sua continuidade no poder.",60,220)
}}


function pergunta7dificil(){

  if(tela==66){
     if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Em qual região o cultivo do café teve mais desenvolvimento?",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Vale do Paraíba",132,85)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Região Amazônica",132,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Litoral Nordestino",132,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Pantanal Matogrossense",132,220)
    
}}  


 function pergunta8dificil(){
   
   if(tela==67){
     
   if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A Revolução Federalista, ocorrida entre 1893 e 1895, no Rio Grande do"+"\n"+"Sul,contra o governo de Júlio de Castilhos, que era apoiado pelo"+"\n"+"Poder Federal,tinha como reivindicação principal:",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A criação de um regime parlamentarista republicano, cujo"+"\n"+"primeiro-ministro governaria de fato.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A mudança da capital do país, do Rio de Janeiro para o Rio"+"\n"+"Grande do Sul.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O restabelecimento da Monarquia, mas com viés parlamentarista.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("A descentralização política do poder e a maior autonomia dos"+"\n"+"Estados.",60,220)

}}


function pergunta9dificil(){
  
  if(tela==68){
    
    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Quem foi o primeiro presidente negro da história do Brasil?",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Nilo Peçanha (1909-1910)",132,85)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Afonso Pena (1906-1909)",132,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Floriano Peixoto (1891-1894)",132,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("João Goulart (1961-1964)",132,220)
    
}}  


function pergunta10dificil(){

  if(tela==69){
    
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A saudação 'Anauê' foi inicialmente adotada pelos escoteiros do Brasil"+"\n"+"em 1923, mas na década seguinte ganhou valor de ufanismo ao ser"+"\n"+"utilizada por qual movimento político?",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Movimento Brasil Livre",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Partido Comunista Brasileiro",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Ação Integralista Brasileira",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("União Nacional dos Estudantes",60,220)
    
}} //////////FIM DO DESAFIO 1 DIFICIL///////////////
/////////////////////////////////////////////////////
///////////////////////////////////////////////////

function pergunta12dificil(){
  
  if(tela==81){
    
     if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Em 1937, o então presidente Getúlio Vargas desejava se perpetuar no"+"\n"+" poder além do que a Constituição de 1934 permitia, mas para isso precisou"+"\n"+" articular uma forma de ganhar apoio popular através :",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Da criação de um documento falso que revelava a emergência"+"\n"+"de um golpe comunista ligado à URSS.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Da revelação pública de um documento, escrito por Prestes, que"+"\n"+"evidenciava uma tentativa de golpe comunista no País.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Do anúncio, via rádio, de um ataque soviético à navios na costa"+"\n"+"atlântica brasileira.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Da divulgação do Plano Cohen orquestrado por Olga Benário em"+"\n"+"parceria com autoridades soviéticas.",60,220)
    
}}


function pergunta13dificil(){
  
  if(tela==82){
    
    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("O governo Dutra(1946-1950) conquistou níveis altos de importação devido"+"\n"+"ao forte mercado consumidor nacional. Qual país mais se beneficiou"+"\n"+"através dessa nova política brasileira?",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Japão",132,85)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("França",132,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Paraguai",132,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Estados Unidos",132,220)
    
}}


function pergunta14dificil(){
  
  if(tela==83){

   
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Em 1904, o Rio de Janeiro sofria com sérios problemas de saúde pública."+"\n"+"A condução do governo no controle do surto de doenças gerava medo"+"\n"+"na população. Nesse contexto, em que consistiu a Revolta da Vacina?",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Em um protesto de grupos anti-vacina apoiadores do líder"+"\n"+"messiânico Bruno Diferente.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Em um levante popular contrário a obrigatoriedade da vacinação"+"\n"+"contra a varíola aplicada no governo Rodrigues Alves.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Em um levante popular contrário a obrigatoriedade da vacinação"+"\n"+"contra a dengue aplicada no governo Afonso Pena.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Em um levante popular contrário a obrigatoriedade da vacinação"+"\n"+"contra a varíola aplicada no governo Campos Sales.",60,220)
    
  }}  


function pergunta15dificil(){
  
  if(tela==84){
    
     if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Selecione a opção que contém dois movimentos de caráter messiânico :",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Canudos e Integralismo",132,85)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Contestado e Canudos",132,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Contestado e Integralismo",132,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Comunismo e Integralismo",132,220)
    
    
 }}


function pergunta16dificil(){
  
  if(tela==85){
    
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Como foi a participação da cidade de Natal/RN no período da"+"\n"+"Segunda Guerra Mundial?",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Cidade Polo na exportação de armamentos e produtos de guerra",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Cidade que mais cedeu força militar para lutar no Front Oeste",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Cidade que serviu de base militar das tropas americanas.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Natal não participou do contexto da Segunda Guerra Mundial.",60,220)
    
    
}}


function pergunta17dificil(){
  
  if(tela==86){
    
    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Em 1911 deu-se início em Santa Catarina um conflito trágico. Uma guerra"+"\n"+"entre tropas do governo e homens mal armados, mas fanatizados por"+"\n"+" figuras como o Monge João Maria. Qual conflito está sendo abordado?",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Guerra dos Bôeres",132,85)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Guerra dos Farrapos",132,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Guerra do Contestado",132,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("Revolução Federalista",132,220)
    
}}


function pergunta18dificil(){
  
  if(tela==87){
    
    
   if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("Sobre a Greve Geral de 1917, em São Paulo, podemos afirmar que:",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Fortaleceu o movimento operário com a fundação do Partido"+"\n"+"Comunista Brasileiro, em 1918.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Assegurou a regulamentação do trabalho de menores e direito"+"\n"+"a férias anuais em 1919.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("O movimento fracassou em virtude da cisão interna entre"+"\n"+"anarquistas e centrais sindicais.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Contou com a participação expressiva de mulheres, sobretudo"+"\n"+"da indústria têxtil.",60,220)
    
}}


function pergunta19dificil(){
  
  if(tela==88){
    
    if(dist(mouseX,mouseY,90,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,90,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,90,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(90,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",85,85)
  
  textSize(16)
  stroke(20)
  text("B",85,130)
  
  textSize(16)
  stroke(20)
  text("C",85,175)
  
  textSize(16)
  stroke(20)
  text("D",85,220)
  
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("A Proclamação da República não foi um ato subto, na verdade, se"+"\n"+"ocasionou devido a vários descontentamentos sociais."+"\n"+"Dentre esses descontentamentos está :",200,20)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("A insatisfação dos escravos recém-libertos"+"\n"+"com a falta de auxilio social.",115,80)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("As exigências dos assalariados da indústria"+"\n"+"que foram negadas por Dom Pedro II.",115,127)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("A frustração de líderes sindicais com a figura"+"\n"+"do Imperador.",115,175)
  
  textAlign(LEFT)
  textSize(14)
  noStroke()
  text("As mágoas deixadas pela Guerra do Paraguai"+"\n"+"e a abolição da escravidão sem abono às elites.",115,220)
    
}}


function pergunta20dificil(){
  
  if(tela==89){
    
    
    if(dist(mouseX,mouseY,22,80)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,80,2*raiobolinha)//BOLINHAS DE OPÇÕES
    noStroke()
    if(dist(mouseX,mouseY,22,125)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,125,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,170)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,170,2*raiobolinha)
    noStroke()
    if(dist(mouseX,mouseY,22,215)<raiobolinha){
    stroke(200,0,10)
  }
    circle(22,215,2*raiobolinha)
    noStroke()
  
  
  textSize(16)
  stroke(20)
  text("A",17,85)
  
  textSize(16)
  stroke(20)
  text("B",17,130)
  
  textSize(16)
  stroke(20)
  text("C",17,175)
  
  textSize(16)
  stroke(20)
  text("D",17,220)
  
  textAlign(CENTER)
  textSize(12)
  stroke(0);
  strokeWeight(2)
  text("É errado atestar que a Revolução de 30:",200,20)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Pôs um ponto final à ditadura militar.",60,75)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Foi um levante armado.",60,117)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Foi conduzida pelos Estados de Minas Gerais, Paraíba e Rio"+"\n"+"Grande do Sul.",60,170)
  
  textAlign(LEFT)
  textSize(12)
  noStroke()
  text("Resultou em um golpe de estado que depôs o Presidente "+"\n"+"Washington Luís.",60,220)
    
}}

/////////////FIM DO DESAFIO 2 DIFICIL//////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function mousePressed(){   //FUNÇÕES DO MOUSE
  
  if ((mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura) && mouseIsPressed && tela==0){
    tela=1  //CLICOU, EXIBE OS NÍVEIS
    mouseX=0
  }
  if (( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) && mouseIsPressed && tela==0){
    tela=2  //CLICOU, AS INSTRUÇÕES SE EXIBEM
     mouseX=0
  }
  if ((mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2+altura+10 && mouseY < yMenu2 + altura*2+10) && mouseIsPressed && tela==0){
     tela=-1  //Clicou, créditos se abre
 }
    if ((mouseX > xMenu && mouseX < xMenu + largura && mouseY > 35 && mouseY < 35 + altura) && tela==1 && mouseIsPressed){
     tela=3 // MODO FACIL
      mouseX=0
 }
  if ((mouseX > xMenu && mouseX < xMenu + largura && mouseY > 190 + altura && mouseY < 190 + altura*2) && tela==1 && mouseIsPressed){
    tela=4// MODO DIFICIL
     mouseX=0
 }  
  if((mouseX>110 && mouseX<110+180 && mouseY>90 && mouseY<90+40) && (tela==3) && mouseIsPressed){
    tela=5 // DESAFIO1FACIL
     mouseX=0
} 
  
  if((mouseX>110 && mouseX<110+180 && mouseY>140 && mouseY<140+40) && (tela==3) && mouseIsPressed){
    tela=20 //DESAFIO2FACIL
     mouseX=0
}
  
  if((mouseX>110 && mouseX<110+180 && mouseY>90 && mouseY<90+40) && tela==4 && mouseIsPressed){
    tela=60 // DESAFIO1DIFICIL
     mouseX=0
} 
    if((mouseX>110 && mouseX<110+180 && mouseY>140 && mouseY<140+40) && tela==4 && mouseIsPressed){
    tela=80 //DESAFIO2DIFICIL
       mouseX=0
}
  
  
     //////////RESPOSTAS CERTAS OU ERRADAS///////////////
 
       //////////NO ESPAÇO MAIS À ESQUERDA//////////
          /* ESPAÇO PARA PEGUNTAS MAIS EXTENSAS */
  
  
  if((dist(mouseX,mouseY,22,80)<raiobolinha) && (tela==6||tela==8||tela==12||tela==14||tela==21||tela==23||tela==25||tela==29||tela==61||tela==63||tela==65||tela==67||tela==69||tela==83||tela==85||tela==87) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
    tempo = 1
   cont=0
   
     tela++
     somZumbi.play()} //RESPOSTA ERRADA EM A 

   if((dist(mouseX,mouseY,22,125)<raiobolinha) && (tela==6||tela==8||tela==10||tela==14||tela==23||tela==25||tela==27||tela==61||tela==65||tela==67||tela==69||tela==81||tela==85||tela==87||tela==89) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     cont = 0
     tempo = 1
     tela++
   somZumbi.play()} //RESPOSTA ERRADA EM B 
   
   if((dist(mouseX,mouseY,22,170)<raiobolinha) && (tela==6||tela==10||tela==12||tela==14||tela==21||tela==23||tela==27||tela==29||tela==63||tela==67||tela==81||tela==83||tela==87||tela==89) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     cont=0
     tempo = 1
     tela++
   somZumbi.play()} //RESPOSTA ERRADA EM C 
    
     if((dist(mouseX,mouseY,22,215)<raiobolinha) && (tela==8||tela==10||tela==12||tela==21||tela==25||tela==27||tela==29||tela==61||tela==63||tela==65||tela==69||tela==81||tela==83||tela==85||tela==89) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     cont=0
       tempo=1
     tela++
     somZumbi.play()} //RESPOSTA ERRADA EM D

   if((dist(mouseX,mouseY,22,80)<raiobolinha) && (tela==10||tela==27||tela==81||tela==89) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     tempo = 2
     cont2= 0
     tela++
   passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM A 

   if((dist(mouseX,mouseY,22,125)<raiobolinha) && (tela==12||tela==21||tela==29||tela==63||tela==83) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     cont2 = 0
     tempo = 2
     tela++
   passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM B
   
   if((dist(mouseX,mouseY,22,170)<raiobolinha) && (tela==8||tela==25||tela==61||tela==65||tela==69||tela==85) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     
      cont2 = 0
     tempo = 2
     tela++
   passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM C 
    
     if((dist(mouseX,mouseY,22,215)<raiobolinha) && (tela==6||tela==14||tela==23||tela==67||tela==87) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
      cont2 = 0
     tempo = 2
     tela++
     passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM D

  //////////RESPOSTAS CERTAS OU ERRADAS///////////////
 //// OBS:          PERGUNTAS CURTAS
  //////////NO ESPAÇO MAIS AO CENTRO//////////
  /* PARA ALTERAR QUAL RESPOSTA CERTA OU ERRADA, BASTA ALTERAR OS VALORES DA VARIÁVEL TELA DENTRO DOS IF'S */
  
  
  if((dist(mouseX,mouseY,90,80)<raiobolinha) && (tela==5||tela==9||tela==11||tela==13||tela==20||tela==24||tela==26||tela==28||tela==60||tela==62||tela==64||tela==80||tela==82||tela==84||tela==86||tela==88) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
      tempo = 1
      cont=0
     tela++
  somZumbi.play()} //RESPOSTA ERRADA EM A 

   if((dist(mouseX,mouseY,90,125)<raiobolinha) && (tela==7||tela==9||tela==11||tela==13||tela==20||tela==22||tela==26||tela==60||tela==66||tela==68||tela==80||tela==82||tela==86||tela==88) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
      cont = 0
     tempo = 1
     tela++
   somZumbi.play()} //RESPOSTA ERRADA EM B 
   
   if((dist(mouseX,mouseY,90,170)<raiobolinha) && (tela==5||tela==7||tela==9||tela==22||tela==24||tela==26||tela==28||tela==60||tela==62||tela==64||tela==66||tela==68||tela==82||tela==84||tela==88) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     cont = 0
     tempo = 1
     tela++
   somZumbi.play()} //RESPOSTA ERRADA EM C 
    
     if((dist(mouseX,mouseY,90,215)<raiobolinha) && (tela==5||tela==7||tela==11||tela==13||tela==20||tela==22||tela==24||tela==28||tela==62||tela==64||tela==66||tela==68||tela==80||tela==84||tela==86)  && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
      cont = 0
     tempo = 1
     tela++
     somZumbi.play()} //RESPOSTA ERRADA EM D

   if((dist(mouseX,mouseY,90,80)<raiobolinha) && (tela==7||tela==22||tela==66||tela==68) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     tempo=2
     cont2=0
     tela++
   passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM A 

   if((dist(mouseX,mouseY,90,125)<raiobolinha) && (tela==5||tela==24||tela==28||tela==62||tela==64||tela==84) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
      cont2 = 0
     tempo = 2
     tela++
   passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM B 
   
   if((dist(mouseX,mouseY,90,170)<raiobolinha) && (tela==11||tela==13||tela==20||tela==80||tela==86) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     
      cont2 = 0
     tempo = 2
     tela++
   passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM C 
    
     if((dist(mouseX,mouseY,90,215)<raiobolinha) && (tela==9||tela==26||tela==60||tela==82||tela==88) && mouseIsPressed && xSamuka>xRick && xZumbi>xSamuka){
     cont2 = 0
     tempo = 2
     tela++
     passos.play(0,1,0.25,2,5)} //RESPOSTA CERTA EM D

} 
  

function keyPressed(){ //FUNÇÕES DE TECLADO
  if(key == "Escape"){
    
    tela = 0
    xRick = 20
    xZumbi = 300
    tempo = 0
    xSamuka = 180
    cont3 = 0
    raio = 0
}}

function mouseClicked(){
  
  if (TWD.isPlaying() && dist(mouseX,mouseY,390,380)<20) {
   TWD.pause()
   
   
}
 else if(TWD.isPaused() && dist(mouseX,mouseY,390,380)<20){
   
     TWD.loop(0,1,0.05,3.45,21)
}}
