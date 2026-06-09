document.addEventListener('DOMContentLoaded', () => {
    // Copy to clipboard functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const code = button.parentElement.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                const originalText = button.innerText;
                button.innerText = 'Másolva!';
                button.style.color = '#007aff';
                
                setTimeout(() => {
                    button.innerText = originalText;
                    button.style.color = '';
                }, 2000);
            });
        });
    });

    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
