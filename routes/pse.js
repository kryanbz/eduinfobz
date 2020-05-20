var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display pse index page
router.get('/', function(req, res, next) {

    dbConn.query('SELECT district, avg(pse) as avg FROM pse GROUP BY district ORDER BY AVG(pse) DESC',function(err,rows)     {

        if(err) {
            req.flash('error', err);
            // render to views/pse/index.ejs
            res.render('pse',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse',{data:rows});
        }
    });
});

// display pse belilze page
router.get('/belize', function(req, res, next) {

    dbConn.query('SELECT pseschoolname, avg(pse) as avg FROM pse WHERE district = "Belize" GROUP BY pseschoolname ORDER BY AVG(pse) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/belize',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/belize',{data:bschools});
        }
    });
});

// display pse cayo page
router.get('/cayo', function(req, res, next) {

    dbConn.query('SELECT pseschoolname, avg(pse) as avg FROM pse WHERE district = "Cayo" GROUP BY pseschoolname ORDER BY AVG(pse) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/cayo',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/cayo',{data:bschools});
        }
    });
});

// display pse corozal page
router.get('/corozal', function(req, res, next) {

    dbConn.query('SELECT pseschoolname, avg(pse) as avg FROM pse WHERE district = "Corozal" GROUP BY pseschoolname ORDER BY AVG(pse) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/corozal',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/corozal',{data:bschools});
        }
    });
});

// display pse orange walk page
router.get('/orangewalk', function(req, res, next) {

    dbConn.query('SELECT pseschoolname, avg(pse) as avg FROM pse WHERE district = "Orange Walk" GROUP BY pseschoolname ORDER BY AVG(pse) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/orangewalk',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/orangewalk',{data:bschools});
        }
    });
});

// display pse stanncreek page
router.get('/stanncreek', function(req, res, next) {

    dbConn.query('SELECT pseschoolname, avg(pse) as avg FROM pse WHERE district = "Stann Creek" GROUP BY pseschoolname ORDER BY AVG(pse) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/stanncreek',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/stanncreek',{data:bschools});
        }
    });
});

// display pse toledo page
router.get('/toledo', function(req, res, next) {

    dbConn.query('SELECT pseschoolname, avg(pse) as avg FROM pse WHERE district = "Toledo" GROUP BY pseschoolname ORDER BY AVG(pse) DESC',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/toledo',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/toledo',{data:bschools});
        }
    });
});

router.get('/funding', function(req, res, next) {

    dbConn.query('SELECT funding, AVG(pse) as avg FROM PSE GROUP BY funding ORDER BY AVG(pse) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/funding',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/funding',{data:bschools});
        }
    });
});

router.get('/management', function(req, res, next) {

    dbConn.query('SELECT management, AVG(pse) as avg FROM PSE GROUP BY management ORDER BY AVG(pse) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/management',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/management',{data:bschools});
        }
    });
});
router.get('/municipality', function(req, res, next) {

    dbConn.query('SELECT municipality, AVG(pse) as avg FROM PSE GROUP BY municipality ORDER BY AVG(pse) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/municipality',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/municipality',{data:bschools});
        }
    });
});
router.get('/ur', function(req, res, next) {

    dbConn.query('SELECT urbanrural, AVG(pse) as avg FROM PSE GROUP BY urbanrural ORDER BY AVG(pse) DESC;',function(err,bschools)     {

        if(err) {
            req.flash('error', err);
            // render to views/bjat/index.ejs
            res.render('pse/ur',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('pse/ur',{data:bschools});
        }
    });
});

module.exports = router;