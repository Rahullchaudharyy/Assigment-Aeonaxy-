const closebiutton = document.querySelector('.ri-close-fill');
const notification = document.querySelector('#Notification');

closebiutton.addEventListener('click', function(){
    notification.style.display = 'none';
});

let dropdowns = document.querySelectorAll('.Get-btn');
let dropoptions = document.querySelectorAll('.GET-START');

dropdowns.forEach((dropdown, index) => {
    dropdown.addEventListener('click', function(){
        dropoptions[index].classList.toggle('hidden');
    });
});


let menu_btn = document.querySelector('.ri-menu-line');
let side = document.querySelector('#Leftsidebar');
let after = document.querySelector('.aftermenu')
let contentpage = document.querySelector('#content-page')
let layoutbtn = document.querySelector('.ri-layout-column-fill')

layoutbtn.addEventListener('click',function(){
    side.classList.toggle('hidden');

})

menu_btn.addEventListener('click', function(){
    side.classList.toggle('hidden');
    after.classList.toggle('hidden');
    contentpage.classList.toggle('hidden')

});


