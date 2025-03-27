//scroll sections
 let sections = document.querySelectorAll('section');
 let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    let  header = document.querySelector('header');
    header.classicList.toggle('sticky',window.scrollY > 100);
}

//contact form

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const serviceID = 'service_mnmh09q'; // Replace with your Service ID
    const templateID = 'template_qifrutr'; // Replace with your Template ID
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Sent!');
        document.getElementById('contactForm').reset(); // Clear the form
      }, (err) => {
        alert('Failed...', JSON.stringify(err));
      });
  });