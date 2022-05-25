const logger = (req,res,next) => {
    const url = req.url
    const method = req.method
    const time = new Date().getFullYear()
    console.log(method,url,time);
    next()
}

const auth = (req,res,next) => {
    const {user} = req.query

    if (user === 'jriffs') {
        req.user = {name: 'jriffs', id: 4}
        next()
    }else {
        res.status(401).send(`Unauthorized user login`)
        next() 
    }
    next()
}

module.exports = {logger, auth}