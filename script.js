// Fecha del evento: 30 de enero de 2027 a las 4:00 p. m. (hora de Nicaragua, UTC-6)
const eventDate = new Date("2027-01-30T16:00:00-06:00").getTime();

function updateCountdown() {
  const now = Date.now();
  const distance = eventDate - now;

  if (distance <= 0) {
    document.querySelector(".countdown-card").innerHTML = "<p>¡Llegó el gran día!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// WhatsApp de confirmación
const phone = "50557531378";
const message = encodeURIComponent("¡Hola! Confirmo mi asistencia a la revelación de sexo de Ervin & Arcadia.");
document.getElementById("whatsapp-link").href = `https://wa.me/${phone}?text=${message}`;


// Apertura con transición suave de la portada hacia los detalles
const openInvitationButton = document.getElementById("open-invitation");
const detailsSection = document.getElementById("detalles");

if (openInvitationButton && detailsSection) {
  openInvitationButton.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.add("invitation-open");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => {
      detailsSection.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
      history.replaceState(null, "", "#detalles");
    }, reduceMotion ? 0 : 260);
  });
}
