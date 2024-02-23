/*
let openBtn = document.getElementById("openModal");

openBtn.addEventListener('click', function(){
   document.getElementById("modal").style.visibility = "visible";
});

let closeBtn = document.getElementById("closeModal");

closeBtn.addEventListener('click', function(){
   document.getElementById("modal").style.visibility = "hidden";
});
*/

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modal.classList.toggle("active")
}