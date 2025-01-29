function caesarCipher(str, shiftFactor) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (isLetter(str[i])) {
            str[i] = shift(str[i], shiftFactor); 
        }
    }
    str = str.join('');

    return str; 
}

function isLetter(char) {
    const regex = new RegExp(/[a-zA-z]/);
    return regex.test(char);
}

function shift(char, shiftFactor) {
    let charASCII = char.charCodeAt(0);
    const AASCII = 65
    const ZASCII = 90;
    const aASCII = 97;
    const zASCII = 122;

    while (shiftFactor != 0) {
        if (charASCII == ZASCII) {
            charASCII = AASCII;
        } else if (charASCII == zASCII) {
            charASCII = aASCII;
        } else {
            charASCII++;
        }

        shiftFactor--;
    }

    return String.fromCharCode(charASCII);
}

export { caesarCipher };