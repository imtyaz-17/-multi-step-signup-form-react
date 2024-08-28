import React from 'react';
import { useFormik } from 'formik';
import { ProgressBar } from 'react-bootstrap';
import * as Yup from 'yup';
import { FaKey } from 'react-icons/fa6';
import { FaUserAlt } from 'react-icons/fa';

const Step1AccountInfo = ({ nextStep, handleFormData }) => {
    // Initialize useFormik hook
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
    } = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        // Define validation schema with Yup
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            username: Yup.string().required('Required'),
            password: Yup.string()
                .min(6, 'Minimum 6 characters')
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
        }),
        // Handle form submission
        onSubmit: values => {
            handleFormData(values); // Pass form data to parent component
            nextStep(); // Move to the next step in the form
        },
    });

    // Helper function for rendering input fields with validation errors
    const renderInputField = ({ id, type, label, icon: Icon, placeholder }) => (
        <div className="relative">
            <label htmlFor={id} className="block font-medium text-gray-500 text-start">
                {label}: *
            </label>
            {Icon && <Icon className="absolute right-2 top-10 text-gray-400" />}
            <input
                id={id}
                name={id}
                type={type}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[id]}
                placeholder={placeholder}
                className="mt-1 block w-full px-3 py-2 border bg-gray-100 rounded shadow-sm focus:outline-none focus:ring-purple-600 focus:border-purple-600 sm:text-sm"
                aria-describedby={`${id}-error`}
            />
            {touched[id] && errors[id] ? (
                <div className="text-red-600 text-sm mt-1" id={`${id}-error`}>
                    {errors[id]}
                </div>
            ) : null}
        </div>
    );

    return (
        <div className="space-y-4">
            <div>
                <ProgressBar striped className="custom-progress-bar" now={25} />
            </div>
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-medium text-purple-600">Account Information:</h3>
                <h3 className="text-gray-500 text-xl font-medium">Step 1-4</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
                {renderInputField({
                    id: 'email',
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Email Id',
                })}
                {renderInputField({
                    id: 'username',
                    type: 'text',
                    label: 'Username',
                    icon: FaUserAlt,
                    placeholder: 'Username',
                })}
                {renderInputField({
                    id: 'password',
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Password',
                })}
                {renderInputField({
                    id: 'confirmPassword',
                    type: 'password',
                    label: 'Confirm Password',
                    icon: FaKey,
                    placeholder: 'Confirm Password',
                })}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step1AccountInfo;
