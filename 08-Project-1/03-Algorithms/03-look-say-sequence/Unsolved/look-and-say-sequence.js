// Write code to create a function that accepts a number (`n`) and returns a new number that satisfies the look-and-say-sequence

var n = 114333877;

var lookAndSay = function(n) {
  let result = '';
  let nArr = (n + ' ').split('');
  console.log('nArr',nArr);
  let prevNum = nArr[0];
  console.log('prevNum',prevNum);
  let count = 0;

  nArr.forEach(e => {
    if (e === prevNum) {
      count ++;
    }
    else {
      result += (count + '') + prevNum;
      console.log('result', result);
      prevNum = e;
      count = 1
    }
  });
  result = parseInt(result);
  return result;
};

console.log(lookAndSay(n));
