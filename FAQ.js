const faqs =document.querySelectorAll(".faq");
faqs.forEach((v)=>{
    v.addEventListener("click",()=>{
        v.classList.toggle("active")
    })
})