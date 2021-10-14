const path = require('path');
const fs   = require('fs');

const getAllFiles = function(dirPath, arrayOfFiles) {

  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
      }
    })

  return arrayOfFiles

}

const result = getAllFiles("css/src/")

const text = "";

const teste = result.forEach(element => {

/* 
  try {
 */

const data = fs.readFileSync(element, 'utf8')

  //text+="/* ["+element+"] */ \n\n";

      text+=data;

      text+="# \n\n";
    
/*   
  } catch (err) {
    console.error(err)
  } */



});

//console.log(text);

fs.writeFile('css/all.css', text, function (err,data) {

  if (err) {
    return console.log(err);
  }
 
}); 