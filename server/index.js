// backend/index.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: 'https://my-port-folio-react-git-master-melaku-azenes-projects.vercel.app/', // Adjust this to your frontend URL
    methods: 'GET,POST',
    credentials: true,
}));        
  
// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS,
            },
        });

        const mailOptions = {
            from: `${name} <${email}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Contact Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Download CV endpoint
app.get('/api/download-cv', (req, res) => {
    const filePath = path.join(__dirname, 'cv.pdf');
    res.download(filePath, 'Melaku_CV.pdf', (err) => {
        if (err) {
            res.status(500).send('Error downloading file');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});