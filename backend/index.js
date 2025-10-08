import nodemailer from "nodemailer";
import mongoose from "mongoose";
import express from "express";
import multer from "multer";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();

// use memory storage for buffer access
const upload = multer();

// Middleware
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 3000;
await mongoose.connect(process.env.MONGO_URI);


const credential = mongoose.model("credential", {}, "swiftmailer")

function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

app.post("/sendmail", upload.array("files"), async (req, res) => {
    try {
        const data = await credential.find();
        if (!data.length) return res.status(400).send("No credentials found");

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: data[0].toJSON().user,
                pass: data[0].toJSON().pass,
            },
        });

        const { subject, message } = req.body;
        let emailList = req.body.emails;

        if (!Array.isArray(emailList)) emailList = [emailList];

        const attachments = req.files.map(file => ({
            filename: file.originalname,
            content: file.buffer,
        }));

        const batches = chunkArray(emailList, 10);

        for (const batch of batches) {
            const mailPromises = batch.map(email =>
                transporter.sendMail({
                    from: data[0].toJSON().user, // ✅ fixed here
                    to: email,
                    subject: subject || "Message from Bulk Mail App",
                    text: message,
                    attachments,
                })
                    .then(() => console.log(`Mail sent to ${email}`))
                    .catch(err => console.error(`Failed to send to ${email}:`, err))
            );

            await Promise.all(mailPromises);
            await new Promise(resolve => setTimeout(resolve, 2000)); // optional delay
        }

        res.send(true);
    } catch (error) {
        console.error(error);
        res.send(false);
    }
});


app.listen(port, () => console.log(`Server started on port ${port}...`));
