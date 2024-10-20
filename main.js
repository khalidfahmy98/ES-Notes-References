let name = 'Khalid';

const templateLiteral = `
    <h1> Hello There this is Example on Template litteral </h1>
    <p>Feel Free To enhance any changes </p>
    <hr>
    <ul>
        <li>Your name : ${name} </li>
    </ul>
`;

document.getElementById("body").innerHTML = templateLiteral;

/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */


// spreed operator  

let arr1 = [1,2,3,4],
    arr2 = [5,6,7],
    merge = [...arr1 , ...arr2 , 8,9,10];

    console.log(merge);

function sum (x , y , z ){
    return x+y+z;
}

console.log(sum(...arr2));


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */


// default parameters 
// nothing new just pass params in function while decleration 

/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */


// Rest paramaters

// it is the oppsite of the spread operator ,, it takes the elements and it in one bundle as array .

function sumAll (...params){
    let sum = 0;
    for ( let param of params){
        sum += param;
    }
    return sum;
}

// Math.min( arr[] ) get the lowest value in array ;

console.log(sumAll(1,5,4));


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */


// string methods in ECMA script 

// those functions are case sensitive .
// startsWith    -> string.startsWith( search string , position -> default = 0 )
// endsWitch      -> string.endsWith (search string , position -> not 0 it is string length [string.length] )
// includes    -> string.includes      (search string , position of starting to search of )  
// repeats       -> string.repeat      ( count of repeatations )

let stringof = ' Khalid Ahmed Fahmy - HEHEHE ' ;

console.log(stringof.startsWith('Khalid'));   // this returns true , because from position 0 the khalid string is there in the sent.
console.log(stringof.startsWith('khalid' ,10))  // this returns false , because no khalid string on position 10 [whie space included]

console.log(stringof.endsWith('HEHE')); // returns true , and the default position here is stringof.length
/* 
    No changes will be happen if you made it like this 
    console.log(stringof.endsWith('HEHE' , stringof.length ));
*/

console.log(stringof.includes('web'));  // returns false becuase no web string in the stringof variable .!
// You can use for example if you need to look up for a string in a title or paragraph to execlude or even put it in tag 

// to repeat it takes only count to repeat the string as many as you pass to the function 

console.log(stringof.repeat(3));  // the strigof  variable of string will be repeated 3 times ! 



/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

//  Destructing    Objects - Arrays - Parameter 


// Object Destructing 

// building an object in the old way means creating an object then doing variables to re assign those values 
// now it is easier you can do the following with two path ways to assign 

var objectTest = {
    nameobj : 'khalid',
    ageobj : 26,
    skills : {
        writing : '50%',
        coding : '80%'
    }
} // you did the object 

const { nameobj , ageobj } = objectTest ; // this means you created variables and every one will take the cross match value from obj
//usage EX 
console.log(`Hello ${nameobj} you are ${ageobj} years old `);

// 2nd way to assign is declare the variables then to expression in block scope 
let nameobj2  , ageobj2;
({nameobj2  = nameobj , ageobj2 = ageobj } = objectTest);  // this means go and pass the object values for those variables
//forget about = nameobj or = ageobj    this is made only to escape from repeatations 
//usage EX
console.log(`Hello ${nameobj2} you are ${ageobj2} years old `);

// --- CONT 
// you can fix what happen in 2nd path with the following alias 

const { nameobj : aliasName , ageobj : aliasAge } = objectTest ;
console.log(`Hello ${aliasName} you are ${aliasAge} years old `);

// to get nested objects by each nested key name 

const {skills : {writing , coding }} = objectTest;
console.log(`Your writing Skills : ${writing} And Coding Skills ${coding}`);
// there is another approach 
const { writing: writ  , coding : cod  } = objectTest.skills;
console.log(`Your writing Skills : ${writ} And Coding Skills ${cod}`); // because you only need here the skills object inside


// --- CONT    Destructing Arrays : 

// it is just the same as object destructing . 

const food = [ "pizza" , "tomato" , "rice"];
const [ one , two , three ] =  food ;  // this is the destruct 
console.log(`food array contains : ${one} , ${two} and ${three}`);
// what if the variables already assigned ? 
let oneA , twoA , threeA ;
[oneA , twoA , threeA ] = food ;  // thats is ! 
console.log(`food array contains  from variables : ${oneA} , ${twoA} and ${threeA}`);

// you can skipping as the following for example we will skipt twoA 

