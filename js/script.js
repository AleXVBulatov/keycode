window.addEventListener("DOMContentLoaded", () => {


  const refs = {
    nameKeydown: document.querySelector(".js-keydown__name"),
    eventTypeKeydown: document.querySelector(".js-keydown__event-type"),
    eventCodeKeydown: document.querySelector(".js-keydown__event-code"),
    eventKeyCodeKeydown: document.querySelector(".js-keydown__event-keyCode"),
    eventKeyKeydown: document.querySelector(".js-keydown__event-key"),
    
    nameKeypress: document.querySelector(".js-keypress__name"),
    eventTypeKeypress: document.querySelector(".js-keypress__event-type"),
    eventCodeKeypress: document.querySelector(".js-keypress__event-code"),
    eventKeyCodeKeypress: document.querySelector(".js-keypress__event-keyCode"),
    eventKeyKeypress: document.querySelector(".js-keypress__event-key"),
    
    section: document.querySelectorAll(".section"),
    activeModal: document.querySelector(".js_active-modal"),
    modalButton: document.querySelector(".modal__button"),   
  }
  // console.log(refs);


  refs.modalButton.addEventListener("mouseover", (event) => {
    event.target.style.cursor = "pointer";    
  });

  refs.modalButton.addEventListener("click", (event) => {
    // console.log(event.target);    
    if (event.target) {
      refs.activeModal.style.display = "none";
    };
  });

  refs.modalButton.addEventListener("mouseover", (event) => {
    if (event.target) {
      event.target.style.boxShadow = "0px 0px 20px 5px rgba(255, 255, 255, 0.8)";
    };
  });

  refs.modalButton.addEventListener("mouseout", (event) => {
    if (event.target) {
      event.target.style.boxShadow = "none";
    };
  });
  

  window.addEventListener("keydown", (event) => {
    refs.nameKeydown.innerText = event.code;
    refs.eventTypeKeydown.innerText = event.type;
    refs.eventCodeKeydown.innerText = event.code;
    refs.eventKeyCodeKeydown.innerText = event.keyCode;
    refs.eventKeyKeydown.innerText = event.key;
  });

  window.addEventListener("keypress", (event) => {
    refs.nameKeypress.innerText = event.code;
    refs.eventTypeKeypress.innerText = event.type;
    refs.eventCodeKeypress.innerText = event.code;
    refs.eventKeyCodeKeypress.innerText = event.keyCode;
    refs.eventKeyKeypress.innerText = event.key;
  });




  refs.section.forEach((elem) => {
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

