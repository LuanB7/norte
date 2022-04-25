
/* Verificando se o LocalStorage "modoDesempenho" é igual a 'ativado' ou 'desativado' para trabalhar com valores booleanos (para facilitar)*/

//Logo `if (localStorage.getItem('modoDesempenho') == 'ativado')` é simnplificado em: `if (modo_desempenho == true)`

if (LocalStorage.getItem('modoDesempenho') == null) {
    localStorage.setItem('modoDesempenho', 'desativado');
}




if (localStorage.getItem('modoDesempenho') == 'ativado') {
    modo_desempenho = true;
} else if (localStorage.getItem('modoDesempenho') == 'desativado') {
    modo_desempenho = false;
};




/* Verificando se o modo desempenho está ativado para dar estilo ao interruptor */
function verificarModoDesempenho(interrup, interrupBall) {
    if (modo_desempenho == false) {  
        interrupBall.style.transform = 'translateX(0%)';

    } else {
        interrupBall.style.transform = 'translateX(100%)';
    }
}

//Dados para a função • de forma separada em um array para facilitar
var botaoModoDesempenhoDados = [document.getElementById('md-interruptor'), document.getElementById('md-interruptor-ball')];

//Chamando função
verificarModoDesempenho.apply(null, botaoModoDesempenhoDados);





// Verificar qual o localStorage é o atual e setar o outro ao clicar no interruptor
/*function mdVerificarLocalStorageEResetar() {
    if (localStorage.getItem('modoDesempenho') == 'ativado') {
        localStorage.setItem('modoDesempenho', 'desativado');
        var modo_desempenho = true;
    } else if (localStorage.getItem('modoDesempenho') == 'desativado') {
        localStorage.setItem('modoDesempenho', 'ativado');
        var modo_desempenho = false;
    }
}*/



/* Verificando se o modo desempenho está ativado para dar estilo ao interruptor AO CLICAR NELE */
function ativEdesativModoDesempenho(interrup, interrupBall) {

    if (localStorage.getItem('modoDesempenho') == 'ativado') {
        modo_desempenho = true;
    } else if (localStorage.getItem('modoDesempenho') == 'desativado') {
        modo_desempenho = false;
    };

    if (modo_desempenho == false) {
        modo_desempenho = true;
        localStorage.setItem('modoDesempenho', 'ativado');

        interrupBall.style.transform = 'translateX(100%)';

        console.log('Modo desempenho ativado');
      
        
    } else if (modo_desempenho == true) {
        modo_desempenho = false;
        localStorage.setItem('modoDesempenho', 'desativado');

        interrupBall.style.transform = 'translateX(0%)';

        console.log('Modo desempenho desativado');

    };





    modoDesempenho();

    
}

//Dados para a função • de forma separada em um array para facilitar • foi resetado mas não tem problema
var botaoModoDesempenhoDados = [document.getElementById('md-interruptor'), document.getElementById('md-interruptor-ball')];


//Alterações de estilo causadas pelo modo desempenho

function modoDesempenho() {
    if (modo_desempenho == false) { //Se o modo desempenho não estiver ativado
        
        //Particulas seção 1 • Visíveis
        particlesJS("particles-container", {
            particles: {
                number: { value: 70, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: {
                type: "triangle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                },
                line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
                },
                move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                onhover: { enable: false, mode: "repulse" },
                onclick: { enable: false, mode: "push" },
                resize: true
                },
                modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
            });

    }
    
    else { //Se o modo desempenho estiver ativado

        //Particulas seção 1 • Não visíveis
        particlesJS("particles-container", {
            particles: {
                number: { value: 0, density: { enable: false, value_area: 0 } },
                color: { value: "#ffffff" },
                shape: {
                type: "triangle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
                },
                size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
                },
                line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
                },
                move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                onhover: { enable: false, mode: "repulse" },
                onclick: { enable: false, mode: "push" },
                resize: true
                },
                modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
                }
            },
            retina_detect: true
            });



    }
}

modoDesempenho();



