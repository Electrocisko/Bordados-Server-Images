

const checkCookie = (req,res,next) => {
    try {
        if (req.cookies.jwt) {
            next()
        }  else {
           res.redirect('/login')
        }
    } catch (error) {
        res.status(400).json({
            status:"error",
            message: error.message
        })
    }
}

export default checkCookie