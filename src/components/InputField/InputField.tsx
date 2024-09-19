import './InputField.scss';
import Input from '../Input/Input';
import { useState, useEffect } from 'react';

interface InputFieldProps {
    min: number;
    max: number;
    setMin: (value: number) => void;
    setMax: (value: number) => void;
    minRange: number; 
    maxRange: number; 
}

const InputField: React.FC<InputFieldProps> = ({ min, max, setMin, setMax, minRange, maxRange }) => {
    const [tempMin, setTempMin] = useState(min.toString());
    const [tempMax, setTempMax] = useState(max.toString());

    useEffect(() => {
        setTempMin(min.toString());
        setTempMax(max.toString());
    }, [min, max]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only numbers or an empty string
        if (/^\d*\.?\d*$/.test(value)) {
            setTempMin(value);
        }
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Allow only numbers or an empty string
        if (/^\d*\.?\d*$/.test(value)) {
            setTempMax(value);
        }
    };

    const handleMinBlur = () => {
        const value = parseFloat(tempMin);
        if (!isNaN(value) && value >= minRange && value <= max) {
            setMin(value);
        } else {
            setTempMin(min.toString());
        }
    };

    const handleMaxBlur = () => {
        const value = parseFloat(tempMax);
        if (!isNaN(value) && value <= maxRange && value >= min) {
            setMax(value);
        } else {
            setTempMax(max.toString());
        }
    };

    const handleMinKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = parseFloat(tempMin);
            if (!isNaN(value) && value >= minRange && value <= max) {
                setMin(value);
            } else {
                setTempMin(min.toString());
            }
        }
    };

    const handleMaxKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = parseFloat(tempMax);
            if (!isNaN(value) && value <= maxRange && value >= min) {
                setMax(value);
            } else {
                setTempMax(max.toString());
            }
        }
    };

    return (
        <div className='InputField'>
            <Input 
                label="Min" 
                value={tempMin} 
                onChange={handleMinChange} 
                min={minRange} 
                max={max} 
                onBlur={handleMinBlur}
                onKeyDown={handleMinKeyPress}
            />
            <span style={{ fontFamily: 'GothamMedium' }}>_</span>
            <Input 
                label="Max" 
                value={tempMax} 
                onChange={handleMaxChange} 
                min={min} 
                max={maxRange} 
                onBlur={handleMaxBlur}
                onKeyDown={handleMaxKeyPress}
            />
        </div>
    );
};

export default InputField;
