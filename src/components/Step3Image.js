import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const Step3Image = ({ nextStep, prevStep, handleFormData }) => {
    const [image, setImage] = useState(null);
    const [cropData, setCropData] = useState(null);
    const cropperRef = React.createRef();

    const onChange = e => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const cropImage = () => {
        if (typeof cropperRef.current?.cropper !== 'undefined') {
            setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        }
    };

    return (
        <>
            <input type="file" onChange={onChange} />
            <Cropper
                src={image}
                style={{ height: 400, width: '100%' }}
                initialAspectRatio={1}
                guides={false}
                ref={cropperRef}
            />
            <button onClick={cropImage}>Crop</button>
            <button onClick={() => nextStep()}>Next</button>
            <button onClick={prevStep}>Previous</button>
            {cropData && <img src={cropData} alt="cropped" />}
        </>
    );
};

export default Step3Image;
