var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display books page
router.get('/', function(req, res, next) {

    dbConn.query('SELECT * FROM books ORDER BY id desc',function(err,rows)     {

        if(err) {
            req.flash('error', err);
            // render to views/books/index.ejs
            res.render('books',{data:''});
        } else {
            // render to views/books/index.ejs
            res.render('books',{data:rows});
        }
    });
});

// display add book page
router.get('/add', function(req, res, next) {
    // render to add.ejs
    res.render('books/add', {
        name: '',
        author: '',
		phone: '',
		email: ''
    })
})

// add a new book
router.post('/add', function(req, res, next) {

    let name = req.body.name;
    let author = req.body.author;
	let phone = req.body.phone;
	let email = req.body.email;
    let errors = false;

    if(name.length === 0 || author.length === 0 || phone.length === 0 || email.length === 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter school id, principal, phone and email");
        // render to add.ejs with flash message
        res.render('books/add', {
            name: name,
            author: author,
			phone: phone,
			email: email
        })
    }

    // if no error
    if(!errors) {

        var form_data = {
            name: name,
            author: author,
			phone: phone,
			email: email
        }

        // insert query
        dbConn.query('INSERT INTO books SET ?', form_data, function(err, result) {
            //if(err) throw err
            if (err) {
                req.flash('error', err)

                // render to add.ejs
                res.render('books/add', {
                    name: form_data.name,
                    author: form_data.author,
					phone: form_data.phone,
					email: form_data.email
                })
            } else {
                req.flash('success', 'Record successfully added');
                res.redirect('/books');
            }
        })
    }
})

// display edit book page
router.get('/edit/(:id)', function(req, res, next) {

    let id = req.params.id;

    dbConn.query('SELECT * FROM books WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err

        // if user not found
        if (rows.length <= 0) {
            req.flash('error', 'Record not found with id = ' + id)
            res.redirect('/books')
        }
        // if book found
        else {
            // render to edit.ejs
            res.render('books/edit', {
                title: 'Edit Record',
                id: rows[0].id,
                name: rows[0].name,
                author: rows[0].author,
				phone: rows[0].phone,
				email: rows[0].email,
            })
        }
    })
})

// update book data
router.post('/update/:id', function(req, res, next) {

    let id = req.params.id;
    let name = req.body.name;
    let author = req.body.author;
	let phone = req.body.phone;
	let email = req.body.email;
    let errors = false;

    if(name.length === 0 || author.length === 0 || phone.length == 0 || email.length == 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter School ID, principal, phone and email");
        // render to add.ejs with flash message
        res.render('books/edit', {
            id: req.params.id,
            name: name,
            author: author,
			phone: phone,
			email: email
        })
    }

    // if no error
    if( !errors ) {

        var form_data = {
            name: name,
            author: author,
			phone: phone,
			email: email
        }
        // update query
        dbConn.query('UPDATE books SET ? WHERE id = ' + id, form_data, function(err, result) {
            //if(err) throw err
            if (err) {
                // set flash message
                req.flash('error', err)
                // render to edit.ejs
                res.render('books/edit', {
                    id: req.params.id,
                    name: form_data.name,
                    author: form_data.author,
					phone: form_data.phone,
					email: form_data.email
                })
            } else {
                req.flash('success', 'Record successfully updated');
                res.redirect('/books');
            }
        })
    }
})

// delete book
router.get('/delete/(:id)', function(req, res, next) {

    let id = req.params.id;

    dbConn.query('DELETE FROM books WHERE id = ' + id, function(err, result) {
        //if(err) throw err
        if (err) {
            // set flash message
            req.flash('error', err)
            // redirect to books page
            res.redirect('/books')
        } else {
            // set flash message
            req.flash('success', 'Record successfully deleted! ID = ' + id)
            // redirect to books page
            res.redirect('/books')
        }
    })
})

module.exports = router;