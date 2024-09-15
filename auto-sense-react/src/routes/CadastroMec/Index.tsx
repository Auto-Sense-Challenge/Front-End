import { useState } from "react";

export default function CadastroMec(){

  const [formData, setFormData] = useState({
    cpf: '',
    user: '',
    email: '',
    senha: '',
    telefone: '',
    endereco: '',
    descricao: '', 
  });

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
    <main>
      <h2>Cadastro</h2>
      <p>Preencha seus dados para cadastrar</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>CPF - Digite apenas números</label>
          <input type="number" //Tira as setinhas do tipo number Luiz
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          placeholder="Digite aqui seu cpf"
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>Nome de Usuário</label>
          <input type="text" 
          name="user"
          value={formData.user}
          onChange={handleChange}
          placeholder="Digite aqui algum nome de usuário"
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>E-mail</label>
          <input type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite aqui seu email de contato"
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>Senha</label>
          <input type="password" 
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite aqui sua senha"
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>Telefone</label>
          <input type="number" 
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="XX XXXXXXXXX"
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>Endereço</label>
          <input type="text" 
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          placeholder="Digite aqui seu Endereço com número e complemento"
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <div>
          <label>Descrição</label>
          <input type="text" 
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Digite aqui uma descrição sobre sua Oficina"
          required
          />
          <label>*Campo Obrigatório</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}