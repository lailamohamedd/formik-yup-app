import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = Yup.object().shape({
    email: Yup.string().email("Please enter a valid email").required("Required"),
    age: Yup.number().positive().integer().required("Required"),
    password: Yup
        .string()
        .min(5)
        .matches(passwordRules, {message: "please create a stronger password"})
        .required("Required"),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref("password"), null])
        .required("Required"),

});

export const advancedSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),

    jobType: Yup
        .string()
        .oneOf(["designer", "developer", "manager", "other"], "I choose job type")
        .required("Required"),

    acceptedTos: Yup
        .boolean()
        .oneOf([true], "Please accept the terms of services")

});