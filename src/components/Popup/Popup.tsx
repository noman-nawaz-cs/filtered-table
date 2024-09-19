// Popup.tsx
import React from 'react';
import LabelCheckbox from '../LabelCheckbox/LabelCheckbox';
import { useDataContext } from '../../context/DataContext';
import './Popup.scss';

interface PopupProps {
    label: string;
    onStatesUpdate?: (states: string[]) => void;
    selectedStates?: string[];
    onProjectTypesUpdate?: (projects: string[]) => void;
    selectedProjectTypes?: string[];
}

const Popup: React.FC<PopupProps> = ({ label, onStatesUpdate, selectedStates, onProjectTypesUpdate, selectedProjectTypes }) => {
    const { data } = useDataContext(); 

    const projectTypeData = data[label] as string[] || [];
    const uniqueProjectTypes = Array.from(new Set(projectTypeData));

    const handleCheckboxChange = (value: string, isChecked: boolean) => {
        if (label === 'State' && onStatesUpdate) {
            if (value === 'All') {
                const allStates = isChecked ? projectTypeData : [];
                onStatesUpdate(isChecked ? allStates : []);
            } else {
                const newStates = isChecked 
                    ? [...(selectedStates || []), value]
                    : (selectedStates || []).filter(state => state !== value);
                onStatesUpdate(newStates);
            }
        } else if (label === 'Project Type' && onProjectTypesUpdate) {
            if (value === 'All') {
                const allProjectTypes = isChecked ? uniqueProjectTypes : [];
                onProjectTypesUpdate(isChecked ? allProjectTypes : []);
            } else {
                const newProjectTypes = isChecked 
                    ? [...(selectedProjectTypes || []), value]
                    : (selectedProjectTypes || []).filter(project => project !== value);
                onProjectTypesUpdate(newProjectTypes);
            }
        }
    };

    return (
        <div className='Popup'>
            {label === 'State' && (
                <>
                    <LabelCheckbox
                        label="All"
                        checked={projectTypeData.length > 0 && (selectedStates || []).length === projectTypeData.length}
                        onChange={(e) => handleCheckboxChange('All', e.target.checked)}
                    />
                    {projectTypeData.map((type, index) => (
                        <LabelCheckbox
                            key={index}
                            label={type}
                            checked={selectedStates?.includes(type) || false}
                            onChange={(e) => handleCheckboxChange(type, e.target.checked)}
                        />
                    ))}
                </>
            )}
            {label === 'Project Type' && (
                <>
                    <LabelCheckbox
                        label="All"
                        checked={uniqueProjectTypes.length > 0 && (selectedProjectTypes || []).length === uniqueProjectTypes.length}
                        onChange={(e) => handleCheckboxChange('All', e.target.checked)}
                    />
                    {uniqueProjectTypes.map((type, index) => (
                        <LabelCheckbox
                            key={index}
                            label={type}
                            checked={selectedProjectTypes?.includes(type) || false}
                            onChange={(e) => handleCheckboxChange(type, e.target.checked)}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default Popup;
