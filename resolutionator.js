// Defining the sample application {{{
function generateRandomID() {
    var id = 12341;
    generateRandomID = function() {
        return id++;
    }
    return generateRandomID();
}
var sampleApp = 
[
{
    appID: 1000,
    expFormula: function(time) { return time * 0.5;},
    appName: "Thunder Dome",
    appValidationToken: 1234512345,
    groups: [
    {
        groupID: 1100,
        master: 103,
        escrow: 104,
        challenges: [ 
        {
            challengeID: 1110,
            textDesc: "Run 4000 miles this year.",
            start: new Date("January 01 2016, 00").getTime(),
            end: new Date("January 01 2017, 00").getTime(),
            completed: false,
            repeating: false,
            users: [ 
            {
                UID: 101,
                points: 1504,
                tasksCompleted: []
            },
            {
                UID: 102,
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
            start: new Date("January 01 2016, 00").getTime(),
            end: new Date("January 01 2017, 00").getTime(),
            completed: false,
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
        name: "Acceptor 2",
        handle: "johnny",
        email: "johnnyd@gmail.com",
        pan: 4653459515756154,
        expDate: "2020-03"
    },
    {
        UID: 101,
        name: "Johny B. Goode",
        handle: "johnyG",
        email: "johnyb@gmail.com",
        pan: 4957030420210496,
        expDate: "2020-03"
    },
    {
        UID: 102,
        name: "Johnny B. Badde",
        handle: "johnyB",
        email: "johnnyb2913@gmail.com",
        pan: 4957030420210496,
        expDate: "2020-03"
    },
    {
        UID: 103,
        name: "John F. Kennedy",
        handle: "johnyK",
        email: "JohnnyK@gmail.com",
        pan: 4957030420210454,
        expDate: "2020-03"
    },
    {
        UID: 104,
        name: "pull money guy",
        handle: "cashMoney",
        email: "CashIsEverything@gmail.com",
        pan: 4895142232120006,
        expDate: "2020-03"
    },
    {
        UID: 105,
        name: "Not a Joiner",
        handle: "kiddaNo",
        email: "DontHaveOne@gmail.com",
        pan: 4005521478523659,
        expDate: "2020-03"
    } ]
}, 
{
    appID: 2000,
    expFormula: function(questions) { return questions;},
    appName: "exercises",
    appValidationToken: 1234512346,
    groups: [
    {
        groupID: 2100,
        master: 200,
        escrow: 200,
        challenges: [ 
        {
            challengeID: 1110,
            textDesc: "Do 5 exercises per day.",
            start: new Date("January 01 2016, 00").getTime(),
            end: new Date("January 01 2017, 00").getTime(),
            repeating: false,
            users: [ 
            {
                UID: 200,
                points: 0,
                tasksCompleted: []
            }
            ],
            taskList: [
            {
                taskName: "Perform 5 exercises",
                taskID: 1111,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 24 2016, 00").getTime(),
                pointsForCompletion: 5,
                costUSD: 10
            },
            {
                taskName: "Perform 5 exercises",
                taskID: 1112,
                start: new Date("April 17 2016, 00").getTime(),
                end: new Date("April 24 2016, 00").getTime(),
                pointsForCompletion: 5,
                costUSD: 10
            } ]
        }, 
        {
            challengeID: 1120,
            textDesc: "Swim 500 meters three times a week.",
            start: new Date("January 01 2016, 00").getTime(),
            end: new Date("January 01 2017, 00").getTime(),
            completed: false,
            repeating: true,
            users: [ 
            ],
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
        UID: 200,
        name: "Little Timmy",
        handle: "lil_timmy",
        email: "johnnyd@gmail.com",
        expDate: "2020-03",
        pan: 4957030420210496
    } ]
}
];

// }}}
// Express and request things {{{
var port    = 9000,
    express = require('express'),
    app     = express(),
    request = require('request');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.static(__dirname + '/static'));
//}}}
// Some general purpose functions {{{
function getIn(path, start) {
    return path.reduce(function(a, b) {return a[b];}, start);
}
function getInDb(path) {
    return getIn(path, sampleApp);
}
function makeObj(arr1, arr2) {
    return arr1.map(function(elem, index) {
        return [elem, arr2[index]];
    }).reduce(function(a, b) {
        a[b[0]] = b[1];
        return a;
    }, {});
}
// }}}
// Functions to interact with the database {{{
function into(path, id) {
    return function(action) {
        return function(data) {
            if(id) {
                data[id] = generateRandomID();
            }
            var elem = getInDb(path);
            var ret = action(elem, data);
            return ret;
        }
    }
}
function getData(path) {
    return into(path)(function(elem) {return elem;})();
}
function insertData(path, id) {
    return into(path, id)(function(elem, data) {elem.push(data);});
}
function getIndexFromAttr(path, attr, val){
    var arr = getData(path);
    return arr.indexOf(arr.filter(function(item) {
        return item[attr] == val;
    })[0]);
}

function insertUser(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    var path = [appIndex, "users"];
    return insertData(path, "UID");
}
function insertGroup(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    var path = [appIndex, "groups"];
    return function(data) {
        data.challenges = [];
        return insertData(path, "groupID")(data);
    }
}
function insertChallenge(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    var groupIndex = getIndexFromAttr([appIndex, "groups"], "groupID", path.group);
    var path = [appIndex, "groups", groupIndex, "challenges"];
    return function(data) {
        data.repeating = Boolean(data.repeating);
        data.users = [];
        data.taskList = [];
        return insertData(path, "challengeID")(data);
    }
}
function insertTask(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    var groupIndex = getIndexFromAttr([appIndex, "groups"], "groupID", path.group);
    var challengeIndex = getIndexFromAttr([appIndex, "groups", groupIndex, "challenges"], "challengeID", path.challenge);
    var path = [appIndex, "groups", groupIndex, "challenges", challengeIndex, "taskList"];
    return insertData(path, "taskID");
}
function addUser(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    var groupIndex = getIndexFromAttr([appIndex, "groups"], "groupID", path.group);
    var challengeIndex = getIndexFromAttr([appIndex, "groups", groupIndex, "challenges"], "challengeID", path.challenge);
    var challengePath = [appIndex, "groups", groupIndex, "challenges", challengeIndex, "users"];
    var challenge = getData([appIndex, "groups", groupIndex, "challenges", challengeIndex]);
    return function(data) {
        var ret = {};
        var user = getUser(getData([appIndex]), data.UID);
        var userExists = getData([appIndex, "users"]).filter(function(a) {
            return a.UID == data.UID;
        }).length == 1;
        var alreadyAdded = getData(challengePath).filter(function(a) {
            return a.UID == data.UID;
        }).length > 0;
        if(userExists && !alreadyAdded) {
            data.points = 0;
            data.tasksCompleted = [];
            ret.success = true;
            insertData(challengePath)(data);
            request.post('http://localhost:3006/pullmoney?PAN=' + 4895142232120006//user.pan 
                    + "&expDate=" + user.expDate 
                    + "&amount=" + challenge.taskList.reduce(function(a, b) {return a + b.costUSD;}, 0) 
                    + "&auditNo=" + generateRandomID(), 
                    {}, 
                    function(error, response, body) {
                        if (!error) {
                            console.log(body);
                        } else 
                            console.log(error);
                    });
        } else if (!userExists) {
            ret.success = false;
            ret.error = "User does not exist.";
        } else {
            ret.success = false;
            ret.error = "User has already been added.";
        }
        return ret;
    }
}
function addPoints(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    var groupIndex = getIndexFromAttr([appIndex, "groups"], "groupID", path.group);
    var challengeIndex = getIndexFromAttr([appIndex, "groups", groupIndex, "challenges"], "challengeID", path.challenge);
    var userChallengeIndex = getIndexFromAttr([appIndex, "groups", groupIndex, "challenges", challengeIndex, "users"], "UID", path.UID);
    var newPath = [appIndex, "groups", groupIndex, "challenges", challengeIndex];
    return into(newPath)(function(elem, data) {
        var user = getIn(["users", userChallengeIndex], elem);
        var now = new Date().getTime();
        var ret = {};
        if(elem.start <= now && now <= elem.end) {
            user.points = Number(user.points) + Number(data.points);
            ret.success = true;
            ret.pointsAdded = Number(data.points);
            var task = elem.taskList.filter(function(a) {
                return a.start <= now && now <= a.end
                    && user.tasksCompleted.indexOf(a.taskID) == -1;
            })[0];
            if(task && user.points >= Number(task.pointsForCompletion)) {
                user.points -= Number(task.pointsForCompletion);
                user.tasksCompleted.push(task.taskID);
                ret.completedTask = task.taskID;
                ret.paymentAmount = task.costUSD;
                ret.paymentSuccessful = true;
                var userMain = getUser(getData([appIndex]), user.UID);
                var escrow = getUser(getData([appIndex]), Number(getData([appIndex, "groups", groupIndex, "escrow"])));
                request.post('http://localhost:3006/pushmoney?recipientName=' + userMain.name 
                        + "&senderPAN=" + 4653459515756154//escrow.pan//
                        + "&receiverPAN=" + 4957030420210496//userMain.pan//
                        + "&expDate=" + escrow.expDate
                        + "&amount=" + task.pointsForCompletion
                        + "&auditNo=" + generateRandomID(),
                        {},
                        function(error, response, body) {
                            if(!error && response.statusCode == 200) {
                                console.log(body);
                            } else {
                                console.log(error);
                            }
                        });
            } else if (!task) {
                ret.tasksComplete = true;
            }
        } else {
            ret.success = false;
            ret.error = "Challenge out of date range.";
        }
        ret.pointBal = user.points;
        return ret;
    });
}

//app.post('/add-user', createCallback(addUser, ["app", "group", "challenge"], ["UID"]));
function getAllChallenges(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    var grps = getData([appIndex]).groups;
    return function(data) {
        console.log(grps);
        return grps.reduce(function(accu, group) {
            return accu.concat(group.challenges.map(function(ch) {ch.group = group.groupID; return ch;}));
        }, []).map(function(chal) {
            return {params: {app: path.app, group: chal.group, challenge: chal.challengeID, UID: data.UID}, textDesc: chal.textDesc};
        });
    }
}
function getUserChallenges(path) {
    var appIndex = getIndexFromAttr([], "appName", path.app);
    return into([appIndex])(function(elem, data) {
        var ret = [];
        elem.groups.map(function(group) {
            group.challenges.map(function(challenge) {
                var inChallenge = (getUser(challenge, data.UID) != undefined);
                if (inChallenge) {
                    ret.push({challengeID: challenge.challengeID, description: challenge.textDesc});
                }
            });
        });
        return ret;
    });
}
function getUser(appli, id) {
    return appli.users.filter(function(u) {
        return u.UID == id;
    })[0];
}
// }}}
// Functional things {{{

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
            res.status(200).send(JSON.stringify(func(makeObj(path, pathVal))(makeObj(params, vals))));
        } else {
            res.status(406).send(params.reduce(function(a, b) {return a + ", " + b; }, "Please submit all the following parameters: "));
        }
    }
}
// }}}
// Periodic app functions {{{
// }}}
// Defining the express routes {{{
app.post('/create-user', createCallback(insertUser, ["app"], ["name", "email", "pan", "expDate", "handle"]));
app.post('/create-group', createCallback(insertGroup, ["app"], ["master", "escrow"]));
app.post('/create-challenge', createCallback(insertChallenge, ["app", "group"], ["textDesc", "repeating", "start", "end"]));
app.post('/create-task', createCallback(insertTask, ["app", "group", "challenge"], ["desc", "start", "end", "pointsForCompletion", "costUSD"]));
app.post('/add-user', createCallback(addUser, ["app", "group", "challenge"], ["UID"]));
app.post('/add-points', createCallback(addPoints, ["app", "group", "challenge", "UID"], ["points"]));

app.get('/get-user-challenges', createCallback(getUserChallenges, ["app"], ["UID"]));
app.get('/get-all-challenges', createCallback(getAllChallenges, ["app"], ["UID"]));
//app.get('/get-master-groups', createCallback(getMasterGroups, ["app"], ["UID"]));
// }}}
app.listen(port);
console.log("Node listening on port " + port);
