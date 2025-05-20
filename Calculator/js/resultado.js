//fazer os raciocinios da corrente neural necessarios

function resultado(){

    const pessoa = JSON.parse(localStorage.getItem("pessoa"));

    let imc = (pessoa.peso/((pessoa.altura/100)**2));

    let basal;

    //verificar e calcular masculino de todas as faixas etarias
    if (pessoa.sexo === "masculino"){ 
        if(pessoa.idade > 0 && pessoa.idade <=3){
            basal = (60.9 * pessoa.peso - 54);
        }
        else if(pessoa.idade >3 && pessoa.idade <10){
            basal = (22.7 * pessoa.peso + 495);
        }
        else if(pessoa.idade >=10 && pessoa.idade <=18){
            basal = (17.5 * pessoa.peso + 651);
        }
        else if(pessoa.idade >60){
            basal = ((10 * pessoa.peso) + (6.25 * pessoa.altura) - (5 * pessoa.idade) + 5);
        }
        else {
            basal = 88.362+ (13.397*pessoa.peso) + (4.799* pessoa.altura) - (5.677*pessoa.idade);
        }
     }

//verificar e calcular feminino de todas as faixas etarias
    else if (pessoa.sexo === "feminino"){
        
        if(pessoa.idade > 0 && pessoa.idade <=3){
            basal = (61 * pessoa.peso - 51);
    }
        else if(pessoa.idade > 3 && pessoa.idade < 10){
            basal = (22.5 * pessoa.peso + 499);
        }
        else if(pessoa.idade >= 10 && pessoa.idade <=18){
            basal= (12.2 * pessoa.peso + 746);
        }
        else if(pessoa.idade >60){
            basal = ((10*pessoa.peso)+(6.25*pessoa.altura)-(5*pessoa.idade) - 161);
        }
        else{
            basal = 447.593 + (9.247 * pessoa.peso) + (3.098 * pessoa.altura) - (4.330 * pessoa.idade);
        }
        
        
}
    let fatorAtividade = pessoa.fatorAtividade || 1.2;
    let gastoTotal = basal * fatorAtividade;

    document.getElementById("nome").textContent = pessoa.nome;
    document.getElementById("idade").textContent = pessoa.idade + " anos";
    document.getElementById("peso").textContent = pessoa.peso + " kg";
    document.getElementById("altura").textContent = pessoa.altura + " cm ";
    document.getElementById("sexo").textContent = pessoa.sexo;

    document.getElementById("imc").textContent = imc.toFixed(3);
    document.getElementById("basal").textContent = basal.toFixed(3) + " kcal";
    document.getElementById("gastoTotal").textContent = gastoTotal.toFixed(3) + " kcal";

    
}
    resultado();
