function cadastrar(){ //cria funcao cadastrar

    const fatorAtividadeInput = document.querySelector('input[name="atividade"]:checked'); //pega o fator de atividade selecionado (radio)
    
    const fatorAtividade = fatorAtividadeInput ? parseFloat(fatorAtividadeInput.value):1.2; //verifica se algum foi selecionado, se nao, adiciona com NULL temporariamente
   
    let pessoa = { 
            nome : document.getElementById("nome").value.toLowerCase(),
            idade : parseInt(document.getElementById("idade").value),
            peso : parseFloat(document.getElementById("peso").value),
            altura : parseFloat(document.getElementById("altura").value),
            sexo : document.getElementById("sexo").value.toLowerCase(),
            fatorAtividade: fatorAtividade
            }; // atribuindo variaveis orientacoes á pessoa

    

    let error = validarPessoa(pessoa, fatorAtividadeInput); 
    if(error.length > 0 ) {
        alert("Corrija os seguintes erros:\n" + error.join("\n"));
    }
    else{
       // alert("Tudo certo, dados salvos!");
        //setTimeout(function () //deixa um delay após o enviar
        //{
        localStorage.setItem("pessoa", JSON.stringify(pessoa));
        window.location.href = "resultado.html"; //redireciona após confirmar que esta tudo certo
        // }, 1500); 
    } //me dá range de erros e faz alert 
}

    function validarPessoa (pessoa,fatorAtividadeInput){ //aqui valida se os dados entraram certo
        let error = []; //puxo error para criar condicoes de quando é erro 

        if(!pessoa.nome || pessoa.nome.trim()===""){
            error.push("Nome precisa ser preenchido!")
        }

        if(isNaN(pessoa.idade)||pessoa.idade<=0){
            error.push("Idade inválida")
        }
        
        if(isNaN(pessoa.peso) || pessoa.peso <= 0 ){
            error.push("Peso preenchido de forma errada!");

        }   
        if(isNaN(pessoa.altura) || pessoa.altura <= 0 ){
            error.push("Altura preenchida de forma errada!");

        }
            
        if(pessoa.sexo !== "masculino" && pessoa.sexo !== "feminino"){
            error.push("O Sexo precisa ser preenchido como (masculino ou feminino).")

        }
        if (!fatorAtividadeInput){
            error.push("Selecione o nível de atividade física.");
        }
        return error; //cria uma funcao que valida se peso, altura e sexo sao condizentes com o esperado.
}
