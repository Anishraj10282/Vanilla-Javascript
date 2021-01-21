let title = document.querySelector('.title');
let billing_area = document.querySelector('.billing-area')
let sel = document.querySelector('#movie');

document.addEventListener("click", seatSelected);


function seatSelected(e)
{
    if(e.target.classList.contains('vacant'))
    {
        console.log(e.target);

        i = e.target;
        i.classList.remove('vacant');
        i.classList.add('selected');
    }
    else if(e.target.classList.contains('selected'))
    {
        i = e.target;
        i.classList.remove('selected');
        i.classList.add('vacant');
    }
    let selected = document.querySelectorAll('.selected');
    let length = selected.length;
    

    billing_area.innerHTML = `You have selected ${length} seat(s) at a price of ${length*Number(sel.value)}.`;
}


