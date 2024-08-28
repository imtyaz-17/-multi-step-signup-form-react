import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProgressBar } from 'react-bootstrap';


const Step2PersonalInfo = ({ nextStep, prevStep, handleFormData }) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            contactNumber: '',
            alternativeContactNumber: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            contactNumber: Yup.string()
                .matches(
                    /^[0-9]{10}$/,
                    'Phone number is not valid (should be 10 digits)'
                )
                .required('Phone number is required'),
            alternativeContactNumber: Yup.string()
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
        <div className="space-y-3">
            <div>
                <ProgressBar striped className='custom-progress-bar' now={50} />
            </div>
            <div className='flex justify-between items-center mb-3'>
                <h3 className="text-2xl font-medium text-purple-600">Personal Information:</h3>
                <h3 className='text-gray-500 text-xl font-medium'>Step 2-4</h3>
            </div>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="block font-medium text-gray-500 text-start">
                        First Name: *
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        placeholder="First Name"
                        className="mt-1 block w-full px-3 py-2 border bg-gray-100 rounded shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        aria-invalid={formik.touched.firstName && formik.errors.firstName ? 'true' : 'false'}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="text-red-600 text-sm mt-1" role="alert">
                            {formik.errors.firstName}
                        </div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="lastName" className="block font-medium text-gray-500 text-start">
                        Last Name: *
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        placeholder="Last Name"
                        className="mt-1 block w-full px-3 py-2 border bg-gray-100 rounded shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        aria-invalid={formik.touched.lastName && formik.errors.lastName ? 'true' : 'false'}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="text-red-600 text-sm mt-1" role="alert">
                            {formik.errors.lastName}
                        </div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="contactNumber" className="block font-medium text-gray-500 text-start">
                        Contact No.: *
                    </label>
                    <input
                        id="contactNumber"
                        name="contactNumber"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.contactNumber}
                        placeholder="Contact No."
                        className="mt-1 block w-full px-3 py-2 border bg-gray-100 rounded shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        aria-invalid={formik.touched.contactNumber && formik.errors.contactNumber ? 'true' : 'false'}
                    />
                    {formik.touched.contactNumber && formik.errors.contactNumber ? (
                        <div className="text-red-600 text-sm mt-1" role="alert">
                            {formik.errors.contactNumber}
                        </div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="alternativeContactNumber" className="block font-medium text-gray-700 text-start">
                        Alternative  Contact No.: *
                    </label>
                    <input
                        id="alternativeContactNumber"
                        name="alternativeContactNumber"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.alternativeContactNumber}
                        placeholder="Alternative Contact No."
                        className="mt-1 block w-full px-3 py-2 border bg-gray-100 rounded shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                        aria-invalid={formik.touched.alternativeContactNumber && formik.errors.alternativeContactNumber ? 'true' : 'false'}
                    />
                    {formik.touched.alternativeContactNumber && formik.errors.alternativeContactNumber ? (
                        <div className="text-red-600 text-sm mt-1" role="alert">
                            {formik.errors.alternativeContactNumber}
                        </div>
                    ) : null}
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        type="button"
                        onClick={prevStep}
                        className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Previous
                    </button>
                    <button
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                        className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step2PersonalInfo;
