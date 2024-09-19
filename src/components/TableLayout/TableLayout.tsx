import React, { useState } from 'react';
import './TableLayout.scss';
import Table from './Table/Table';
import { useDataContext } from '../../context/DataContext';

const TableLayout: React.FC = () => {
    const { filteredData, filterData } = useDataContext();
    const [selectedStages, setSelectedStages] = useState<string[]>([]);
    const [selectedStates, setSelectedStates] = useState<string[]>([]);
    const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>([]);

    const handleStagesUpdate = (stages: string[]) => {
        setSelectedStages(stages);
        filterData(stages, selectedStates, selectedProjectTypes); // Update the filtered data based on selected stages and other filters
    };

    const handleStatesUpdate = (states: string[]) => {
        setSelectedStates(states);
        filterData(selectedStages, states, selectedProjectTypes); // Update the filtered data based on selected states and other filters
    };

    const handleProjectTypesUpdate = (projectTypes: string[]) => {
        setSelectedProjectTypes(projectTypes);
        filterData(selectedStages, selectedStates, projectTypes); // Update the filtered data based on selected project types and other filters
    };

    return (
        <div className="TableLayout">
            <Table data={filteredData} selectedStages={selectedStages} selectedStates={selectedStates} selectedProjectTypes={selectedProjectTypes} />
            {/* Include other components or popups here if needed */}
        </div>
    );
};

export default TableLayout;
