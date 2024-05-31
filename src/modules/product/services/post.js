import { addData } from "../db/index.js";
import nodemailer from "nodemailer";

// product add ho to email chali jae
const sendEmail = () => {
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "syedafaiza2610@gmail.com",
            pass: "ldnq qyyx cean wxua",
        },
    });

    const mailOptions = {
        from: "syedafaiza2610@gmail.com",
        to: "syedafaiza2610@gmail.com",
        subject: "Hello from Nodemailer",
        text: "This is a test email sent using Nodemailer.",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("Email sent: ", info.response);
        }
    });
}

const postData = async (data) => {
    sendEmail()
    return await addData(data);
}

export default postData;
