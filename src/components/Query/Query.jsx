import React, { useState } from 'react';

const MenuHamburguesa = () => {
  const [abierto, setAbierto] = useState(false);

  const toggleMenu = () => {
    setAbierto(!abierto);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {abierto ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>

      {abierto && (
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      )}
    </div>
  );
};

export default MenuHamburguesa;