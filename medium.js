const fs = require('fs') 

fs.readFile('/Users/joseeduardomartinez/Desktop/RoadToHire/NodeGI/NodeGuidedInq/MyPlanets.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})