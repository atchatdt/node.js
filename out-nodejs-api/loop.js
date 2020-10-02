
const pendingTimers = [];
const pendingOSTasks = [];
const pedingOperations = [];


myFile.runContent();

function shouldContinue() {

    return pedingOperations.length ||
             pendingOSTasks.length || 
             pendingTimers.length;
}

while (shouldContinue()) {

}

