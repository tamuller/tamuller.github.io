const el = document.getElementById('ctct');
const a = window.location.hostname;
const list = 'lbcmefghijanodpqr4stuvwxyz0123k56789:;.,/-=';
const numbers = [3,10,8,0,19,12,36,2,12,11,19,10,2,19];
const result = numbers.map(x => list[x]).join('') + String.fromCharCode(64);
el.setAttribute('href', `${result}${a}`);
