import React from 'react';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import './Slider.scss';

interface SliderProps {
    minValue: number;
    maxValue: number;
    setMinValue: (value: number) => void;
    setMaxValue: (value: number) => void;
    min: number;
    max: number;
}

const Slider: React.FC<SliderProps> = ({ minValue, maxValue, setMinValue, setMaxValue, min, max }) => {
    return (
        <MultiRangeSlider
            min={min}
            max={max}
            minValue={minValue}
            maxValue={maxValue}
            ruler={false}
            label={false}
            baseClassName="slider"
            onInput={(e: ChangeResult) => {
                setMinValue(e.minValue);
                setMaxValue(e.maxValue);
            }}
        />
    );
};

export default Slider;
