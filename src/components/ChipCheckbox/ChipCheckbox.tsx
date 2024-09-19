import './ChipCheckbox.scss';
import Chip from '../Chip/Chip';
import Checkbox from '../Checkbox/Checkbox';
import { ChipProps } from '../Chip/Chip';

interface ChipCheckboxProps extends ChipProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

const ChipCheckbox: React.FC<ChipCheckboxProps> = ({ label, background, color, width, onChange, checked }) => {
    return (
        <div className="ChipCheckbox">
            <Checkbox onChange={onChange} checked = {checked} />
            <Chip label={label} background={background} color={color} width={width} />
        </div>
    );
};

export default ChipCheckbox;