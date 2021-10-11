# HomeM - Home Maintenance Reminders
--------
Trialling out a new stack, and the best way to do this is writing your own app.
This app also happens to a problem for me: Forgetting about home maintenance tasks.
It aims to be marginally more useful than this [BRANZ spreadsheet](http://maintainingmyhome.org.nz/assets/Charter/MYH-table-Maintenance-schedule2.pdf).

In short, the app should let you select home maintenance tasks which apply to your situation,
suggest a schedule, and send you email reminders about upcoming tasks.
While this could be handled in everyone's personal todo lists,
its unlikely to happen given the setup required (especially with recurring tasks).
The hypothesis is that users find it easier to rely on email reminders,
and prefer transferring those actionable tasks into their own todo list. 

The stretch goal is to build an app that can run pretty much indefinitely
with minimal administration, since the reminders are most useful over the span
of multiple years.

A preview of the app is currently deployed on [housem.vercel.app](https://housem.vercel.app).
## Stack

 * NextJS/React/Typescript for application development
 * Hasura/GraphQL for APIs
 * Postgres for data storage
 * Auth0 for authentication and user provisioning
 * Chakra for presentation

I've also [blogged](https://chillu.com/posts/2021/tale-of-server-client-auth0-hasura/)
about the architecture and moving parts of this stack.
## My Development Goals

 * Try out a hybrid rendering approach (server/client)
 * Build a React app with non-trivial state and interactions
 * Familiarise myself with Hasura's managed GraphQL API
 * Build a serverless action to test out Hasura's approach
 * Integrate with Auth0 and understand how to secure user data
 * Deploy a production-like application with NextJS and Hasura

## Installation

There's a few moving parts which aren't automated.

### Requirements

 * Node
 * Yarn
 * [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html)
### Application Setup

```
yarn
```
### Hasura Setup

 * Create a Hasura server
 * Configure the Hasura CLI in `hasura/.env` (see `hasura/.env.sample`)
 * Configure the GraphQL endpoints in `.env` (see `.env.sample`)
 * Apply Hasura metadata with `hasura metadata apply`
 * Apply Hasura migrations (creating the database schema) with `hasura migrate apply`
 * Add some see data with `hasura seed apply seeds/default`

### Auth0 Setup

 * Follow this [tutorial](https://hasura.io/docs/latest/graphql/core/guides/integrations/auth0-jwt.html) to setup Auth0
 * Configure the Auth0 metadata in `.env` (see `.env.sample`)

## Development

```
yarn dev
```

## Production Setup

*This is work in progress. First step is to separate environments, then move deployment to CI*

### 1. Set up production Auth0 application

Follow the "Auth0 Setup" steps from above, creating a separate production app.
Due to the way Auth0 Rules work, we need to create a conditional for the different apps in
the global "create-hasura-user-on-login" rule.

Create a `HASURA_ADMIN_TOKEN_TEST` and `HASURA_ADMIN_TOKEN_PROD` "Setting"
(which means the values get encrypted).

Now alter the rule content as follows:

```js
function (user, context, callback) {
  // maps Auth0 client ids to env vars
  const envs = {
    'my-auth0-test-clientid': {
      url: 'https://my-app-test.hasura.app/v1/graphql',
      admin_secret: configuration.HASURA_ADMIN_TOKEN_TEST
    },
    'my-auth0-prod-clientid': {
      url: 'https://my-app-prod.hasura.app/v1/graphql',
      admin_secret: configuration.HASURA_ADMIN_TOKEN_PROD
    }
  };
  if (!envs.hasOwnProperty(context.clientID)) {
      console.log('context.clientID = ' + context.clientID + ' is not configured');
  }
  const env = envs[context.clientID];
  
  const userId = user.user_id;
  const nickname = user.nickname;
  
  const admin_secret = configuration.HASURA_ADMIN_TOKEN_TEST;
  const url = configuration.HASURA_GRAPHQL_URL_TEST;
  const query = `mutation($userId: String!, $nickname: String) {
    insert_users(objects: [{
      id: $userId, name: $nickname
    }], on_conflict: {constraint: users_pkey, update_columns: [name]}
    ) {
      affected_rows
    }
  }`;

  const variables = { "userId": userId, "nickname": nickname };

  request.post({
      url: env.url,
      headers: {'content-type' : 'application/json', 'x-hasura-admin-secret': env.admin_secret},
      body: JSON.stringify({
        query: query,
        variables: variables
      })
  }, function(error, response, body){
       console.log(body);
       callback(null, user, context);
  });
}
```

You can reuse the same Auth0 API, and the same "hasura-jwt-claim" rule.

### 2. Set up production Hasura app

Follow the "Hasura Setup" steps from above, for a new production application.

`cp hasura/.env.sample hasura/.env.prod`

Fill out the production details for the new production application there.
You can now run `hasura` CLI commands with `--envfile .env.prod` to promote database schema
and metadata changes to production.

### 3. Create Vercel app

Connect a new Vercel app to the Git repo, it'll work out the NextJS build automatically.
Configure all env vars from `.env` according to the production values.

## Deployment

*Warning: Not hooked up to CI yet, a bit too manual...*

 * Vercel: Push to the `master` branch which triggers a production deployment.
 * Auth0: Not automated yet, use Auth0 UI
 * Hasura: Not automated yet. Use `hasura` CLI command with `--envfile .env.prod`