export default function validation(values) {
    const FormErrors = {} ;
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (values.email =="") {
        FormErrors.email = "Email is required"
    }else if (!emailRegex.test(values.email)) {
        FormErrors.email = "Email Format is wrong"
    }

    if (values.password =="") {
        FormErrors.password = "Password is required"
    }else if (!passwordRegex.test(values.password)) {
        FormErrors.password = "password must contains 1 uppercase and 1 number"
    }
    if (values.username =="") {
        FormErrors.username = "username is required"
    }
    if (values.password !== values.confirmpassword) {
        FormErrors.confirmpassword = "both password doesnt match"
    }
   return FormErrors ; }