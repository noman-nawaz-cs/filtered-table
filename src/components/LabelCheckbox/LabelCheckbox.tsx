import './LabelCheckbox.scss';
import Label from '../Label/Label';
import Checkbox from '../Checkbox/Checkbox';
import { LabelProps } from '../Label/Label';

interface LabelCheckboxProps extends LabelProps {
    className?: string; 
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add this line
}

const LabelCheckbox: React.FC<LabelCheckboxProps> = ({ label, className, checked, onChange }) => {
    return (
        <div className={`LabelCheckbox ${className}`}>
            <Checkbox checked={checked} onChange={onChange} /> {/* Pass onChange */}
            <Label label={label} />
        </div>
    );
};

export default LabelCheckbox;
