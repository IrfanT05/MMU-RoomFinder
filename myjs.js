let roomname;

document.getElementById("mySubmit").onclick = function(){
  roomname = document.getElementById("userinput").value;
   console.log(roomname);

   if (roomname == "G.39" || roomname == "g.39"){
      var img = document.getElementById('image');
      img.src = 'G.39.png';
   }
   else if (roomname == "G.46" || roomname == "g.46"){
      var img = document.getElementById('image');
      img.src = 'G.46.png';
   }
   else if (roomname == "G.41" || roomname == "g.41"){
      var img = document.getElementById('image');
      img.src = 'G.41.png';
   }
}

// Code for the arrow clicking

const favouriteButton=document.getElementById("favouritesButton");
favouriteButton.addEventListener("click",favouriteClick);

function favouriteClick() {
   var favouritesElement = document.getElementById("favouritesText");
   if(favouritesElement.style.display === 'block'){
      favouritesElement.style.display = 'none';
      document.getElementById("favouritesExpand").innerHTML="expand_more";
   }
   else{
      favouritesElement.style.display = 'block';
      document.getElementById("favouritesExpand").innerHTML="expand_less";
   }
}

const accesibilityButton=document.getElementById("accesibilityButton");
accesibilityButton.addEventListener("click",accesibilityClick);

function accesibilityClick() {
   var accesibilityElement = document.getElementById("accesibilityText");
   if(accesibilityElement.style.display === 'block'){
      accesibilityElement.style.display = 'none';
      document.getElementById("accesibilityExpand").innerHTML="expand_more";
   }
   else{
      accesibilityElement.style.display = 'block';
      document.getElementById("accesibilityExpand").innerHTML="expand_less";
   }
}

const mapIndexButton=document.getElementById("mapIndexButton");
mapIndexButton.addEventListener("click",mapIndexClick);

function mapIndexClick() {
   var mapIndexElement = document.getElementById("mapIndexText");
   if(mapIndexElement.style.display === 'block'){
      mapIndexElement.style.display = 'none';
      document.getElementById("mapIndexExpand").innerHTML="expand_more";
   }
   else{
      mapIndexElement.style.display = 'block';
      document.getElementById("mapIndexExpand").innerHTML="expand_less";
   }
}

const fullscreenButton=document.getElementById("fullscreenButton");
mapIndexButton.addEventListener("click",fullscreenButton);

function ImgEnlarge()
{
   var img = document.getElementById('image');
   img.style.position = "fixed";
   img.style.top = "20";
   img.style.left = "20";
   img.style.width = "80%";
   img.style.height = "90%";
   document.getElementById("fullscreenButton").style.display = "none";
   document.getElementById("fullscreenExit").style.display = "inline";
      
}
function ImgReduce()
{
  
   var img = document.getElementById('image');

   img.style.position = "fixed";
   img.style.top = "20";
   img.style.left = "20";
   img.style.width = "15%";
   img.style.height = "25%";

      
   document.getElementById("fullscreenButton").style.display = "inline";
   document.getElementById("fullscreenExit").style.display = "none";

      
}


document.getElementById("fullscreenButton").onclick = function(){
    console.log(roomname);
    ImgEnlarge();
    
    
 }
 document.getElementById("fullscreenExit").onclick = function(){
   console.log(roomname);
   ImgReduce();
   
   
}

let options = document.querySelectorAll("input[name = 'option']");

let findSelected = () => {
   let selected = document.querySelector("input[name='option']:checked").value;
   if (selected == "Dark"){
      document.getElementById("leftColumn").style.backgroundColor=("#141414");
      document.getElementById("LogoDiv").style.backgroundColor=("#141414");
      document.getElementById("mapImage").style.backgroundColor=("#141414");
   }
   else if (selected == "Light"){
      document.getElementById("leftColumn").style.backgroundColor=("#00c1d4");
      document.getElementById("LogoDiv").style.backgroundColor=("#00c1d4");
      document.getElementById("mapImage").style.backgroundColor=("#bfbfbf");
   }
}

options.forEach(options => {
   options.addEventListener("change", findSelected);
});




 function toggleText(){
  var elms = document.getElementsByClassName("figure-caption-test");

  Array.from(elms).forEach((x) => {
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })
}