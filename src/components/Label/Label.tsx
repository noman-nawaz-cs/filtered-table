import './Label.scss';

export interface LabelProps {
    label: string;
}

const Label: React.FC<LabelProps> = ({ label }) => {
    return <label className="Label">{label}</label>;
};

export default Label;