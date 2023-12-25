# Vocab Booster

## Host project locally

Once you've cloned a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), you can start a development server:

```bash
 npm run dev

 # or start the server and open the app in a new browser tab
 npm run dev -- --open
```

## Host database locally

To host db locally you would need to go to `~/Vocab-Booster/db/` and then run this command in terminal

```bash
 ./pocketbase serve

 # if you want to see more logs
 ./pocketbase serve --debug
```

## Database

for the database to work you would need to install [pocketbase](https://pocketbase.io) and import [database schema](https://github.com/KrinjMaster/Vocab-Booster/blob/development/pb_schema.json) then you would need to fill keys for the oauth to start working.
