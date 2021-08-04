const mt = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if (!String.prototype.replaceAll) {
        String.prototype.replaceAll = function(str, newStr) {
            return this.replace(new RegExp(str, 'g'), newStr);
    
        };
    };
    const ma = Object.keys(mt);
    const arr = expr.split('');
    let strCode = '';
    for (let i = 0; i < arr.length; i++) {
        if (i > 0 && i % 10 === 0) strCode += ' ' + arr[i];
        else strCode += arr[i];
    }
    const lettersCode = strCode.split(' ');
    let ml = [];
    lettersCode.forEach(i => ml.push(i.replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-')));
    let str = '';
    ml.forEach(i => {
        if (i === '**********') str += ' ';
        else ma.forEach(j => {
            if (i === j) str += mt[`${j}`];
        })
    })
    return str;
}

module.exports = {
    decode
}