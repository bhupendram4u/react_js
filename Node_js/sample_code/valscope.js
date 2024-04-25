for(var i=0; i<=5; i++) {
    const func = (x) => {
      setTimeout(() => {
        console.log(x);
      }, 1000);
    };
    func(i);
  }
/*
0
1
2
3
4
5
*/
 

  for(var i=0; i<=5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }

  // only 6 print 5 times;