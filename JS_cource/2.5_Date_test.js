function PrintTime() {
    let t = new Date();
    elem = `${t.getYear()}:${t.getMinutes()}:${t.getSeconds()}:${t.getUTCMilliseconds()}`;
    document.body.innerHTML = elem;
}
setInterval(PrintTime, 1);