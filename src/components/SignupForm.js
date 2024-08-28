import React, { useState } from 'react';
import Step1AccountInfo from './Step1AccountInfo';
import Step2PersonalInfo from './Step2PersonalInfo';
import Step3Image from './Step3Image';
import Step4Finish from './Step4Finish';
import Progress from './Progress';

const SignupForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleNextStep = () => setStep(prevStep => prevStep + 1);
    const handlePrevStep = () => setStep(prevStep => prevStep - 1);

    const updateFormData = (newData) => {
        setFormData(prevData => ({ ...prevData, ...newData }));
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1AccountInfo nextStep={handleNextStep} handleFormData={updateFormData} />;
            case 2:
                return <Step2PersonalInfo nextStep={handleNextStep} prevStep={handlePrevStep} handleFormData={updateFormData} />;
            case 3:
                return <Step3Image nextStep={handleNextStep} prevStep={handlePrevStep} handleFormData={updateFormData} />;
            case 4:
                return <Step4Finish />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-md mx-auto my-4">
            <h1 className="text-3xl font-medium text-purple-600 mt-6 mb-3">SIGN UP YOUR USER ACCOUNT</h1>
            <h3 className="text-xl text-gray-500 mt-2 mb-8">Fill all form fields to go to the next step</h3>
            <Progress step={step} />
            {renderStep()}
        </div>
    );
};

export default SignupForm;
