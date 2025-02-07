const hambmenu = document.getElementById("hambmenu");
const menus = document.getElementById("menus");

function openMenu() {
  menus.classList.toggle("hidden");
}
function changeBar() {
  if (hambmenu.classList.contains("fa-bars")) {
    hambmenu.classList.remove("fa-bars");
    hambmenu.classList.add("fa-times");
  } else {
    hambmenu.classList.remove("fa-times");
    hambmenu.classList.add("fa-bars");
  }
}
console.log(hambmenu.classList.contains("fa-bars"));

hambmenu.addEventListener("click", openMenu);
hambmenu.addEventListener("click", changeBar);



//animation

let time = gsap.timeline();

time.from(".custom-p-0",{
  scale: 0,
  duration:1,
})
time.from(".custom-p-1",{
  scale: 0,
  duration:1
})
time.from(".custom-p-2",{
  scale: 0,
  duration:1
})
