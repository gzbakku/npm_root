const baseWorker = require('child_process');
const exec = baseWorker.exec;

module.exports = getRootPath;

async function getRootPath(){
  let error;
  let run = await execute("npm root -g")
  .then((data)=>{return data;})
  .catch((e)=>{error = r;return false;});
  if(!run){return new Promise((resolve,reject)=>{return reject(error);});}
  let hold;
  for(let line of run.split("\n")){
    if(line.length > 0){hold = line;}
  }
  return hold;
}

function execute(cmd){
  return new Promise((resolve,reject)=>{
      if(!cmd){reject("no command passed");}
      exec(cmd,(err, stdout, stderr)=>{
        if(err){
          reject(err);
        }
        if(stderr){
          reject(stderr);
        }
        if(stdout){
          resolve(stdout);
        }
      });
  });
}
