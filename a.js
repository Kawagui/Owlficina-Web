var i=0;
//while(i<10){

//document.body.onload = addElement;
if(document.body!=undefined)document.body.addEventListener("load", addElement());


function addElement(){
    const input = document.createElement("input");
    input.type="text";
    input.maxLength="1";
    input.className="inputs";
    var tentativas = document.getElementById("inputs");
    tentativas.appendChild(input);   
}
// addEvent apagar remover caixa de texto (remove)
// focus para próxima caixa ao digitar
document.addEventListener('keydown', (e)=>{
    const teclei=e.key;
    if(teclei.length===1 && teclei.match(/[a-zA-Z]/) && i<9){
        i++;
        const maisUm=addElement();
        //document.getElementById("inputs").focus();
    }
    a();
});

function a() { // vetor de inputs
    const inputs = document.querySelectorAll(".inputs");
    console.log(inputs);
}

//} 
