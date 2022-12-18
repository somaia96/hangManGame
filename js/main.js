fetch("js/words.json")
.then(res=>res.json())
.then((res)=>{
    let user = "user";

    // get a random element of json file words
    let index = Math.floor(Math.random() * 21);

    // the span of user name
    let name = document.querySelector(".name");

    // the span of type the word
    let type = document.querySelector(".type");
    type.innerHTML=`Type: ${res[index].type}`;

    // number of word's letters
    let spansNum =res[index].word.length;

    // the word div
    let word = document.querySelector(".word");
    for(let i =0;i<spansNum;i++){
        // create lines of word's letters number
        let span = document.createElement("span");
        word.appendChild(span);
    }
    name.innerHTML=`Name: ${user}`;
    window.addEventListener("click",function(e){
        
        // console.log(e.target.className);
        if(e.target.className == "letter"){
            e.target.style.filter="grayscale(1)";
            console.log(e.target.innerHTML);
        }
    })

})

let colors = document.querySelectorAll(".color");
colors.forEach((e)=>{
    e.onclick= function(){
        // console.log(e.classList[1]);
        if(e.classList[1] == "green"){
            document.body.style.cssText="--hangColor:#3e894a;--personColor:#09721a;";
        }
        if(e.classList[1] == "blue"){
            document.body.style.cssText="--hangColor:#55acc4;--personColor:#095b72;";
        }
        if(e.classList[1] == "red"){
            document.body.style.cssText="--hangColor:red;--personColor:#720909;";
        }
        if(e.classList[1] == "purple"){
            document.body.style.cssText="--hangColor:#962eb2;--personColor:#5c0972;";
        }
        if(e.classList[1] == "yellow"){
            document.body.style.cssText="--hangColor:#a49903;--personColor:#726b09;";
        }
    }
})