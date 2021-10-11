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
 * Configure `endpoint` in `hasura/config.yml`
 * Apply Hasura metadata with `hasura metadata apply`
 * Apply Hasura migrations (creating the database schema) with `hasura migrate apply`
 * Add some see data

```
hasura seed apply seeds/default/1633919607928_templates_seed.sql
hasura seed apply seeds/default/1633919719656_areas_seed.sql
```

### Auth0 Setup

 * Follow this [tutorial](https://hasura.io/docs/latest/graphql/core/guides/integrations/auth0-jwt.html) to setup Auth0
 * Configure the Auth0 metadata in `.env` (see `.env.sample`)

## Development

```
yarn dev
```

## Deployment

TODO