module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.counter()}
o) 平均值 = ${sequence.average()}`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    this.input=input;
  }

  minimum() {
    // Write your code here
    this.input.sort(function sortNumber(a,b){
        return a - b
      });
    return this.input[0];
  }

  maximum() {
    return this.input[this.input.length-1]
  }

  counter() {
    return this.input.length;
  }

  average() {
    // var sum = eval(this.input.join("+"));避免eval的使用
    var sum=0;
    for(var i=0;i<this.input.length;i++){
      sum+=this.input[i];
    }
    //return ~~(sum/this.input.length*100)/100;
    return (sum/this.input.length).toFixed(2);
  }
}