import { SignUp } from "./components/auth-components/SignUp";
import { LogInPage } from "./pages/LogInPage";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "../src/pages/Dashboard";
import { ForgotPassword } from "../src/pages/ForgotPassword";
import { PrivateRoute } from "./components/auth-components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogInPage} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
