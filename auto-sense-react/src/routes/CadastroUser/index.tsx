import { useState } from "react";

export default function CadastroUser(){
  // Definindo o estado inicial do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  // Função para lidar com mudanças nos inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados a uma API ou realizar outras ações
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