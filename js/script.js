// 5COM2002 Accessibility and Usability Assignment
// Accessible JavaScript enhancements

document.addEventListener('DOMContentLoaded', function() {
    console.log('Product launch page loaded - accessibility features active');
    
    // Enhanced focus management for accessibility
    function handleFirstTab(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }
    window.addEventListener('keydown', handleFirstTab);
});
