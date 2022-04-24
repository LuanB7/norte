
// Abrir Link
function abrirLink(delay, link) {
    setTimeout(
        function(){
            window.location = link;
        }
        
    , delay*1000);
};



// Menu Mobile
function menuMobile(botao, checkbox, menu) {
    setTimeout(
        function() {
            if (checkbox.checked) {

                menu.style.visibility = 'visible';
                menu.style.opacity = '1';
                menu.style.transform = 'translateY(0)';

                botao.style.transform = 'rotate(-180deg)';

                document.getElementById('menu-mobile-back').style.opacity = '1';
                document.getElementById('menu-mobile-back').style.visibility = 'visible';
                
                
            } else {

                menu.style.visibility = 'hidden';
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(-20%)';

                botao.style.transform = 'rotate(0)';

                document.getElementById('menu-mobile-back').style.opacity = '0';
                document.getElementById('menu-mobile-back').style.visibility = 'hidden';
            }
            
        }
        
        , 1)
}

var menuMobileDados = [document.getElementById('menu-mobile-button'), document.getElementById('menu-mobile-check'), document.getElementById('menu-mobile')];


