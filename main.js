const readline = require("readline");
const robot = require("./robot");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let robotState = {
    x: 0,
    y: 0,
    facing: robot.Facing.NORTH,
}


input();

function input(){
    rl.question("\nWhat's your next move? ", (userInput) => {
        const action = robot.processInput(userInput);
        state = processAction(robotState, action);
        console.debug(`Robot at (${robotState.x},${robotState.y}), facing ${robotState.facing}`);
        input();
    });
}