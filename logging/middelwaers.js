// const logger = require('./logger')
// module.exports=function logErrors(err,req,res,next){
//     logger.info(err.stack)
//     next(err)
// }
// module.exports= function errorHandler(err,req,res,next){
// if (req.xhr)
//     res.status(500).send({error: "failed;its up to you; its your faluite"})
// else
//     next(err)
// }