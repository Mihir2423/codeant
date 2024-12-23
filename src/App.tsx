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
        {/* Redirect root to sign-in */}
        <Route path="/" element={<Navigate to="/sign-in" replace />} />

        {/* Auth routes first */}
        <Route
          path="/sign-in"
          element={
            <AuthLayoutRoute>
              <SignIn />
            </AuthLayoutRoute>
          }
        />

        {/* Routes with main Layout */}
        <Route
          path="/repositories"
          element={
            <LayoutRoute>
              <Repositories />
            </LayoutRoute>
          }
        />

        {/* Catch all route - redirect to sign-in */}
        <Route path="*" element={<Navigate to="/sign-in" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
