// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./index.css";
// import Lenis from "@studio-freight/lenis";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import AboutUs from "./pages/AboutUsPage";
// import CareersPage from "./pages/CareersPage";
// import NotFound from "./pages/NotFound";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import TermsOfService from "./pages/TermsOfService";
// import SecurityPage from "./pages/SecurityPage";
// import AuthPage from "./pages/AuthPage";

// function App() {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<AuthPage />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/careers" element={<CareersPage />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/security" element={<SecurityPage />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/terms" element={<TermsOfService />} />
//         <Route path="/auth" element={<AuthPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import AboutUs from "./pages/AboutUsPage";
import CareersPage from "./pages/CareersPage";
import SecurityPage from "./pages/SecurityPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
const ProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to="/" replace />;
  return children;
};
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/";
  return (
    <>
      {!hideHeaderFooter && <Header />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

function App() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <Router>
      <Layout>
        <Routes>
          {/* main with auth */}
          <Route
            path="/"
            element={!user ? <AuthPage /> : <Navigate to="/home" replace />}
          />

          {/* private */}
          <Route
            path="/home"
            element={
              <ProtectedRoute user={user}>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/careers"
            element={
              <ProtectedRoute user={user}>
                <CareersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/security"
            element={
              <ProtectedRoute user={user}>
                <SecurityPage />
              </ProtectedRoute>
            }
          />

          {/* public */}
          <Route
            path="/about-us"
            element={
              <ProtectedRoute user={user}>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute user={user}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute user={user}>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
