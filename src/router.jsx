// import { lazy } from "react";
// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./Layout";
// import ProtectedRoute from "./ProtectedRoute";
// import AuthWrapper from "./AuthWrapper";

// // Пути
// export const ROUTER_PATHS = {
//   ROOT: "/",
//   HOME: "/home",
//   ABOUT: "/about-us",
//   CAREERS: "/careers",
//   SECURITY: "/security",
//   PROFILE: "/profile",
//   SETTINGS: "/settings",
//   INDIVIDUALS: "/individuals",
//   BUSINESS: "/business",
//   PRIVACY: "/privacy-policy",
//   TERMS: "/terms",
// };

// // Lazy страницы
// const AuthPage = lazy(() => import("./pages/AuthPage"));
// const HomePage = lazy(() => import("./pages/HomePage"));
// const AboutUs = lazy(() => import("./pages/AboutUsPage"));
// const CareersPage = lazy(() => import("./pages/CareersPage"));
// const SecurityPage = lazy(() => import("./pages/SecurityPage"));
// const ProfilePage = lazy(() => import("./pages/ProfilePage"));
// const SettingsPage = lazy(() => import("./pages/SettingsPage"));
// const Individuals = lazy(() => import("./pages/Individuals"));
// const Business = lazy(() => import("./pages/Business"));
// const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
// const TermsOfService = lazy(() => import("./pages/TermsOfService"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// // Router
// export const router = createBrowserRouter([
//   {
//     element: (
//       <AuthWrapper>
//         <Layout />
//       </AuthWrapper>
//     ),
//     children: [
//       { index: true, element: <AuthPage /> },

//       // Приватные
//       {
//         path: ROUTER_PATHS.HOME,
//         element: (
//           <ProtectedRoute>
//             <HomePage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: ROUTER_PATHS.CAREERS,
//         element: (
//           <ProtectedRoute>
//             <CareersPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: ROUTER_PATHS.SECURITY,
//         element: (
//           <ProtectedRoute>
//             <SecurityPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: ROUTER_PATHS.ABOUT,
//         element: (
//           <ProtectedRoute>
//             <AboutUs />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: ROUTER_PATHS.PROFILE,
//         element: (
//           <ProtectedRoute>
//             <ProfilePage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: ROUTER_PATHS.SETTINGS,
//         element: (
//           <ProtectedRoute>
//             <SettingsPage />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: ROUTER_PATHS.INDIVIDUALS,
//         element: (
//           <ProtectedRoute>
//             <Individuals />
//           </ProtectedRoute>
//         ),
//       },
//       {
//         path: ROUTER_PATHS.BUSINESS,
//         element: (
//           <ProtectedRoute>
//             <Business />
//           </ProtectedRoute>
//         ),
//       },

//       // Публичные
//       { path: ROUTER_PATHS.PRIVACY, element: <PrivacyPolicy /> },
//       { path: ROUTER_PATHS.TERMS, element: <TermsOfService /> },
//       { path: "*", element: <NotFound /> },
//     ],
//   },
// ]);
