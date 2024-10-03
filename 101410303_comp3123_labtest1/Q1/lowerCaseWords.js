function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(mixedArray)) {
        reject('Input is not an array');
      } else {
        const filteredArray = mixedArray.filter(item => typeof item === 'string');
        const lowerCasedArray = filteredArray.map(item => item.toLowerCase());
        resolve(lowerCasedArray);
      }
    });
  }
  
  // Example usage:
  lowerCaseWords(['PIZZA', 10, true, 25, false, 'Wings'])
    .then(result => console.log(result))
    .catch(error => console.error(error));