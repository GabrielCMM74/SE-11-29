<img src="https://i.imgur.com/fx2orT2.png">

## Learning Objectives

| Students Will Be Able To: |
| --- |
| Ready a React app for production |
| Logically structure a full-stack React project |
| Configure an Express app to serve a React app's **index.html** file |
| Configure an Express app to accommodate client-side routing |
| Configure a React project for full-stack development |

## Why Full-stack?

Thus far, our React apps have been static, front-end only apps that don't communicate with a server after the _index.html_ has been delivered.

It's _possible_ for static front-end only SPAs to have a reasonable amount of functionality if they incorporate calls to APIs or cloud services like Firebase.

However, most SPAs rely on a backend server app for tasks such as:

- Performing CRUD
- Authenticating users

Such an app, where we write code that runs on the front-end and the backend, as you know, is a full-stack application.

## Architecting a Full-stack React App

Up until this point, we've taken for granted that full-stack apps, like your Express and Django projects, were single, integrated projects.

However, developing a MERN-stack (MongoDB, Express, React & Node) project involves complexities such as tooling, React's integrated development server, etc.

Basically, there are complications in both **development and production** environments that have to be addressed.

#### Complications During Development 

If we're going to develop a MERN-stack app, we have to figure out how we're going to:

- Use React's Development Server (`npm start`)
- **and**, run `nodemon` to productively develop an Express backend that can respond to AJAX requests sent from the React front-end

<details>
<summary>There's a conflict between React's development server and Express development - what is it?</summary>
<p><strong>They both run on port 3000 by default.</strong></p>
</details>

<br>

> Key Point: When developing a MERN-stack app, you will need to launch **both** React's development server (`$ npm start`) **and** the Express app (`$ nodemon server`) in separate terminal sessions.

#### Production Environment Complications

As we develop our React app locally, we're writing source code that React's dev server builds and runs automatically.

However, the React dev server is a local tool that does not run in the cloud, i.e., on Heroku.

We need to ensure that whatever hosting service we use is configured to **build** the React app with each deployment.

Luckily for us, beginning in 2019, Heroku started to automatically build React apps for us.

In addition to ensuring that the hosting service builds the React app, we need to ensure that we code the Express backend app to serve the built production code

#### Possible Full-stack Architectures

There are two general architectures we could pursue:

1. Maintain **two** separate projects, one for the React SPA, the other for the Express backend.
1. Integrate the codebase for both the React front-end and the Express backend.

| Architecture | Pros | Cons |
| --- | --- | --- |
| Separate Projects | Easier to set up. | Manage two projects and git repos. Must deploy to two separate hosts, **or**, copy over the front-end production code to the server project before each deployment. There will be cross-site configuration issues as well. |
| Single Project | A single codebase! | None |

The single, integrated project approach looks to be a no-brainer. But, what does the structure of a single project look like?

Again, two options:

1. Start with an Express app, then generate the React app within it (naming it `client` or something similar). This approach will result in nested **package.json** files and **node_modules** folders requiring you to "know where you are" when installing additional Node modules.
1. Start with a React app, then add an Express **server.js** and other server related folders/files as necessary. This approach results in a single **package.json** file and **node_modules** folder.

The second option is "cleaner". Plus, we already have react-mastermind eager to be made full-stack, so we'll opt for that approach...

## Building the React App's Production Code

If we want to be able to test locally how our full-stack application is going to run when deployed, we'll need to:

- Build the React app's code locally - this is called "production code"
- Configure Express to serve the production code

So, how do we make the `index.html` & React's JavaScript production-ready? 

Thankfully, the `create-react-app` CLI includes tooling and a **build** script in **package.json** that, when run, converts the the code in the `src` and `public` folders of the React project into production code.

Let's run it:

`$ npm run build`

> Note: npm requires us to use the `run` command for scripts other than `start` and `test`.
 
After building, examining our project's structure reveals a new **build** folder containing a production ready **index.html**, **static/css** & **static/js** folders, and other less important stuff.

This **build** folder of production-ready goodness is ready to be served up by an Express backend...

## Express Boilerplate