[oneA , , threeA] = food ;
console.log(`food array from vars skipped two  : ${oneA}  and ${threeA}`);

// - cont array destructing 

// Advanced Exmaple  Nested arrays in destructing same as nested objectes in object destructing 

const meels = ["pizza" , "Rice" , "Chicken" , ["apple" , "bannana" , "watermelon"]];

const [m1 , m2 , m3 , [v1 , v2 , v3 ]] = meels ;
console.log(` we provide : ${m1} with ${v1}  - ${m2} with ${v2} and ${m3} with ${v3}`); // also u can apply there skipping and everything

// using rest operator or spread operator  if i cant remember the other values names or how many !
let ram , rom ; 
const testSpread = ['ram' , 'rom' , 'memory'];
[ram , rom , ...others] = testSpread;
console.log(`there are ${ram} , ${rom} and maybe  : ${others}`);

// - cont   swapping values for two varaibles 

var  memory = "256gb",
     hdd = "8gb";

[memory , hdd ] = [hdd , memory];
console.log(` Memory : ${memory} and Hdd : ${hdd}`);


//  - : Destructing mixed content 
// this means what if we need to ditruct a mixed content object -> object -> array or even the opposite 

var khalid = {
    namer : "khalid ahmed fahmy",
    gender : "male" , 
    age : "26" , 
    skills : { 
        writings : "90%",
        reading : "90%",
        others : ["programming " , "designing" , "coding"]
    }
}
//now we will distruct 
const {namer , gender , age , skills: {writings , reading ,  others : [...allothers]}} = khalid; // we used the spread here as lazy XD to just get all others
// if u dont want the spread in ...allothers you can do this proceduer 
/* 
    others : [one , two , three ]  and use those variables names 
*/

console.log(`This object is called ${namer} age is : ${age} and ofcourse  his gender : ${gender}  his skills writing : ${writings} , reading : ${reading} and also those ${allothers}`);



// --- Destructing params in functions 

// Ok there are two approches here to destruct the params if it is object for example and we will use the Khalid object as it is the mixed 

//first approach passing the object as it is 
function GetKhalidInfo(khalid){
// in this case you have to access each property with the objectname.property otherwise it will cause an error 
console.log(`This object is  From function  called ${khalid.namer} age is : ${khalid.age} and ofcourse  his gender : ${khalid.gender}  his skills writing : ${khalid.skills.writings} , reading : ${khalid.skills.reading} and also  ${khalid.skills.others[0]}`);
}
GetKhalidInfo(khalid); //calling the function 

// the 2nd approach is destruct the params itself while passing 
function GetKhalidInfoDestructedParams({namer , gender , age , skills: {writings , reading ,  others : [...allothers]}}){
    console.log(`This object is called from function params destructed  ${namer} age is : ${age} and ofcourse  his gender : ${gender}  his skills writing : ${writings} , reading : ${reading} and also those ${allothers}`);
}
GetKhalidInfoDestructedParams(khalid);



/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// -: Enhance Obejct literals 

// - propertry short hand  : means if the object property is the same name exact as variable then no need to assign 

const  username = "khalid";

const shorthandObj = {
    username,    // no need to do this username : username   because they are the same name 
}
console.log(shorthandObj.username);

// - Method shorthand it is based on no need to type function keyword or colon ( : ) 

const methodShorted = {
    shorMethod(param1){
        return param1;     // it is used instead of doing     shorMethod : function (param1) { //code }
    }
}
console.log(methodShorted.shorMethod('WOW Khalid'));

// - Computed object property name 
// it is all about assigning to object a name of prop tha tis dynamic not static because maybe it fetched from db 
const dynamicKey = 'Age';

const computedObj = {
    name : "Khalid Fahmy ",
    [dynamicKey] : "25"   // because you need the key name comes as it is and you don't know it 
}
// the old way  or in js it was by re setting outside the object as the following step 
/* 
    computedObj[dyanicKey] = "25" or Value what ever .    
*/
console.log(computedObj); // and to use the dynamic 
console.log("Dynamic value Age is : " + computedObj.Age);



/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// -: The Difference between Set and Array , 

// the difference is set store only and filter to store the unique not repeated values otherwise array to the oppsite 
// the set cant be accessed with index 
// make sure that the values in set must be iterable ( string , array , list , object )
const myset = new Set([ 1 , 2 , 3 , 4 ]);
console.log(myset);
// ok cool . now if i have an array with repeated values need to make them unique 
const repeatedArray = [1,2,2,3,4,4,5];
const filteredArray = new Set(repeatedArray);
// it is now filtered , what if i need to spread them to be accessable 
console.log([...filteredArray]); // no filtered array from set .


