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
var sectionsId = ["section1", "section2", "section3","section4"];


function showTab(n) {
    var sectionsId = ["section1", "section2", "section3","section4"];

    sectionsId.forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    if(n == -1){
        document.getElementById(sectionsId[0]).style.display = "block"; 
        changeImageButton(0);
    }
    else{
    document.getElementById(sectionsId[n]).style.display = "block"; 
    changeImageButton(n);
    }

    if (n <= 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
}

function nextPrev(n) {
   // var x = document.getElementsByClassName("tab");
   // if (n === 1);
   // x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    /*if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
    }*/
    showTab(currentTab);   
}

function changeTabImage(pos){
    var sectionsId = ["section1", "section2", "section3","section4"];
   
    sectionsId.forEach(id => {
        document.getElementById(id).style = "";
    });
    showTab(pos);
}


function changeImageButton(n){
if(n === 0){
    changeImage(0);
}
else{
    changeImage(1);
}
}

