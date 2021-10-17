# PWA Budget Tracker

A budget tracker that allow for online and offline usage

Demo: <https://minusinfinite-budget-tracker.herokuapp.com/>

## Contents

[Local Deployment](#local-deployment)

[Examples](#examples)

## Local Deployment

This Application uses [MongoDB](https://www.mongodb.com/) as it's database and
[Mongoose JS](https://mongoosejs.com/) as the Objection Document Model for providing schema models and queries.

Be sure to have MongoDB setup an running before you download.

### Download

In your terminal download the repo

```terminal
git clone https://github.com/minusInfinite/pwa-budget-tracker.git
```

Once downloaded install the dependencies with NPM

```terminal
npm install
```

If you local MongoDB has Authentication setup it might be easier to confirm a Node Environment Parameter. You edit the .env.EXAMPLE file to .env with the following

> MONGODB_URI - \_The database connection URL string\*

You can find more details about MongoDB connection strings here - https://docs.mongodb.com/manual/reference/connection-string/

Once you .env is setup you should be able to run the server

```terminal
npm start
```

Or for development with [Nodemon](https://nodemon.io/)

```terminal
npm run watch
```

## Example

[Live Demo](https://minusinfinite-wt-demo.herokuapp.com/)

![Animated Demo GIF](/md/budget-demo.gif)
