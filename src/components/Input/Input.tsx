import React from 'react';
import './Input.scss';
import { LabelProps } from '../Label/Label';

interface InputProps extends LabelProps {
    value: string; // Changed from number to string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min: number;
    max: number;
    onBlur?: () => void; // Make optional
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; // Make optional
}

const Input: React.FC<InputProps> = ({ label, value, onChange, min, max, onBlur, onKeyDown }) => {
    return (
        <div className="InputWrapper">
            <label className="InputLabel">{label}</label>
            <input
                type="text"
                className="Input"
                value={value}
                onChange={onChange}
                onBlur={onBlur} // Apply onBlur
                onKeyDown={onKeyDown} // Apply onKeyDown
            />
        </div>
    );
};

export default Input;
