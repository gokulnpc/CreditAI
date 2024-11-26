// // import React from "react";
// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import Features from "./components/Features";
// // import Solutions from "./components/Solutions";
// // import Security from "./components/Security";
// // import About from "./components/About";
// // import Blog from "./components/Blog";
// // import Resources from "./components/Resources";
// // import DemoSignup from "./components/Demo/DemoSignup";
// // import DemoFeatures from "./components/Demo/DemoFeatures";
// // import DashboardLayout from "./components/Dashboard/DashboardLayout";
// // import DashboardOverview from "./components/Dashboard/DashboardOverview";
// // import Documents from "./components/Dashboard/Documents";
// // import Analytics from "./components/Analytics/Analytics";
// // import Chat from "./components/Chat/Chat";
// // import Settings from "./components/Settings/Settings";

// // const App = () => {
// //   // Simple route handling
// //   const path = window.location.pathname;

// //   // After successful signup, redirect to documents page
// //   if (path === "/demo") {
// //     window.location.href = "/dashboard/documents";
// //     return null;
// //   }

// //   if (path === "/dashboard") {
// //     return (
// //       <DashboardLayout>
// //         <DashboardOverview />
// //       </DashboardLayout>
// //     );
// //   }

// //   if (path === "/dashboard/documents") {
// //     return (
// //       <DashboardLayout>
// //         <Documents />
// //       </DashboardLayout>
// //     );
// //   }

// //   if (path === "/dashboard/analytics") {
// //     return (
// //       <DashboardLayout>
// //         <Analytics />
// //       </DashboardLayout>
// //     );
// //   }

// //   if (path === "/dashboard/chat") {
// //     return (
// //       <DashboardLayout>
// //         <div className="space-y-6">
// //           <div>
// //             <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
// //             <p className="text-gray-600">
// //               Get instant answers and insights about your data
// //             </p>
// //           </div>
// //           <Chat />
// //         </div>
// //       </DashboardLayout>
// //     );
// //   }

// //   if (path === "/dashboard/settings") {
// //     return (
// //       <DashboardLayout>
// //         <Settings />
// //       </DashboardLayout>
// //     );
// //   }

// //   if (path === "/demo") {
// //     return (
// //       <>
// //         <DemoSignup />
// //         <DemoFeatures />
// //       </>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-white">
// //       <Navbar />
// //       <Hero />
// //       <Features />
// //       <Solutions />
// //       <Security />
// //       <About />
// //       <Blog />
// //       <Resources />
// //     </div>
// //   );
// // };

// // export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Solutions from "./components/Solutions";
// import Security from "./components/Security";
// import About from "./components/About";
// import Blog from "./components/Blog";
// import Resources from "./components/Resources";
// import DemoSignup from "./components/Demo/DemoSignup";
// import DemoFeatures from "./components/Demo/DemoFeatures";
// import DashboardLayout from "./components/Dashboard/DashboardLayout";
// import DashboardOverview from "./components/Dashboard/DashboardOverview";
// import Documents from "./components/Dashboard/Documents";
// import Analytics from "./components/Analytics/Analytics";
// import Chat from "./components/Chat/Chat";
// import Settings from "./components/Settings/Settings";

// const App = () => {
//   // Simple route handling
//   const path = window.location.pathname;

//   // Redirect handling
//   const redirectToDocuments = () => {
//     window.location.href = "/dashboard/documents";
//     return null;
//   };

//   // Route matching and rendering
//   const renderRoute = () => {
//     switch (path) {
//       // Home Page
//       case "/":
//         return (
//           <div className="min-h-screen bg-white">
//             <Navbar />
//             <Hero />
//             <Features />
//             <Solutions />
//             <Security />
//             <About />
//             <Blog />
//             <Resources />
//           </div>
//         );

//       // Demo Routes
//       case "/demo":
//         return redirectToDocuments();

//       // Dashboard Routes
//       case "/dashboard":
//         return (
//           <DashboardLayout>
//             <DashboardOverview />
//           </DashboardLayout>
//         );

//       case "/dashboard/documents":
//         return (
//           <DashboardLayout>
//             <Documents />
//           </DashboardLayout>
//         );

//       case "/dashboard/analytics":
//         return (
//           <DashboardLayout>
//             <Analytics />
//           </DashboardLayout>
//         );

//       case "/dashboard/chat":
//         return (
//           <DashboardLayout>
//             <div className="space-y-6">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900">
//                   AI Assistant
//                 </h1>
//                 <p className="text-gray-600">
//                   Get instant answers and insights about your data
//                 </p>
//               </div>
//               <Chat />
//             </div>
//           </DashboardLayout>
//         );

