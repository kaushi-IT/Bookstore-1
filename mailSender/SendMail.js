const nodemailer=require('nodemailer')
const crypto = require("crypto");

SendMail={
    MailSender:async(mailId)=>{  
            
    const id = crypto.randomBytes(3).toString("hex");
    
    const transporter=nodemailer.createTransport({
        service:'gmail',
        secure: true,
        auth:{
            user:'buyorsell7373@gmail.com',
            pass:'naveenkavi'
        }
    })
    const info=transporter.sendMail({
        from:'buyorsell7373@gmail.com',
        to:mailId,
        subject:'OTP for Forget Password',
        html:'<h1> One Time Password</h1><br/><h3>'+id+'</h3>'        
    })
    console.log((await info).response)
    return id;
    }
}
    
module.exports=SendMail

// var sender=nodemailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'buyorsell7373@gmail.com',
//         pass:'naveenkavi'
//     }
// })
// var composemail=()=>{
//     return{
//         from:'buyorsell7373@gmail.com',
//         to:mailId,
//         subject:'Send Mail',
//         html:'<h1>Verification code</h1><br/><h2>1234567</h2>'
//     }
// }
// sender.sendMail(composemail,function(error,info){
//     if(error)
//     {
//         console.log(error)
//     }
//     else{
//         console.log(info.response)
//     }
// })
// return id;
// }