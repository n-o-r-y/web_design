//var--function
//let---block
//const--constant,block
function sayHello(){
    for(let i=0;i<5;i++)
    {
        console.log(i);
    }
}
sayHello();

//object
const person={
    name: 'Nory',
    walk(){//-------------------method
        console.log('They can hatte pare');
    }
};

person.walk();
console.log(person);

//arrow_function
const square = number => number *number;
console.log(square(5));

//
const jobs=[
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
]
const activeJobs= jobs.filter(job => job.isActive);