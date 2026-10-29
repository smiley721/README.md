/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(function (header) {
    header.addEventListener('click', function () {
        const panel = header.nextElementSibling;
        const isOpen = header.getAttribute('aria-expanded') === 'true';

        
        accordionHeaders.forEach(function (other) {
            other.setAttribute('aria-expanded', 'false');
            other.nextElementSibling.style.maxHeight = null;
        });

       
        if (!isOpen) {
            header.setAttribute('aria-expanded', 'true');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});


