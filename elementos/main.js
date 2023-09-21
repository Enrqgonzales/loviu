const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    const popup = document.createElement('div');
    popup.className = 'popup';
    
    const closeBtn = document.createElement('button');
    closeBtn.textContent = 'Cerrar';
    closeBtn.className = 'closeBtn';
    
    const image = new Image();
    image.src = 'elementos/img/img final.jpg'; // Ruta de tu imagen
    image.alt = 'Imagen';
    
    popup.appendChild(closeBtn);
    popup.appendChild(image);
    document.body.appendChild(popup);
    
    closeBtn.addEventListener('click', function () {
        document.body.removeChild(popup);
    });
});




const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function (){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform','translate(-$(randomX)%,-$(randomY)%)');
})


