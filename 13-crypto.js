const crypto = require('crypto')

function HashPassword() {
     const value = crypto.randomBytes(32).toString('hex');
    return {value};
}

module.exports= HashPassword 


// Call the HashPassword func and value on any Object or Function 
//example :
const forgotUser = await new ForgotSchema({
      name,
      email: check._id,
      token: HashPassword().value
    })
