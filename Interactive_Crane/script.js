function pickup_position(){
    var v_move = document.getElementById("verticalRange").value;
    var h_move = document.getElementById("horizentalRange").value;

    if(v_move === "280" && h_move === "335"){
        alert("Now you can move the box!");
        fixed = "ok";
    }

    else{
         alert("You are not in the correct position!");
        }
    }

function drop_position(){
    var v_move = document.getElementById("verticalRange").value;
    var h_move = document.getElementById("horizentalRange").value;

    if(v_move === "250" && h_move === "220"){
        alert("Well done!");
        fixed = "";
    }

    else{
        alert("You are not in the correct position!");
        }

    }


function engine_start(){
    document.getElementById('myAudio').play();
}

function engine_end(){
    document.getElementById('myAudio').pause();
}
