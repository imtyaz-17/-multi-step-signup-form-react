import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Step4Finish = () => {
    return (
        <div className="p-6">
            <ProgressBar striped className="custom-progress-bar" now={100} />
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-medium text-purple-600">Finish:</h3>
                <h3 className="text-gray-500 text-xl font-medium">Step 4 of 4</h3>
            </div>

            <div className="flex flex-col items-center justify-center p-8 text-center text-purple-600">
                <h2 className="text-3xl font-bold mb-4">Success!</h2>
                <p className="text-lg">You have successfully signed up.</p>
            </div>
        </div>
    );
};

export default Step4Finish;
