import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./component/pages/Admin";
import Login from "./component/pages/Login";
import User from "./component/pages/User";
import ViewsWrapper from "./component/ViewsWrapper";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";

const LoginPage = ViewsWrapper(Login);
const AdminPage = ViewsWrapper(Admin);
const UserPage = ViewsWrapper(User);

function App() {
  return (
    <>
      <AuthProvider>
        <DataProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </HashRouter>
        </DataProvider>
      </AuthProvider>
    </>
  );
}

export default App;
