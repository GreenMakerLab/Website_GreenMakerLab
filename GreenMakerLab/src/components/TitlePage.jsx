import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Função usada para mudar o titulo cada vez que o usuário viaja para um novo tópico do header
function UsePageTitle() {
  const location = useLocation();

  useEffect(() => {

    switch (location.pathname) {
      case '/':
        document.title = 'Home - Green Maker Lab';
        break;
      case '/publications':
        document.title = 'Publications - Green Maker Lab';
        break;
      case '/team':
        document.title = 'Team - Green Maker Lab';
        break;
      case '/about-us':
        document.title = 'About Us - Green Maker Lab';
        break;
      case '/tableperiodic':
        document.title = 'Table Periodic - Green Maker Lab';
        break;
      default:
        document.title = 'Green Maker Lab';
    }
  }, [location]); 
}

export default UsePageTitle;
