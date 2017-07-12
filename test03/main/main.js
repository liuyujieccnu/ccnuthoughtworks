module.exports = function main(str) {
  // Write your cade here
  	var arry=str.split("");
  	var sum=0;
  	for(var i=0;i<arry.length;i++){
  		sum=sum+parseInt(arry[i]);
  	}
  	console.log(sum);
  	return sum;
};