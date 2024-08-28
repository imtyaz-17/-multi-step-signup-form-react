import React from 'react';

const ProgressBar = ({ step }) => {
    return (
        <div>
            <ul>
                <li className={step >= 1 ? 'active' : ''}>Account</li>
                <li className={step >= 2 ? 'active' : ''}>Personal</li>
                <li className={step >= 3 ? 'active' : ''}>Image</li>
                <li className={step >= 4 ? 'active' : ''}>Finish</li>
            </ul>
        </div>
    );
};

export default ProgressBar;
