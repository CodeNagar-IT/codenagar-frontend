// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leadership from "./pages/Leadership";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Whitepapers from "./pages/Whitepapers";
import Documentation from "./pages/Documentation";
import Webinars from "./pages/Webinars";
import Portfolio from "./pages/Portfolio";
import AdminPortfolio from "./pages/admin/AdminPortfolio";
// Service Pages
import Services from "./pages/services/Services";
import WebDev from "./pages/services/WebDev";
import AppDev from "./pages/services/AppDev";
import MLIntegration from "./pages/services/MLIntegration";
import AISolutions from "./pages/services/AISolutions";
import FrontendDev from "./pages/services/FrontendDev";
import BackendDev from "./pages/services/BackendDev";
import FullStack from "./pages/services/FullStack";
import CloudSolutions from "./pages/services/CloudSolutions";
import DevOps from "./pages/services/DevOps";
import UIDesign from "./pages/services/UIDesign";
import Ecommerce from "./pages/services/Ecommerce";
import ServiceInquiry from "./pages/ServiceInquiry";
import AdminServiceInquiries from "./pages/admin/AdminServiceInquiries";
import DatabaseManagement from "./pages/services/DatabaseManagement";
import CyberSecurity from "./pages/services/CyberSecurity";
import CrossPlatform from "./pages/services/CrossPlatform";
import ComputerVision from "./pages/services/ComputerVision";
import AndroidDev from "./pages/services/AndroidDev";
import NLP from "./pages/services/NLP";
import FYPProjects from "./pages/FYPProjects";
import FYPInquiry from "./pages/FYPInquiry";
import AdminFYP from "./pages/admin/AdminFYP";
// Course Pages
import Courses from "./pages/courses/Courses";
import CourseDetails from "./pages/courses/CourseDetails";
import CourseApply from "./pages/courses/CourseApply";

// Store Pages
import Store from "./pages/store/Store";
import ProductDetails from "./pages/store/ProductDetails";
import Cart from "./pages/store/Cart";
import Checkout from "./pages/store/Checkout";

// User Pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminApplications from "./pages/admin/AdminApplications";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminCareers from "./pages/admin/AdminCareers";
import AdminEvents from "./pages/admin/AdminEvents";
import AdminJobs from "./pages/admin/AdminJobs";
import IOSDev from "./pages/services/iOSDev";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
            <Navbar />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/blog" element={<Blog />} />
<Route path="/case-studies" element={<CaseStudies />} />
<Route path="/whitepapers" element={<Whitepapers />} />
<Route path="/docs" element={<Documentation />} />
<Route path="/webinars" element={<Webinars />} />
<Route path="/portfolio" element={<Portfolio />} />
<Route path="/admin/portfolio" element={<AdminRoute><AdminPortfolio /></AdminRoute>} />
              {/* Service Routes */}
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDev />} />
              <Route path="/services/app-development" element={<AppDev />} />
              <Route path="/services/ml-integration" element={<MLIntegration />} />
              <Route path="/services/ai-solutions" element={<AISolutions />} />
              <Route path="/services/frontend-development" element={<FrontendDev />} />
              <Route path="/services/backend-development" element={<BackendDev />} />
              <Route path="/services/full-stack-development" element={<FullStack />} />
              <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
              <Route path="/services/devops" element={<DevOps />} />
              <Route path="/services/ui-ux-design" element={<UIDesign />} />
              <Route path="/services/ecommerce-development" element={<Ecommerce />} />
              <Route path="/services/:serviceId/inquiry" element={<ServiceInquiry />} />
<Route path="/admin/service-inquiries" element={<AdminRoute><AdminServiceInquiries /></AdminRoute>} />
<Route path="/services/database-management" element={<DatabaseManagement />} />
<Route path="/services/android-development" element={<AndroidDev />} />
<Route path="/services/computer-vision" element={<ComputerVision />} />
<Route path="/services/cross-platform" element={<CrossPlatform />} />
<Route path="/services/cybersecurity" element={<CyberSecurity />} />
<Route path="/services/nlp" element={<NLP />} />
<Route path="/services/ios-development" element={<IOSDev />} />
<Route path="/fyp" element={<FYPProjects />} />
<Route path="/fyp/inquiry/:slug" element={<FYPInquiry />} />
<Route path="/admin/fyp" element={<AdminFYP />} />

              {/* Course Routes */}
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:slug" element={<CourseDetails />} />
              <Route path="/courses/:slug/apply" element={<CourseApply />} />
              
              {/* Store Routes */}
              <Route path="/store" element={<Store />} />
              <Route path="/store/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              
              {/* User Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/products" element={<AdminRoute><AdminProducts /></AdminRoute>} />
              <Route path="/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
              <Route path="/admin/applications" element={<AdminRoute><AdminApplications /></AdminRoute>} />
              <Route path="/admin/messages" element={<AdminRoute><AdminMessages /></AdminRoute>} />
              <Route path="/admin/careers" element={<AdminRoute><AdminCareers /></AdminRoute>} />
              <Route path="/admin/events" element={<AdminRoute><AdminEvents /></AdminRoute>} />
              <Route path="/admin/jobs" element={<AdminRoute><AdminJobs /></AdminRoute>} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;