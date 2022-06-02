## What's that project?
### This is simple website deisgned to find new leaked songs from picosong easily.

## Currently hosted on: http://picosong.antonizalupka.cf

## Instruction to run this project locally: 0. Project developed on: node@16.13.1; npm@8.3.0

1. Configure backend port in backend/config.js. Default backend port is 5000. Frontend port you can change by changing package.json file. Default port is 3004.
2. Configure CORS policy in backend/corsOptions.js and write correct backend URL in frontend/next.config.js
3. Go to backend folder, and run `npm install` command
4. Go to frontend folder, and run sequentially `npm installl` and `npm run build` commands
5. Now you can run project, run `node server` command in backend folder and `npm run start` command in frontend folder.
