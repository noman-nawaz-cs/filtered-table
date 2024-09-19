import React, { createContext, useState, ReactNode, useContext } from 'react';
import { DataType } from '../types/DataType';

interface DataContextType {
    data: DataType;
    filteredData: DataType;
    setData: React.Dispatch<React.SetStateAction<DataType>>;
    filterData: (stages: string[], states: string[], projectTypes: string[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [data, setData] = useState<DataType>({
        'Project Name': [
            'Solar Farm 1', 'Wind Project 2', 'Hydro Plant 3', 'Solar Farm 4', 'Wind Project 5',
            'Solar Farm 6', 'Hydro Plant 7', 'Solar Farm 8', 'Wind Project 9', 'Solar Farm 10',
            'Hydro Plant 11', 'Wind Project 12', 'Solar Farm 13', 'Wind Project 14', 'Hydro Plant 15'
        ],
        'Stage': [
            'In Development', 'In Construction', 'Operating', 'Cancelled', 'Pre-Contract',
            'Operating', 'In Development', 'In Construction', 'Operating', 'Cancelled',
            'Pre-Contract', 'In Development', 'In Construction', 'Operating', 'Pre-Contract'
        ],
        'State': [
            'California', 'Texas', 'Florida', 'Nevada', 'Arizona',
            'New York', 'Washington', 'Oregon', 'Colorado', 'Georgia',
            'North Carolina', 'Virginia', 'Illinois', 'Michigan', 'Pennsylvania'
        ],
        'Total kW DC': [
            5000, 12000, 8000, 9500, 6000,
            13000, 11000, 7000, 9000, 10500,
            9800, 12500, 11500, 16000, 8500
        ],
        'Project Type': [
            'Solar', 'Wind', 'Hydro', 'Solar', 'Wind',
            'Solar', 'Hydro', 'Solar', 'Wind', 'Solar',
            'Hydro', 'Wind', 'Solar', 'Wind', 'Hydro'
        ],
        'Solution Type': [
            'Ground Mount', 'Offshore', 'Floating', 'Ground Mount', 'Offshore',
            'Floating', 'Ground Mount', 'Floating', 'Offshore', 'Ground Mount',
            'Floating', 'Offshore', 'Ground Mount', 'Floating', 'Offshore'
        ],
        'Offtake Type': [
            'PPA', 'Merchant', 'PPA', 'Merchant', 'PPA',
            'Merchant', 'PPA', 'Merchant', 'PPA', 'Merchant',
            'PPA', 'Merchant', 'PPA', 'Merchant', 'PPA'
        ]
    });

    const [filteredData, setFilteredData] = useState<DataType>(data);

    const filterData = (stages: string[], states: string[], projectTypes: string[]) => {
        const filterByStages = (item: string) => stages.length === 0 || stages.includes(item);
        const filterByStates = (item: string) => states.length === 0 || states.includes(item);
        const filterByProjectTypes = (item: string) => projectTypes.length === 0 || projectTypes.includes(item);

        const newFilteredData: DataType = {
            'Project Name': data['Project Name'].filter((_, index) =>
                filterByStages(data['Stage'][index] as string) &&
                filterByStates(data['State'][index] as string) &&
                filterByProjectTypes(data['Project Type'][index] as string)
            ),
            'Stage': data['Stage'].filter((_, index) =>
                filterByStages(data['Stage'][index] as string) &&
                filterByStates(data['State'][index] as string) &&
                filterByProjectTypes(data['Project Type'][index] as string)
            ),
            'State': data['State'].filter((_, index) =>
                filterByStages(data['Stage'][index] as string) &&
                filterByStates(data['State'][index] as string) &&
                filterByProjectTypes(data['Project Type'][index] as string)
            ),
            'Total kW DC': data['Total kW DC'].filter((_, index) =>
                filterByStages(data['Stage'][index] as string) &&
                filterByStates(data['State'][index] as string) &&
                filterByProjectTypes(data['Project Type'][index] as string)
            ),
            'Project Type': data['Project Type'].filter((_, index) =>
                filterByStages(data['Stage'][index] as string) &&
                filterByStates(data['State'][index] as string) &&
                filterByProjectTypes(data['Project Type'][index] as string)
            ),
            'Solution Type': data['Solution Type'].filter((_, index) =>
                filterByStages(data['Stage'][index] as string) &&
                filterByStates(data['State'][index] as string) &&
                filterByProjectTypes(data['Project Type'][index] as string)
            ),
            'Offtake Type': data['Offtake Type'].filter((_, index) =>
                filterByStages(data['Stage'][index] as string) &&
                filterByStates(data['State'][index] as string) &&
                filterByProjectTypes(data['Project Type'][index] as string)
            )
        };

        setFilteredData(newFilteredData);
    };

    return (
        <DataContext.Provider value={{ data, filteredData, setData, filterData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
};
