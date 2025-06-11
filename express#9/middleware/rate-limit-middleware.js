import {rateLimit} from 'express-rate-limit'

const appLimiter = rateLimit({
    windowMs: process.env.WINDOW_RATE_LIMIT,
    limit: process.env.MAX_REQ_RATE_LIMIT,
    message: 'Pailas, no hay cama pa tant gente',
    statusCode: 404,
    headers: false
})

// function appLimiter(windowMs, limit, message, statusCode,headers) {
//     rateLimit({
//         windowMs,
//         limit,
//         message,
//         statusCode,
//         headers 
//     })
// }

export default appLimiter