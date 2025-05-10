document.addEventListener('DOMContentLoaded', () => {
    const titlesUnderlines = document.querySelectorAll('.title-underline');
    
    titlesUnderlines.forEach(underline => {
        underline.classList.add('w-0', 'transition-all', 'duration-300', 'ease-in-out', 'opacity-0');
        
        const parentElement = underline.parentElement;
        
        parentElement.addEventListener('mouseenter', () => {
            underline.classList.remove('w-0', 'opacity-0');
            underline.classList.add('w-24', 'opacity-100');
        });
        
        parentElement.addEventListener('mouseleave', () => {
            underline.classList.remove('w-24', 'opacity-100');
            underline.classList.add('w-0', 'opacity-0');
        });
    });
});