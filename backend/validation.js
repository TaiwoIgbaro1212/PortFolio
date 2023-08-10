class Validation{
  constructor(){
    this.errors = [];
  }

  validateName(name){
    if(name === "" || name.length < 3){
      this.errors.push("Please enter your name.");
    }
  }

  validateEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)){
      this.errors.push("Please enter a valid email address.");
    }
  }
  validateMessage(message){
    if(message === "" || message.length < 10){
      this.errors.push("Please enter your message.");
    }
  }
  getErrors(){
    return this.errors;
  }
}


module.exports = Validation
