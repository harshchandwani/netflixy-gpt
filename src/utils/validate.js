export const checkValidData = (email, password, name) => {
    const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);
    const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/;


    if(!isEmailValid){
        return "Email is not valid"
    }
    if(!isPasswordValid){
        return "Password is not valid";
    }
    
    if(!isNameValid){
        return "Name is not valid";
    }
    if(isEmailValid && isPasswordValid && isNameValid){
        return null;
    }
}