// FilterBar.tsx
import React, { useState } from 'react';
import './FilterBar.scss';
import Filter from './Filter/Filter';
import { useDataContext } from '../../context/DataContext';

const FilterBar: React.FC = () => {
    const { filterData } = useDataContext();
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [selectedStages, setSelectedStages] = useState<string[]>([]);
    const [selectedStates, setSelectedStates] = useState<string[]>([]);
    const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);

    const handleStagesUpdate = (stages: string[]) => {
        setSelectedStages(stages);
        filterData(stages, selectedStates, selectedProjectTypes); 
    };

    const handleStatesUpdate = (states: string[]) => {
        setSelectedStates(states);
        filterData(selectedStages, states, selectedProjectTypes); 
    };

    const handleProjectTypeUpdate = (projects: string[]) => {
        setSelectedProjectTypes(projects);
        filterData(selectedStages, selectedStates, projects); 
    };

    const togglePopup = (title: string) => {
        setActiveFilter(activeFilter === title ? null : title);
    };

    return (
        <div className="FilterBar">
            <Filter title="Stage:" isActive={activeFilter === 'Stage:'} onToggle={togglePopup} onStagesUpdate={handleStagesUpdate} selectedStages={selectedStages} />
            <Filter title="State:" isActive={activeFilter === 'State:'} onToggle={togglePopup} onStatesUpdate={handleStatesUpdate} selectedStates={selectedStates}/>
            <Filter title="Project Type:" isActive={activeFilter === 'Project Type:'} onToggle={togglePopup} onProjectTypesUpdate={handleProjectTypeUpdate} selectedProjectTypes={selectedProjectTypes} />
            <Filter title="Total kW DC:" isActive={activeFilter === 'Total kW DC:'} onToggle={togglePopup} />
        </div>
    );
};

export default FilterBar;
