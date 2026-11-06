// DEMONSTRAÇÃO: substitua pelo WhatsApp real do estabelecimento (somente números, com DDI e DDD).
const WHATSAPP_NUMBER = "";
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(opened));
});
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
const toast = document.querySelector(".toast");
let toastTimer;
document.querySelectorAll(".order-button").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.dataset.item;
    if (WHATSAPP_NUMBER) {
      const message = encodeURIComponent(`Olá! Gostaria de pedir: ${item}.`);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener");
    } else {
      toast.textContent = `Demonstração: pedido de ${item}. Configure o WhatsApp no arquivo script.js.`;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 3600);
    }
  });
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));