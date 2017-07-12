let Person = require('./person')
// Write your code here
function Student(name,age,Klass){
	Person.call(this);
	this.Klass=2;
	this.introduce = function(){
		return "My name is "+this.name+". I am "+this.age+" years old. I am a Student. I am at Class "+this.Klass+".";
	}
}
module.exports = Student
