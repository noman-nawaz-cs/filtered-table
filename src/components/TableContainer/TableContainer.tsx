import FilterBar from "../FilterNavigation/FilterBar";
import TableLayout from "../TableLayout/TableLayout";
import data from "../../data/apiData/data";

// export interface TableContainerProps {
//     label: string;
// }

const TableContainer: React.FC = () => {
    return (
        <>
            <FilterBar/>
            <TableLayout/>
        </>
    )
};

export default TableContainer;