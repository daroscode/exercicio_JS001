function exercise() {
    let person = prompt("Escreva seu nome por gentileza:", "");
    let person2 = prompt("Escreva o nome do(a) acompanhante:", "");
    let price = prompt("Escreva o valor da passagem:", "");
    let installments = prompt("Se deseja parcelar, informe em quantas vezes (0 para nenhuma):", "");
    let installment = 0;

    if (person2 != null && person2 != "") {
        $("#secondperson").html(person2);
        price = parseFloat(price * 2, 10).toFixed(2);  
    } else {
        $("#secondperson").html("Ninguém"); 
    }

    if (installments != "" && installments != 0) {
        installment =  parseFloat(price) / parseFloat(installments);
     } else {
         $("#installment").css("display", "none"); 
     }

    if (person != null) {
        $("#resulttable").css("display", "block");
        $("#firstperson").html(person);
        $("#price").html(price);
        $("#partprice").html(installment.toFixed(2));
        $("#partpricenumber").html(installments);
    }
}