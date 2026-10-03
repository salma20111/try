import { users, usersDB } from "@/data/UsersDB";
import { isEmail, minLength } from "@/helpers/validators";

export const loginUser = ({email, password}) => {
    if(!email || !password) {
        throw new Error("please provide email and password ");
    }

    if(!isEmail({ value: email })) {
        throw new Error("please provide a valid email");
    }
    if(!minLength({ value: password , min: 6})) {
                throw new Error("passowrd should be at least 6 chars.");
    }
    const usersExist = usersDB.find((user) => user.email === email);
    
    if(!usersExist) {
       throw new Error("No user exist with this Email ");
    }

    // very importand : can not search for the user by the password ya salma 

    const passwordCorrect =  usersExist.password === password;

    if(!passwordCorrect) {
         throw new Error("Password and email does not match!");
    }

    if(usersExist && passwordCorrect) {
        delete usersExist.password;
        return usersExist;
    } 
};

//search user 
//check if user exist 
//c