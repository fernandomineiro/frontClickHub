import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [mask, setMask] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf_cnpj: '',
    companyName: '',
    password: '',
    repeat_password: '',
    address: '',
    role: ''
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.repeat_password) newErrors.repeat_password = 'Passwords must match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data:', formData);
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
    }
  };

  return (
    <div className="container mt-5">
      <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: 'none' }}>
        <div className="card-header text-center" style={{ backgroundColor: 'transparent' }}>
          <h2>Cadastro de Usuário</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-4">

              <div className="form-group">
                  <label>Tipo</label>
                  <select
                    className="form-control"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option selected value="afiliado">Afiliado</option>
                    <option value="fornecedor">Fornecedor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>

              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>CPF/CNPJ</label>
                  <input
                    type="text"
                    
                    className="form-control"
                    name="cpf_cnpj"
                    value={formData.cpf_cnpj}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Nome da empresa</label>
                  <input
                    type="text"
                    className="form-control"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
              </div>

              <div className="col-md-4">
              <div className="form-group">
                  <label>Telefone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Enredeço</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Repeat Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="repeat_password"
                    value={formData.repeat_password}
                    onChange={handleChange}
                  />
                  {errors.repeat_password && <div className="text-danger">{errors.repeat_password}</div>}
                </div>

               
           


              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register


             {/* <Link to="/login">
                  <div className="px-0" style={{border: 'none' ,textAlign: 'center', color: 'white',fontSize: '16px', fontWeight: '700', top: '10px', position: 'relative'}}>
                    Voltar
                  </div>
                  </Link> */}