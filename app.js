let input = document.querySelector(".text");
let dan = document.querySelector(".dan");
let ga = document.querySelector(".ga");
let natija = document.querySelector(".natija");
let btn = document.querySelector(".btn");


btn.addEventListener("click", function(){

    if(dan.value == "uzs" && ga.value == "rubl"){
        natija.innerHTML = input.value * 0.072;
    }else if(dan.value == "usd" && ga.value == "rubl"){
        natija.innerHTML = input.value * 90.95;
        }
        else if(dan.value == "rubl" && ga.value == "usd"){
            natija.innerHTML = input.value * 0.011 ;
        }else if(dan.value == "rubl" && ga.value == "uzs"){
            natija.innerHTML = input.value * 139.26  ;
            }
})