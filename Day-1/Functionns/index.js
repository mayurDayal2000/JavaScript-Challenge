
/*
function expandDetails(){
    for(let items of accordionItemsEl){
        let accHeader = items.firstElementChild
        accHeader.addEventListener("click", function(e){
            let accDetails  = this.nextElementSibling
            if(!accDetails.style.maxHeight && e.target.textContent === "+"){
                accDetails.style.maxHeight = accDetails.scrollHeight + "px";
                e.target.textContent = '-';
            } else{
                accDetails.style.maxHeight = null;
                e.target.textContent = '+';                
            }


        })
    }
}
*/