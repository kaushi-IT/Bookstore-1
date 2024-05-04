const UserService=require("../services/UserService");
const authenticate=(req,res,next)=>{
let token =req.headers.Authorization;
token=token.split(" ")[1];
[u,p,r]=token.split(":");
user=UserService.login(u,p);
if(user.role==r)
    next()
else
    res.send("invalid")
}
module.exports=authenticate;