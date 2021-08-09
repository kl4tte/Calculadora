async function add (req, res)
{
console.log (req.body);

var numero1 = parseInt (req.body.numero1)
var numero1 = parseInt (req.body.numero2)
var resultado;
var calculadora = req.body.calculadora;

if (calculadora == 'somar')
{
    resultado = numero1 + numero2;
}

else if (calculadora == 'subtrair')
{
    resultado = numero1 - numero2;
}

else if (calculadora == 'multiplicar')
{
    resultado = numero1 * numero2;
}

else if (calculadora == 'dividir')
{
    resultado = numerp1 / numero2;
}

res.render ("calculo/list.ejs", {result: result}
);


}

async function abreAdd (req, res) 
{
    res.render ("calculo/add.ejs", {});
}
 
module.exports = {
     add,
     abreAdd,
}