let cards = document.querySelectorAll(".card-text");
let card2 = []
let nb_clic = 0


cards.forEach (function (card){
    card.addEventListener("click", function(e) {
        
        if (nb_clic == 2) {
            nb_clic = 0
            card2=[];
            console.log(card2)
        }

        img = e.target.parentElement.querySelector(".card-img-top");
        card2.push(img);
        nb_clic ++;

            e.target.parentElement.classList.add("open");
            img.classList.add("visibleimg");
            img.classList.remove("hiddenimg");
            console.log(nb_clic);

        if (nb_clic == 2) {
            setTimeout(function (){
                for (let index = 0; index < card2.length; index++) {
                        //console.log(e.target.parentElement.classList)
                        //console.log(card2[index])
                    e.target.parentElement.classList.add("close");
                    card2[index].classList.remove("visibleimg");
                    card2[index].classList.add("hiddenimg");

                }
            },1000)

            setTimeout(function(){
                    e.target.parentElement.classList.remove("open" , "close");
            },2000) 
        }


            console.log(card2[0].src)
            //console.log(card2[0].src == card2[1].src)
            if (card2[0].src == card2[1].src) {
                e.target.parentElement.classList.add("hiddencard");
                card2[0].parentElement.classList.add("hiddencard")
            }
            
    })

    
});

