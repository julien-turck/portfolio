
/*const modal = document.getElementById("modal1");
const modalTrigger = document.querySelectorAll(".modal-trigger");

modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

function toggleModal(){
    modal.classList.toggle("active")
}*/

let btn1 = document.getElementById("button1")
btn1.addEventListener('click', function(){
    const modal = document.getElementById("modal1");
    modal.classList.add("active")
    const modalTrigger = document.querySelectorAll(".modal-trigger");

    modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

    function toggleModal(){
        modal.classList.remove("active")
    }
});

let btn2 = document.getElementById("button2")
btn2.addEventListener('click', function(){
    const modal = document.getElementById("modal2");
    modal.classList.add("active")
    const modalTrigger = document.querySelectorAll(".modal-trigger");

    modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

    function toggleModal(){
        modal.classList.remove("active")
    }
});

let btn3 = document.getElementById("button3")
btn3.addEventListener('click', function(){
    const modal = document.getElementById("modal3");
    modal.classList.add("active")
    const modalTrigger = document.querySelectorAll(".modal-trigger");

    modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

    function toggleModal(){
        modal.classList.remove("active")
    }
});

let btn4 = document.getElementById("button4")
btn4.addEventListener('click', function(){
    const modal = document.getElementById("modal4");
    modal.classList.add("active")
    const modalTrigger = document.querySelectorAll(".modal-trigger");

    modalTrigger.forEach(trigger => trigger.addEventListener("click", toggleModal))

    function toggleModal(){
        modal.classList.remove("active")
    }
});

let btnSubmit = document.getElementById("envoyer");
btnSubmit.addEventListener('click', function(event){
    document.getElementById("error").classList.remove("active")

    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let object = document.getElementById("object");
    let message = document.getElementById("message");

    if (!firstName.value||!lastName.value||!object.value||!message.value){
        document.getElementById("error").classList.add("active")
        event.preventDefault();
    }
});
