document.addEventListener("DOMContentLoaded", function () 
{
    // Create a new Typed instance
    const typed = new Typed("#typed-text", 
    {
      strings: ["Student!", "Programmer!", "Tech Enthusiast!"],
      typeSpeed: 50, // Speed of typing in milliseconds
      backSpeed: 30, // Speed of erasing in milliseconds
      loop: true, // Repeat the animation in a loop
    });
  });


const scriptURL ='https://script.google.com/macros/s/AKfycbyaz6OG4cXhUfhG9M1Ydaw5Nmoz7AiiECtgeYqLJtK524gHGFa5j_oekrerQBCogTQc/exec'

let form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  document.querySelector("#sub").value="Submitting...";
  let data = new FormData(form);
  fetch(scriptURL, { method:'POST', body: data })
  .then(res =>res.text())
  .then(data => {document.querySelector("#msg").innerHTML=data; document.querySelector("#sub").value="Submit"});
})
 