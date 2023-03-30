import React from "react";
import style from "../App.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
const Form = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(10).required(),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required(),
  });
  const { register, handleSubmit,formState:{errors} } = useForm({
      resolver: yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Full Name..."
          {...register("fullname")}
        />
        {/* <p>{errors.fullname?.message}</p> */}
        <input type="text" placeholder="Email..." {...register("email")} />
        {/* <p>{errors.email?.message}</p> */}
        <input type="number" placeholder="Age..." {...register("age")} />
        {/* <p>{errors.age?.message}</p> */}
        <input
          type="password"
          placeholder="Password..."
          {...register("password")}
        />
        {/* <p>{errors.password?.message}</p> */}
        <input
          type="password"
          placeholder="Confirm password."
          {...register("confirmpassword")}
        />
        {/* <p>{errors.confirmpassowrd?.message}</p> */}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
