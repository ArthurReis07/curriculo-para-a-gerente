// Efeito de digitação
function efeitoDigitacao(texto, elemento, velocidade = 100) {
    let index = 0;
    const interval = setInterval(() => {
        if (index < texto.length) {
            elemento.textContent += texto[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, velocidade);
}

const titulo = document.querySelector('header h1');
efeitoDigitacao('Oi, eu sou Arthur Reis 👋', titulo);

// Tema claro/escuro
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleThemeButton.textContent = document.body.classList.contains('dark') ? '☀️ Alternar Tema' : '🌙 Alternar Tema';
});

// Animações ao rolar
function animarAoRolar() {
    const elementos = document.querySelectorAll('.fade-in');
    elementos.forEach(elemento => {
        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;
        if (posicao < alturaTela - 100) {
            elemento.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animarAoRolar);
animarAoRolar(); // Para animação inicial

// Formulário de contato via WhatsApp
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const numeroWhatsApp = '+55073982027253'; // Insira o número do WhatsApp aqui (código do país + DDD + número)

    if (nome && mensagem) {
        const mensagemFormatada = `Olá, meu nome é ${nome}. ${mensagem}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemFormatada)}`;
        window.open(urlWhatsApp, '_blank');
        document.getElementById('resposta-formulario').textContent = 'Abrindo o WhatsApp...';
        this.reset();
    } else {
        document.getElementById('resposta-formulario').textContent = 'Por favor, preencha todos os campos.';
    }
});
