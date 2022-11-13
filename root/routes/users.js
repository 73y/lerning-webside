const express = require('express')
const router = express.Router()


router.get('/login', (req, res) => {
    res.render('login.ejs');
});

router.post('/login', async (req, res) => { //user authentification
    const user = users.find(user => user.email = req.body.email)
    if (user == null) {
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }
    } catch {
        return res.status(500).send()
    }
});

router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register', async (req, res) => { //user registration
    try {
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users)
});

module.exports = router