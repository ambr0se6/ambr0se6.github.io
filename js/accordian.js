const accordians = document.querySelectorAll(".accordion a");

function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

accordians.forEach(item => item.addEventListener('click', toggleAccordion));
