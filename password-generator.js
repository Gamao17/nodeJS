const generatePassword = require('generate-password');

function generateRandomPassword() {
    const password = generatePassword.generateMultiple(3,{
      length: 12,
      numbers: true,
      symbols: true,
    });
  
    console.log(password);
  }
  
  generateRandomPassword()