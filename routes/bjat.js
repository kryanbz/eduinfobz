var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display bjat index page
router.get('/', function(req, res, next) {

    dbConn.query('SELECT district, avg(bjat) as avg FROM bjat GROUP BY district ORDER BY AVG(bjat) DESC',function(err,rows)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat',{data:rows});
        }
    });
});

// display bjat belilze page
router.get('/belize', function(req, res, next) {

    dbConn.query('SELECT bjatschoolname, avg(bjat) as avg FROM bjat WHERE district = "Belize" GROUP BY bjatschoolname ORDER BY AVG(bjat) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/belize',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/belize',{data:bschools});
        }
    });
});

// display bjat cayo page
router.get('/cayo', function(req, res, next) {

    dbConn.query('SELECT bjatschoolname, avg(bjat) as avg FROM bjat WHERE district = "Cayo" GROUP BY bjatschoolname ORDER BY AVG(bjat) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/cayo',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/cayo',{data:bschools});
        }
    });
});

// display bjat corozal page
router.get('/corozal', function(req, res, next) {

    dbConn.query('SELECT bjatschoolname, avg(bjat) as avg FROM bjat WHERE district = "Corozal" GROUP BY bjatschoolname ORDER BY AVG(bjat) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/corozal',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/corozal',{data:bschools});
        }
    });
});

// display bjat orange walk page
router.get('/orangewalk', function(req, res, next) {

    dbConn.query('SELECT bjatschoolname, avg(bjat) as avg FROM bjat WHERE district = "Orange Walk" GROUP BY bjatschoolname ORDER BY AVG(bjat) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/orangewalk',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/orangewalk',{data:bschools});
        }
    });
});

// display bjat stanncreek page
router.get('/stanncreek', function(req, res, next) {

    dbConn.query('SELECT bjatschoolname, avg(bjat) as avg FROM bjat WHERE district = "Stann Creek" GROUP BY bjatschoolname ORDER BY AVG(bjat) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/stanncreek',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/stanncreek',{data:bschools});
        }
    });
});

// display bjat toledo page
router.get('/toledo', function(req, res, next) {

    dbConn.query('SELECT bjatschoolname, avg(bjat) as avg FROM bjat WHERE district = "Toledo" GROUP BY bjatschoolname ORDER BY AVG(bjat) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/toledo',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/toledo',{data:bschools});
        }
    });
});
router.get('/funding', function(req, res, next) {

    dbConn.query('SELECT funding, AVG(bjat) as avg FROM BJAT GROUP BY funding ORDER BY AVG(bjat) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/funding',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/funding',{data:bschools});
        }
    });
});

router.get('/management', function(req, res, next) {

    dbConn.query('SELECT management, AVG(bjat) as avg FROM BJAT GROUP BY management ORDER BY AVG(bjat) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/management',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/management',{data:bschools});
        }
    });
});
router.get('/municipality', function(req, res, next) {

    dbConn.query('SELECT municipality, AVG(bjat) as avg FROM BJAT GROUP BY municipality ORDER BY AVG(bjat) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/municipality',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/municipality',{data:bschools});
        }
    });
});
router.get('/ur', function(req, res, next) {

    dbConn.query('SELECT urbanrural, AVG(bjat) as avg FROM BJAT GROUP BY urbanrural ORDER BY AVG(bjat) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('bjat/ur',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('bjat/ur',{data:bschools});
        }
    });
});

module.exports = router;