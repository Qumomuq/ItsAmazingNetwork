import Navbar from "../../components/navbar/Navbar.jsx";
import BodyE from "../../components/bodyE/BodyE";
import withAuth from "../../components/private/PrivateRoot";


function IndexPayments() {

    return(
        <div className="App">
            <Navbar/>
            <BodyE/>
        </div>
    )
}
export default withAuth(IndexPayments)