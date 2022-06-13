import Navbar from "../../components/navbar/Navbar.jsx";
import BodyE from "../../components/bodyE/BodyE";
import withAuth from "../../components/private/PrivateRoot";


function New() {

    return(
        <div className="App">
            <Navbar/>
            <BodyE/>
        </div>
    )
}
export default withAuth(New)