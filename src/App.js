import './global.css';
import Form from './components/Form';
import Squad from './components/Squad';
import { useState } from 'react';

const App = () => {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  const times = [
    { nome: 'Programação' },
    { nome: 'Front-End' },
    { nome: 'Data Science' },
    { nome: 'Devops' },
    { nome: 'UX e Design' },
    { nome: 'Mobile' },
    { nome: 'Inovação e Gestão' },
  ];
  return (
    <main>
      <Form
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />
      <section>
        <h2>Meu Squad:</h2>
        <Squad />
      </section>
    </main>
  );
};

export default App;
