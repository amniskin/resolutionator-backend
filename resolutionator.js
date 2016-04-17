// Defining the sample application {{{
var sampleApp = 
[
    // First app {{{
{
    appID: 1000,
    appParams: {
        expFormula: function(time) { return time * 0.5;},
        appName: "Thunder Dome!",
        appValidationToken: 1234512345
    },
    groups: [
    {
        groupID: 1100,
        master: 103,
        escrow: 104,
        challenges: [ 
        {
            challengeID: 1110,
            textDesc: "Run 4000 miles this year.",
            repeating: false,
            users: [ 
            {
                UID: 101,
                points: 1504,
                tasksCompleted: [1111]
            },
            {
                UID: 1002,
                points: 488,
                tasksCompleted: [1111, 1112]
            } ],
            taskList: [
            {
                taskName: "Run the first 2000 miles",
                taskID: 1111,
                start: new Date("January 01 2016, 00").getTime(),
                end: new Date("January 01 2017, 00").getTime(),
                pointsForCompletion: 2000,
                costUSD: 10
            },
            {
                taskName: "Run the last 2000 miles",
                taskID: 1112,
                start: new Date("January 01 2016, 00").getTime(),
                end: new Date("January 01 2017, 00").getTime(),
                pointsForCompletion: 2000,
                costUSD: 20
            } ]
        }, 
        {
            challengeID: 1120,
            textDesc: "Swim 500 meters three times a week.",
            repeating: true,
            users: [ 
            {
                UID: 100,
                points: 1504,
                tasksCompleted: [1121]
            },
            {
                UID: 102,
                points: 488,
                tasksCompleted: [1121]
            } ],
            taskList: [
            {
                taskName: "Swim 500 meters for a first time this week",
                taskID: 1121,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 24 2016, 00").getTime(),
                pointsForCompletion: 400,
                costUSD: 5
            },
            {
                taskName: "Swim 500 meters for a second time this week",
                taskID: 1122,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 24 2016, 00").getTime(),
                pointsForCompletion: 400,
                costUSD: 10
            },
            {
                taskName: "Swim 500 meters for a third time this week",
                taskID: 1123,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 24 2016, 00").getTime(),
                pointsForCompletion: 400,
                costUSD: 15
            } ]
        } ]
    } ],
    users: [
    {
        UID: 100,
        name: "John Y. Doe",
        email: "johnnyd@gmail.com",
        visaInfo: "Etc"
    },
    {
        UID: 101,
        name: "Johnny B. Goode",
        email: "johnnyb@gmail.com",
        visaInfo: "Etc"
    },
    {
        UID: 102,
        name: "Johnny B. Badde",
        email: "johnnyb2913@gmail.com",
        visaInfo: "etc"
    },
    {
        UID: 103,
        name: "John F. Kennedy",
        email: "JohnnyK@gmail.com",
        visaInfo: "etc"
    },
    {
        UID: 104,
        name: "Cashy Mc Money",
        email: "CashIsEverything@gmail.com",
        visaInfo: "etc"
    },
    {
        UID: 105,
        name: "Not a Joiner",
        email: "DontHaveOne@gmail.com",
        visaInfo: "etc"
    } ]
}, 
    // }}}
{
    appID: 2000,
    appParams: {
        expFormula: function(questions) { return questions;},
        appName: "Exercises",
        appValidationToken: 1234512346
    },
    groups: [
    {
        groupID: 2100,
        master: 203,
        escrow: 204,
        challenges: [ 
        {
            challengeID: 1110,
            textDesc: "Run 4000 miles this year.",
            repeating: false,
            users: [ 
            {
                UID: 101,
                points: 1504,
                tasksCompleted: [1111]
            },
            {
                UID: 1002,
                points: 488,
                tasksCompleted: [1111, 1112]
            } ],
            taskList: [
            {
                taskName: "Run the first 2000 miles",
                taskID: 1111,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 24 2016, 00").getTime(),
                pointsForCompletion: 2000,
                costUSD: 10
            },
            {
                taskName: "Run the last 2000 miles",
                taskID: 1112,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 24 2016, 00").getTime(),
                pointsForCompletion: 2000,
                costUSD: 20
            } ]
        }, 
        {
            challengeID: 1120,
            textDesc: "Swim 500 meters three times a week.",
            repeating: true,
            users: [ 
            {
                UID: 100,
                points: 1504,
                tasksCompleted: [1121]
            },
            {
                UID: 102,
                points: 488,
                tasksCompleted: [1121]
            } ],
            taskList: [
            {
                taskName: "Swim 500 meters for a first time this week",
                taskID: 1121,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 18 2016, 00").getTime(),
                pointsForCompletion: 400,
                costUSD: 5
            },
            {
                taskName: "Swim 500 meters for a second time this week",
                taskID: 1122,
                start: new Date("April 18 2016, 00").getTime(),
                end: new Date("April 19 2016, 00").getTime(),
                pointsForCompletion: 400,
                costUSD: 10
            },
            {
                taskName: "Swim 500 meters for a third time this week",
                taskID: 1123,
                start: new Date("April 19 2016, 00").getTime(),
                end: new Date("April 20 2016, 00").getTime(),
                pointsForCompletion: 400,
                costUSD: 15
            } ]
        } ]
    } ],
    users: [
    {
        UID: 100,
        name: "John Y. Doe",
        email: "johnnyd@gmail.com",
        visaInfo: "Etc"
    },
    {
        UID: 101,
        name: "Johnny B. Goode",
        email: "johnnyb@gmail.com",
        visaInfo: "Etc"
    },
    {
        UID: 102,
        name: "Johnny B. Badde",
        email: "johnnyb2913@gmail.com",
        visaInfo: "etc"
    },
    {
        UID: 103,
        name: "John F. Kennedy",
        email: "JohnnyK@gmail.com",
        visaInfo: "etc"
    },
    {
        UID: 104,
        name: "Cashy Mc Money",
        email: "CashIsEverything@gmail.com",
        visaInfo: "etc"
    },
    {
        UID: 105,
        name: "Not a Joiner",
        email: "DontHaveOne@gmail.com",
        visaInfo: "etc"
    } ]
}
];

