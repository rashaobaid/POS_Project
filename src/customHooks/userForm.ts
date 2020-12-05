import React,{useState} from "react"
import { errorsProps } from "../types";
const useForm = () => {
    const [userInformation, setUserInformation] = useState({userName: "", password: "" });
    

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInformation({ ...userInformation, [name]: value });
};

const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
   
};


const returnValues = { handleChange, handleSubmit,userInformation }
return returnValues
}
export default useForm;