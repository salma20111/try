import Login from "@/Components/Login/login";
import SignUp from "@/Components/SignUp/SignUp";

export const metadata = {
    title: "Login",
    description: "log in to you account using email and password ."
};

export default function loginPage() {
    return(
        
        <SignUp login/>

    )
}