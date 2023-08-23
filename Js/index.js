// Utilize o plugin jQuery Mask Plugin para aplicar máscara
// aos campos de CPF e CEP; 

$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
})