We're going to use a MERN-stack boilerplate created by your instructors.  This is often something you want to create for yourself or reuse when you find yourself making similiar applications.

In a MERN-stack app, the backend Express app only does two things:
(MERN - Mongoose, Express, React, Node)

1. Serves static assets, such as `index.html`, to the browser, and
2. Responds to AJAX requests from the React app running in the browser

The Express server will never access any of the source code for the **React project**.

It simply needs to deliver the **production-ready** `index.html`, which will in turn request the **production-ready** scripts, etc., that were built using `$ npm run build`.

#### Install the Modules for the Express Server

The full-stack architecture we decided on uses a single **package.json** file (the one that was created by `create-react-app`).

There's no problem with the Express project sharing that same **package.json**.

`npm install`

What is set up on the server to serve express?

 Mount and configure the `serve-favicon` & `static` middleware so that they serve from the **build** (production-ready) folder:

```js
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
```

A single "catch all" route is required for client-side routing to work properly:

```js
// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

> Note: Since this route is a "catch all" that matches every `get` request, be sure to mount API or other routes before it!
	
	The "catch all" route is necessary to route to the proper client-side route when:
	- A user types a path into the address bar and presses enter.
	- The user refreshes the app.
	- A link is clicked in an external website, email, etc., that has its `href` set to our SPA's hostname.

	For example, if we slack the following link to a friend: `https://myapp.herokuapp.com/sales/dashboard`. The friend clicks on it, initiating an HTTP request to our server.
	
	However, the `/sales/dashboard` part of the URL is supposed to be for the client router - not the server!  But there it is, and the server has to deal with it...
	
	The server deals with it by, thanks to the "catch all" route, sending back  **index.html** - which is what we want.
	
	When **index.html** loads in the browser, and our SPA's router kicks into action, it will see the path of `/sales/dashboard` and route to the correct feature, just as if the link was clicked from within the SPA!

Set the port for development to use 3001 so that React's dev server can continue to use 3000 and finally, tell the Express app to listen for incoming requests:

```js
// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
console.log(`Express app running on port ${port}`)
});
```

#### Try It Out

Again, to develop a MERN-stack app, you'll need two terminal sessions:

1. For running the Express backend

2. For running React's dev server

##### Start the Express Backend

It's recommend that you start the Express backend first by typing<br>`$ nodemon server.js` or `$ nodemon server`

We can no longer just type `$ nodemon` because when we do, nodemon uses the `start` script in **package.json**, however, the `start` script is configured for React's dev server.

##### Checking out the PRODUCTION app

If we want to see how the app will behave when deployed, we need to:

- Ensure that the React app has been built locally using `$ npm run build`.

- Browse to `localhost:3001` because that's where our Express server is running - which again, we coded to serve from the **build** folder.

> **Important**: During development, you don't want to browse to `localhost:3001`! Instead, you want the browser to load the React app from React's dev server on `localhost:3000`. We are only browsing to `localhost:3001` to check out how the deployed app will run.

So, when you are hacking out code and nothing seems to be updating in the browser - be sure to verify that you are browsing `localhost:3000`!

##### Start React's Dev Server

Now that you've checked out the what the production code will look like when it's deployed, let's start up the development environment as usual:

```
$ npm start
```

#### Review

**When browsing to `localhost:3001`, what version of the app will you be viewing?**

**What command must we run in Terminal to update the production code?**

## Configure React for Full-stack Development

So far, so good, but there will be a problem **during development** (not production)...

Because the React app is being served from `localhost:3000`, that's where all AJAX calls made from the browser to the server will go.

For example, your React app might make fetch a request like `GET /api/posts`.  That path is automatically appended to the domain of origin, e.g., `localhost:3000`.

However, our Express server is listening for AJAX calls at `localhost:3001`!

Luckily, the React team has created an easy fix for this dilemma. The React development server allows us to configure a "proxy" which specifies the host to send API/AJAX calls to.

The fix is to add a `"proxy"` key anywhere in the top-level object of  **package.json**:

```js
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "http://localhost:3001"
}
```

Now **during development**, the SPA can make AJAX calls to the server, such as `fetch('/api/todos')`, and they will be sent to `localhost:3001` instead of `localhost:3000`.
