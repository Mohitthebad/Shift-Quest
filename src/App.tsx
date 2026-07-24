import React, { useState } from "react";
import HomePage from "./components/HomePage";
import IndustrialRelationsPage from "./components/IndustrialRelationsPage";
import HrTransformationPage from "./components/HrTransformationPage";
import ExecutiveCoachingPage from "./components/ExecutiveCoachingPage";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import "./index.css";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleNavigate = (page: string) => {
    if (page === "contact") {
      setIsContactOpen(true);
      return;
    }
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
      case "about":
      case "about-dr-krishan-singh":
        return <AboutPage onNavigate={handleNavigate} />;
      case "industrial-relations":
        return <IndustrialRelationsPage onNavigate={handleNavigate} />;
      case "hr-transformation":
      case "transformation":
        return <HrTransformationPage onNavigate={handleNavigate} />;
      case "coaching":
      case "executive-coaching":
        return <ExecutiveCoachingPage onNavigate={handleNavigate} />;
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