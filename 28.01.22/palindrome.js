function fn(){
    const a = "madam"
    const b = a.split("").reverse();
    if(b==a){
      console.log("It is a palindrome");
    }else{
      console.log("It is not a palindrome");
    }
  }
  fn();