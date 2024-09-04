document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll(".text-slide").forEach((el) => {
    observer.observe(el);
  });
});
