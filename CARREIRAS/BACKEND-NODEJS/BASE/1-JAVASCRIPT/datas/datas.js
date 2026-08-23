
const agora = new Date();
console.log(agora)

console.log('ano', agora.getFullYear());
console.log('mês 0-11', agora.getMonth() + 1);
console.log('dia', agora.getDate());
console.log('hora', agora.getHours());
console.log('minutes', agora.getMinutes());

const nascimento = new Date(1994, 8, 29);
console.log('nascimento', nascimento);

const nascimentoCorreto = new Date('1994-09-29T03:00:00.000Z');
console.log('nascimento correto', nascimentoCorreto);

console.log('data formatada (BR)', nascimentoCorreto.toLocaleDateString('pt-BR'))
console.log('data formatada (US)', nascimentoCorreto.toLocaleDateString('en-US'))















