'use client'

import React, { useRef, useEffect, useState } from 'react';
import QRCode from 'qrcode';
import IconButton from '../button/icon-button';
import { MdDownload } from 'react-icons/md';

const QRCodeGenerator = ({ data }: { data: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [qrData, setQrData] = useState('');
    const [selected, setSelected] = useState(256);


    useEffect(() => {
        if (qrData) {
            QRCode.toCanvas(canvasRef.current, qrData, { height: selected, width: selected }, (error: string) => {
                if (error) console.error('Error generating QR code: ', error);
            });
        }
    }, [qrData, selected]);

    const handleDownload = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas && canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL || '';
        downloadLink.download = 'qrcode.png';
        downloadLink.click();
    };

    return (
        <div className='flex flex-col gap-4 items-center'>
            <button onClick={() => setQrData(data)} className={`btn ${!data ? "btn-disabled" : "btn-primary"}`}>Generate</button>
            {qrData && (
                <>
                    <canvas ref={canvasRef} />
                    <div className="flex gap-4">
                    <select className="select w-full flex-1" onChange={(e) => setSelected(Number(e.target.value))}>
                        <option value={64}>64x64</option>
                        <option value={128}>128x128</option>
                        <option value={256} selected>256x256</option>
                        <option value={512}>512x512</option>
                    </select>
                    <IconButton icon={<MdDownload size={24} />} onClick={handleDownload} />
                    </div>
                </>
            )}
        </div>
    );
};

export default QRCodeGenerator;