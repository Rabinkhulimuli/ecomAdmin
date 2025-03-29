"use client";
import React, { useState } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { GiCyberEye } from "react-icons/gi";
import { useFormik } from "formik";
import { useCreateUser } from "@/lib/adminuser";
function Login() {
  const [showPass, setShowPass] = useState(false);
  const [userVal, setuserVal] = useState(false);
  const CreateUser=useCreateUser
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword:"",
      role: "ADMIN",
    },
    onSubmit: async(values) => {
        const data={email:values.email,password:values.password,role:values.role}
        try {
            await CreateUser(data);
          } catch (error) {
            console.error("Error creating user:", error);
          }
    },
   validate:(values)=> {
    const errors: { confirmpassword?: string } = {};
       if(formik.isSubmitting && values.password !==values.confirmpassword && !userVal){
        errors.confirmpassword='password did not matched'
       }
       return errors
   },
  });
  return (
    <div className="flex flex-col bg-black/70 text-white gap-4 items-center h-screen justify-center ">
      <h1 className="text-2xl font-semibold">Admin Login Panel</h1>
      <form onSubmit={formik.handleSubmit} className=" flex flex-col gap-2">
        <div>
          <label htmlFor="role">Account Type</label>
          <input type="text" id="role" name="role" value="ADMIN" disabled />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
          required
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={(e) => {
              formik.setFieldValue("email", e.target.value.trim());
              formik.handleBlur(e);
            }}
            className="border px-4 py-1  rounded-md"
          />
        </div>
        <div className="flex items-end">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="w-full">
              Password
            </label>

            <div className=" relative flex items-center w-full">
              <input
              required
                type={`${!showPass ? "password" : "text"}`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={(e) => {
                  formik.setFieldValue("password", e.target.value.trim());
                  formik.handleBlur(e);
                }}
                id="password"
                name="password"
                className="border px-4 py-1 w-full rounded-md"
              />
              {!showPass ? (
                <PiEyeClosedBold
                  className="absolute  right-4"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <GiCyberEye
                  className="absolute right-4 "
                  onClick={() => setShowPass(!showPass)}
                />
              )}
            </div>
            {!userVal && (
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className=" relative flex items-center w-full">
                  <input 
                    type={`${!showPass ? "password" : "text"}`}
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                      formik.setFieldValue("confirmpassword", e.target.value.trim());
                      formik.handleBlur(e);
                    }}
                    id="confirmpassword"
                    name="confirmpassword"
                    className={`border px-4 py-1 w-full transition-all duration-700 ease-in-out rounded-md ${formik.errors.confirmpassword&&formik.touched ?"ring-2 border-red-500 ring-red-500":""}`}
                  />
                  {!showPass ? (
                    <PiEyeClosedBold
                      className="absolute  right-4"
                      onClick={() => setShowPass(!showPass)}
                    />
                  ) : (
                    <GiCyberEye
                      className="absolute right-4 "
                      onClick={() => setShowPass(!showPass)}
                    />
                  )}
                </div>
                {formik.errors.confirmpassword &&formik.touched ? <div className="text-center capitalize text-red-200">{formik.errors.confirmpassword} </div>:null}
              </div>
            )}
          </div>
        </div>
        <div>
          <button className="border w-full py-1 mt-4 cursor-pointer rounded-md text-black bg-white font-semibold capitalize">
            {userVal ? "Login" : "submit"}{" "}
          </button>
          <div
            onClick={() => setuserVal(!userVal)}
            className="border w-full py-1 mt-2 cursor-pointer rounded-md text-black bg-white font-semibold capitalize text-center"
          >
            {userVal ? "create account" : "already have an acccount"}{" "}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
