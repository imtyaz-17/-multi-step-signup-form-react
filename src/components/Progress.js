import React from 'react';
import { FaCamera, FaCheck, FaLock, FaUser } from 'react-icons/fa6';

const Step = ({ isActive, icon: Icon, label }) => {
    return (
        <li className="flex-1 text-center relative">
            <div className={`absolute inset-x-9 top-2 transform -translate-y-6 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${isActive ? 'bg-purple-600' : 'bg-gray-200'}`}>
                    <Icon size={20} />
                </div>
            </div>
            <div className={`w-full border-b-4 transition-colors ${isActive ? 'border-purple-600' : 'border-gray-300'}`}></div>
            <span className={`block mt-5 ${isActive ? 'text-purple-600 font-semibold' : 'text-gray-400'}`}>{label}</span>
        </li>
    );
};

const Progress = ({ step }) => {
    const steps = [
        { label: 'Account', icon: FaLock },
        { label: 'Personal', icon: FaUser },
        { label: 'Image', icon: FaCamera },
        { label: 'Finish', icon: FaCheck }
    ];

    return (
        <div className="w-full mt-5">
            <ul className="flex justify-between items-center relative p-0">
                {steps.map((stepItem, index) => (
                    <Step
                        key={index}
                        isActive={step >= index + 1}
                        icon={stepItem.icon}
                        label={stepItem.label}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Progress;
