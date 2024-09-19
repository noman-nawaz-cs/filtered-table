import './Chip.scss';

export interface ChipProps {
    label: string;
    background: string;
    color: string;
    width: string;
    className?: string; 
}

const Chip: React.FC<ChipProps> = ({ label, background, color, width }) => {
    return (
        <label className="Chip" style={{ backgroundColor: background, color: color, width: width}}>
            {label}
        </label>
    );
};

export default Chip;
