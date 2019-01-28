# Tabletop Bot

## Pre reqs:
- Node v8.12 or higher
- Before beginning please run `npm install` in the root directory of this project
## Run robot:
```
npm start
```
### Example input/output
```
npm start

> tablebot@1.0.0 start /Users/zenonc/tabletopbot
> node main.js


What's your next move? place 2,3,west

What's your next move? move

What's your next move? report
Robot at (1,3), facing west
```

## Run demo:
This executes a preset list of inputs defined in `demo.js`

```
npm run demo
```
## Debugging
Use `npm run dev` instead of `npm start`. This will enable debug logging.

## Run tests:

```
npm test
```