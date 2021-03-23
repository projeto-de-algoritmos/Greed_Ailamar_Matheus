let submitButton;

$(document).ready(function(){
    
    $.ajax({
        type: "POST",
        url: "http://localhost:8000/",
        data: JSON.stringify({duration: -1}),
        contentType: "application/json",
    });
    submitButton = $("#submit");
    submitButton.click(adicionar);
    // sortButton = $("#sort");
    // sortButton.click(ordenar);
})

function adicionar() {
    var $task = $('#task');
    var $duration = $('#duration');
    var $deadline = $('#deadline');
    var $resposta = $('#resposta');


    if (task.value == '' || duration.value == '' || deadline.value == '' ) {
        window.alert('[ERROR] Não é possível adicionar campos vazios. Verifique os dados e tente novamente!')
    } else {
        let data = {	
            task : $task[0].value, 
            deadline : $deadline[0].value,
            duration : $duration[0].value
        };
        let url = "http://localhost:8000/";
        $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: (res)=>{
                let tempo = res.final;
                let atrasoTotal = res.totalLateness;
                let listaOrdenada = res.list;
                //console.log(res);
                $resposta[0].innerHTML = '<strong> Tarefas com melhor ordem de execução: </strong><br><br>';
                $resposta[0].innerHTML += '<table><tr><th> Tarefa </th><th> Duração </th><th> Prazo </th></tr></table>';
                let count = 1;
                for(let i = 0; i < listaOrdenada.length; i++){
                    $resposta[0].innerHTML += (`<table><tr><td> ${listaOrdenada[i]._label} </td><td> ${listaOrdenada[i]._finish} </td><td> ${listaOrdenada[i]._start} </td></tr></table>`);
                }
            $resposta[0].innerHTML += `<br><div><strong>Tempo total:</strong> ${tempo} <br><br><strong>Atraso total:</strong> ${atrasoTotal}</div>`;
            }
        });
    }
}
