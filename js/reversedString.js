function reversedString(str) {
    str = str.split('');
    str = str.toReversed();
    str = str.join('');
    return str;
}

export { reversedString };