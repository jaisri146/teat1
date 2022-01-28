function fn(){
    const A = [3,2,1,56,10000,167]
    const b = Math.min(...A)
    const c = Math.max(...A)
    console.log("min =",`${b},`,"max =",`${c}`);
  }
  fn();

  function fn(){
    const A = [3,2,1,56,10000,167]
    const d = A.sort(function(a,b){return(a-b)})
    const b = Math.min(...d)
    const c = Math.max(...d)
    console.log("min =",`${b},`,"max =",`${c}`);
  }
  fn();