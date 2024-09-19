// Filter.tsx
import React from 'react';
import angleDown from '../../../assets/icons/angle-down.png';
import './Filter.scss';
import StagePopup from '../../StagePopup/StagePopup';
import Popup from '../../Popup/Popup';
import RangePopup from '../../RangePopup/RangePopup';

interface FilterProps {
    title: string;
    isActive: boolean;
    onToggle: (title: string) => void;
    onStagesUpdate?: (stages: string[]) => void;
    selectedStages?: string[];
    onStatesUpdate?: (states: string[]) => void;
    selectedStates?: string[];
    onProjectTypesUpdate?: (projects: string[]) => void;
    selectedProjectTypes?: string[];
}

const Filter: React.FC<FilterProps> = ({
    title,
    isActive,
    onToggle,
    onStagesUpdate,
    selectedStages,
    onStatesUpdate,
    selectedStates,
    onProjectTypesUpdate,
    selectedProjectTypes
}) => {
    const renderPopup = () => {
        if (!isActive) return null;

        switch (title) {
            case 'Stage:':
                if (!onStagesUpdate) return null;
                return <StagePopup onStagesUpdate={onStagesUpdate} selectedStages={selectedStages || []} />;
            case 'State:':
                return <Popup label="State" onStatesUpdate={onStatesUpdate} selectedStates={selectedStates || []} />;
            case 'Project Type:':
                return <Popup label="Project Type" onProjectTypesUpdate={onProjectTypesUpdate} selectedProjectTypes={selectedProjectTypes || []} />;
            case 'Total kW DC:':
                return <RangePopup />;
            default:
                return null;
        }
    };

    const handlePopupClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="Filter" onClick={() => onToggle(title)}>
            <div>{title}</div>
            <div className="FilterOption">Active</div>
            <img src={angleDown} alt="Arrow Down" className={isActive ? 'rotate' : ''} />
            {isActive && (
                <div onClick={handlePopupClick}>
                    {renderPopup()}
                </div>
            )}
        </div>
    );
};

export default Filter;
