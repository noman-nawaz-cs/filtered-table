// Row.tsx
import React from 'react';
import Column from '../Column/Column';
import Chip from '../../../Chip/Chip';
import './Row.scss';

interface RowProps {
    rowData: Array<string | number>;
}

const getChipStyles = (label: string) => {
    switch (label) {
        case 'Pre-Contract':
            return { background: '#1D4289', color: '#ffffff' };
        case 'In Development':
            return { background: '#CCD4D7', color: '#1D4289' };
        case 'In Construction':
            return { background: '#F7BB39', color: '#002A3A' };
        case 'Operating':
            return { background: '#05A569', color: '#ffffff' };
        case 'Cancelled':
            return { background: '#EA0234', color: '#ffffff' };
        default:
            return { background: '#ddd', color: '#000' };
    }
};

const Row: React.FC<RowProps> = ({ rowData }) => {
    return (
        <tr>
            {rowData.map((cellData, index) => {
                if (index === 1) {
                    const { background, color } = getChipStyles(String(cellData));
                    const chipClass = 'ChipColumn'

                    return (
                        <td key={index}>
                            <Chip
                                label={String(cellData)}
                                background={background}
                                color={color}
                                width='110px'
                                className={chipClass}
                            />
                        </td>
                    );
                }

                return <Column key={index} cellData={cellData} />;
            })}
        </tr>
    );
};

export default Row;
