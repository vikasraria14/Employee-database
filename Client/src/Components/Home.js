import EmployeeTable from "./EmployeeTable";
import Pagination from "./Pagination";
import Search from "./Search";

const Home = () => {
    return (
        <div className="home">
            <h1>The Employee Database</h1>
            <Search />
            <EmployeeTable />
            <Pagination />

        </div>
    )
}
export default Home;