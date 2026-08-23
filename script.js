const paginas = {
    home: `
    <h1 class="titulo-pagina">Sobre mim</h1>
    <section class="sobre-mim">
        <div class="foto">
            <img src="me.jpg" alt="Foto de Alcides">
        </div>

        <p class="sobr">
            Olá, meu nome é <strong>Alcides.</strong> Sou desenvolvedor em formação, interessado em criar
            projetos que contribuam para o meu crescimento profissional.
        </p>
    </section>
    <section class="secao">
        <h2>Participações em eventos</h2>
        <div class="cartoes-eventos">
            <article class="cartao-evento">
                <h3>Desafio da Vivo</h3>
                <p>Participei de duas edições do desafio da Vivo, concluindo as primeiras etapas e ampliando meus conhecimentos na área de tecnologia.</p>
            </article>

            <article class="cartao-evento">
                <h3>Hackathon</h3>
                <p>Participei de um hackathon, trabalhando em equipe para solucionar um desafio proposto durante o evento. Essa experiência contribuiu para o desenvolvimento das minhas habilidades de criação, colaboração e trabalho sob pressão.</p>
            </article>
        </div>
    </section>

    <section class="secao tecnologias">
        <h2>Tecnologias</h2>
    <div class="carrossel-tecnologias">
    <article class="cartao-evento">
   <p style="font-family: sans-serif;">
  🔴 Conhecimento básico
  <span style="margin: 0 10px; color: #ccc;">|</span>
  🟠 Tenho domínio
  <span style="margin: 0 10px; color: #ccc;">|</span>
  🟢 Aprendendo
</p>

    </article>
    <br><br><br>
        <div class="faixa-icones">
            <i class="icone-tecnologia pratica devicon-html5-plain colored"></i>
            <i class="icone-tecnologia pratica devicon-css3-plain colored"></i>
            <i class="icone-tecnologia sei devicon-javascript-plain colored"></i>
            <i class="icone-tecnologia aprendendo devicon-nodejs-plain colored"></i>
            <i class="icone-tecnologia sei devicon-mysql-plain colored"></i>
            <i class="icone-tecnologia sei devicon-express-original colored"></i>
            <i class="icone-tecnologia aprendendo devicon-firebase-plain colored"></i>
            <i class="icone-tecnologia pratica devicon-github-original"></i>
            <i class="icone-tecnologia pratica devicon-git-plain-wordmark colored"></i>
        </div>
    </div>
    </section>

     `,
    projetos: `
    <h1 class="titulo-pagina">Projetos</h1>
    <article class="projeto">
        <h2>Whim Bottle</h2>
        <p>Projeto escolar desenvolvido em equipe.</p>
        <h3>Tecnologias utilizadas</h3>
        <div class="tecnologias-projeto">
            <i class="icone-tecnologia  devicon-html5-plain colored"></i>
            <i class="icone-tecnologia  devicon-css3-plain colored"></i>
            <i class="icone-tecnologia  devicon-javascript-plain colored"></i>
            <i class="icone-tecnologia  devicon-nodejs-plain colored"></i>
            <i class="icone-tecnologia devicon-mysql-plain colored"></i>
            <i class="icone-tecnologia devicon-express-original colored"></i>
            <i class="icone-tecnologia  devicon-firebase-plain colored"></i>
            <i class="icone-tecnologia  devicon-github-original"></i>
            <i class="icone-tecnologia  devicon-git-plain-wordmark colored"></i>
        </div>
        <a class="botao-projeto" href="https://katpk64308-bot.github.io/Whim-Bottle/main.html" target="_blank" rel="noopener noreferrer">Ver projeto</a>
    </article>
    `
};

function nav(aba) {
    const conteudo = document.getElementById('conteudo');
    const pagina = paginas[aba];

    conteudo.innerHTML = pagina;


    document.querySelectorAll('nav ul li').forEach((li) => {
        li.classList.remove('active');
    });

    const abaAtual = document.getElementById(`aba-${aba}`);

    if (abaAtual) {
        abaAtual.classList.add('active');
    }

    if (aba === 'home' && typeof iniciarCarrossel === 'function') {
        iniciarCarrossel();
    }
}

nav('home');
