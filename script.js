
const faqAnswer = document.querySelectorAll('.fq-btn');


faqAnswer.forEach(btn=> {
    btn.addEventListener("click", () => {
        
        const isOpen = btn.nextElementSibling.classList.contains('open');

        faqAnswer.forEach(Allbtns => {
          Allbtns.nextElementSibling.classList.remove('open');
          btn.classList.remove('active');
         })
        
         if(!isOpen) {
            btn.nextElementSibling.classList.add('open');
            btn.classList.add('active');
         }
})
})
