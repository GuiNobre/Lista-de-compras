    let frutas = [];
    let laticinios = [];
    let congelados = [];
    let doces = [] 
    let sim = 'Sim'
    let nao = 'Não'
    let indice = 'sim'
    let lista = ['frutas', 'laticinios', 'congelados', 'doces']

    do {
    indice = prompt ('Gostaria de adicionar mais algo à sua lista de compras?')
                    console.log(indice)
            if (indice == sim) {var adicionando = prompt('Frutas, laticínios, congelados ou doces?')
                    if (adicionando === lista[0]) 
                    {   var produto = prompt('Qual?')
                        frutas.push(produto)}
                    else if (adicionando === lista[1]) 
                    {   var produto = prompt('Qual?')
                        laticinios.push(produto)}
                    else if (adicionando === lista[2]) 
                        {   var produto = prompt('Qual?')
                            congelados.push(produto)}
                    else if (adicionando === lista[3]) 
                            {   var produto = prompt('Qual?')
                                doces.push(produto)}
        } 
    } while(indice == sim)

        if(indice == nao)
                alert(`Essa é a sua lista:\n Frutas:${frutas}\n Laticínios:${laticinios}\n Congelados:${congelados}\n Doces:${doces}`)
            