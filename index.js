let  menuIcon = document.querySelector(".menu")
let  sideBar = document.querySelector(".sidebar")
let container = document.querySelector(".container") 
let sidebar = document.querySelector(".sidebar")
let icons = document.querySelector(".icons")
let subs = document.querySelector(".subscriber")

// add small-sidebar class when clicked if it is not open OR remove small-sidebar if it is open
menuIcon.addEventListener('click',()=>{
    sideBar.classList.toggle('small-sidebar')
    container.classList.toggle('large_container')
    sidebar.classList.toggle('small_sidebar')
    icons.classList.toggle('small_icons')
    subs.classList.toggle('hide_subs')
});