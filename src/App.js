import './global.css';
import Form from './components/Form';
import Squad from './components/Squad';

const App = () => {
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
      <Form times={times.map((time) => time.nome)} />
      <section>
        <h2>Meu Squad:</h2>
        <Squad />
      </section>
    </main>
  );
};

export default App;
