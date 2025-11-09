(() => {
  const els = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const targetStr = el.dataset.target ?? '0';
      const target = Number.parseFloat(targetStr);
      const decimals = (targetStr.includes('.')) ? (targetStr.split('.')[1].length) : 0;

      const speed = Number(el.dataset.speed) || 300;  // lower = faster
      const increment = target / speed;               // per tick
      let current = 0;

      const tick = () => {
        current = Math.min(current + increment, target);
        el.textContent = decimals ? current.toFixed(decimals) : String(Math.round(current));
        if (current < target) {
          setTimeout(tick, 16); // ~60fps
        } else {
          el.textContent = decimals ? target.toFixed(decimals) : String(Math.round(target));
        }
      };

      el.textContent = '0';
      tick();
      obs.unobserve(el);
    });
  }, { threshold: 0.3 });

  els.forEach(el => observer.observe(el));
})();
