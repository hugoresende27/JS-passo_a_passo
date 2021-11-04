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
   const ativos = document.querySelectorAll('.ativo');
   console.log(  (  (ativos.length-1) / (cir.length-1) ) * 100 + '%');
   progresso.style.width = ((ativos.length-1) / (cir.length-1) ) * 100 + '%';

   if (ativo === 1)
   {
       antes.disabled = true;
   }
   else if (ativo === cir.length)
   {
       depois.disabled =true;
   }
   else
   {
       antes.disabled = false;
       depois.disabled = false;
   }
};

/////////////////////////////////PROCURAR ///////////////////////////
const search = document.querySelector('.procurar');
const btn = document.querySelector('.btnProc');
const input = document.querySelector('.input');

btn.addEventListener('click', () =>
{
    search.classList.toggle('ativo')    // toogle para adicionar ou remover classes
    input.focus()
})

