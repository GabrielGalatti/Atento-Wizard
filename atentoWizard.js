/*function changeImage(id, idselected)
{
    var imgParent = document.getElementById(id);
    var imgChild = document.getElementById(idselected);

    if(imgChild.className == "img-invisible"){
        imgChild.className = "img-visible";
    }
    else if (imgChild.className == "img-visible"){       
        imgChild.className = "img-invisible";
    }

} */


var idNormal = ["informacoesImg","dadosImg"];
//console.log(idNormal);
var idselected = ["informacoes-hoverImg", "dados-hoverImg"];
//console.log(idselected);

function changeImage(pos){
    //console.log("Pos = "+pos);
    var imgParent = document.getElementById(idNormal[pos]);
    var imgChild = document.getElementById(idselected[pos]);

   idselected.forEach(id =>{
        //console.log("Id="+id);
        document.getElementById(id).className = "invisible";
       // console.log("class id" + id.className);
   });
   
    if(imgChild.className == "invisible"){
        imgChild.className = "visible";
    }
    else if (imgChild.className == "visible"){       
        imgChild.className = "invisible";
    }
}



var currentTab = 0;


function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    changeImageButton();
    
    // ... and fix the Previous/Next buttons:
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:

}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n === 1);
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);   
}

function changeTabImage(pos){
    var sectionsId = ["section1", "section2", "section3","section4"];
   
    sectionsId.forEach(id => {
        document.getElementById(id).style = "";
    });

    document.getElementById(sectionsId[pos]).style.display = "block";
    changeImageButton();
}


function changeImageButton(){
if(currentTab == 0){
    changeImage(0);
}
else{
    changeImage(1);
}
}

