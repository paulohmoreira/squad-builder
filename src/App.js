import './global.css';
import Form from './components/Form';

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
    <div>
      <Form times={times.map((time) => time.nome)} />
    </div>
  );
};

export default App;
