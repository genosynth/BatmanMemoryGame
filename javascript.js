var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
let counter=0;
let matchedScore=0;
let gameTime = 3000;

let characters = [
  "./Images/batman.jpg",
   "./Images/joker.jpg",
   "./Images/penguin.png",
   "./Images/catwoman.jpg",
   "./Images/alfred.jpg",
   "./Images/c.gordon.png",
   "./Images/wayne.jpg",
  "./Images/vale.jpg",
  "./Images/dent.jpg"
   
]

let charactersCopy = [ //This is created so that it can generate a random character for the whole awway
    "./Images/batman.jpg",
    "./Images/joker.jpg",
    "./Images/penguin.png",
    "./Images/catwoman.jpg",
    "./Images/alfred.jpg",
    "./Images/c.gordon.png",
    "./Images/wayne.jpg",
   "./Images/vale.jpg",
   "./Images/dent.jpg"

]


function startGame(){

   
    start.style.visibility = "hidden"; // the button with id "start" will be hidden after it is pressed
    setBoxes();

    reveal1();

    setTimeout(function(){
        reveal2();
    },gameTime);

    setTimeout(function(){
        reveal3();
    },(gameTime*2));

    setTimeout(function(){
        matchingBox();
    },(gameTime*3));
       
   

}



function randomize(){ //Generates a random image and put it in a box
 
        let number = Math.floor(Math.random()*characters.length);
    box = characters[number];
    console.log(box);
    characters.splice(number, 1);
    return box;   

}

function setBoxes(){
    
     box1 = randomize();
     box2 = randomize();
     box3 = randomize();
     box4 = randomize();
     box5 = randomize();
     box6 = randomize();
     box7 = randomize();
     box8 = randomize();
     box9 = randomize();

    
}


function reveal1(){ //reveals the first 3 characters
    document.getElementById("box3").outerHTML= `<img src=${box3} class="grid-item" id="box3"></img>`;
    document.getElementById("box7").outerHTML= `<img src=${box7} class="grid-item" id="box7"></img>`;
    document.getElementById("box8").outerHTML= `<img src=${box8} class="grid-item" id="box8"></img>`;
    

}

function reveal2(){ 

    //reveals 3 more characters while hiding the previous ones again in the code below this
    document.getElementById("box1").outerHTML= `<img src=${box1} class="grid-item" id="box1"></img>`;
    document.getElementById("box6").outerHTML= `<img src=${box6} class="grid-item" id="box6"></img>`;
    document.getElementById("box9").outerHTML= `<img src=${box9} class="grid-item" id="box9"></img>`;

    document.getElementById("box3").outerHTML= `<img class="grid-item" id="box3"></img>`;
    document.getElementById("box7").outerHTML= `<img class="grid-item" id="box7"></img>`;
    document.getElementById("box8").outerHTML= `<img class="grid-item" id="box8"></img>`;
    //hid characters again
}

function reveal3(){



    document.getElementById("box2").outerHTML= `<img src=${box2} class="grid-item" id="box2"></img>`;
    document.getElementById("box4").outerHTML= `<img src=${box4} class="grid-item" id="box4"></img>`;
    document.getElementById("box5").outerHTML= `<img src=${box5} class="grid-item" id="box5"></img>`;

    document.getElementById("box1").outerHTML= `<img class="grid-item" id="box1"></img>`;
    document.getElementById("box6").outerHTML= `<img class="grid-item" id="box6"></img>`;
    document.getElementById("box9").outerHTML= `<img class="grid-item" id="box9"></img>`;
}

function matchingBox(){

    console.log(charactersCopy);

    let number = Math.floor(Math.random()*charactersCopy.length);
    box10 = charactersCopy[number];

    document.getElementById("box10").outerHTML= `<img src=${box10} class="grid-item" id="box10"></img>`; // Match this one first

    //Adds function availability after all boxed have been shown so user can click
    document.getElementById("box1").outerHTML= `<img onclick="revealBox1()" class="grid-item" id="box1"></img>`;
    document.getElementById("box2").outerHTML= `<img onclick="revealBox2()" class="grid-item" id="box2"></img>`;
    document.getElementById("box3").outerHTML= `<img onclick="revealBox3()"  class="grid-item" id="box3"></img>`;
    document.getElementById("box4").outerHTML= `<img onclick="revealBox4()"  class="grid-item" id="box4"></img>`;
    document.getElementById("box5").outerHTML= `<img onclick="revealBox5()"  class="grid-item" id="box5"></img>`;
    document.getElementById("box6").outerHTML= `<img onclick="revealBox6()"  class="grid-item" id="box6"></img>`;
    document.getElementById("box7").outerHTML= `<img onclick="revealBox7()"  class="grid-item" id="box7"></img>`;
    document.getElementById("box8").outerHTML= `<img onclick="revealBox8()"  class="grid-item" id="box8"></img>`;
    document.getElementById("box9").outerHTML= `<img onclick="revealBox9()"  class="grid-item" id="box9"></img>`;

}



