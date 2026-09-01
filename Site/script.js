function chuvaDeCoracoes(qtd = 12) {
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduzMovimento) return;

  for (let i = 0; i < qtd; i++) {
    const coracao = document.createElement('span');
    coracao.className = 'floating-heart';
    coracao.textContent = '♥';

    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.fontSize = (12 + Math.random() * 10) + 'px';
    coracao.style.animationDuration = (2.2 + Math.random() * 1.2) + 's';
    coracao.style.animationDelay = (Math.random() * 0.4) + 's';

    document.body.appendChild(coracao);
    coracao.addEventListener('animationend', () => coracao.remove());
  }
}

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const iconPlay = document.getElementById('iconPlay');
const iconPause = document.getElementById('iconPause');
const progressFill = document.getElementById('progressFill');
 
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    iconPlay.classList.add('hidden');
    iconPause.classList.remove('hidden');
  } else {
    audio.pause();
    iconPlay.classList.remove('hidden');
    iconPause.classList.add('hidden');
  }
});
 
audio.addEventListener('timeupdate', () => {
  const porcentagem = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = porcentagem + '%';
});
 

audio.addEventListener('ended', () => {
  iconPlay.classList.remove('hidden');
  iconPause.classList.add('hidden');
});

document.querySelectorAll('.note').forEach((note) => {
  note.addEventListener('click', () => {
    const isOpen = note.getAttribute('data-open') === 'true';
    note.setAttribute('data-open', String(!isOpen));

    
    if (!isOpen) chuvaDeCoracoes();
  });
});


const razoes = [
  'Com voce ate o silencio se torna gostoso',
  'Porque vocé repara em cada detalhe meu',
  'Porque com você a vida fica mais colorida',
  'Voce me ajuda a crescer',
  'Você é a minha maior certeza',
  'Você é atenciosa',
  'Você é empenhada',
  'Você faz docinhos deliciosos',
  'Você é estudiosa',
  'Você é respeitosa',
  'Você é o amor da minha vida',
  'Você tem personalidade',
  'Você é meu sonho',
  'Temos nosso filho ralfinho pra cuidar'
];

let indice = -1;
const contador = document.getElementById('contador');
const reasonText = document.getElementById('reasonText');
const heartBtn = document.getElementById('heartBtn');

heartBtn.addEventListener('click', () => {
  indice = (indice + 1) % razoes.length;
  contador.textContent = indice + 1;
  reasonText.textContent = razoes[indice];
});
