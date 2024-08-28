import React, { useState, useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { ProgressBar } from 'react-bootstrap';

const ImageUpload = ({ label, image, setImage, cropData, setCropData, cropperRef, aspectRatio }) => (
    <div className="mb-6">
        <label className="block font-medium text-gray-700 mb-1 text-start">{label}</label>
        <div className="bg-gray-100 mb-4">
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const files = e.target?.files;
                    if (files && files[0]) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            setImage(reader.result);
                        };
                        reader.readAsDataURL(files[0]);
                    }
                }}
                className="py-2"
            />
        </div>
        {image && (
            <>
                <div className="mb-4">
                    <Cropper
                        src={image}
                        style={{ height: 200, width: '100%' }}
                        initialAspectRatio={aspectRatio}
                        guides={false}
                        ref={cropperRef}
                    />
                </div>
                <button
                    type="button"
                    onClick={() => {
                        if (cropperRef.current?.cropper) {
                            setCropData(cropperRef.current.cropper.getCroppedCanvas().toDataURL());
                        }
                    }}
                    className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    Crop
                </button>
            </>
        )}
        {cropData && (
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Cropped Image:</h3>
                <img src={cropData} alt="Cropped" className="mt-2 border border-gray-300 rounded" />
            </div>
        )}
    </div>
);

const Step3Image = ({ nextStep, prevStep, handleFormData }) => {
    const [images, setImages] = useState({
        profileImage: null,
        signatureImage: null,
    });
    const [cropData, setCropData] = useState({
        profileImage: null,
        signatureImage: null,
    });
    const [errors, setErrors] = useState({ profileImage: '', signatureImage: '' });
    const cropperRefProfile = useRef(null);
    const cropperRefSignature = useRef(null);

    const validateImages = () => {
        let isValid = true;
        const newErrors = { profileImage: '', signatureImage: '' };

        if (!images.profileImage) {
            newErrors.profileImage = 'Profile image is required';
            isValid = false;
        }
        if (!images.signatureImage) {
            newErrors.signatureImage = 'Signature image is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNextStep = () => {
        if (validateImages()) {
            handleFormData({
                profileImage: cropData.profileImage,
                signatureImage: cropData.signatureImage,
            });
            nextStep();
        }
    };

    return (
        <div className="space-y-6">
            <ProgressBar striped className="custom-progress-bar" now={75} />
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-medium text-purple-600">Image Upload:</h3>
                <h3 className="text-gray-500 text-xl font-medium">Step 3 of 4</h3>
            </div>

            <ImageUpload
                label="Upload Your Photo"
                image={images.profileImage}
                setImage={(image) => setImages((prev) => ({ ...prev, profileImage: image }))}
                cropData={cropData.profileImage}
                setCropData={(data) => setCropData((prev) => ({ ...prev, profileImage: data }))}
                cropperRef={cropperRefProfile}
                aspectRatio={1}
            />

            <ImageUpload
                label="Upload Signature Photo"
                image={images.signatureImage}
                setImage={(image) => setImages((prev) => ({ ...prev, signatureImage: image }))}
                cropData={cropData.signatureImage}
                setCropData={(data) => setCropData((prev) => ({ ...prev, signatureImage: data }))}
                cropperRef={cropperRefSignature}
                aspectRatio={3}
            />

            <div className="flex justify-end mt-6 gap-2">
                <button
                    type="button"
                    onClick={prevStep}
                    className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={handleNextStep}
                    className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Step3Image;
