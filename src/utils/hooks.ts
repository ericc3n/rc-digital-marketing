import { useEffect } from "react"

const useScrollAnimation = (): void => {
  useEffect(() => {
    // Animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if(entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
    });

    const hiddenEls = document.querySelectorAll(".hidden");
    hiddenEls.forEach(el => observer.observe(el));

    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}

export { useScrollAnimation }