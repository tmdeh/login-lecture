"use strict";
const output ={
    home: (req,res) =>{
        res.render("home/index");
    },

    login: (req, res) =>{
        res.render("home/login");
    },
};

const users = {
    id:["tmdeh","유승도"],
    psword: ["1234","3216"],
};


const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.password;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다",
        })
    },
};

module.exports = {
    output,
    process,
};