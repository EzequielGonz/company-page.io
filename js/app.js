//CONTADOR

// Selecciona todos los elementos con la clase "count"
const counters = document.querySelectorAll('.count');

// Función para animar el contador
function animateCounter(counter) {
  const target = parseInt(counter.getAttribute('data-target'));
  const duration = 6000; // Duración de la animación en milisegundos
  const start = 0;
  const increment = target / (duration / 16); // Incremento por frame

  let current = start;

  function update() {
    current += increment;
    counter.textContent = Math.floor(current).toString();
    if (current >= target) {
      counter.textContent = target.toString();
    } else {
      requestAnimationFrame(update);
    }
  }

  update();
}

// Inicia la animación para cada contador
counters.forEach((counter) => {
  animateCounter(counter);
});

//CONTADOR



//Agregando EMAILJS en el Proyecto!

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'service_668jtxn';
   const templateID = 'template_pv8pd8m';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



//Agregando EMAILJS en el Proyecto!