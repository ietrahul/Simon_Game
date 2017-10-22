var score = 3, seq = [], myVar, start =0;
$(document).ready(function() {

$('#btn-toggle').change(function() {
        if (document.getElementById('btn-toggle').checked) {
           // console.log("i m here--");
            $(".score").html("- -");
        }
    });
});

function displaySound(currentBtn, audioId) {
    console.log("currentBtn:" + currentBtn +"  audioId:" + audioId);
    document.getElementById(audioId).play();
    setTimeout(function(){
        document.getElementById(audioId).pause();
       // player.currentTime = 0;
    }, 3000);
    //document.getElementById(audioId).play();
    var property = document.getElementById(currentBtn);
    var OldBtnColor = property.style.backgroundColor ;
    console.log("OldBtnColor:" + OldBtnColor);
    var btnColor;
    switch(currentBtn) {
    case "btn1":
        btnColor = "#0a5ef4";
        break;
    case "btn2":
        btnColor = "#FFFFFF";
        break;
    case "btn3":
        btnColor = "#FFFFFF";
        break;
    case "btn4":
        btnColor = "#FFFFFF";
        break;
    default:
        btnColor = "#FFFFFF";
};
  console.log("bg backgroundColor:" + btnColor);
       property.style.backgroundColor = btnColor;
}

function startGame(){
   // console.log("In startGame:" + score.value);
  //reset seq
  seq = [];
  document.getElementById("score").innerHTML = "01";
  for (i=0; i<5; i++){
   //var num = Math.floor((Math.random() * 4) + 1);
   seq.push(Math.floor((Math.random() * 4) + 1));
  }
  console.log(seq);

myVar = setInterval(playNow, 3000);

  //document.getElementById('audio1').play();
  //setInterval(change, 1000);
  //var property = document.getElementById('btn1');
  //console.log("bg backgroundColor:" + property.style.backgroundColor);
    //        property.style.backgroundColor = "#0a5ef4";
}

function playNow(){
     //for (i=0; i< score; i++){
        console.log("start--"+ start);
    if (start > 0) {
        document.getElementById("btn" + seq[start-1]).style.backgroundColor ="";
    }

    if (start < score){
    var currentBtn = "btn" + seq[start];
    var audioId = "audio" + seq[start];
    start +=1;
    displaySound(currentBtn, audioId);
    } else {
     //setInterval(displaySound(currentBtn, audioId), 2000);
     clearInterval(myVar);
     start = 0;
    }

  //}
}


