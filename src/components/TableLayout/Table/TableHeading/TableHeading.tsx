import React from 'react';
import './TableHeading.scss'
import angleDown from '../../../../assets/icons/angle-down.png'

interface HeadingProps {
    title: string;
}

const TableHeading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <div className='TableHeading'>
            <div className='Title'>{title}</div>
            <img src={angleDown} alt="Arrow Down" />
        </div>
    )
};

export default TableHeading;
