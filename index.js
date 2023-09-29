//FORMATAÇÃO DA MOEDA..
let formatting_options = {
    style: 'currency',
    currency: 'AKZ',
    minimumFractionDigits:2,
 }
function calcularIVA(taxaIva,valor){
    const resul=(valor*taxaIva)/100
    return  resul.toLocaleString("pt-AO",formatting_options)
}
console.log(calcularIVA(7,1500))

//Calcular IVA incluido
function ivaIncluido(base,taxaIva){
        var txCalcular=0
        var bformatada
        var totalIvaincluido

                switch(taxaIva){
        
                    case 5:
                        txCalcular=105
                        break;
                    case 7:
                        txCalcular=107
                        break;
                    case 14:
                        txCalcular=114
                        break;
                     default:
                        if(taxaIva>10){
                             txCalcular=100+taxaIva
                        }else{
                            txCalcular=100+taxaIva
                        }
                }
                bformatada= Math.floor(base*(taxaIva/txCalcular)*100)
                console.log(bformatada.toLocaleString("pt-AO",formatting_options))
                totalIvaincluido=base*((taxaIva/txCalcular)*100)
                return   totalIvaincluido.toLocaleString("pt-AO",formatting_options)
            }



console.log(ivaIncluido(5000,14))