'use client'

import { useState } from "react";
import Input from "../input";
import QRCodeGenerator from "../qr-generator";

export default function LinkTab() {
    const [input, setInput] = useState('');

    console.log(input)
    return (
        <>
            <Input type="url" onChange={(e) => setInput(e.target.value)} placeholder="Enter url" />
            <QRCodeGenerator data={input} />
        </>
    )
}