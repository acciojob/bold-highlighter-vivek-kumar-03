document.addEventListener('DOMContentLoaded', function() {
    const highlightLink = document.getElementById('highlight-link');
    const strongElements = document.querySelectorAll('strong');
    
    // Store original colors
    const originalColors = [];
    strongElements.forEach(el => {
        originalColors.push({
            element: el,
            color: window.getComputedStyle(el).color
        });
    });
    
    // Highlight function
    function highlight() {
        strongElements.forEach(el => {
            el.style.color = 'rgb(0, 128, 0)';
        });
    }
    
    // Return to normal function
    function return_normal() {
        originalColors.forEach(item => {
            item.element.style.color = item.color;
        });
    }
    
    // Event listeners
    highlightLink.addEventListener('mouseover', highlight);
    highlightLink.addEventListener('mouseout', return_normal);
});