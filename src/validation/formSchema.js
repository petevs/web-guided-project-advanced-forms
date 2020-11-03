// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
    fullname: yup.string().required(),
    age: yup.number().integer(),
    username: yup.string().required().min(3, 'Username must be more than 3 characters'),
    email: yup.string().email('Must be a valid email').required('must provide an email'),
    role: yup.string().oneOf(['instructor', 'student', 'alumni', 'tl'], 'Role is required'),
    civil: yup.string().oneOf(['married', 'single'], 'Marital status required'),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})

export default formSchema