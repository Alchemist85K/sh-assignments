const lineShow = document.querySelectorAll('.panel');
//document.getElementsByName('[name="section1"]');
//console.log(lineShow.innerText);

//Just deciding the style for each div tag
for(eachtag of lineShow){
    eachtag.style.display = 'none';
}

const buttonClick = document.querySelectorAll('.btn-section');
//Now for the second loop
for(let i = 0; i < buttonClick.length; i++){
    buttonClick[i].addEventListener('click', function(){
        if(lineShow[i].style.display === 'block'){
            //If the accordion is active, close the accordion.
            buttonClick[i].className = "btn-section";
            lineShow[i].style.display = 'none';
        } else {
            buttonClick[i].className = "btn-section active";
            //If the accordion is not active???
            //Then, open the accordion!!
            lineShow[i].style.display = 'block';
            var exceptLabel = i;
            //Close other accordions except the selected button's accordion!
            for(let j = 0; j < buttonClick.length; j++){
                if(j != exceptLabel){
                    lineShow[j].style.display = 'none';
                    buttonClick[j].className = "btn-section";
                }
            } 
        }
    });
}


