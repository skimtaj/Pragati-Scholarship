require('dotenv').config();
const cookieParser = require('cookie-parser');
const JWT = require('jsonwebtoken')
const express = require('express');
const app = express();
app.use(cookieParser())


const adminAuth = (req, res, next) => {

    const token = req.cookies.adminToken;

    if (!token) {
        req.flash('error', 'You have to login');
        return res.redirect('/pragatischolarship/admin-login')
    }
    const verified = JWT.verify(token, process.env.Admin_Token_Password);
    req.adminId = verified._id;
    next();
}

module.exports = adminAuth
