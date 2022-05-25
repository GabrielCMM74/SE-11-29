<img src="https://i.imgur.com/B42NavR.jpg">

# Create an Atlas Hosted MongoDB

## Intro

While developing an application that requires a MongoDB, you can only connect to your local MongoDB engine for so long.  This is because the application, once deployed, will have to connect to a MongoDB engine accessible via the Internet.

Heroku, the application hosting service we deploy our projects to, is capable of supplying a MongoDB.  However, delaying connecting to a hosted database until the time of deployment is not ideal...

It makes sense to set up and connect to a hosted MongoDB sooner, rather than later.  Doing this will ensure that any data, users, etc., created will be there upon deployment.

In addition, it's advantageous to use a service to host MongoDB databases other than Heroku so that you can create databases anytime you want.

The most popular service for hosting MongoDB databases, not surprisingly, is MongoDB's own [Atlas](https://www.mongodb.com/cloud/atlas).

## Create an Atlas Account

First you will need to sign up for a free account [here](https://www.mongodb.com/cloud/atlas/register):

<img src="https://i.imgur.com/dBnD2au.png">

### Set up the Atlas Account

Enter any organization & project name you wish.

Select JavaScript as your preferred language, for example:

<img src="https://i.imgur.com/BxEFUDy.png">

### Select **Shared Clusters**, which is FREE:

<img src="https://i.imgur.com/MQPoanx.png">

## Create a New Cluster

Once set up, Atlas will request that you create a _cluster_.

Atlas allows one free cluster per account.

A cluster can contain multiple MongoDB databases - which Atlas refers to as **namespaces**.

Be sure to select the **Cloud Provider & Region** nearest to you that shows a **FREE TIER AVAILABLE**.

Verify that in the **Cluster Tier** section, `M0 Sandbox` is selected then click the `[Create Cluster]` button:

<img src="https://i.imgur.com/nd2OPEV.png">

It may take several minutes for Atlas to build your cluster...

<img src="https://i.imgur.com/md7oNeT.png">

## Add a User for the Cluster

Each cluster must have a database user created whose credentials will be provided in the database connection string when connecting to a database.

In the sidebar, click **Database Access** within the **SECURITY** section, then click the `[Add New Database User]` button:

<img src="https://i.imgur.com/WLenx3n.png">

Select the **Password** box, enter a username & password, then click the `[Add User]` button:

<img src="https://i.imgur.com/oKQ3Ijm.png">

It may take a few minutes to deploy the changes.

## Add Approved IP Addresses

Atlas has a security feature that allows the databases to be accessed by approved IP addresses only.

You must approve **all IPs** to ease development and deployment of your application.

Click **Network Access** in the sidebar, then click the `[Add IP Address]` button:

<img src="https://i.imgur.com/vrDlu0F.png">

In the dialog, first click the `[ALLOW ACCESS FROM ANYWHERE]` button then click the `[Confirm]` button:

<img src="https://i.imgur.com/lAw8d6P.png">

Once again, wait for the changes to deploy.

## Obtain the Connection String

> IMPORTANT:  Database connection strings contain the username and password for connecting to the database.  Never include the connection string in the project's source code - use a .env file instead.

To obtain the connection string that will be added to the project's `.env` file, first click `Clusters` in the sidebar then click the `[CONNECT]` button:

<img src="https://i.imgur.com/JLjmwXS.png">

Select the **Connect your application** option:

<img src="https://i.imgur.com/qMOAxVV.png">

Next, ensure that the **Node.js** driver and latest version is selected.  Then click the "Copy" button to add the connection string to your clipboard and close the dialog:

<img src="https://i.imgur.com/GbckxoK.png">

## Use the Connection String in Your App

You can now paste the connection string in the app's `.env` file, assigning it to a `DATABASE_URL` environment variable:

```
DATABASE_URL=mongodb+srv://sei:<password>@sei-w0kys.azure.mongodb.net/admin?retryWrites=true
```

You're almost done, but you **need to update** the connection string as follows:

1. Replace `<password>` with the password of the database user you created earlier.
2. **IMPORTANT** The connection string by default connects to a namespace (Atlas' term for database) named `admin` (`...mongodb.net/admin?retryWrites=true...`).  However, the `admin` namespace **must** be updated to your preferred namespace (database) name.  For example, "movies" (`...mongodb.net/movies?retryWrites=true...`).

You're good to go!

> Note: For future projects, you only have to change the namespace of the connection string to create a different database for that app.

## Connecting with Mongoose

Here's the latest options to include to get rid of the deprecation warnings:

```js
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
```

## Viewing & Editing Data

FYI, you can use the Atlas app to view and edit data by clicking on the `COLLECTIONS` button.


  

