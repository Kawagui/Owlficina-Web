//document.body.onload = addElement;
if(document.body!=undefined)document.body.addEventListener("load", addElement());

function addElement(){ // Criar input
    const input = document.createElement("input");
    input.type="text";
    input.maxLength="10";
    input.className="inputs";
    var tentativas = document.getElementById("inputs");
    tentativas.appendChild(input);   
}

function isCorrect(inputs, i){ // Melhorar isto
    const sobre=document.querySelector('.sobre'); // Criar camada para sobreposição do input ao verificar tentativa
    sobre.innerHTML="";
    const temp=inputs[i].value.split('');
    var pivo=-1;
    var is=true;
    temp.forEach((e, j)=>{
        const letra=e.toUpperCase();
        const span=document.createElement("span");
        span.textContent=letra;
        if(resp.includes(letra)){
            const aux=resp.indexOf(letra);
            if(aux>=pivo){
                pivo=aux;
                span.classList.add("ordem");
                if(j===0){
                    span.classList.add("ordemE");
                } else {
                    if(j===temp.length-1){
                        span.classList.add("ordemD");
                    }
                }
            } else {
                span.classList.add("presente");
                is=false;
            }
        } else {
            span.classList.add("ausente");
            is=false;
        }
        sobre.appendChild(span);
    });
    return is;
}

// "Main" do Letroso
var win=false;  // Boolean de vitória
var i=1;    // Número de tentativas
const resp="OWLFICINA".split('');
//console.log(resp);
    document.addEventListener('keydown', (e)=>{ // Validar tentativa ao pressionar Enter
        if(e.key==='Enter'){
            const inputs=document.querySelectorAll(".inputs"); // Construo vetor a partir dos inputs
            if(isCorrect(inputs, i-1)){ // Chamar função para verificar se a tentativa está correta
                win=true;   // Encerrar o jogo quando descobrir a palavra
                console.log('Ganhastes!!');
            } else{
                const maisUm=addElement(); // Se não, tentar de novo
                i++;
            }
        }
    });
