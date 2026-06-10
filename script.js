
const faqAnswer = document.querySelectorAll('.fq-btn');
const dropMenu = document.querySelector('.hamburger')
const menuList = document.querySelector('.menu-list')

faqAnswer.forEach(btn=> {
    btn.addEventListener("click", () => {
        
        const isOpen = btn.nextElementSibling.classList.contains('open');

        faqAnswer.forEach(Allbtns => {
          Allbtns.nextElementSibling.classList.remove('open');
          Allbtns.classList.remove('active');
         })
        
         if(!isOpen) {
            btn.nextElementSibling.classList.add('open');
            btn.classList.add('active');
         }
})
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    })
})

document.querySelectorAll('.card-res').forEach(card => {
    observer.observe(card);
})


dropMenu.addEventListener("click", () => {
    menuList.classList.toggle('open');
    dropMenu.classList.toggle('active');
})
