module.exports = function(num1, num2) {
    if (process.env.NODE_ENV === 'production') {
        console.log('production ====if====>')
    } {
        console.log('production <=====else====')
    }
    return num1 + num2;
}