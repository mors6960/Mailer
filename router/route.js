const express = require('express');
const router = express.Router();


// router.post('/sendemail', (req, res) => {
//     res.send("OK")
// try {
//     const info = await transporter.sendMail({
//         from: '"Maddison Foo Koch 👻" <markus.bauch@ethereal.email>', // sender address
//         to: "mors6960@gmail.com", // receiver address
//         subject: "subject" || "Hello ✔ BIROTHER", // Subject line
//         text: "text" || "Hello world?", // plain text body
//         html: "html" || "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     res.status(200).json({
//         message: 'Email sent successfully!',
//         messageId: info.messageId
//     });
// } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({
//         error: 'Internal server error'
//     });
// }

// });

module.exports = router;