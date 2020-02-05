function johnLennonFacts(facts) {     
  var resultArray = [];
  var i = 0;
  while(facts.length > i) {             
    resultArray.push(`${facts[i]}!!!`);
    i++;
  }
   return resultArray;
}