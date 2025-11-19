import { Suspense, lazy } from "react";

// Lazy imports (code-splitting)
const Navbar = lazy(() => import("../Navbar/Navbar"));
const AdminStats = lazy(() => import("./AdminState/AdminStats"));
const Slider = lazy(() => import("./Slider/Slider"));
const Footer = lazy(() => import("../Footer/Footer"));

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div>
        {/* Navbar */}
        <Suspense fallback={<div className="p-4">Loading navbar...</div>}>
          <Navbar />
        </Suspense>

        {/* Main Content */}
        <main>
          <Suspense fallback={<div className="p-4">Loading stats...</div>}>
            <AdminStats />
          </Suspense>

          <Suspense fallback={<div className="p-4">Loading slider...</div>}>
            <Slider />
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={<div className="p-4">Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default Dashboard;
