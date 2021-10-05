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
