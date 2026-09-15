import { HashRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { slides, CONTACTS_ROUTE } from "./data/content";
import Navbar from "./components/Navbar";
import CategoryHero from "./components/CategoryHero";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import CategoryPage from "./pages/CategoryPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

function AppShell() {
  const location = useLocation();
  const showHero = location.pathname !== CONTACTS_ROUTE;

  return (
    <>
      <Navbar />
      <main>
        {showHero && <CategoryHero />}
        <Routes>
          {slides.map((slide) => (
            <Route key={slide.key} path={slide.route} element={<CategoryPage data={slide} />} />
          ))}
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path={CONTACTS_ROUTE} element={<ContactsPage />} />
          <Route path="/" element={<Navigate to={slides[0].route} replace />} />
          <Route path="*" element={<Navigate to={slides[0].route} replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation} strict>
          <AppShell />
        </LazyMotion>
      </MotionConfig>
    </HashRouter>
  );
}
