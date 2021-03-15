"use strict";

const UserString = require("../../models/UserString");

const output ={
    home: (req,res) =>{
        res.render("home/index");
    },

    login: (req, res) =>{
        res.render("home/login");
    },
};




const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.password;
        const users = UserString.getUsers("id", "psword", "name");

        const response ={};

         if(users.id.includes(id)){
             const idx = users.id.indexOf(id);
             if(users.psword[idx] === psword){
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};