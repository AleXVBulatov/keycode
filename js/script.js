window.addEventListener("DOMContentLoaded", () => {


  const nameRef = document.querySelector(".name");
  // console.log(nameRef);
  const eventTypeRef = document.querySelector(".js_event-type");
  // console.log(eventTypeRef);
  const eventCodeRef = document.querySelector(".js_event-code");
  // console.log(eventCodeRef);
  const eventKeyCodeRef = document.querySelector(".js_event-keyCode");
  // console.log(eventKeyCodeRef);
  const eventKeyRef = document.querySelector(".js_event-key");
  // console.log(eventKeyRef);
  const sectionRef = document.querySelectorAll(".section");
  // console.log(sectionRef);
  const activeModalRef = document.querySelector(".js_active-modal");
  console.log(activeModalRef);
  const modalButton = document.querySelector(".modal__button");
  console.log(modalButton);



  modalButton.addEventListener("mouseover", (event) => {
    event.target.style.cursor = "grab";
    modalButton.addEventListener("mousedown", (event) => {
      event.target.style.cursor = "grabbing";
    })  
  });

  modalButton.addEventListener("click", (event) => {
    // console.log(event.target);    
    if (event.target) {
      activeModalRef.style.display = "none";
    };
  });
  

  window.addEventListener("keydown", (event) => {
    nameRef.innerText = event.keyCode;
    eventTypeRef.innerText = event.type;
    eventCodeRef.innerText = event.code;
    eventKeyCodeRef.innerText = event.keyCode;
    eventKeyRef.innerText = event.key;
  });


  sectionRef.forEach((elem) => {
    // console.log(elem);
    elem.addEventListener("mouseover", (event) => {
      event.currentTarget.style.cursor = "pointer";
      event.currentTarget.classList.toggle("active");
      event.currentTarget.style.transition = "500ms";
    });

    elem.addEventListener("mouseout", (event) => {
      event.currentTarget.classList.toggle("active");
    });
  });

});

