const os = require("os");

//info about  current user

const user = os.userInfo();

//returns the system uptimes in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
