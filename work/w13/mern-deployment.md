<img src="https://i.imgur.com/fx2orT2.png">

# Full-stack React
---

Welcome to the MERN-stack!

## Deploying to Heroku

##### IMPORTANT: If your project is inside of an outer repo, you can't deploy it because you can't create a nested repo.  You'll need to move the project's folder outside of any existing repo before you can deploy.


> It's recommended that you test the production app before deploying.  Again, do this by building the React app (`$ npm run build`) and browsing to `localhost:3001`.

With the MERN-stack app tested, we're **almost** ready to deploy to Heroku...

##### Add a `Procfile`

After the code has been uploaded using `git push heroku master`, Heroku checks to see if the project has a **Procfile** which specifies how to start up the application.

If no **Procfile** exists, Heroku will run the command assigned to the `start` script in **package.json**. Yes, we have a `start` script, but it's configured to start React's dev server instead of `node server.js`.

So yes, we need to create a **Procfile** (named exactly without a file extension):

- `$ touch Procfile`

Then, adding a single line inside **Procfile** takes care of informing Heroku how to boot our app:

```
web: node server.js
```

##### How does Heroku know to build the React app?

The production-ready code that we tested out locally lives in the **build** folder. However, the **build** folder is git ignored and thus will not be pushed to Heroku.

So, the production code needs to be built on Heroku...

Thankfully, when JS apps are deployed, Heroku automatically runs the `"build"` script if it exists, which it does!

##### Create the App in your Heroku Account

Now let's use the Heroku CLI to create the project in your Heroku dashboard:

- `$ heroku create <optional_preferred_subdomain>`

The above command also creates a git remote named `heroku` that we push to in order to deploy.

Now you are set to deploy to Heroku:

1. Make a commit (if you haven't already): `$ git add -A && git commit -m "Deploy"`

2. Push to Heroku: `$ git push heroku master`

##### Set the Environment Variables on Heroku

The last step is to ensure that every KEY=VALUE pair in the `.env` file is set in the Heroku project.

No different than with the two previous projects deployed to Heroku. For each KEY=VALUE:

```
$ heroku config:set KEY=VALUE
```

If setting AWS keys , ensure the key names are in all caps (they are lowercase in `~/.aws/credentials`).

```
$ heroku config:set AWS_ACCESS_KEY_ID=akiajy06wfubrzui6nq
```

As usual, if using zsh, you may have to quote the key=value pair like this:

```
% heroku config:set "AWS_ACCESS_KEY_ID=akiajy06wfubrzui6nq"
```

If setting AWS keys , ensure the key names are in all caps (they are lowercase in `~/.aws/credentials`).

#### Setup Mongodb atlas

Follow the instructions from our earlier [lesson](https://git.generalassemb.ly/SEI-CC/SEI-R-10-19/blob/master/work/w05/d5/atlas-hosted-mongodb.md) on hosting our mongodb on the atlas servers.

> Note: If using zsh, it may be necessary to quote the KEY=VALUE pair, for example:<br>
> `heroku config:set "DATABASE_URL=mongodb+srv://username:pw@sei-students-1btwt.azure.mongodb.net/students?retryWrites=true"`



##### Open the App

`$ heroku open`

###### Debug the App

`$ heroku logs`

## Essential Questions

1. **What folder holds a React app's production-ready code?**

2. **Why does a "catch all" route need to be mounted in Express?** 
