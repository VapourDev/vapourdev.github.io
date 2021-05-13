// var btnWhatweDo = document.getElementById("btnWhatweDo");
// var dropMenu = document.getElementById("dropWhatweDo");

var btnHumberger = document.getElementById("btnHumburger");
var dropHumburger = document.getElementById("humburgerDropDown");

var allImages = document.querySelectorAll("img");

window.addEventListener('load', () => {

    allImages.forEach(image => {
        image.src = image.getAttribute("data-img");
    });

})

// btnWhatweDo.addEventListener('click', (e) => {

//     btnWhatweDo.classList.toggle("clicked");

//     dropMenu.style.left = btnWhatweDo.getBoundingClientRect().left+'px';
//     dropMenu.style.top = btnWhatweDo.getBoundingClientRect().bottom+12+'px';
    
//     if(dropMenu.style.display == 'none')
//     {
//         dropMenu.style.display = 'block';

//         setTimeout(() => {
//             dropMenu.classList.toggle('hidden');
//         }, 200);
//     }
//     else
//     {
//         dropMenu.classList.toggle('hidden');

//         setTimeout(() => {
//             dropMenu.style.display = 'none';
//         }, 200);
//     }

// })


btnHumburger.addEventListener('click', () => {

    if(!btnHumburger.classList.contains("active"))
    {
        btnHumburger.classList.add('active');

        dropHumburger.style.display = 'block';

        setTimeout(() => {
            dropHumburger.classList.add('show');
        }, 100);
    }
    else
    {
        btnHumburger.classList.remove('active');
        
        dropHumburger.classList.remove('show');

        setTimeout(() => {
            dropHumburger.style.display = 'none';
        }, 100);
    }

})













var fullGalleryView = document.getElementById("full-image-gallery-view")

function showFullGalleryView(e)
{
    fullGalleryView.querySelector('img').setAttribute("src", e.querySelector('img').src);
    fullGalleryView.style.display = 'flex';
}

function hideFullGalleryView()
{
    fullGalleryView.style.display = 'none';
}