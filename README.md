# Client Server Boilerplate
Client Server Boilerplate

## Dependencies
- Nodejs
- npm
- Docker

## Setup
- Install node packages: ` npm run install:all `
  - Alternatively: `npm i` in `.`, `./client`, `./server`
- Run mongo container: ` docker run --name mongodb -p 27017:27017 -d mongo `
- set up https proxy
  - Client on port 3000
  - Server on port 3001
- add entries to hosts file
  - `127.0.0.1 mongo`
  - `127.0.0.1 [CLIENTURL]
  - `127.0.0.1 [SERVERURL]

- startup in dev mode: ``` npm run dev:all ```
- Access [CLIENTURL]

###### Run and stop containers
- `docker start mongodb`
- `docker stop mongodb`
