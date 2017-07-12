// Write your code here
function Person(name,age){
	this.name="Tom";
	this.age=21;
	this.introduce = function(){
		return "My name is "+this.name+". I am "+this.age+" years old.";
	}
}
module.exports = Person