function revealBox1(){
    let x = document.getElementById("box1").src= box1;
   
    if (x == box10){ //If matches you win
        return youWin(); //console.log("You win")
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
        
        document.getElementById("box1").outerHTML= `<img onclick="revealBox1()" class="grid-item" id="box1"></img>`;
        },3000);
    }    
    

}

function revealBox2(){
    let x = document.getElementById("box2").src= box2;
   
    if (x == box10){ //If matched you win

        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
         setTimeout(function(){             
            document.getElementById("box2").outerHTML= `<img onclick="revealBox2()" class="grid-item" id="box2"></img>`;
            },3000)
        
        
    }    
    

}

function revealBox3(){
    let x = document.getElementById("box3").src=box3;
    
    if (x == box10){ //If matched you win
        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
            document.getElementById("box3").outerHTML= `<img onclick="revealBox3()" class="grid-item" id="box3"></img>`;
            },3000);
        
       
    }    
    

}

function revealBox4(){
    let x = document.getElementById("box4").src=box4;
    
    if (x == box10){ //If matched you win
        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
            document.getElementById("box4").outerHTML= `<img onclick="revealBox4()" class="grid-item" id="box4"></img>`;
            },3000);
        
       
    }    
    

}

function revealBox5(){
    let x = document.getElementById("box5").src=box5;
    
    if (x == box10){ //If matched you win
        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
            document.getElementById("box5").outerHTML= `<img onclick="revealBox5()" class="grid-item" id="box5"></img>`;
            },3000);
        
       
    }    
    

}

function revealBox6(){
    let x = document.getElementById("box6").src=box6;
    
    if (x == box10){ //If matched you win
        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
            document.getElementById("box6").outerHTML= `<img onclick="revealBox6()" class="grid-item" id="box6"></img>`;
            },3000);
        
       
    }    
    

}

function revealBox7(){
    let x = document.getElementById("box7").src=box7;
    
    if (x == box10){ //If matched you win
        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
            document.getElementById("box7").outerHTML= `<img onclick="revealBox7()" class="grid-item" id="box7"></img>`;
            },3000);
        
       
    }    
    

}

function revealBox8(){
    let x = document.getElementById("box8").src=box8;
    
    if (x == box10){ //If matched you win
        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
            document.getElementById("box8").outerHTML= `<img onclick="revealBox8()" class="grid-item" id="box8"></img>`;
            },3000);
        
       
    }    
    

}

function revealBox9(){
    let x = document.getElementById("box9").src=box9;
    
    if (x == box10){ //If matched you win

        return youWin(); //console.log("You win")
        
        
    } else { //Hides character if unmatched
        counter+=1;
        lostLife();
        setTimeout(function(){
            document.getElementById("box9").outerHTML= `<img onclick="revealBox9()" class="grid-item" id="box9"></img>`;
            },3000);
        
       
    }    
    

}

function lostLife(){
    let elem = document.querySelector(".bat-logo");//Returns the first element by class name "bat-logo"
    if (!elem){
        return
    }
    console.log(elem)

    elem.outerHTML = "";

    if (counter==3){
        document.getElementById("lives").innerHTML = `<h1>You Loose</h1>`;
        setTimeout(function(){
        
        document.getElementById("default").innerHTML = `

        <img class="grid-item" ></img>
        <img class="grid-item" ></img>
        <img class="grid-item" ></img>
        <img class="grid-item" ></img>
        <img class="grid-item" ></img>
        <img class="grid-item" "></img>
        <img class="grid-item" ></img>
        <img class="grid-item" ></img>
        <img class="grid-item" ></img>
        <img class="grid-item" id="box10"></img>
       
        `
       
        },500);
    }

}

function youWin(){
    document.getElementById("matchStatus").innerHTML =`<h1>Match!</h1>`;
    setTimeout(function(){
        document.getElementById("matchStatus").innerHTML =``;
    },2000);
    matchedScore++;
    document.getElementById("score").innerHTML = `Score = ${matchedScore}`;
    console.log("Your score is "+matchedScore);
    //console.log(document.querySelectorAll(".grid-item"));

    characters = [
        "./Images/batman.jpg",
         "./Images/joker.jpg",
         "./Images/penguin.png",
         "./Images/catwoman.jpg",
         "./Images/alfred.jpg",
         "./Images/c.gordon.png",
         "./Images/wayne.jpg",
        "./Images/vale.jpg",
        "./Images/dent.jpg"
         
      ]
    //console.log(characters);
    //console.log(charactersCopy);
    
    setTimeout(function(){
        
        document.getElementById("default").outerHTML = `

        <div class="grid-wrapper" id="default">
        <img class="grid-item" id="box1"></img>
        <img class="grid-item" id="box2"></img>
        <img class="grid-item" id="box3"></img>
        <img class="grid-item" id="box4"></img>
        <img class="grid-item" id="box5"></img>
        <img class="grid-item" id="box6"></img>
        <img class="grid-item" id="box7"></img>
        <img class="grid-item" id="box8"></img>
        <img class="grid-item" id="box9"></img>
        <img class="grid-item" id="box10"></img>

        
        <button id="start" onclick="startGame()" style="font-size: 40px;">Continue</button>
       
      </div>
        `
       
        },1000);
        
        if (gameTime>500){
        gameTime-=500;
        }
}