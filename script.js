let toggleBtn = document.querySelectorAll(".theme-toggle");
let menuToggleBtn = document.querySelector(".menu-toggle");
let heroImage = document.querySelector(".hero-image");
let amazonImg = document.querySelector("#amazon-img");
let value = "light mode";
let mode = document.querySelector(".mode");
function toggle(){
    document.body.classList.toggle("dark-mode");

    if(value === "light mode"){
       toggleBtn[0].style.color = "white";
       toggleBtn[0].innerHTML = '<i class="fa-solid fa-sun"></i>';
       toggleBtn[1].style.color = "white";
       toggleBtn[1].innerHTML = '<i class="fa-solid fa-sun"></i>';
       amazonImg.setAttribute("src","images/drkAmazon.png");
       amazonImg.style.objectFit = "contain";
       mode.innerText = "Dark mode";
       value = "dark mode";
    }else{
        toggleBtn[0].style.color = "#2C3E50";
        toggleBtn[0].innerHTML = '<i class="fa-solid fa-moon"></i>';
        toggleBtn[1].style.color = "#2C3E50";
        toggleBtn[1].innerHTML = '<i class="fa-solid fa-moon"></i>';
        amazonImg.setAttribute("src","images/amazon.png");
        amazonImg.style.objectFit = "cover";
        value = "light mode";
        mode.innerText = "Light mode";

}
}

































// hamburger menu.toggle
let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburgerMenuClose = document.querySelector(".hamburger-menu-close");

let menuNav = document.querySelector(".menu-nav");

let ham = true;
hamburgerMenu.addEventListener("click",() => {
    hamburgerMenuClose.classList.remove("slide-in");
  hamburgerMenu.classList.add("slide-out");
  menuNav.classList.add("menu-nav-visible");
 
})

hamburgerMenuClose.addEventListener("click" , () => {
    hamburgerMenuClose.classList.add("slide-in");
    menuNav.classList.remove("menu-nav-visible");
    hamburgerMenu.classList.remove("slide-out");


})

let aboutSection = document.querySelector(".about-container");
let skillSection = document.querySelector(".skills-brief");
let projectSection = document.querySelector(".project-container");
const observe = new IntersectionObserver((entries,observe) => {
    entries.forEach(entry => {
if(entry.isIntersecting){
    entry.target.classList.add("appearence");
    const progressCircles = entry.target.querySelectorAll(".progress");
    progressCircles.forEach( circle => {
        let percent = circle.dataset.percent;
        let offset = 380 - (380 * percent) / 100; // Calculate dash offset
        circle.style.strokeDashoffset = offset; // Animate progress

    })
    const bars = entry.target.querySelectorAll(".bar-fill");
    bars.forEach(bar => {
        let percent = bar.dataset.percent;
        console.log(percent);
        bar.style.width = percent + "%";
    })
    // observer.unobserve(entry.target);
    entry.target.classList.add("card-show");
   
       
    
   
}

    });
},{ threshold: 0.7 });



observe.observe(skillSection);
observe.observe(aboutSection);
observe.observe(projectSection);



// contact me 
document.querySelector(".contact-form").addEventListener("submit",submitForm);
function submitForm(event) {
    event.preventDefault();
    let formData = {
        from_name: document.querySelector('#name').value.trim(),
            from_email: document.querySelector('#email').value.trim(),
            message: document.querySelector('#message').value.trim()
    }

    if(!formData.from_name || !formData.from_email || !formData.message){
        alert("Please fill out all fields before submitting.");
        return;
    }
    emailjs.send("service_c6tlszu","template_5zmfpzo",formData)
    .then(response => {
        console.log("Email Sent Successfully!", response);

        alert("Your message has been sent! ✅");
        document.querySelector(".contact-form").reset();

    })
    .catch(error => {
        console.error("❌ Error sending email:", error);

        console.log("Error sending email:", error);

        alert("Failed to send message. Please try again.");

    })
}