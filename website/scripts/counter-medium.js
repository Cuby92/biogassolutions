const counters = document.querySelectorAll('.counter-medium');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            counter.innerText = '0';

            const speed = 1000; // Lower number for faster animation
            
            const updateCount = () => {
                const count = +counter.innerText;
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = Math.min(count + increment, target);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
            observer.unobserve(counter);
        }
    });
}, options);

counters.forEach(counter => {
    observer.observe(counter);
});
