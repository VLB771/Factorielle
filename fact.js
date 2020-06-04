
function fact(myArg) {

  var myArg = process.argv[2];
  console.log('myArg: ', myArg);
  
  var myFactArg = myArg;
  
  for(var i = 0; i < myArg - 1; i++) {
  
    myFactArg = myFactArg * (i + 1);
    console.log(myFactArg);
  }
  
  return myFactArg;
  
  }
  
  console.log(fact());
  