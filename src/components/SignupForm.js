import React, { useState } from 'react';

import Step1AccountInfo from './Step1AccountInfo';
import Step2PersonalInfo from './Step2PersonalInfo';
import Step3Image from './Step3Image';
import Step4Finish from './Step4Finish';
import ProgressBar from './ProgressBar';

const SignupForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleFormData = newFormData => {
        setFormData({ ...formData, ...newFormData });
    };

    const showStep = () => {
        switch (step) {
            case 1:
                return <Step1AccountInfo nextStep={nextStep} handleFormData={handleFormData} />;
            case 2:
                return <Step2PersonalInfo nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
            case 3:
                return <Step3Image nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} />;
            case 4:
                return <Step4Finish />;
            default:
                return null;
        }
    };

    return (
        <>
            <ProgressBar step={step} />
            {showStep()}
        </>
    );
};

export default SignupForm;
