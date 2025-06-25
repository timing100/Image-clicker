const baloon = document.getElementById("baloon");
const button = document.getElementById("button")
let baloonNormal = true
 
button.addEventListener('click', function() 
{  baloonNormal = !baloonNormal;
   if (baloonNormal){baloon.style.width = "1000px", baloon.style.height = "300px", baloon.style.border = '40px solid black';}
   else{baloon.style.width = "300px", baloon.style.height = "900px", baloon.style.border = '10px solid blue';}  }
) 


