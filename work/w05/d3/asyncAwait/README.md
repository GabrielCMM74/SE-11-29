# Async and Await

---
<img src="https://i.imgur.com/PMyzlb1.png">

---
## Learning Objectives
<br>

Students Will Be Able To:

- Describe the Use Case for Async and Await
- Whats a Promise
- Whats Callback Hell

---

### Callback Hell

- Do you remember having to nest callback functions?

- It can get ugly:

	<img src="https://i.imgur.com/Zyq5zZU.png">

- The advantage of promises is that they "flatten" the async flow and thus avoid the so-called _pyramid of doom_.




### What is Async and Await

- Well ```async``` and ```await``` are new functions in native javascript, and are becoming quite popular.  Basically
they are wrappers for a promise, you can read more about promises here [Resources on Promises](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/) if you want to learn the old school way,
of avoiding callback hell which we experienced in connecting our models in the "blog" app. In short bascially promises in a simple explanation is basically,
1.  You are asking for something to be done like a database query, for example ```Bird.find()```
2. "then" you want something to happen when it finishes, so a promise in a way would look like the following
```javascript
Bird.find({}).then((err, birds)=>{
   console.log('birds')
});
```
> As you can see we are making the database query (```Bird.find({}))```,  ```.then``` when the query has a response from the database we run the anonoymous function inside of the then method.  The syntax can be more complex then this example, when using Native promises but this is what the general idea is.  Run an asynchrounous function, wait for the result, then run a new function


#### Native Promises
<br>

- Let's give `new Promise()` an _executor_ function as an argument that has two parameters:

	```js
	const p = new Promise(function(resolve, reject) {
	  console.log(resolve, reject);
	});
	console.log(p);
	```

- Observations:
	- The _executor_ is immediately called by the Promise constructor passing functions as args for the `resolve` and `reject` parameters.
	- The promise created is an object with a `<pending>` state.

---

#### Resolving Promises
<br>

- So far our code is _synchronous_, let's make it _asynchronous_:

	```js
	const p = new Promise(function(resolve, reject) {
	  setTimeout(function() {
	    resolve('Timed out!');
	  }, 2000);
	});
	
	p.then(function(result) {
	  console.log(result);
	});
	``` 
	We're using `setTimeout` to create an _asynchronous_ operation 

- So, we've seen how the `resolve` function fulfills a promise,<br>I bet you know what the `reject` function does...






** async/await **

So coming to the rescue from the beautiful land of javascript creation, we now have async, and await, which
allows us to write more synchronous looking code, so it is much easier to read. We will use ```async``` and ```await``` in tandem, so when using the ```async```function we will label a function that is asychrounous, aka (our Routes, Database queries, ajax calls) any function that has to wait for something to happen, then to run another function. So the general outline is like the following,

```javascript
async function addSync(){
  const a = await doubleNumberAfter5secs(10);
  const b = await doubleNumberAfter5secs(20);

  return a + b
}
```

So Since addSync, is asychrounous, basically it takes awhile to run, and enters the node [event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/), we are labeling the function with the,
```async``` keyword, in order to let the node intepreter its an asychronous function, then inside the function,
we are using the ```await``` keyword, to await the result of a fictional function ```doubleNumbersafter5secs()``` to complete running, then when those are finished we are returning the results of both of those functions together.  Now we will implement this on our backend with a ton more examples.


#### Extra resource, Highly Recommend watching the second video tongiht
* [css tricks async Await](https://css-tricks.com/using-es2017-async-functions/)
* Really good video, [youtube dude](https://www.youtube.com/watch?v=568g8hxJJp4)
* Wes Bos Presentation [Wes Bos Async Await](https://www.youtube.com/watch?v=9YkUCxvaLEk)

#### Implenting Async and Await on a backend

** This helps greatly with readability, and we will be using it again in class **
1.  We are going to use a [Dog](https://git.generalassemb.ly/SEI-CC/Async-Await-Dogs) app, which was previously created, that will
look very familiar to what we have been doing

2.  So Lets start with the ```index.ejs``` route, we have the following

> Remember the dog route itself is asychrounous, as well as our model query by ```Dog.find()```

*Index*
```javascript
  Dog.find({}, function(err, foundDogs){
      res.render('index.ejs', {
        dogs: foundDogs
      });
  });
```
##### So we can refactor this to look really nice like the following
```javascript
 
           try  {
            console.log('hit')
            // instead of what we had before
            // this is are database call, so we are "trying"
            // to find all the dogs, and a successful response, will save a successful
            // response in the foundDogs variable, Compare this to the above
            const foundDogs = await Dog.find();

            res.render('index.ejs', {
              dogs: foundDogs,
            });

          } catch (err){
            // If the await Dogs.find() fails this is where the error message will go
            res.send(err)

          }
```

> Doesn't that look nicer!

3.  We are going to follow this same exact pattern in the "show" route, we have the following

*Show*

```javascript

  Dog.findById(req.params.id, function(err, foundDog){
    res.render('authors/show.ejs', {
      dog: foundDog
    });
  });

```
#### So we can refactor to the following
```javascript
 
           try  {
            console.log('hit')
            // install of what we had before
            // this is are database call, so we are "trying"
            // to find a dog, and a successful response, will save a successful
            // response in the foundDog variable, Compare this to the above
            const foundDog = await Dog.findById(req.params.id);

            res.render('index.ejs', {
              dogs: foundDog,
            });

          } catch (err){
            // If the await Dog.findById(req.params.id) fails this is where the error message will go
          
            res.send(err);

          }

```
> Starting to recognize the pattern?  We are 'trying' to make a database query, and we await the response
from the database and save it in a variable
4.  So following the same pattern we will now discuss the ```edit``` route, we have the following

*Edit*

```javascript


  Dog.findById(req.params.id, function(err, foundDog){
    res.render('edit.ejs', {
      dog: foundDog
    });
  });


```
#### Which we will be able to refactor to,
```javascript
   
           try  {
            console.log('hit')
            // install of what we had before
            // this is are database call, so we are "trying"
            // to find a dog, and a successful response, will save a successful
            // response in the foundDog variable, Compare this to the above
            const foundDog = await Dog.findById(req.params.id);

            res.render('index.ejs', {
              dogs: foundDog,
            });

          } catch (err){
            // If the await Dog.findById(req.params.id) fails this is where the error message will go
          
            res.send(err);

          }

```
> Not much change here
5.  Next on to the ```put``` route, we have the following

*Put*

```javascript

  Dog.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedDog){
    console.log(updatedDog, ' this is updatedDog');
    res.redirect('/dogs');
  });

```
#### Which can be updated to the following,
```javascript
   
           try  {
            console.log('hit')
            // install of what we had before
            // this is are database call, so we are "trying"
            // to update a dog, and a successful response, will save a successful
            // response in the updatedDog variable, Compare this to the above
            // remember the {new: true} is an options object which is asking
            // the updatedDog to be returned from MongoDB, which will be saved in the
            // updatedDog variable
            const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {new: true});

            res.redirect('/dogs')

          } catch (err){
            // If the await Dog.findByIdUpdate(req.params.id, req.body, {new: true) fails this is where the error message will go
           res.send(err)
          }


```

> Look at how pretty that looks!!!!!!

6. Next we are on to the ```create``` route, we have the following,

*Create*

```javascript


  Dog.create(req.body, function(err, createdDog){
    console.log(createdDog, ' this is the createdDog');
    res.redirect('/dogs');
  });


```

#### we can update to the following,

```javascript
   
           try  {
            console.log('hit')
            // install of what we had before
            // this is are database call, so we are "trying"
            // to create a dog, and a successful response, will save a successful
            // response in the createdDog variable, Compare this to the above
            const createdDog = await Dog.create(req.body);

            res.redirect('/dogs');

          } catch (err){
            // If the await Dog.create(req.body) fails this is where the error message will go
            // This passes the error on too the middleware route
            next(err);

          }


```

> It's wonderful isn't it, YES IT IS, truly

7.  And finally the "delete" route, we have the following,
```javascript


  Dog.findByIdAndRemove(req.params.id, funciton(err, deletedDog){
    console.log(deletedDog, ' this is deletedDog');
    res.redirect('/dogs')
  })


```
#### This can be updated to the following
```javascript


        try  {
            console.log('hit')
            // install of what we had before
            // this is are database call, so we are "trying"
            // to delete a dog, and a successful response, will save a successful
            // response in the deletedDog variable, Compare this to the above
            const deletedDog = await Dog.findByIdAndRemove(req.params.id);

            res.redirect('/dogs');

          } catch (err){
            // If the await Dog.findByIdAndRemove(req.params.id) fails this is where the error message will go
          
            res.send(err);

          }

```

>  So that is all the routes updated, with Async and Await look at how much cleaner that looks!
