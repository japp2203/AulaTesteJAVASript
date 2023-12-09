//Tipos referencias

const documentoIdentidade = {
    nome: 'ALBERTO', //uso , porque continuam as infornações
    sobrenome: 'PÉREZ',
    rg: 'F25754-6',
    cpf: '709.297.592-14',
    time: 'VINO TINTO',
    brasileiro: false,
    idade: 49,
}

console.log(documentoIdentidade);

console.log(documentoIdentidade.cpf); //AO COLLOCAR PONTO ANTES DO PARENTESIS DE FECHAMENTO JS AMOSTRA TODOS OS ATRIBUTOS DA VARIAVEL

console.log(documentoIdentidade.rg);

const partesCarro = {

    dono: 'JESUS',
    Tipo: 'Pickup', //uso , porque continuam as infornações
    Marca: 'Nissan',
    Modelo: 'Frontier',
    Combutivel: 'GNV',
    Cambio: 'Manual',
    SemiNovo: false,
    Valor: 49000,
    segundoDono: `O segundo dono é ${documentoIdentidade.nome}`, //USAMOS APOSTROFE quado queremos poxar informação de otras variaveis
}

console.log(partesCarro);




