import React, { useEffect, useState } from 'react'
import { useCameraDevices } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';
import { Camera } from 'react-native-vision-camera';

const useReadQr = () => {
    const [cameraActive, setcameraActive] = useState(true)
    const [hasPermission, setHasPermission] = useState(false);
    const [dataReadQr, setdataReadQr] = useState(" ")
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back;
    
    useEffect(() => {
        (async () => {
        const status = await Camera.requestCameraPermission();
        setHasPermission(status === 'authorized');
        })();
    }, []);

    const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
        checkInverted: true,
    });

    if (barcodes.length > 1) {
        let dataqr = barcodes.map(item => item.displayValue)
        if (dataqr[0] != dataReadQr) {
            setdataReadQr(dataqr[0])
            setcameraActive(false)
        }         
    }
    
    return {
        device,
        barcodes,
        cameraActive,
        hasPermission,
        dataReadQr,
        frameProcessor,
        setHasPermission, 
        setcameraActive,
    }
    
    
}

export default useReadQr