let restartBtn = document.querySelector(".restart-btn");
let scoreTemplate = document.querySelector("#score");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let continueBtn = document.querySelector("#continue");
let modalBox = document.querySelector(".modal");
let result = document.querySelector("#result");
let resultContent = document.querySelector(".result-content");

let player = 0;
let computer = 0;



restartBtn.addEventListener('click', gameRestart);
continueBtn.addEventListener('click', closeModal);
rock.addEventListener('click', calculateScore);
paper.addEventListener('click', calculateScore);
scissors.addEventListener('click', calculateScore);


function calculateScore(e)
{
    var ranNum = -1;
    let u = 0;
    if(e.target==rock)
    {
        ranNum = 0;
        while(ranNum==0)
        {
            ranNum = Math.floor(Math.random()*3);
        }
        if(ranNum==1)
        {
            console.log("You Loose");
            computer+=1;
        }
        else
        {
            u = 1;
            console.log("You Win");
            player+=1;
        }
    }
    else if(e.target==paper)
    {
        ranNum = 1;
        while(ranNum==1)
        {
            ranNum = Math.floor(Math.random()*3);
        }
        if(ranNum==0)
        {
            u=1;
            console.log("You Win");
            player+=1;
        }
        else
        {
            console.log("You loose");
            computer+=1;
        }
    }
    else if(e.target==scissors)
    {
        ranNum = 2;
        while(ranNum==2)
        {
            ranNum = Math.floor(Math.random()*3);
        }
        if(ranNum==0)
        {
            console.log("You Loose");
            computer+=1;
        }
        else
        {
            u = 1;
            console.log("You Win");
            player+=1;
        }
    }

    scoreTemplate.childNodes[1].innerHTML = "Player : "+player;
    scoreTemplate.childNodes[3].innerHTML = "Computer : "+computer;
    showModal(ranNum, u);

}

function showModal(ranNum, u)
{
    modalBox.style.display = "block";    
    h3 = document.querySelector('.modal-h3');
    if(u==0)
    {
        h3.innerHTML = "You Loose";
    }
    else
    {
        h3.innerHTML = "You Win";
    }

    if(ranNum==0)
    {
        resultContent.innerHTML = "<i class='fas fa-hand-rock fa-10x'></i><p>Computer Selected Rock</p>";
    }
    else if(ranNum==1)
    {
        resultContent.innerHTML = "<i class='fas fa-hand-paper fa-10x'></i><p>Computer Selected Paper</p>";
    }
    else if(ranNum==2)
    {
        resultContent.innerHTML = "<i class='fas fa-hand-scissors fa-10x'></i><p>Computer Selected Scissors</p>";
    }
    


}

function gameRestart(e)
{
    player = 0;
    computer = 0;
    scoreTemplate.childNodes[1].innerHTML = "Player : 0";
    scoreTemplate.childNodes[3].innerHTML = "Computer : 0";
}


function closeModal(e)
{
    modalBox.style.display = "none";
}