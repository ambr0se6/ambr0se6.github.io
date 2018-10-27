const accordians = document.querySelectorAll(".accordion a");

function toggleAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
    const activeAccordians = document.querySelectorAll(".accordian a.active");
    activeAccordians
        .filter(a => a !== this)
        .forEach(a => {
            toggleAccordion
        });
}

accordians.forEach(item => item.addEventListener('click', toggleAccordion));