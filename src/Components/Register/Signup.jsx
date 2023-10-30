import React, { useEffect } from "react";
import { Box, FormControl, FormErrorMessage, useToast } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Input, Button } from "@chakra-ui/react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../../Redux/Auth/Action";
import Auth from "../../Pages/Auth/Auth";
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required Field"),
  password: Yup.string()
    .min(8, "Minimum 8 character required")
    .required("Required Field"),
});
function Signup() {
  const initialValues = { email: "", username: "", name: "", password: "" };
  const dispatch = useDispatch();
  const toast = useToast();
  const { auth } = useSelector((store) => store);
  const handleSubmit = (values, actions) => {
    dispatch(signupAction(values));

    actions.setSubmitting(false);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  useEffect(() => {
    if (auth.signup?.username) {
      navigate("/login");
      toast({
        title: `Account created. ${auth.signup.username}`,
        description: "We've created your account for you.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [auth.signup]);

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
                <Field name='username'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}>
                      <Input
                        className='w-full'
                        {...field}
                        id='username'
                        placeholder='username'></Input>
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}>
                      <Input
                        className='w-full'
                        {...field}
                        id='name'
                        placeholder='name'></Input>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
                  type='submit'
                  mt={4}
                  colorSchema='blue'
                  isLoading={formikprops.isSubmitting}>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
        <div className='border w-full border-slate-300 mt-5'>
          <p className='text-center py-2 text-sm'>
            if You have account already , then please click{" "}
            <span
              className='ml-2 text-blue-700 cursor-pointer'
              onClick={handleNavigate}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
