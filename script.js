const progresso = document.getElementById('progresso');
const antes = document.getElementById('prev');
const depois = document.getElementById('next');
const cir = document.querySelectorAll('.circulo');

let ativo = 1;

depois.addEventListener('click', () => 
{
    ativo++;

    if(ativo > cir.length )     //para ir só até ao fim de circulos, neste caso 4
    {
        ativo = cir.length;
    }
    //console.log(ativo);
    update();
});
/////////////////////////////////////////////////////////////
antes.addEventListener('click', () => 
{
    ativo--;

    if(ativo < 1 )          //para parar quando chegar à posição 1
    {
        ativo = 1;
    }
    //console.log(ativo);
    update();
});

function update()
{
    cir.forEach((circulo,index) => 
    {
        if (index < ativo)
        {
            circulo.classList.add('ativo');
        }
        else
        {
            circulo.classList.remove('ativo');
        }
    })
};

