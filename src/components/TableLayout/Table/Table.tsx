import React from 'react';
import Row from './Row/Row';
import './Table.scss';
import TableHeading from './TableHeading/TableHeading';

interface TableProps {
    data: { [key: string]: Array<string | number> };
    selectedStages: string[];
    selectedStates: string[];
    selectedProjectTypes: string[];
}

const Table: React.FC<TableProps> = ({ data, selectedStages, selectedStates, selectedProjectTypes }) => {
    const headings = Object.keys(data);


    const filterDataByCriteria = () => {
        if (selectedStages.length === 0 && selectedStates.length === 0 && selectedProjectTypes.length === 0) {
            return data;
        }

        const filteredData: { [key: string]: Array<string | number> } = {};


        headings.forEach(heading => {
            filteredData[heading] = [];
        });

        data[headings[0]].forEach((_, rowIndex) => {
            const stage = String(data['Stage'][rowIndex]);
            const state = String(data['State'][rowIndex]);
            const projectType = String(data['Project Type'][rowIndex]);

            if (
                (selectedStages.length === 0 || selectedStages.includes(stage)) &&
                (selectedStates.length === 0 || selectedStates.includes(state)) &&
                (selectedProjectTypes.length === 0 || selectedProjectTypes.includes(projectType))
            ) {
                headings.forEach(heading => {
                    filteredData[heading].push(data[heading][rowIndex]);
                });
            }
        });

        return filteredData;
    };

    const filteredData = filterDataByCriteria();

    return (
        <div className="table-container">
            <table className="responsive-table">
                <thead>
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index}>
                                <TableHeading title={heading} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData[headings[0]] && filteredData[headings[0]].length > 0 ? (
                        filteredData[headings[0]].map((_, rowIndex) => (
                            <Row
                                key={rowIndex}
                                rowData={headings.map(heading => filteredData[heading][rowIndex])}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={headings.length}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
