Delishwish
recipe to shopping list app

Next.js  
Typescript  
React  
GraphQL  
Apollo  
GraphCMS https://graphcms.com/  
GraphQL Code Generator https://graphql-code-generator.com/  
Pluralize (for ingredients)  
Postgres  
Ley

To connect to the Postgres database on Mac:

`psql postgres`
Once you have connected, run the following to create the database:

`CREATE DATABASE <database name>;`
`CREATE USER <user name> WITH ENCRYPTED PASSWORD '<user password>';`
`GRANT ALL PRIVILEGES ON DATABASE <database name> TO <user name>; `
Then, to connect to the database using this new user, quit psql and reconnect:

`psql -U <user name> <database name>`

Running the migrations
To set up the structure and the content of the database, run the migrations using Ley:
`yarn migrate up `
To reverse the last single migration, run:
`yarn migrate down`
