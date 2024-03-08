let currentdisplay="0";
let resultdisp=false;
let open=0;
let close=0;
updateDisp();
function appendnumber(number){
    if(currentdisplay==="0" || resultdisp){
        currentdisplay=number;
    }
    else{
        currentdisplay+=number;
    }
    resultdisp=false;
    updateDisp();
}
function updateDisp(){
    const dispelement=document.getElementById("answerbox");
    dispelement.textContent=currentdisplay;
}
function brac(){
    const bracs=document.getElementById("answerbox");
    open=0;
    close=0;
    for(let i=0;i<currentdisplay.length;i++){
        if(currentdisplay[i]==="("){open++; }
        if(currentdisplay[i]===")"){close++;}
        
    }
}
function appendopenbrac(){
    currentdisplay+="(";
    updateDisp();
}
function appendclosebrac(){
    brac();
    if(open>close){
        currentdisplay+=")";
    }
    updateDisp();
}
function dellast(){
    currentdisplay = currentdisplay.slice(0, -1);
    if (currentdisplay === "") {
      currentdisplay = "0";
    }
    updateDisp();
}
// function appendbrac(){
//     brac();
//     if(currentdisplay=="0")
//         currentdisplay="(";
//     else{
//         if(open==close){
//         currentdisplay+="(";}
//         else if ((currentdisplay.slice(0,-1)==="1" ||currentdisplay.slice(0,-1)==="2"||currentdisplay.slice(0,-1)==="3"||currentdisplay.slice(0,-1)==="4"||currentdisplay.slice(0,-1)==="5"||currentdisplay.slice(0,-1)==="6"||currentdisplay.slice(0,-1)==="7"||currentdisplay.slice(0,-1)==="8"||currentdisplay.slice(0,-1)==="9") && (open>0)){
//             currentdisplay+=")";
//         }
//         else if (currentdisplay.slice(0,-1)=="*"||
//         currentdisplay.slice(0,-1)==="+"||
//         currentdisplay.slice(0,-1)==="-"||
//         currentdisplay.slice(0,-1)==="/"||
//         currentdisplay.slice(0,-1)==="%"){
//         currentdisplay+="("
//     }
//         else{
//         currentdisplay+=")";}
//     }
// updateDisp();
// }

function result(){
    try{
        const result=eval(currentdisplay)
        currentdisplay+="\n";
        currentdisplay+="= "+result.toString();
        updateDisp();
    }
    catch(error){
        currentdisplay+="\n Error";
        updateDisp();
    }
    resultdisp=true;
}
function cleardisplay(){
    currentdisplay="0";
    updateDisp();
}
function handleOverFlow(){
    if(currentdisplay.length>8){currentdisplay+="\n";}
    
}
window.addEventListener("resize",handleOverFlow);
