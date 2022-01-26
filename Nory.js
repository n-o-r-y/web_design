let person={
    name: 'Nory',
    age: 22
};

person.name='Nusrat';
console.log(person.name);
console.log(person);

let n=null;
n=7;
let m=undefined;
m=2;
console.log(n,m);

//function
function fun(firstname,lastName){
    console.log('Hello '+firstname + ' '+ 'jahan');
}
fun('nusrat','jahan');

//calculation in function
function square(num)
{
    return num*num;
}
console.log(square(2));