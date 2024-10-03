function resolvedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resolved promise after 500ms');
      }, 500);
    });
  }
  
  function rejectedPromise() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject('Rejected promise after 500ms');
      }, 500);
    });
  }
  
  // Handling the resolved promise
  resolvedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));
  
  // Handling the rejected promise
  rejectedPromise()
    .then(message => console.log(message))
    .catch(error => console.error(error));
  