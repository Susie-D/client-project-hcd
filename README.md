# Prime Group Project - Starting Repo

## Current Workflow / Project Management

- [Trello](https://trello.com/b/ZsEupHq3/house-checkup-digital)

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org)
- [Nodemon](https://nodemon.io)
- [Heroku](https://www.heroku.com)

## Create Database and Table

Create a new database called `hcd` and create tables with the project `database.sql` file.

## Development Setup Instructions

- Run `npm install`.

  - Be sure to take stock of `package.json` to see which dependencies you'll need to add.

- Run `npm run client` to start the client.
- Navigate to `localhost:5173` to view application.
- Run `npm run server` to start the server.
- Navigate to `localhost:5001` for server data (if needed).

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Run `npm run server` to start the server.
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password.
   2. `POST /api/user/login` will login a user, see body to change username/password.
   3. `GET /api/user` will get user information, by default it's not very much.

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

### Heroku Instructions
- Login to Heroku run `heroku login`

#### Deployment

1. To deploy the **client-side / frontend** live on Heroku, go to the main branch and run `git push heroku main` 

1. To deploy the **server-side / backend live on Heroku**, choose a desired SQL IDE (i.e. DataGrip or Postico) to connect with Heroku Datastore. To gain access to the Database credentials in Heroku, go to this link: [HCD Datastore](https://data.heroku.com/datastores/db6c3f2c-2527-42f1-b4ad-c79aff4790dd). Click on the **Settings** tab and then **View Database Credentials** to obtain the information needed to connect to Heroku Datastore.


### Directory Structure

- `src/` contains the React application.
- `public/` contains static assets for the client-side.
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site.
- `server/` contains the Express App.
