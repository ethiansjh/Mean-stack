var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://baik:baik@ds127978.mlab.com:27978/baik', ['crimelist']);

//Get all crimelist
router.get('/tasks', function(req, res, next) {
    db.crimelist.find(function(err, tasks) {
        if(err){
            res.send(err);
        }
        else {
            res.json(tasks);
        }
    });    
});

//Get Single crimelist by ID
router.get('/tasks/:id', function(req, res, next) {
    db.crimelist.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
        if(err){
            res.send(err);
        }
        else {
            res.json(task);
        }
    });    
});

//Save crimelist
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            else {
            res.json(task);
        }
        });
    }
});

//Delete crimelist by ID
router.delete('/tasks/:id', function(req, res, next) {
    db.crimelist.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task) {
        if(err){
            res.send(err);
        }
        else {
            res.json(task);
        }
    });    
});

//update crimelist
router.put('/task/:id', function(req, res, next) {
    var task = req.body;
    var updTask = {};

    if(task.compnos){
        updTask.compnos = task.compnos;
    }

    if(task.naturecode) {
        updTask.naturecode = task.naturecode;
    }

    if(task.incident_type_description) {
        updTask.incident_type_description = task.incident_type_description;
    }

    if(task.main_crimecode) {
        updTask.main_crimecode = task.main_crimecode;
    }

    if(task.reptdistrict) {
        updTask.reptdistrict = task.reptdistrict;
    }

    if(task.fromdate) {
        updTask.fromdate = task.fromdate;
    }

    if(task.weapontype) {
        updTask.weapontype = task.weapontype;
    }

    if(task.shooting) {
        updTask.shooting = task.shooting;
    }

    if(task.domestic) {
        updTask.domestic = task.domestic;
    }

    if(task.shift) {
        updTask.shift = task.shift;
    }

    if(task.year) {
        updTask.year = task.year;
    }

    if(task.month) {
        updTask.month = task.month;
    }

    if(task.day_week) {
        updTask.day_week = task.day_week;
    }

    if(task.ucrpart) {
        updTask.ucrpart = task.ucrpart;
    }

    if(task.x) {
        updTask.x = task.x;
    }

    if(task.y) {
        updTask.y = task.y;
    }

    if(task.streetname) {
        updTask.streetname = task.streetname;
    }

    if(task.xstreetname) {
        updTask.xstreetname = task.xstreetname;
    }

    if(task.location) {
        updTask.location = task.location;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.param.id)},updTask,{},function(err,task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
        }   
});

module.exports = router;