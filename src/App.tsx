import React, { useState } from "react";
import HomePage from "./components/HomePage";
import IndustrialRelationsPage from "./components/IndustrialRelationsPage";
import HrTransformationPage from "./components/HrTransformationPage";
import ExecutiveCoachingPage from "./components/ExecutiveCoachingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Contact from "./components/Contact";
import "./index.css";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "contact":
      case "contact-us":
        return <ContactPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case "about":
      case "about-dr-krishan-singh":
        return <AboutPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case "industrial-relations":
        return <IndustrialRelationsPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case "hr-transformation":
      case "transformation":
        return <HrTransformationPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case "coaching":
      case "executive-coaching":
        return <ExecutiveCoachingPage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
      case "home":
      default:
        return <HomePage onNavigate={handleNavigate} onOpenContact={handleOpenContact} />;
    }
  };

  return (
    <div>
      {renderPage()}
      <Contact isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default App;