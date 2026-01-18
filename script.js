/*
let name;
let lastName;
let message;
function revealForm(){
	document.querySelector(".sendMsg").style.display = "none";
	document.querySelector(".inputMsg").style.display ='block';
}

function sendMsg(){
	name = document.querySelector("#theName").value;
	lastName = document.querySelector("#theLast").value;
	message = document.querySelector("#theMsg").value;
	document.querySelector(".inputMsg").style.display="none";
	document.querySelector(".finalPrompt").style.display="block";
	document.querySelector("#finalButton").style.display="block";
	document.querySelector("#userName").innerHTML = name + " " + lastName;
	document.querySelector("#userMsg").innerHTML = message;
}*/



document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdownrib").forEach(rib => {
    rib.addEventListener("click", () => {
      const content = rib.nextElementSibling;

      if (!content) return;

      content.classList.toggle("open");
	  rib.classList.toggle("open");
    });
  });
});