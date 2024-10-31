const postive=document.querySelector("#positive");
const negative=document.querySelector("#negative");
const picture=document.querySelector("#myImg");
const bigt=document.querySelector("#bigt");
const btns=document.querySelector(".btns");
//when clicked on bolo
postive.addEventListener("click",()=>{
    console.log("dwidqwi");
    bigt.innerText="i'm sorry😓";
    picture.src="https://media.tenor.com/ZugYIZezc7AAAAAi/excuses-so-sorry.gif";
    
    postive.innerText="Accha Thik Hai";
    postive.addEventListener("click", ()=>{//clicked on accha thik hai
        bigt.innerText="yaah! me happy happy!!🥰😍😘";
        
        picture.src="https://media.tenor.com/pUQGNMgYn1cAAAAi/tkthao219-bubududu.gif";
        btns.style.display="none";

    })
    negative.addEventListener("click", ()=>{//clicked on nahi
        btns.style.display="flex";
        console.log("dsd");
        bigt.innerText="Soch Lo😭";
        negative.innerText="Nahi Sochna";
        picture.src="https://media.tenor.com/yZoKXA08ZyYAAAAi/bubu-bubu-dudu.gif";
        postive.addEventListener("click", ()=>{//clicked on accha thik hai
        
            bigt.innerText="yaah! me happy happy!!🥰😍😘";
        
            picture.src="https://media.tenor.com/pUQGNMgYn1cAAAAi/tkthao219-bubududu.gif";
            btns.style.display="none";
            postive.innerText="Accha Thik Hai";
    
        })
        negative.addEventListener("click", ()=>{//clicked on nahi sochna
            bigt.innerText="Ek aur baar soch hi lo" ; 
            picture.src="https://media1.tenor.com/m/PFCd91nuk3sAAAAd/milk-and-mocha-bear-sorry-na.gif";

            postive.innerText="Accha Thik Hai";
            postive.addEventListener("click", ()=>{//clicked on accha thik hai
        
                bigt.innerText="yaah! me happy happy!!🥰😍😘";
            
                picture.src="https://media.tenor.com/pUQGNMgYn1cAAAAi/tkthao219-bubududu.gif";
                btns.style.display="none";
                postive.innerText="Accha Thik Hai";
        
            })
            const offset = 100;

            negative.addEventListener("mouseenter", () => {
                const buttonRect = negative.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                console.log(viewportHeight);
                
                console.log("dnlkned");
                
                let newLeft = Math.random() * (viewportWidth - buttonRect.width);
                let newTop = Math.random() * (viewportHeight - buttonRect.height);
                console.log(newLeft);
               
               
                function myFunction(x) {
                    if (x.matches) { 
                        negative.style.position="absolute";
                        negative.style.left = `${newLeft/3}ox`;
                        negative.style.top = `${newTop/3}px`;
                    } else {
                        negative.style.position="absolute";
                        negative.style.left = `${newLeft/3}px`;
                        negative.style.top = `${newTop/3}px`;
                    }
                  }
                  var x = window.matchMedia("(max-width: 420px)");
                  myFunction(x);
                  
                  // Attach listener function on state changes
                  x.addEventListener("change", function() {
                    myFunction(x);
                  });
                

            });
        })
        
    })

})
negative.addEventListener("click", ()=>{//Nahi
    console.log("dsd");
    
    picture.src="https://media.tenor.com/fEffECDWFXQAAAAM/ashneer-grover-ashish-chanchlani.gif";
    btns.style.display="none";

})