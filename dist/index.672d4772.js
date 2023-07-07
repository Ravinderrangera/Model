"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const openModal = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
const closeModal = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};
console.log(btnsOpenModal);
for(let i = 0; i < btnsOpenModal.length; i++)btnsOpenModal[i].addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// If you want to use the same function in multiple event listeners, then you need to specify that function as a sepraate function, like this one here. And then you can pass that function as an argument to multiple "add event listener" methods.
// We really, in practice, use the functionality of adding and removing classes all the time in order to change the apperance of elements on our page. And that's because classes allow us to basically aggregate multiple CSS properties in just one like a container. So each functions a bit like container with a lot of properties in it.
//Handling an "Esc" keypress Event 
//In order to listen keyboard events we still need to use add event listner because the keypress event is simply a another type of event. Now keyboard events are so-called global events because they do not happen on one specific element. And for global events like keyboard events we usually listen the whole document.
document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
}) // Any time that an event like this occurs JavaScript does infact generate an object. And that object contains all the information about the event itself and we can then actually access that object in the event handler function. Now up until this point, we have never looked at that event we only just listned for it and then reacted for it. But this time we actually need to look at the event object to figure out which key was pressed. What we need to do is to give this function here a paramenter . So then as the event occurs JavaScript will call this function with the event object as an argument.
;

//# sourceMappingURL=index.672d4772.js.map
