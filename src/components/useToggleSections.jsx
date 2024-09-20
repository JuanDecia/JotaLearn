import { useState, useEffect } from 'react';

const UseToggleSections = (closeSidebar) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const closeAllSections = () => {
    setOpenSections({});
  };

  const handleClickOutside = (event) => {
    if (
      event.target.closest(".aside-navigation") === null &&
      event.target.closest(".menu-icon-container") === null &&
      event.target.closest(".indice-principal") === null &&
      event.target.closest(".subindice") === null
    ) {
      closeSidebar(); // closeSidebar se llama correctamente aquí
    }
  };

  useEffect(() => {
    // Crear una función de manejo que incluya closeSidebar
    const handleClick = (event) => handleClickOutside(event);

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [closeSidebar]); // Asegurarse de pasar closeSidebar como dependencia

  return { openSections, toggleSection, closeAllSections };
};

export default UseToggleSections;
