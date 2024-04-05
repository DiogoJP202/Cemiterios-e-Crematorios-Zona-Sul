let ativado = false;

document.addEventListener("click", event => {
    const element = event.target;

    if(element.classList.contains("hamburger") || element.classList.contains("line")){
        const hamburger = document.querySelectorAll(".line");
        const menu =  document.querySelectorAll(".links")[0];
        
        if(ativado === false){
            hamburger[0].style.transform = "rotate(45deg)";
            hamburger[0].style.top = "43%";
            hamburger[1].style.height = "0%";
            hamburger[2].style.transform = "rotate(-45deg)";
            hamburger[2].style.top = "-43%";

            menu.style.display = "flex"

            return ativado = true;
        };

        if(ativado === true){
            hamburger[0].style.transform = "rotate(0deg)"
            hamburger[0].style.top = "0";
            hamburger[1].style.height = "15%";
            hamburger[2].style.transform = "rotate(0deg)";
            hamburger[2].style.top = "0";

            menu.style.display = "none"

            return ativado = false;
        };
    };
});

// Código feito por Diogo Antonny https://github.com/DiogoJP202