// }}}

// Defining the express app {{{
var port    = 9000,
    express = require('express'),
    app     = express();
// }}}

// Basic express things (like access control allow origin{{{
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

//app.use(express.static(_dirname + '/static'));
//}}}

// Functions to interact with the database {{{

function getIn(path, start) {
    return path.reduce(function(a, b) {return a[b];}, start);
}
function into(path) {
    return function(action, predicate) {
        return function(data, predicateData) {
            if( predicate(predicateData)) {
                var elem = getIn(path, sampleApp);
                action(elem, data);
                console.log(elem);
            }
        }
    }
}
function insertData(path) {
    return into(path)(function(elem, data) {elem.push(data);}, function(){return true;});
}

function insertUser(path) {
    var path = [path.app, "users"];
    return insertData(path);
}
function insertGroup(path) {
    var path = [path.app, "groups"];
    return function(data) {
        data.challenges = [];
        return insertData(path)(data);
    }
}
function insertChallenge(path) {
    var path = [path.app, "groups", path.group, "challenges"];
    return function(data) {
        data.repeating = Boolean(data.repeating);
        data.users = [];
        data.taskList = [];
        return insertData(path)(data);
    }
}
function addUser(path) {
    var path = [path.app, "groups", path.group, "challenges", path.challenge, "users"];
    return function(data) {
        data.points = 0;
        data.tasksCompleted = [];
        return insertData(path)(data);
    }
}
function addPoints(path) {
    var newPath = [path.app, "groups", path.group, "challenges", path.challenge];
    return into(newPath)(function(elem, data) {
        var user = getIn(["users", path.user], elem);
        user.points = Number(user.points) + Number(data.points);
        var task = elem.taskList[user.tasksCompleted.length];
        if(elem.taskList.length > user.tasksCompleted.length && 
                (user.points >= Number(task.pointsForCompletion))) {
            user.points -= Number(task.pointsForCompletion);
            user.tasksCompleted.push(task.taskID);
        }
    }, function(){return true;});
}

// }}}

// Functional things {{{
function makeObj(arr1, arr2) {
    return arr1.map(function(elem, index) {
        return [elem, arr2[index]];
    }).reduce(function(a, b) {
        a[b[0]] = b[1];
        return a;
    }, {});
}

function createCallback(func, path, params) {
    return function(req, res) {
        var pathVal = path.map(function(x) {
            return req.query[x];
        }), 
            vals = params.map(function(x) {
            return req.query[x];
        });
        var valid = vals.concat(path).reduce(function(a, b) {
            return a && b;
        }, true);
        if(valid) {
            func(makeObj(path, pathVal))(makeObj(params, vals));
            res.status(200).send("Finished successfully.");
        } else {
            res.status(406).send(params.reduce(function(a, b) {return a + ", " + b; }, "Please submit all the following parameters: "));
        }
    }
}

// }}}



app.post('/create-user', createCallback(insertUser, ["app"], ["name", "email", "visaInfo"]));
app.post('/create-group', createCallback(insertGroup, ["app"], ["master", "escrow"]));
app.post('/create-challenge', createCallback(insertChallenge, ["app", "group"], ["textDesc", "repeating"]));
app.post('/add-user', createCallback(addUser, ["app", "group", "challenge"], ["UID"]));
app.post('/add-points', createCallback(addPoints, ["app", "group", "challenge", "user"], ["points"]));


app.listen(port);
console.log("Node listening on port " + port);
