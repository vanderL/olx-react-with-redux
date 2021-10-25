import React from 'react';
import {Link} from 'react-router-dom';

// import { Container } from './styles';

function NotFound() {
  return (
      <div>
            <h1>Página não encontrada</h1>
            <Link to="/">Volta para a home</Link>
      </div>

  );
}

export default NotFound;