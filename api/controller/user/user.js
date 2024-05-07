const User = require('../../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {JWT_SECRET,EMAIL_SERVER_USER,EMAIL_SERVER_PASS} = require('../../config/config');

const nodemailer = require("nodemailer");


exports.addUser = async (req, res) => {

    try {

        const { username, email, password } = req.body;

        let findemail = await User.findOne({ email: email });

        if (findemail) {
            return res.status(400).json({ errors: 'Email already exited.' });
        }
        let findname = await User.findOne({ userName: username });

        if (findname) {
            return res.status(400).json({ errors: 'Email already exited.' });
        }
    
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);

        const user = await User.create({
            userName: username,
            email: email,
            password: secPass,
       
        })

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_SERVER_USER,
                pass: EMAIL_SERVER_PASS
            }
        })
        
        console.log('working');

        // Sending mail to the user
        var mailOptions = {
            from: '"IBrains" <rajeshrrayate@gmail.com>',
            to: `${email}`,
            subject: "Register Successfully",
            html: username,
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.log(error);
                console.log('that is worng email');
            } else {
                console.log('that work.' + info.response);
            }
        })


        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json(authToken)

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }



}

exports.MYloginUser = async (req, res) => {

    try {
        const { email, password } = req.body

        let finduser = await User.findOne({ email: email });

        if (!finduser) {
            return res.status(400).json({ errors: 'Invalid craditails....' });
        }

        const passwordCompare = await bcrypt.compare(password, finduser.password);
        if (!passwordCompare) {
            return res.status(400).json({ errors: 'Invalid craditails....' });
        }

        const data = {
            user: {
                id: finduser.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })

    } catch (error) {
        console.log(error.massage);
        res.status(500).send("some Error Occured");
    }

}


exports.getUser = async (req, res) => {

    try {
        const token = req.header('auth-token');
        if (!token) {
            res.status(401).send({ error: 'Invalid token' })
        }
        const data = jwt.verify(token, JWT_SECRET)
        // userId = data.user.id;
        const user = await User.findById(data.user.id).select('-password')
        res.send(user)
    } catch (error) {
        console.error(error.massage);
        res.status(500).send('interenal some Error are occuring.');
    }

}