// - Set Methods.

const stringSet = new Set();
// to add 
stringSet.add("k");
stringSet.add("h");
stringSet.add("a");
console.log(stringSet);
// to delete 
stringSet.delete("h");
console.log(stringSet);
// to get size 
console.log(stringSet.size);
// to check if a value is there 
console.log(stringSet.has("w")) // it will returns false because no W .
// to clear all the set values 
stringSet.clear();
console.log(stringSet);



/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// -: What is Map and the difference of object  , 

// obect is always converts the key to string and cant accept any another type but the map do the opposite 

const myMap = new Map(); 
// you have to approaches -> declare the values inside the map it self or chain after initlizing 
myMap.set(10 , "number");
myMap.set("10" , "string");
myMap.set( {name : "khalid" , age : "26"} , "object");
myMap.set(function sayHello() {} , "function");
myMap.set(true , "boolean");


console.log(myMap);

// or just inside the map 

const initlizingMap = new Map([
    [10 , "number"],
    ["10" , "string"],
    [{name : "khalid" , age : "26"} , "object"],
    [function sayHello() {} , "function"],
    [true , "boolean"],
]);

console.log(initlizingMap);


// - Map methods 

/* it is the same  methods in set */ 

/*
    Mymap.set('key')
    MyMap.get('key')
    myMap.has('key')
    myMap.delete('key')
    myMap.clear('key')
*/



/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// -: Symbols => it is a unique / immutable premitive data type could be used in the app 

const token =  Symbol();

const objectSybmoled = { 
    username : "Khalid",
    password : "112233",
    [token] : "hh5583322llxDfdgkk19374" 
}
// we are using the symbol here for example becuase we wont show the token as it is only for the app 

for(let val of Object.entries(objectSybmoled)){
    console.log(val);
} // as you see in the result the token no showed 

console.log(Object.getOwnPropertyNames(objectSybmoled)); // will show all props instead of token not presented 

// even you can use Object.keys();

// what if we need the symbols ? 

console.log(Object.getOwnPropertySymbols(objectSybmoled)); 

// symbol methods and previewing the global symbols info 

const user = Symbol.for("Khalid"); // assigned the description for that variable symbol 
// to get the desc or value u got two approaches 
console.log("Symbol User : " + Symbol.keyFor(user));
console.log("Symbol User : " + user.description);





/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// -: For each and usage of it 

// it is simply to loop throw array or object of elements 

const digits = ["K" , "H" , "A" , "L" , "I" , "D"];
// you got again two approaches 

digits.forEach(  (el , i) => {
    console.log(` Element Index : ${i} - : ${el}`);
});
// or doing a function that to the bindings 
console.log("-".repeat(20));
function bindLoop(el  , i ){
    console.log(` Element Index : ${i} - : ${el}`);
}
digits.forEach(bindLoop);


console.log("-".repeat(20));

// Using forEach with Set ? the set does not contain any index ? so the forEach adds the same value in both 

const Alphapit = new Set(["A" , "B" , "C" , "D" , "E" , "F" , "G"]);

Alphapit.forEach(itm => {
    console.log(` Alpha : ${itm}`);
});
console.log("-".repeat(20));

// using forEach in map ? 

const Sequance = new Map([
    ["Khalid" , "Fahmy"],
    ["Mahmoud" , "Mohammed"],
    ["Ahmed" , "Yasser"]
]);

Sequance.forEach( (itm1 , itm2) => {
    console.log(`First Name : ${itm2} - Second : ${itm1}`);
});



console.log("-".repeat(20));


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// The Difference between Set  / WeakSet 

/* 
    - Set 
        - Contain Any Type Of Values 
        - Get elements count with Size 
        - forEach available to iterate 
        - you can get its key 

    - WeakSet
        - Contains only object 
        - you cant use Size to get count 
        - forEach not available to iterate 
        - you can't get keys 

*/


// to pass object to set 

const objct = { A : "1"};
const DoSet = new Set([objct]);

console.log(DoSet);

const wkSet = new WeakSet([objct]);

console.log(wkSet);

// the difference is with grabage collection ,, if u assigned objct = null
// it would not be deleted from DoSet , but will be deleted from WeakSet 



