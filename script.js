let bugScroller = document.getElementById('scrollBug');
      let bugImg = document.getElementById('stillBug');
      let goSkill = document.getElementById('goSkill');
      let goEducation = document.getElementById('goEducation');
      let goProject = document.getElementById('goProject');
      let goContact = document.getElementById('goContact');
      goSkill.addEventListener('click', ()=>{
        window.scrollBy(0, 1100);
      })
      goEducation.addEventListener('click', ()=>{
        window.scrollBy(0, 1650);
      })
      goProject.addEventListener('click', ()=>{
        window.scrollBy(0, 3300);
      })
      goContact.addEventListener('click', ()=>{
        window.scrollBy(0, 3800);
      })
      
      bugImg.addEventListener('click', (e) => {
        e.target.style.display = "none";
        bugScroller.style.display = "inline-block";
        bugScroller.style.transform =  'rotate(180deg)';
         const interval = setInterval(function() { window.scrollBy(0, 550); }, 4000);
          setTimeout(function(){bugScroller.style.display = "none"; e.target.style.display="inline-block"; clearInterval(interval);}, 28000);
        },);        

      const contact = document.getElementsByClassName("contact");
            function sendMsg(){
        // e.preventDefault();    
        const name = document.getElementById("name"),
              mail = document.getElementById("mail"),
              msg = document.getElementById("msg");
    Email.send({
    SecureToken : "36725621-832c-4791-9632-f9ee86626a53",
    To : 'sarveshkumarroy1@gmail.com',
    From : mail.value,
    Subject : "Contact Form",
    Body : msg.value
}).then(
  message => alert(message)
);
        }

    contact.addEventListner('submit', sendMsg);
