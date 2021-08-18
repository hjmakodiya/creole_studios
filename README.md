# Follow instrucution in this file to use API

We have creole_studios_db.sql file in mysql folder. Plz import that database into phpmyadmin

###################################################################################3
Use following API in postman

1. Register API : (POST)
http://localhost:5000/register
username : demo
email : demo@gmail.com
password : demo123
gender : male

2. Login API : (POST)
http://localhost:5000/login
email : demo@gmail.com
password : demo123

3. Get User Data : (GET)
http://localhost:5000/userDetail
id : 1

4. Update API : (POST)
http://localhost:5000/editUser
id : 1
username : demo2
email : demo2@gmail.com
gender : female

5. Add Address : (POST)
http://localhost:5000/addAddress
select these two for address : https://prnt.sc/1qa73kk

we are using raw json to add multiple addresses. get following demo formate to add addresses
{
    "user_id" :1 ,
    "addresses" : [
        {
        "address_one" : "address_one 1", 
        "address_two" : "address_one 1",
        "city" : "city 1",
        "state" : "state 1",
        "country" : "country 1",
        "pin_code" : 11111
        },
        {
        "address_one" : "address_one 2", 
        "address_two" : "address_one 2",
        "city" : "city 2",
        "state" : "state 2",
        "country" : "country 2",
        "pin_code" : 22222
        }
    ]
}