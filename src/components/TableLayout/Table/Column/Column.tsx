import React from 'react';

interface ColumnProps {
    cellData: string | number;
}

const Column: React.FC<ColumnProps> = ({ cellData }) => {
    return <td>{cellData}</td>;
};

export default Column;
