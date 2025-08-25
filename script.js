// Smooth scrolling para links internos
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeito de hover nos problemas
    const problemItems = document.querySelectorAll('.problem-list li');
    problemItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
}); 