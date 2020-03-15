
// variabel
const icon = document.querySelector('.icon');
const sidebar = document.getElementById('sidebar');

icon.addEventListener('click' , () => {
    if(!icon.classList.contains('open')) {
        icon.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
        sidebar.style.animation = 'sidebarAppear .8s forwards';
    } else {
        icon.classList.remove('open');
        icon.style.transform = 'rotate(-180deg)';
        sidebar.style.animation = 'sidebarHidden .8s forwards';
    }
})

// parralax

window.addEventListener('scroll' , () => {
    let lebarJendela = window.innerWidth;
    let wScroll = window.pageYOffset;

    const tentangKontent    = document.querySelector('.tentang p');
    const tentangImg        = document.querySelector('.tentang img');
    const jurusan           = document.querySelectorAll('.jurusan .card-style');
    const fasilitas         = document.querySelectorAll('.fasilitas .card-style');
    const footerImg         = document.querySelector('.footer .row img');

    if(lebarJendela > 400) {
    
        
    } else {
        console.log(wScroll);
        
        if(wScroll > 480) {
            tentangKontent.style.animation = 'landingLeft .7s forwards';
            tentangImg.style.animation = 'landingRight .7s forwards';
        }

        if(wScroll > 950) {
            for(i = 0 ; i < jurusan.length ; i++) {
                jurusan[i].style.animation = 'landingTop .7s .' + i * 4 + 's forwards';
            }
        }

        if(wScroll > 2300) {
            for(i = 0 ; i < fasilitas.length ; i++) {
                fasilitas[i].style.animation = 'landingTop .7s .' + i * 4 + 's forwards';
            }
        }
    }
    
})