var score = 1, seq = [], myVar, start =0, prevExampleId, count =0, wait10Sec=0, isStrict = false, isOn = false;
var scoreElementId;

$(document).ready(function() {
  $('#btn-toggle').change(function() {
        if (document.getElementById('btn-toggle').checked) {
           // console.log("i m here--");
            isOn = true;
            scoreElementId = document.getElementById("score");
            $(".score").html("- -");
        } else{
            clearInterval(myVar);
            score = 1; seq = []; myVar = null; start = 0; prevExampleId = null;  count =0; wait10Sec=0; isStrict = false;
            isOn = false;
            $(".score").html("");
            document.getElementById('circle3').style.background = "#353333";
        }
    });
});

function displaySound(currentBtn, audioId, exampleId) {
    console.log("currentBtn:" + currentBtn +"  audioId:" + audioId + " exampleId:" + exampleId);
    document.getElementById(audioId).play();
   /*setTimeout(function(){
        document.getElementById(audioId).pause();
       // player.currentTime = 0;
    }, 3000);*/
    var property = document.getElementById(currentBtn);
       prevExampleId = exampleId;
       property.style.WebkitAnimationName = exampleId;
       property.style.animationDuration = '3s';
}

function startGame(){
   // console.log("In startGame:" + score.value);
  //reset seq
  if (isOn){
  seq = [];
  scoreElementId.innerHTML = "01";
  for (i=0; i<20; i++){
   //var num = Math.floor((Math.random() * 4) + 1);
   seq.push(Math.floor((Math.random() * 4) + 1));
  }
  console.log(seq);
  myVar = setInterval(playNow, 4000);
   }

}

function playNow(){
     //for (i=0; i< score; i++){
        console.log("start--"+ start);
    if (start > 0 && seq[start] != seq[start-1]) {
        document.getElementById("btn" + seq[start-1]).style.WebkitAnimationName ="";
        document.getElementById("btn" + seq[start-1]).style.animationDuration ="";
    }

    if (start < score){
      var currentBtn = "btn" + seq[start];
      var audioId = "audio" + seq[start];
      var exampleId = "e" + seq[start];
      if(exampleId === prevExampleId) {
        exampleId = "e" + seq[start] * 10;
      }
      start +=1;
      displaySound(currentBtn, audioId, exampleId);
       if(start === score ){
        setPointerEvents("auto");
       }
    }
     else {
        console.log("turn count --"+ start)
        // btnElements = document.getElementsByClassName('btn');
        document.getElementById("btn" + seq[start-1]).style.WebkitAnimationName ="";
        document.getElementById("btn" + seq[start-1]).style.animationDuration ="";
        wait10Sec +=1;
        if (wait10Sec > 2) lost();
    }
}

function validate(id){
    document.getElementById("audio" + id).play();
    console.log("validate id--" + id +"--seq[count]--"+seq[count] +" :count: "+count);
    wait10Sec = 0;
    if (id === seq[count]) {
      count +=1;
        if (count == score){
          score += 1;
          if(count == 20) {
            scoreElementId.innerHTML = "Won!";
            reset();
          } else {
            scoreElementId.innerHTML = score < 10 ? '0' + score: score;
          }
          count = 0;
          start = 0;
          setPointerEvents("none");
        }
    } else {
        lost();
    }
}

function lost(){
    console.log("lost");
   //console.log('scoreElementId:' + scoreElementId);
   document.getElementById("audio4").play();
   document.getElementById("audio3").play();
   document.getElementById("audio1").play();
   scoreElementId.innerHTML = "! !";
   if(isStrict){
    reset();
   }
   else{
     clearInterval(myVar);
     start = 0;
     count = 0;
     wait10Sec = 0;
     setPointerEvents("none");
     scoreElementId.style.WebkitAnimationName = 'flash';
     scoreElementId.style.animationDuration = '2s';
     setTimeout( function(){ scoreElementId.innerHTML = score < 10 ? '0' + score: score;}, 3000);
     myVar = setInterval(playNow, 4000);
   }

}

function reset(){
   clearInterval(myVar);
   score = 1;
   start = 0;
   count = 0;
   wait10Sec = 0;
   setPointerEvents("none");
}

function setPointerEvents(value){
   document.getElementById('btn1').style.pointerEvents = value;
   document.getElementById('btn2').style.pointerEvents = value;
   document.getElementById('btn3').style.pointerEvents = value;
   document.getElementById('btn4').style.pointerEvents = value;
}

function strictMode(){
  if (isOn) {
    if (isStrict) {
        document.getElementById('circle3').style.background = "#353333";
    } else {
        document.getElementById('circle3').style.background = "red";
    }
     isStrict = !isStrict;
  }
}

