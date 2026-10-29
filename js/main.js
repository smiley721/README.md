/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const topButton = document.createElement('button');
topButton.id = 'backToTop';
topButton.textContent = 'Top';
document.body.appendChild(topButton);

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
});

topButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


