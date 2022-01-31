function secondLarge() {
    const Arr = [12,35,1,10,34,1]
    const data = Arr.sort(function(a,b){return b-a})
    const out = data[1];
    console.log(out);
}
secondLarge();