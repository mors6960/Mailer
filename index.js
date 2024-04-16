require('dotenv').config();
const express = require('express');
const session = require("express-session");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "mishikabatra5@gmail.com",
        pass: "fbyz zptx usee mwni",
    },
});


const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
    res.render('main');
});

app.post('/sendemail', async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: '"MISHIKA HATHI👻" <mishikabatra5@gmail.com>',
            to: "mors6960@gmail.com",
            subject: "JAI SHREE RAM",
            text: "RAM SITA RAM",
            html: "<b>Hello world?</b>",
            attachments: [{
                path: './mor.text',
                filename: 'mor.text' 
            }]

        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({
            message: 'Email sent successfully!',
            messageId: info.messageId
        });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});