//       case "/dashboard/settings":
//         return (
//           <DashboardLayout>
//             <Settings />
//           </DashboardLayout>
//         );

//       // Additional Routes
//       case "/features":
//         return (
//           <div>
//             <Navbar />
//             <Features />
//           </div>
//         );

//       case "/solutions":
//         return (
//           <div>
//             <Navbar />
//             <Solutions />
//           </div>
//         );

//       case "/security":
//         return (
//           <div>
//             <Navbar />
//             <Security />
//           </div>
//         );

//       case "/about":
//         return (
//           <div>
//             <Navbar />
//             <About />
//           </div>
//         );

//       case "/blog":
//         return (
//           <div>
//             <Navbar />
//             <Blog />
//           </div>
//         );

//       case "/resources":
//         return (
//           <div>
//             <Navbar />
//             <Resources />
//           </div>
//         );

//       // 404 Not Found
//       default:
//         return (
//           <div className="min-h-screen flex items-center justify-center">
//             <div className="text-center">
//               <h1 className="text-4xl font-bold text-gray-900 mb-4">
//                 404 - Page Not Found
//               </h1>
//               <p className="text-gray-600 mb-8">
//                 The page you are looking for does not exist.
//               </p>
//               <a
//                 href="/"
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Return to Home
//               </a>
//             </div>
//           </div>
//         );
//     }
//   };

//   return renderRoute();
// };

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Landing Page Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
import Security from "./components/Security";
import About from "./components/About";
import Blog from "./components/Blog";
import Resources from "./components/Resources";

// Demo Components
import DemoSignup from "./components/Demo/DemoSignup";
import DemoFeatures from "./components/Demo/DemoFeatures";

// Dashboard Components
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import DashboardOverview from "./components/Dashboard/DashboardOverview";
import Documents from "./components/Dashboard/Documents";
import Analytics from "./components/Analytics/Analytics";
import Chat from "./components/Chat/Chat";
import Settings from "./components/Settings/Settings";

// Layout Components
const LandingPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="min-h-screen bg-white">
    <Navbar />
    {children}
  </div>
);

const DashboardRouteLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <DashboardLayout>{children}</DashboardLayout>;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Routes */}
        <Route
          path="/"
          element={
            <LandingPageLayout>
              <Hero />
              <Features />
              <Solutions />
              <Security />
              <About />
              <Blog />
              <Resources />
            </LandingPageLayout>
          }
        />

        {/* Individual Section Routes */}
        <Route
          path="/features"
          element={
            <LandingPageLayout>
              <Features />
            </LandingPageLayout>
          }
        />
        <Route
          path="/solutions"
          element={
            <LandingPageLayout>
              <Solutions />
            </LandingPageLayout>
          }
        />
        <Route
          path="/security"
          element={
            <LandingPageLayout>
              <Security />
            </LandingPageLayout>
          }
        />
        <Route
          path="/about"
          element={
            <LandingPageLayout>
              <About />
            </LandingPageLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <LandingPageLayout>
              <Blog />
            </LandingPageLayout>
          }
        />
        <Route
          path="/resources"
          element={
            <LandingPageLayout>
              <Resources />
            </LandingPageLayout>
          }
        />

        {/* Demo Routes */}
        <Route
          path="/demo"
          element={
            <>
              <DemoSignup />
              <DemoFeatures />
            </>
          }
        />

        {/* Redirect Demo to Dashboard */}
        <Route
          path="/demo/redirect"
          element={<Navigate to="/dashboard/documents" replace />}
        />

        {/* Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <DashboardRouteLayout>
              <DashboardOverview />
            </DashboardRouteLayout>
          }
        />
        <Route
          path="/dashboard/documents"
          element={
            <DashboardRouteLayout>
              <Documents />
            </DashboardRouteLayout>
          }
        />
        <Route
          path="/dashboard/analytics"
          element={
            <DashboardRouteLayout>
              <Analytics />
            </DashboardRouteLayout>
          }
        />
        <Route
          path="/dashboard/chat"
          element={
            <DashboardRouteLayout>
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    AI Assistant
                  </h1>
                  <p className="text-gray-600">
                    Get instant answers and insights about your data
                  </p>
                </div>
                <Chat />
              </div>
            </DashboardRouteLayout>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <DashboardRouteLayout>
              <Settings />
            </DashboardRouteLayout>
          }
        />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  404 - Page Not Found
                </h1>
                <p className="text-gray-600 mb-8">
                  The page you are looking for does not exist.
                </p>
                <a
                  href="/"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Return to Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
