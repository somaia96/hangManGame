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
    let wordDiv = document.querySelector(".word");
    for(let i =0;i<spansNum;i++){
        // create lines of word's letters number
        let span = document.createElement("span");
        wordDiv.appendChild(span);
    }

    // write the word in the right place

    // let spansLetters = document.querySelectorAll(".word span")
    // let e =document.querySelector(".word span")
    // let s = window.getComputedStyle(e,"before")
    // let content =s["content"];/////////////////////////////////////////////////////////////////////////


    for(let i=0;i< spansNum;i++){
        // spansLetters[i].style.content=`${res[index].word[i]}`;
        // console.log(spansNum);
        // console.log(spansLetters);
        // console.log(spansLetters[i]);
        // console.log(res[index].word[i]);
    }

    name.innerHTML=`Name: ${user}`;
    let counter =0;
    let hang= document.querySelector(".hang");
    window.addEventListener("click",function(e){
        let word = res[index].word.toUpperCase();
        if(e.target.className == "letter"){
            if(word.includes(e.target.innerHTML)){
                e.target.style.backgroundColor="#fff133";
                // console.log(res[index].word.indexOf(e.target.innerHTML.toLowerCase()));
                
            }else{
            e.target.style.filter="grayscale(1)";
                e.target.classList.add("done");
                counter++;
                console.log(counter);
                if(counter < 7){
                let part = document.createElement("div");
                part.className="part";
                hang.appendChild(part);
                }
                if(counter == 7){
                let part = document.createElement("div");
                part.className="handPart";
                let body = document.querySelector(".part:nth-of-type(6)");
                body.appendChild(part);
                }
                if(counter == 8){
                let part = document.createElement("div");
                part.className="lastPart";
                let body = document.querySelector(".part:nth-of-type(6)");
                body.appendChild(part);
                document.querySelector(".end").style.display="flex";
                document.body.style.cssText="pointer-events: none";
                }
            // console.log(e.target.innerHTML);
            }
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