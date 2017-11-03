var score = 1, seq = [], myVar, start =0, prevExampleId, timer, count =0;
var scoreElementId;

$(document).ready(function() {
  $('#btn-toggle').change(function() {
        if (document.getElementById('btn-toggle').checked) {
           // console.log("i m here--");
            scoreElementId = document.getElementById("score");
            $(".score").html("- -");
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
  seq = [];
  scoreElementId.innerHTML = "01";
  for (i=0; i<20; i++){
   //var num = Math.floor((Math.random() * 4) + 1);
   seq.push(Math.floor((Math.random() * 4) + 1));
  }
  console.log(seq);

myVar = setInterval(playNow, 4000);

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
    } else {
        console.log("turn count --"+ start)
        // btnElements = document.getElementsByClassName('btn');
        document.getElementById("btn" + seq[start-1]).style.WebkitAnimationName ="";
        document.getElementById("btn" + seq[start-1]).style.animationDuration ="";
        document.getElementById('btn1').style.pointerEvents = "auto";
        document.getElementById('btn2').style.pointerEvents = "auto";
        document.getElementById('btn3').style.pointerEvents = "auto";
        document.getElementById('btn4').style.pointerEvents = "auto";
       //timer = setTimeout(5000, lost());
       //clearIntervadocument.getElementsByClassName('btn')l(myVar);
       //start = 0;
    }
}

function validate(id){
    console.log("validate id--" + id +"--seq[count]--"+seq[count]);
    //clearTimeout(timer);
    if (id === seq[count]) {
      count +=1;
        if (count == score){
          score += 1;
          count = 0;
          start = 0;
          scoreElementId.innerHTML = score;
          setPointerEvents("none");
        }
      //timer = setTimeout(5000, lost());
    } else {
        lost();
    }
}

function lost(){
    console.log("lost");
   clearInterval(myVar);
   //clearTimeout(timer);
   //console.log('scoreElementId:' + scoreElementId);
   document.getElementById("audio4").play();
   document.getElementById("audio1").play();
   scoreElementId.innerHTML = "! !";
   score = 1;
   start = 0;
   count = 0;
   setPointerEvents("none");
}

function setPointerEvents(value){
    document.getElementById('btn1').style.pointerEvents = value;
   document.getElementById('btn2').style.pointerEvents = value;
   document.getElementById('btn3').style.pointerEvents = value;
   document.getElementById('btn4').style.pointerEvents = value;
}

