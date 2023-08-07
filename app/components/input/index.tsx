import { type } from "os";

export interface InputProps {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export default function Input({placeholder, type = "text", onChange}: InputProps) {
    return (
        <input onChange={onChange} type={type} placeholder={placeholder} className="input input-bordered w-full max-w-xs" />
    )
}