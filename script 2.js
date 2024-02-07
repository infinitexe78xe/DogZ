var secid;
var minid;
var hrid;

function start(){
    var i=1,j=1,k=1;
    secid=setInterval(() => {
        if(i<10){
            document.getElementById("sec").innerHTML='0'+i;

        }
        else{
            document.getElementById("sec").innerHTML=i;
        }
        i++;
        if(i==60){
            document.getElementById("sec").innerHTML='00';
            i=1;
        }
    }, 1000);


minid=setInterval(() => {
     if(j<10){
         document.getElementById("min").innerHTML='0'+j;
     }
     else{
         document.getElementById("min").innerHTML=j;
     }
     j++;
     if(j==60){
         document.getElementById("min").innerHTML='00';
         j=1;
     }
}, 60*1000);


hrid=setInterval(() => {
    if(k<10){
        document.getElementById("hr").innerHTML='0'+k;
    }
    else{
        document.getElementById("hr").innerHTML=k;
    }
    k++;
    if(k==60){
        document.getElementById("hr").innerHTML='00';
        k=1;
    }
}, 60*60*1000);
}

//stop button function

function stop(){
      clearInterval(hrid);
      clearInterval(minid);
      clearInterval(secid);
}

//resume stop watch

function resume(){
    window.location.reload();
}