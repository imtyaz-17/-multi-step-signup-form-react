import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Step2PersonalInfo = ({ nextStep, prevStep, handleFormData }) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            alternativePhoneNumber: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            phoneNumber: Yup.string()
                .matches(
                    /^[0-9]{10}$/,
                    'Phone number is not valid (should be 10 digits)'
                )
                .required('Phone number is required'),
            alternativePhoneNumber: Yup.string()
                .matches(
                    /^[0-9]{10}$/,
                    'Alternative phone number is not valid (should be 10 digits)'
                )
                .notRequired(),
        }),
        onSubmit: values => {
            handleFormData(values);
            nextStep();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="alternativePhoneNumber">Alternative Phone Number (Optional)</label>
                <input
                    id="alternativePhoneNumber"
                    name="alternativePhoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.alternativePhoneNumber}
                />
                {formik.touched.alternativePhoneNumber && formik.errors.alternativePhoneNumber ? (
                    <div>{formik.errors.alternativePhoneNumber}</div>
                ) : null}
            </div>

            <div>
                <button type="button" onClick={prevStep}>
                    Back
                </button>
                <button type="submit">Next</button>
            </div>
        </form>
    );
};

export default Step2PersonalInfo;
