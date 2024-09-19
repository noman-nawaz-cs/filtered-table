import React from 'react';
import LabelCheckbox from '../LabelCheckbox/LabelCheckbox';
import ChipCheckbox from '../ChipCheckbox/ChipCheckbox';
import { useDataContext } from '../../context/DataContext';
import './StagePopup.scss';

interface StagePopupProps {
    onStagesUpdate: (stages: string[]) => void;
    selectedStages: string[];
}

const StagePopup: React.FC<StagePopupProps> = ({ onStagesUpdate, selectedStages }) => {
    const { data } = useDataContext();
    const stageData = data['Stage'] as string[] || [];
    const uniqueStages = Array.from(new Set(stageData));

    const activeStages = ['Pre-Contract', 'In Development', 'In Construction', 'Operating'];
    const inactiveStages = ['Cancelled'];

    const handleCheckboxChange = (stage: string, isChecked: boolean) => {
        const newSelectedStages = isChecked
            ? [...selectedStages, stage]
            : selectedStages.filter(s => s !== stage);
        onStagesUpdate(newSelectedStages);
    };

    const handleActiveChange = (isChecked: boolean) => {
        const newSelectedStages = isChecked
            ? [...new Set([...selectedStages, ...activeStages])]
            : selectedStages.filter(stage => !activeStages.includes(stage));
        onStagesUpdate(newSelectedStages);
    };

    const handleInactiveChange = (isChecked: boolean) => {
        const newSelectedStages = isChecked
            ? [...new Set([...selectedStages, ...inactiveStages])]
            : selectedStages.filter(stage => !inactiveStages.includes(stage));
        onStagesUpdate(newSelectedStages);
    };

    return (
        <div className="StagePopup">
            <LabelCheckbox
                label="Active"
                className="active-checkbox"
                checked={activeStages.some(stage => selectedStages.includes(stage))}
                onChange={(e) => handleActiveChange(e.target.checked)}
            />
            {activeStages.map((stage, index) => (
                <ChipCheckbox
                    key={index}
                    label={stage}
                    background={getBackgroundColor(stage)}
                    color={getTextColor(stage)}
                    onChange={(e) => handleCheckboxChange(stage, e.target.checked)}
                    width='110px'
                    checked={selectedStages.includes(stage)}
                />
            ))}
            <LabelCheckbox
                label="Inactive"
                className="inactive-checkbox"
                checked={inactiveStages.some(stage => selectedStages.includes(stage))}
                onChange={(e) => handleInactiveChange(e.target.checked)}
            />
            {inactiveStages.map((stage, index) => (
                <ChipCheckbox
                    key={index}
                    label={stage}
                    background={getBackgroundColor(stage)}
                    color={getTextColor(stage)}
                    onChange={(e) => handleCheckboxChange(stage, e.target.checked)}
                    width='110px'
                    checked={selectedStages.includes(stage)}
                />
            ))}
        </div>
    );
};

const getBackgroundColor = (stage: string) => {
    switch (stage) {
        case 'Pre-Contract':
            return '#1D4289';
        case 'In Development':
            return '#CCD4D7';
        case 'In Construction':
            return '#F7BB39';
        case 'Operating':
            return '#05A569';
        case 'Cancelled':
            return '#EA0234';
        default:
            return '#CCCCCC';
    }
};

const getTextColor = (stage: string) => {
    switch (stage) {
        case 'Pre-Contract':
        case 'Operating':
        case 'Cancelled':
            return '#ffffff';
        case 'In Development':
        case 'In Construction':
            return '#002A3A';
        default:
            return '#000000';
    }
};

export default StagePopup;
