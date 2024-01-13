var fs = require("fs");

console.log("lecture ...");
fs.writeFile('welcome.txt', 'Hello Node', function(err) {
   if (err) {
      return console.error(err);
   }

   fs.readFile('welcome.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log(data.toString());
   });
});