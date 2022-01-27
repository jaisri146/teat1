function fn(){
    const num = "Welcome to this Javascript Guide!";
    const a = num.split(" ");
    console.log(a);
    const b = a.map(function(data,index){
       return data.split('').reverse();
    });
    const c = b.join("  ");
    console.log("Output is",`${c}`);
    }
    fn();

    
    output:
    [ 'Welcome', 'to', 'this', 'Javascript', 'Guide!' ]
      
    Output is e,m,o,c,l,e,W  o,t  s,i,h,t  t,p,i,r,c,s,a,v,a,J  !,e,d,i,u,G