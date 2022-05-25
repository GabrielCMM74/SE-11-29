<img src="https://i.imgur.com/DEsPVNw.png" height="400">


# Intro to JavaScript Objects


### Objectives
*After this lesson, students will be able to:*

- Create and use Objects
- Describe Objects supreme importance in JavaScript
- Add and retrieve properties to an existing object using the dot and bracket notations
- Understand Objects role in the JavaScript language. 

### Preparation
*Before this lesson, students should already be able to:*

- Create and manipulate variables with javascript
- Use the chrome dev tools console

### What is an object?

* Objects are a type of data structure that is nearly universal across programming languages, although they may have different names in different languages
* Like arrays, objects can hold multiple pieces of data of varying types; but unlike arrays, objects use named keys rather than indices to order and access those pieces of data
* The key - value store functions kind of like a dictionary that pairs words with definitions, and you can look up a definition by finding the word. For this reason, objects are actually called `dictionaries` in Python!
* In JavaScript Objects typically have properties and methods. Properties are data attached to an object that describe it or are related to it in some way. Methods are just functions, but because they're attached to an object, you can think of them as actions that the object can invoke on itself

Example: A skateboard is an object that has properties and we can model a skateboard in JavaScript!

A skateboard has properties like number of wheels, board graphic, and company. It also could have methods like "kickflip" or "treflip benihana".

### Syntax

Objects use curly braces, just like code blocks. However instead of semicolons between lines, we use commas. 


```javascript
const skateboard = {
  wheels:    4, 
  gripColor: "black", 
  company:   "Toy Machine",
  graphic:   "monster graphic",
  kickflip(){
               console.log("SIIIICK DOOD");
          }
};
```

### Key Value Pairs
Each item in an object is a key-value pair like this: `company: "Toy Machine"`.

A key can be either a name, a number or a string, the corresponding value to a key can be any value part of JavaScript, including arrays, `null` or `undefined`and even another object. Objects structures can therefore be nested (objects inside objects) and of any complexity.

### Let's Practice :computer: 

 ```
- Create an Object called `bigfoot` with propterties of `shoesize`, `height`, and `current location`. 
- Add some more properties you come up with on your own. 
- BONUS: Add a method (or function, same deal) to your bigfoot object!
- 4 min.
```

## Creating Objects

There are other ways to create an object! What you just learned is called Object Literal Notation. 

It's called that because you just literally typed the object in there. There are also:

String Literals: `"hello world"`
Array Literals: `["foo", "bar", "baz"]`
and Integer Literals: `8`

Don't get hung up on the fancy name. It just means you definied the object literally. It will make more sense when you see the others. 

Here's an empty Object Literal: 

`const myShinyObject = {};`

## Object methods

As we've said before, the value of a property can be anything in JavaScript, means we can also attach functions to objects properties. When a function is attached to a property, this function becomes a `method`. Methods are defined the exact same way as a function, except that they have to be defined as the property of an object.

```javascript
const classroom = {
  name: "WDI+ TX",
  sayHello: function() {
    console.log("Hello");
  }
};
```

To call the method, we add a pair of parentheses to execute it:

```
classroom.sayHello();
=> Hello
```

### Let's Practice :computer: 

 ```
- In your Chrome Console, create a new Object and give it four properties and a method using what we just learned. 
- Retrieve each property and call the method. Remember you need `()` to envoke a funtion
- See what happenes when you retrieve a method from a function without calling it using `()`. 
- Thumbs up when done! 
- 5 min.
```

#### Bracket notation

There is another way to set properties on a JavaScript object. 

```javascript
galaxy["diameterInLightYears"] = 100000;
galaxy["isEliptical"] = true;
```

This syntax can also be used to read properties of an object:

```javascript
galaxy["diameterInLightYears"];
// 100000

galaxy["isEliptical"];
// true
```

For more details see [MDN's Documentation on Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

### Let's Practice :computer: 

 ```
- In your Chrome Console, create a new Object and give it four properties and a method using bracket notation. 
- Retrieve each property and call the method. Remember you need `()` to envoke a funtion
- Thumbs up when done! 
- 3 min.
```

**Which one should we use?**
Basically there are two differences. 

1) Dot notation is easier to read
2) Bracket notation can only work with strings as keys. 

