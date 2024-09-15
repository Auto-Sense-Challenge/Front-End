import { useState } from "react";

export default function CadastroUser(){


  // Define os dados iniciais do formulario
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    idade: 0 
  });

  // Aqui não entendi muito bem ainda, mas meio q lida com as mudanças dos dados
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) : value
    });
  };

  //! Aqui lida com o formulario e tals quando
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();//* Evita q a página reinicie
    //? Aqui pode colocar mais coisas tipo API ou abrir um modal(Vai ser o que vou fazer)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input 
          type="text" 
          name="nome" 
          value={formData.nome} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label>Senha:</label>
        <input 
          type="password" 
          name="senha" 
          value={formData.senha} 
          onChange={handleChange} 
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}