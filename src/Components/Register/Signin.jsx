import { Box, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signinAction } from "../../Redux/Auth/Action";
import { getUserProfile } from "../../Redux/User/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required Field"),
  password: Yup.string()
    .min(8, "Minimum 8 character required")
    .required("Required Field"),
});
export function Signin() {
  const initialValues = { email: "", password: "" };
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(signinAction(values));

    actions.setSubmitting(false);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store);
  const jwt = localStorage.getItem("token");

  useEffect(() => {
    if (jwt !== "" && jwt) {
      dispatch(getUserProfile(jwt));
    }
  }, [jwt]);
  useEffect(() => {
    if (user.reqUser?.username) {
      navigate(`/${user.reqUser.username}`);
    }
  }, [jwt, user.reqUser]);
  const handleNavigate = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div className='border'>
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}>
          <img
            className='w-40 mb-5'
            src='https://i.imgur.com/zqpwkLQ.png'></img>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}>
            {(formikprops) => (
              <Form className='space-y-8'>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}>
                      <Input
                        className='w-full'
                        {...field}
                        id='email'
                        placeholder='Mobile or Email'></Input>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}>
                      <Input
                        className='w-full'
                        {...field}
                        id='password'
                        placeholder='password'></Input>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <p className='text-center text-sm'>
                  {" "}
                  Made this app , just for learning purpose{" "}
                </p>
                <p className='text-center text-sm'>
                  {" "}
                  By Signing up , you are agree to instagram-clone terms and
                  policies
                </p>
                <Button
                  className='w-full'
                  mt={4}
                  type='submit'
                  colorSchema='blue'
                  isLoading={formikprops.isSubmitting}>
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className='border w-full border-slate-300 mt-5'>
        <p className='text-center py-2 text-sm'>
          if You dont have account already , then please click{" "}
          <span
            className='ml-2 text-blue-700 cursor-pointer'
            onClick={handleNavigate}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
