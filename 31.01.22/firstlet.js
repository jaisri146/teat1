function upperCase() {
    const inp = "john";
    const text = inp[0].toUpperCase();
    const text2 = inp.slice(1,4);
    const data = text + text2;
    console.log(data);
}
upperCase();

function upperCase() {
    const inp = "john";
    const text = inp[0].toUpperCase() + inp.slice(1,4);
    console.log(text);
}
upperCase();