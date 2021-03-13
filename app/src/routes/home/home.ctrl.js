"use strict";

const users ={
    id: ["tmdeh2068"],
     password:["1234"],
};

const home = (req,res) =>{
    res.render("home/index");
};

const login = (req, res) =>{
    res.render("home/login");
}

module.exports = {
    home,
    login,
};