import './RangePopup.scss';
import Slider from '../Slider/Slider';
import InputField from '../InputField/InputField';
import { useState, useEffect } from 'react';
import { useDataContext } from '../../context/DataContext';

const RangePopup: React.FC = () => {
    const { data } = useDataContext();
    const totalKWDData = data['Total kW DC'] as number[] || []; 

    // Calculate min and max values from the data
    const minTotalKWData = Math.min(...totalKWDData);
    const maxTotalKWData = Math.max(...totalKWDData);

    const [minValue, setMinValue] = useState<number>(minTotalKWData);
    const [maxValue, setMaxValue] = useState<number>(maxTotalKWData);

    const minRange = minTotalKWData;
    const maxRange = maxTotalKWData;

    return (
        <div className='RangePopup'>
            <Slider
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                min={minRange}
                max={maxRange}
            />
            <InputField
                min={minValue}
                max={maxValue}
                setMin={setMinValue}
                setMax={setMaxValue}
                minRange={minRange}
                maxRange={maxRange}
            />
        </div>
    );
};

export default RangePopup;
