var temporizadorCarrossel;

function iniciarCarrossel() {
    if (temporizadorCarrossel) {
        clearTimeout(temporizadorCarrossel);
    }

    const faixa = document.querySelector('.faixa-icones');

    if (!faixa) {
        return;
    }

    function atualizarCentro(deslocamento) {
        var icones = faixa.children;
        var centro = Math.floor(icones.length / 2) + (deslocamento || 0);

        for (var i = 0; i < icones.length; i++) {
            icones[i].classList.remove('central', 'perto', 'longe');

            if (i === centro) {
                icones[i].classList.add('central');
            } else if (Math.abs(i - centro) === 1) {
                icones[i].classList.add('perto');
            } else {
                icones[i].classList.add('longe');
            }
        }
    }

    atualizarCentro();

    const girar = () => {
        const primeiro = faixa.firstElementChild;
        atualizarCentro(1);
        primeiro.classList.add('saindo');
        faixa.classList.add('girando');

        setTimeout(() => {
            faixa.classList.add('sem-transicao');
            faixa.appendChild(primeiro);
            primeiro.classList.remove('saindo');
            primeiro.classList.add('entrando');
            faixa.classList.remove('girando');
            atualizarCentro();

            setTimeout(function () {
                faixa.classList.remove('sem-transicao');
                primeiro.classList.remove('entrando');
                temporizadorCarrossel = setTimeout(girar, 2500);
            }, 50);
        }, 800);
    };

    temporizadorCarrossel = setTimeout(girar, 2500);
}

iniciarCarrossel();
