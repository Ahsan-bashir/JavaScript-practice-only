                        //  CLASS 05
// q1
let a ="Ahsan";
let b=34;
let sum = a-b;
console.log('Sum = ',sum);
// q2
console.log(typeof (a+b))
// q3

const a1={
name:"ahsan",
section:2,
isprincipal:true

}


// ans = no, it cannot hold a string or a number later in const situation 

// q4

a1['friend']="Bilal"
a1['name']="Bilal"
console.log(a1)

// q5

const dict = {
    appreciate:"hosla",
    good:"efficient",
    ataraxia:"anxiety"
}


console.log(dict['ataraxia'])


// comparison operators 
let c1=34;
let c2="34";
console.log(c1 == c2)  // values equal  so true    ( types don't matter here )
console.log(c1 != c2)   // values equal  so false    ( types don't matter here )


console.log(c1 === c2)   // values equal but types diff. that's why false 
console.log(c1 !== c2)  // values equal but types diff. that's why true 

// logical operators 
console.log(c1==c2  && c1!= c2)
console.log(c1==c2  || c1!= c2)
    


