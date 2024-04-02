const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected"); //always rejected
  });
  
  Promise.any([Rejection]).then(()=>console.log("whoo"))
    .catch((err) => {
      console.log(err);
    });