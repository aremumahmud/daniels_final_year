import Diagnostics from "../components/diag";
import DiagnosticList from "../components/diagnistic_list";
import Header from "../components/header";
import Patients from "../components/patients";
import Profile from "../components/profile";
import "../styles/home.css";



function Home() {
  return (
    <div className="homepage">
          <Header />
          <div className="sections">
              <div className="patients">
                  <Patients />
              </div>
              <div className="diagnostics">
                  <Diagnostics />
                  <br />
                  <DiagnosticList />
              </div>
              <div className="profile">
                  <Profile />
              </div>
          </div>
    </div>
  );
}

export default Home;
