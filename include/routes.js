var router = express.Router()

router.get('/userDetail', function (req, res) {
    let id = req.body.id

    var sql = "SELECT * FROM users WHERE id = " + id
    db.query(sql, function (err, result, fields) {
        if (err) throw err
        if (result.length > 0) {
            res.end(JSON.stringify(result))
        }
        else {
            res.end("User is not available")
        }
    })
})

router.post('/register', function (req, res) {
    let email = req.body.email
    let username = req.body.username
    let password = req.body.password
    let gender = req.body.gender

    //first we need to check wether that user is already registered or not
    var sql = "SELECT email FROM users WHERE email = '" + email + "'"
    db.query(sql, function (err, result, fields) {
        if (err) throw err
        if (result.length > 0) {
            //user already exist
            res.end("user already exist")
        } else {
            //insert user data into users table
            sql = "INSERT INTO users(username, email, password, gender) VALUES ('" + username + "','" + email + "','" + password + "','" + gender + "')";
            console.log(sql);
            db.query(sql, function (err, result, fields) {
                if (err) throw err
                res.end("Registered Successfully")
            })
        }
    })
})

router.post('/login', function (req, res) {
    let email = req.body.email
    let password = req.body.password

    //first we need to check wether that user is already registered or not
    var sql = "SELECT * FROM users WHERE email = '" + email + "' and password = '" + password + "'"
    db.query(sql, function (err, result, fields) {
        if (err) throw err
        if (result.length > 0) {
            res.end("Login successfully")
        }
        else {
            res.end("Invalid Username or password")
        }
    })
})

router.post('/editUser', function (req, res) {
    let id = req.body.id
    let email = req.body.email
    let username = req.body.username
    let gender = req.body.gender

    //check user is exist or not
    var sql = "SELECT * FROM users WHERE id = " + id
    db.query(sql, function (err, result, fields) {
        if (err) throw err
        if (result.length > 0) {
            //check if email already exist
            sql = "SELECT email FROM users WHERE email = '" + email + "'"
            db.query(sql, function (err, result, fields) {
                if (err) throw err
                if (result.length > 0) {
                    res.end("Email already exist")
                }
                else {
                    //update userdata
                    sql = "UPDATE users SET username='" + username + "',email='" + email + "',gender='" + gender + "' WHERE id = " + id
                    db.query(sql, function (err, result, fields) {
                        console.log(result);
                        if (err) throw err
                        res.end("User Data updated Successfully")
                    })
                }
            })
        }
        else {
            res.end("User doesn't exist")
        }
    })
})

router.post('/changePassword', function (req, res) {
    let id = req.body.id
    let oldPassword = req.body.oldPassword
    let newPassword = req.body.newPassword

    var sql = "SELECT * FROM users WHERE id = " + id
    db.query(sql, function (err, result, fields) {
        if (err) throw err
        if (result.length > 0) {
            //check if email already exist
            sql = "SELECT password FROM users WHERE password = '" + oldPassword + "'"
            db.query(sql, function (err, result, fields) {
                if (err) throw err
                if (result.length > 0) {
                    //update password
                    sql = "UPDATE users SET password='" + newPassword + "' WHERE id = " + id
                    db.query(sql, function (err, result, fields) {
                        if (err) throw err
                        res.end("Passowrd updated successfully")
                    })
                }
                else {
                    res.end("Old password is not valid")
                }
            })
        }
        else {
            res.end("User doesn't exist")
        }
    })
})

router.post('/addAddress', function (req, res) {
    let user_id = req.body.user_id
    let addresses = req.body.addresses

    var sql = "SELECT * FROM users WHERE id = " + user_id
    db.query(sql, function (err, result, fields) {
        if (err) throw err
        if (result.length > 0) {
            if (addresses.length > 0) {
                sql = "INSERT INTO addresses(user_id, address_one, address_two, city, state, country, pin_code) VALUES ";
                for (var key in addresses) {
                    let address = addresses[key]

                    if (parseInt(key) + 1 == addresses.length) {
                        //last address
                        sql = sql + "(" + user_id + ",'" + address.address_one + "','" + address.address_two + "','" + address.city + "','" + address.state + "','" + address.country + "','" + address.pin_code + "')"
                    }
                    else {
                        sql = sql + "(" + user_id + ",'" + address.address_one + "','" + address.address_two + "','" + address.city + "','" + address.state + "','" + address.country + "','" + address.pin_code + "'),"
                    }
                }
                db.query(sql, function (err, result, fields) {
                    if (err) throw err
                    res.end("Address Added Successfully")
                })
            }
            else {
                res.end("Please add addresses")
            }
        }
        else {
            res.end("User doesn't exist")
        }
    })
})

router.post('/editAddress', function (req, res) {
    let id = req.body.id
    let address_one = req.body.address_one
    let address_two = req.body.address_two
    let city = req.body.city
    let state = req.body.state
    let country = req.body.country
    let pin_code = req.body.pin_code

    //check user is exist or not
    var sql = "SELECT * FROM addresses WHERE id = " + id
    db.query(sql, function (err, result, fields) {

        if (err) throw err
        if (result.length > 0) {
            //update Address
            sql = "UPDATE addresses SET address_one='" + address_one + "',address_two='" + address_two + "',city='" + city + "',state='" + state + "',country='" + country + "',pin_code='" + pin_code + "' WHERE id=" + id
            db.query(sql, function (err, result, fields) {
                console.log(result);
                if (err) throw err
                res.end("User Address updated Successfully")
            })
        }
        else {
            res.end("Address doesn't exist")
        }
    })
})

module.exports = router