For these two reasons, dot notation is generally a better choice. However, bracket notation occasionally has its uses.

#### Deleting properties

If you want to delete a property of an object (and by extension, the value attached to the property), you need to use the [`delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) operator:

The following code shows how to remove a property:

```javascript
const myHerb = {name: "thyme", flavor: "savory"};
delete myHerb.flavor;
myHerb
// {name: "thyme"};
```

#### Assigning a previously-defined function

We can attach regular functions to objects as methods, even after they are created.

```javascript
const sayHello = function(){ 
  return console.log("Hello"); 
}

classroom.sayHello = sayHello;  

classroom.sayHello()
=> Hello
```

## Everything is an Object in JavaScript

Mind. Blown. 

It's true. Ok, there are keywords and a thing called "primatives". 

Primatives are building blocks of programs like strings. But when you actually USE strings in JavaScript, they are automatically converted into String objects. Why? Because only OBJECTS can have properties and methods! 

Arrays are objects, and functions are objects. Numbers, strings, and booleans are primitives, but when we use them they are usually converted to Objects. 


```javascript
const myArray = [];
typeof myArray;
//"object"

const myString = "dope af";
typeof(myString)
//"string"

// But when you do this: 
myString[0]
//"d"

// myString get's temporarily converted into an String Object.
```

**Takeaway:** Javascript is complex, but there is order in the chaos. Part of that order is using key value pairs to structure almost everything in the language. 

**Mind blow II:**

Not only are arrays a type of object, but they are nearly identical. Among the few differences are:

1. Arrays are Objects that use ordered integers for their keys. 

```javascript
const myArray = ["hello", "world"];
```
is nearly identical to: 

```javascript
 const myObject = {"0": "hello", "1": "world"};
 
 myArray[0] === myObject["0"];
 // true
```

2. Arrays are guarunteed to stay **in order**. For efficiency purposes, objects are not. 

## Conclusion (5 mins)

We will use objects in JavaScript every day, and you will have plenty of time to practice creating and using objects in Javascript. There are a lot of resources available on the web for you to dive deeper, but the most detailed and understandable one is probably MDN.

- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Intro to Object-Orientated Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [Objects in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [All of JavaScript in one image](https://coodict.github.io/javascript-in-one-pic/js%20in%20one%20pic.png)


### ❓ Essential Questions

- **An object is a collection of zero or more ___________.**

- **Properties are _____ : ______ pairs.**

- **Is it more efficient to access properties via dot or square bracket notation?**

- **Is the following valid code?**

	```js
	const name = prompt('Enter your name: ');
	const age = prompt('Enter your age: ');
	const person = {name, age};
	```

=====================

### Further Study




### How Variables Reference an Object

- As you know, variables are slots in memory that hold a value.

- All non-object data types are known as primitive, or value, types because they hold a single value. Picture a table in memory like this:
	
	```
	SCOPE TABLE            var | value/ref
	                      -----------------
	let x = 25        -->   x  |  25
	var msg = 'hello' -->  msg | 'hello'
	const y = x       -->   y  |  25
	```
	
- But objects are complex/reference types because they can hold multiple pieces of data...

- Objects, including Arrays, Functions, etc. are stored in a separate part of memory known as the _heap_. A variable for an object has as its value a "reference" (think pointer):

	```
	SCOPE TABLE             var | value/ref
	                       -----------------
	let x = 25         -->   x  |  25
	var msg = 'hello'  -->  msg | 'hello'        HEAP 
	const obj = {a: 1} -->  obj |  ref1   --->  {a: 1} <--|
	let arr = [1,2]    -->  arr |  ref2   --->  [1,2]     |
	let obj2 = obj     -->  obj2|  ref1   -----------------
	```

- Similarly, the elements of an array and the properties of an object hold their values in the same way.

- Now this makes sense:

	```js
	const arr1 = [];
	const arr2 = [];
	const arr3 = arr1;
	arr1 === arr2  // false!
	arr3 === arr1 // true!
	```


- [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) properties allow you to treat methods like regular properties that you can access without invoking and set using the assignment operator (`=`).

- [Computed Property Name syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names) allows for an expression to determine the key name inside of an object literal - just like using square bracket notation on an existing object.


