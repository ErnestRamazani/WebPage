/*****************************************************
 Author: Ernest Ramazani 
 Date: 9 December, 2022
 IUPUI // NEWM N220 Fall 2022
 Filename: app.js
 Purpose: Script page for the Concentration game
 ****************************************************/

/******************************************************************************************************
This program creates the game "Concentration". The user have 8 cards with 4 similar faces laid out
face-down. He must find all 4 pairs to win the game 
*******************************************************************************************************/

/*********************
 CODES
 *********************/


//Declaring variables 
var won     = 0;
var Count      = 0;
var lastCard  = null;
var mDebug  = false;

// 4 values * 2 = 8 cared, 5 values * 2 = 10 cards etc...
var cardArray = new Array("A", "B", "C", "D");
var cardVal  = cardArray.concat(cardArray);
var nbrVal   = cardVal.length;
var arrCardDraw  = new Array(nbrVal);
var drawCard      = true;
var myTries   = 0;
var pairFound    = 0;

// timer in sec
var timerSec      = 1000;

//This function returns all card (back side)
//This function does not take any argument 
//This function calls another function, drawCardFunction
function initCard()
{
  objColTr = document.getElementById('cardTab').rows;

  for(i=0; i < objColTr.length; i++)
  {
    colTd = objColTr[i].cells
    for(x=0; x < colTd.length; x++)
    {
    	colTd[x].style.backgroundImage = "";
      colTd[x].className = "Back";
    }
  }
  Count = 0;
  document.getElementById('replay').disabled = true;
  document.getElementById("result").innerHTML=" "; 
  drawCardFunction();
}

// This function randomly draws cards 
//This function does not take any argument 
function drawCardFunction()
{
  var objMSG    = document.getElementById("MSG");
  var objColTr  = document.getElementById('cardTab').rows;
  var cardNbr = (objColTr[0].cells.length * objColTr.length);
  var objDebug  = document.getElementById("DivDebug");

  var keepGoing        = true;
  var Buffer    = "";
  var counter1  = 0;
  
  // Show and mask infos for debugging
  objDebug.style.display = (mDebug) ? "block" : "none";

  // Card number must be equal to the number of value 
  // Must be a pair 
  if(nbrVal == cardNbr)
  {
    while(keepGoing)
    {
      var drawCard = Math.floor(Math.random() * cardNbr);
      var reg    = new RegExp("#"+drawCard+":", "gi") ;

      if (!reg.test(Buffer))
      {
        arrCardDraw[counter1] = cardVal[drawCard];
        Buffer += "#" + drawCard+ ":"; 

        // Display buffer for debugging
        objMSG.innerHTML = Buffer;
        counter1 ++;
        if(counter1 == cardNbr) keepGoing = false;
      }
    }
  }
}

// timer Reset
function resetChoice(objID, objLast)
{
  objID   = document.getElementById(objID);
  objLast = document.getElementById(objLast);
  
  // No images
  objID.style.backgroundImage   = "";
  objLast.style.backgroundImage = "";

  // Back
  objID.className   = "Back";
  objLast.className = "Back";
  drawCard            = true;

}

// This function is called when the user click on the card 
//This function takes only 1 argument 
//This function is in charge of controlling the game., whether two cards are similars 
function turnCard(objID)
{
	// Card should not be returned 
  if(drawCard && objID.className != "Front")
  {
    drawCard = false;

    if(lastCard == null)
    {
      objID.className = "Front";
      objID.style.backgroundImage = "url("+arrCardDraw[objID.id]+".jpg)";
      lastCard       = objID;
      drawCard          = true;
    }
    else
    {
      if(lastCard.id != objID.id && objID.className != "Front")
      {
        // Return card and show ots value(the face)
        objID.className = "Front";
        objID.style.backgroundImage = "url("+arrCardDraw[objID.id]+".jpg)";

        // If both card returned are differents 
        if(arrCardDraw[objID.id] != arrCardDraw[lastCard.id])
        {
          //timer 
          a = setTimeout( "resetChoice(" + objID.id + ", "+ lastCard.id + ")", timerSec);
          lastCard       = null;
        }
        else
        {
          //if both returned card are equal 
          lastCard       = null;
          Count ++;
          pairFound ++;
          document.getElementById('paires').innerHTML = pairFound;

          //If you find all pairs
          if(Count == (nbrVal/2))
          {
            won   ++;
            document.getElementById('Nbrwon').innerHTML = won;
            document.getElementById('replay').disabled = false;
            document.getElementById("result").innerHTML="You Win!!!!"; 
          }
          drawCard = true;
        }

        myTries ++;
        document.getElementById('Try').innerHTML = myTries;

      }
    }
  }
}

window.onload = drawCardFunction;
