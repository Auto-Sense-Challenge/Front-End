import { useState } from "react";

export default function Login(){


  // Define os dados iniciais do formulario
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  // Aqui não entendi muito bem ainda, mas meio q lida com as mudanças dos dados
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value) : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="main-user-cadastro">
      <h2>Cadastro</h2>
      <p>Preencha seus dados para cadastrar</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label-info">E-mail</label>
          <input type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite aqui seu cpf - Digite apenas números"
          required
          />
        </div>
        <div>
          <label className="label-info">Senha</label>
          <input type="password" 
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite aqui sua senha"
          required
          />
        </div>
        <button type="submit">Logar</button>
      </form>
    </main>
  );
}