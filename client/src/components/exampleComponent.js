/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/endpoint') // Altere para o seu endpoint
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro:', error);
        setError('Erro ao buscar dados do servidor');
      });
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {data ? (
        <div>
          <h1>Dados do servidor</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default ExampleComponent;*/
