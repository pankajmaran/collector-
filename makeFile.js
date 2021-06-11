const fs = require('fs')

function saveFile (data, path) {  
  const json = JSON.stringify(data, null, 2)

  fs.appendFile(path, json, (err) => {
    if (err) {
      console.error(err)
      throw err
    }

    console.log('Saved data to file.')
  });
}
module.exports=saveFile;