console.log("-".repeat(20));


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// The Difference between Map  / WeakMap 

/* 
    - Map 
        - Contain Any Type Of Values 
        - Get elements count with Size 
        - forEach available to iterate 
        - you can get its key 

    - WeakMap
        - Contains only object 
        - you cant use Size to get count 
        - forEach not available to iterate 
        - you can't get keys 

*/

const objcct = { B : "1"};

const DoMap = new Map();

DoMap.set("C" , 1);
DoMap.set(objcct , "Testing");
console.log(DoMap.get(objcct));



console.log("-".repeat(20));


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// Iterables and Symbol Itreator 

/*
    Symbol Iterator & for loop 
    
    Iterable  : Object has symbol iterator .
    Iterator : 
        - Object with interface designed for iteration 
        -- all iterators has Next() method that return result object
        - the result object has two props 
            [1] Value => the next value 
            [2] Done => boolean value to tell if the next value Exist or no 


    For ... of loop 

    [1] Call symbol iterator with next method 
    [2] save value inside variable 
    [3] check for done if it is true -> exit the loop 


    the iterator method is Symbol.iterator 
    typeof() gets the type 

    string / array implements iterator method the others not .

*/
// lets test the symbol iterator and usage on string for example 

const myString = "Khalid"; // got next method and iterator fucntion 

console.log(typeof(myString[Symbol.iterator])); // must return function and thats correct 

let IteratableString = myString[Symbol.iterator](); // the last brackets is to return obj
console.log(IteratableString);
console.log(IteratableString.next());
console.log(IteratableString.next());
console.log(IteratableString.next());
console.log(IteratableString.next());
console.log(IteratableString.next());
console.log(IteratableString.next());
console.log(IteratableString.next()); // the iteration stops here as result undefiend and done of true 


// what about for ... of loop ? 
// it actually uses the symbol iterator inside as we discussed above 

for( let char of myString ){
    console.log(char);
}

console.log("-".repeat(20));


// Custom Iterable object > for not have any built in iterate methods such as numbers or objects

const IteratObjc = {
    name  : "khlalidfahmy",
    age : "26" , 
    skill : "Coding"
}
// to loop through object you need to pass iterator and do by ur self 
// to use for ... of loop for example.

// we must do iterator method by our self to change the about object to the following 

const ItObjct = {
    name : "Khalid" , 
    skills : "conding",
    age : 26,
    [Symbol.iterator] () {
        let step = 0 ; 
        let props = Object.keys(this)   // this referes to get the count of props as size 
        return {
            next() {
                return {
                    value : ItObjct[props[step]], // to return value of current step key  
                    done : step++ === props.length
                    // those are as we disuccssed earlier in next method and her returns 
                }
            }
        }
    }
}

// now easily use the for ... of loop and that's mean you can control the behaviour of the iteration

for ( let char of ItObjct ){
    console.log(char);
}


console.log("-".repeat(20));


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// Generators 
// it is a function that generates or yield data for you 
// the function starts with *    =>    function * generateNumber () {}  or function* generateNumber() and inside use yield;
// it creates iterators inside 

function * generateTicket (){
    yield 1 ; 
    yield 2 ; 
    // or you can 

    yield * [ 3,4,5,6,7,8];
}
let genInstance = generateTicket();
console.log(genInstance.next().value); // and so in after each next in the same context will get new value ,, also you can pass array to fn

// the yeilding could be anything
// you can loop on the iterator and on the generator it self 

for ( let num of genInstance){ // getInstance is the iterator and generateTicker is the generator 
    console.log( num);
}
// what it is the return in generators ? 

/* 
function * generateTicket (){
    yield 1 ; 
    yield 2 ; 
    // or you can 
    return 3 ;    MEANS here it would not execute after the return any yielding 
    yield * [ 3,4,5,6,7,8];
}

*/ 

// the generators delegations is passing many generators function in one generator and it iterate overthem 



/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// New Array Methods 
/*
    Array.of 
    Array.from 
    Array.fill

    Array.of( Elements to create the array )
    Array.from ( iterable , FN , this )
    Array.fill ( value to fill , start  = zero as default , end  = array length )
*/

let arrof = Array.of(1,2,4,5,6,7,8);
console.log(...arrof);
let stringName = "khalid";
let arrfrom = Array.from(stringName , e => e + 1);   // this is example of array from and with function parm could be removed .
console.log(arrfrom);

