var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display atlib index page
router.get('/', function(req, res, next) {

    dbConn.query('SELECT district, avg(atlibmath)*2 as avg FROM atlib GROUP BY district ORDER BY AVG(atlibmath) DESC',function(err,rows)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib',{data:rows});
        }
    });
});

// display bjat belilze page
router.get('/belize', function(req, res, next) {

    dbConn.query('SELECT atlibschoolname, avg(atlibmath)*2 as avg FROM atlib WHERE district = "Belize" GROUP BY atlibschoolname ORDER BY AVG(atlibmath) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/belize',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/belize',{data:bschools});
        }
    });
});

// display bjat cayo page
router.get('/cayo', function(req, res, next) {

    dbConn.query('SELECT atlibschoolname, avg(atlibmath)*2 as avg FROM atlib WHERE district = "Cayo" GROUP BY atlibschoolname ORDER BY AVG(atlibmath) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/cayo',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/cayo',{data:bschools});
        }
    });
});

// display bjat corozal page
router.get('/corozal', function(req, res, next) {

    dbConn.query('SELECT atlibschoolname, avg(atlibmath)*2 as avg FROM atlib WHERE district = "Corozal" GROUP BY atlibschoolname ORDER BY AVG(atlibmath) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/corozal',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/corozal',{data:bschools});
        }
    });
});

// display bjat orange walk page
router.get('/orangewalk', function(req, res, next) {

    dbConn.query('SELECT atlibschoolname, avg(atlibmath)*2 as avg FROM atlib WHERE district = "Orange Walk" GROUP BY atlibschoolname ORDER BY AVG(atlibmath) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/orangewalk',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/orangewalk',{data:bschools});
        }
    });
});

// display bjat stanncreek page
router.get('/stanncreek', function(req, res, next) {

    dbConn.query('SELECT atlibschoolname, avg(atlibmath)*2 as avg FROM atlib WHERE district = "Stann Creek" GROUP BY atlibschoolname ORDER BY AVG(atlibmath) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/stanncreek',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/stanncreek',{data:bschools});
        }
    });
});

// display bjat toledo page
router.get('/toledo', function(req, res, next) {

    dbConn.query('SELECT atlibschoolname, avg(atlibmath)*2 as avg FROM atlib WHERE district = "Toledo" GROUP BY atlibschoolname ORDER BY AVG(atlibmath) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/toledo',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/toledo',{data:bschools});
        }
    });
});
router.get('/funding', function(req, res, next) {

    dbConn.query('SELECT funding, AVG(atlibmath)*2 as avg FROM atlib GROUP BY funding ORDER BY AVG(atlibmath) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/funding',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/funding',{data:bschools});
        }
    });
});

router.get('/management', function(req, res, next) {

    dbConn.query('SELECT management, AVG(atlibmath)*2 as avg FROM atlib GROUP BY management ORDER BY AVG(atlibmath) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/management',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/management',{data:bschools});
        }
    });
});
router.get('/municipality', function(req, res, next) {

    dbConn.query('SELECT municipality, AVG(atlibmath)*2 as avg FROM atlib GROUP BY municipality ORDER BY AVG(atlibmath) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/municipality',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/municipality',{data:bschools});
        }
    });
});
router.get('/ur', function(req, res, next) {

    dbConn.query('SELECT urbanrural, AVG(atlibmath)*2 as avg FROM atlib GROUP BY urbanrural ORDER BY AVG(atlibmath) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('atlib/ur',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('atlib/ur',{data:bschools});
        }
    });
});

module.exports = router;