let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".object");
const btn=document.querySelector("#btn")
const Uscore=document.querySelector("#user-score") //  U SCORE MEAN USER SCORE
const Cscore=document.querySelector("#comp-score")  //  C SCORE MEAN COMPUTER SCORE
let updatedscore=Uscore.innerText
let compupdatedscore=Cscore.innerText

const gencompchoice= ()=>{
    const option=["rock","paper","scissors"]
    const randomidx=Math.floor(Math.random()*3)
    return option[randomidx]
}
 const showwinner=(userwin,compchoice,userchoice) => {
    let num=1;
   
    if(userwin){
        console.log(`you win ${userchoice} beats ${compchoice}`);
        btn.innerText = `You win! ${userchoice} Beats ${compchoice}`
        updatedscore++
        Uscore.innerText=updatedscore
     }
    else{
        console.log("you lose")
          btn.innerText = ` You loss! ${userchoice} Beated by ${compchoice} `
          compupdatedscore++
          Cscore.innerText=compupdatedscore
    }
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice)
    const compchoice=gencompchoice()
    console.log("computer choice=", compchoice)
    if(userchoice===compchoice){
        console.log("Game drwan")
          btn.innerText =` Game drawn ${userchoice} = ${compchoice}`
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false : true;
        }
        else{
            compchoice==="rock"? false : true ; 
        }
        showwinner(userwin,compchoice,userchoice)
    }
}

choices.forEach((object) => {
    object.addEventListener("click", () => {
        const userchoice=object.getAttribute("id")
        // console.log("event was clicked", userchoice );
        playgame(userchoice)

    });
});