// Another methods 
/* 
    Array.find()
    Array.findIndex()
    Array.copyWithin() 

    Array.find ( el => el > 10 ) for example will return the first value in the array that fits the condition
    Array.findIndex( el => el > 10 ) it is the same array.find but returns the index or position not the value 
    
    Array.copyWithin( Target index  , start = default as zero , end = array length  )

*/

// Example of array.CopyWithin() 

let myLetters = ["A" , "B" , "C" , "D" , "E" , "F" , "G"]   // we need to copy d , e , f to start of the array 

console.log(myLetters.copyWithin(0 ,3 , 6));



/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// Modules Import/Export 

/*
    in any js file you can use in the end of the file 

    export {
        all variable names or function names whatever that need to be exported 
    }
    Or use export before any variable name or anything 

    import { exported elements } from 'src';



    What About Aliases ? 

    while exporting use 

    export {
        variable as AliasName 
    }
    and you use the Alias name to be imported 

    to import all as alias to be used 

    import * as all from ' src' ;
    -> to use    ->  all.prop 

*/


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// ES Classes 

class Users {
    constructor( name , age , gender ){
        this.name = name ; 
        this.age = age ; 
        this.gender = gender;
    }
    // any class got constructor now the arguments is the class paramters for example to be invoked once you create object 
    // let us do a function that logs the info of class 

    LogInfo(){
        console.log(`User name is : ${name} - age ${age} and gender ${gender}`);
    }
}

// now let's do object from class 

// const khalidObject = new Users("Khalid" , "26" , "Male");
// khalidObject.LogInfo();


// Class extending and inhertiance 

// first let us act the above class as the parent class to be extended 

// in case you doing this from another file then you must import the class directory 

class employee extends Users {
    constructor( name , age , gender){
        super(name , age , gender);
    }
}

const childObjects = new employee("mohammed" , "25" , "male");
childObjects.LogInfo();

console.log("-".repeat(20));

/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

// Call Stack / Web Api / Event Loop / Callback queue 
// it is important for promises 
/*
    - Call Stack : 
        Tracking of calls inside scripts knows which starts first , every invoked function it is added into stack until it is executed 
        the iterpretuer starts from the last in the stack 

    - Web Api 
        methods avaialble in the enviroment got handled from the brwoser such as window.Settimeout( () =>  fn , 0 )
        once it is done , it is added to queue 

    - Event Loop 
        wait the call stack to finish once the call stack is done , this gets from queue and then added to the stack to be executed 

    - Callback queue 



*/

// Example of call stack 
let i = 10 , j = 20 ; 
console.log( i + j );

function firstfun(){
    console.log("first");
}
function secondfun(){
    firstfun();
    console.log("second");
}
secondfun();

// in case you want to test the call queue you can try the following 
// console.log("one first");
// window.setTimeout( () => console.log("second") , 0 ) // this shoud be added second !! but it will be the last regarding the queue , stack 
// console.log("third");


// window.setTimeout( () =>  console.log("-".repeat(20)) , 50); // we added into setTimeout only just to get it last before the new section 

/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */
// Asyncrhonous  and Synchronous  programming what are they and examples 
// js is single thread language -> means only got one call stack not as the C++ that is multithread 

/* 

Async means do many scripts in the same time even if it is single thread 

but the sync scripting is means to keep working as stack and do every script in the same order 

for example if used alert ( in sync ) it would stop the scripts until the alert finished 

*/ 

// Example 

console.log(" we are trying to keep the script working in good behaviour");
window.alert("..Delay");
console.log("oh we got delayed !");


/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] */

/* 
    Promises Introduction : 
    what is Promise : ? 
    
    promise is helpful in the async programming 
    it is like a promise in real life 
    same as placeholder for the future value 

    promise is got one of three status : 
    - pending 
    - fulfilled 
    - rejected 

    the promise takes two handlers we will create one as example 
    resolve , rejected -> is the two param handlers 
*/
// the promise start as pending 
const myPromise = new Promise( (resolve , rejected) => {

    // we may got here many async operations 
    // in case fulfilled -> resolved 
    // otherwise rejected 
    let connection = true ; 
    connection ?  resolve("connection established") :   rejected(Error("connection failed"));
  
    // console.log("Promise Testing ")
});
// you can use then  to handle the handlers 

myPromise.then( 
    (resolve) => console.log(resolve),
    (rejected) => console.log(rejected)
);