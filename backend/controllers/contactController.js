const { addContacts } = require("../service/contactService");
const validation = require('../validation');

async function sendMessage(req, res){
  console.log("Oh! I actually do work and y'all just don't know it")
  try{
    const { name, email, message } = req.body;
    console.log(req.body)
    const errors = new validation();
    errors.validateName(name);
    errors.validateEmail(email);
    errors.validateMessage(message);
    if(errors.getErrors().length > 0){
        return res.status(400).json(errors.getErrors());
    }else{
        const contacts = await addContacts(req.body);
        return res.status(201).json(contacts);
    }
  }
  catch(err){
    console.log(err);
    return res.status(500).json(err);
  }
}

module.exports = {
  sendMessage
}
