//Any object created of a type errorResponse will recieve a message and a statuscode

class ErrorResponse extends Error {
    constructor (message, statusCode) {
        super (message)
        this.statusCode= statusCode
    }
}
module.exports=ErrorResponse

//this method will be used in error middlewares