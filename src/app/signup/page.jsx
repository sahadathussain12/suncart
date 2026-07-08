"use client";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { Check } from "@gravity-ui/icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";




const SignUpPage = () => {

  const router = useRouter()
  
const [showPassword, setShowPassword] = useState(false);

const onSubmit = async(e)=>{
    e.preventDefault();
    const  name = e.target.name.value;
    const  image = e.target.image.value;
    const  email = e.target.email.value;
    const password= e.target.password.value;


    const { data, error } = await authClient.signUp.email({
     name,
     image,
     email,
     password,
     callbackURL: '/'
});


console.log(data,error,'data and error');
if (error) {
  toast.error(error.message);
  return;
}if(data){
  router.push('/')
}

toast.success("Sign Up Successful");
}
const handleGoogleSignUp = async()=>{
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/"
  });
}


// asdghasaA12
// sahadathussain87285634534534@gmail.com
  return (
    <Card className="border mx-auto w-125 py-10 mt-5">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          type="password"
          name="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>

          <div className="relative w-full">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800"
            >
              {showPassword ? (
                <FaEyeSlash className="text-lg" />
              ) : (
                <FaEye className="text-lg" />
              )}
            </button>
          </div>

          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>

          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
      <Button onClick={handleGoogleSignUp} className="w-full mt-3 font-bold" variant="outline">
        Sign Up With Google
      </Button>
    </Card>
  );
};

export default SignUpPage;
