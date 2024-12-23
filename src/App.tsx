import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/globals";
import Repositories from "./pages/repositories";
import { ChildrenProps } from "./types";
import SignIn from "./pages/auth/sign-in";

const LayoutRoute = ({ children }: ChildrenProps) => {
  return <Layout>{children}</Layout>;
};

const AuthLayoutRoute = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with main Layout */}
        <Route
          path="/repositories"
          element={
            <LayoutRoute>
              <Repositories />
            </LayoutRoute>
          }
        />

        {/* Routes with AuthLayout */}
        <Route
          path="/sign-in"
          element={
            <AuthLayoutRoute>
              <SignIn />
            </AuthLayoutRoute>
          }
        />

        {/* Redirect root to repositories */}
        <Route path="/" element={<Navigate to="/repositories" replace />} />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/repositories" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
