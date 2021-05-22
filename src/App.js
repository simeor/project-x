import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/LogIn";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "../src/pages/Dashboard";
import { ForgotPassword } from "../src/pages/ForgotPassword";
import { PrivateRoute } from "./components/PrivateRoute";
const App = () => {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;
