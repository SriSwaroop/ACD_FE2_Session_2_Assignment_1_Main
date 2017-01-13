



<script>
//--------------------------------------------------------------------------------------------------------------------------------------------

//1. Often we have nested functions in which we would like to preserve the context of this from its lexical scope

function Person(name) { 
    this.name = name; 
} 

// Here still function is used because here person.prototype is used, if it was this.prefixname we can remove "function "   and use fat arrow => refer to example 

Person.prototype.prefixName = function (arr) {  
	return arr.map( (character) =>{ 
		
        return this.name + character; 
    }, this); 
}; 

var pers1 = new Person("John");
pers1.prefixName(["Lucas"])

//-------------------------------------------------------------------------------------------------------------------------------------------

// 2. Create Object destructuring for user where user has: 1. First Name, 2. Last Name, 3. Date of Birth, then assign this object in other object like:

let obj = {Firstname:'John',Lastname:'Petrucci',Dateofbirth:'12-07-1967'}

let {Firstname:fname,Lastname:lname,Dateofbirth:dob}=obj;

var printdestructuredobj=(()=>{
console.log(`Firstname ${fname} Dateofbirth ${dob}`)
});

printdestructuredobj();

//---------------------------------------------------------------------------------------------------------------------------------------------------

//3.  Create Array destructuring (which works for all iterable values) where you have all your friends name then console one by one all separately
var  foo = ['Araya','Dimebag','Randy'];
var[one,two,three]=foo;

var printdestructuredArray=(()=>{
console.log(one);
console.log(two);
console.log(three);
});
printdestructuredArray();

//---------------------------------------------------------------------------------------------------------------------------------------------------

//4. Replace IIFEs with Blocks

((someFunction)=> {
  food = 'Meow Mix';
  console.log(food) 
})(); 
food='Cat guts';
console.log(food)

//---------------------------------------------------------------------------------------------------------------------------------------------------


</script>