//UNIVERSAL font formatting options
var fontFamilyArray=new Array(
"Cattype, Century Gothic, monospace",
"Anttype, Century Gothic, fantasy",
"Wolftype, Century Gothic, sans-serif",
"Dogtype, Century Gothic, sans-serif"
),

fontColorArray=new Array(
"black",
"white",
"saddlebrown",
"rebeccapurple",
"seagreen"
),

fontSizeArray=new Array(
"15px", 
"25px", 
"40px",
"60px",
"90px"
),

fontStyleArray=new Array(
"normal", 
"italic", 
"oblique"
),
	
fontWeightArray=new Array(
"200",
"normal",
"bold"
),

backgroundColorArray=new Array(
"black",
"white",
"lightcoral",
"lightblue",
"lightgreen"
);





//UNIVERSAL nav responsive
var navList=document.querySelector("nav");

//temp no-js fallback for now: nav dropdown starts expanded
window.onload = function() {
setTimeout(function() {
navList.removeAttribute("id");
}, 1000);
};

document.getElementById("nav-toggle").addEventListener("click", function() {
if (navList.id !== "nav-expanded") {
navList.id ="nav-expanded";
}
else {
navList.removeAttribute("id");
}
});