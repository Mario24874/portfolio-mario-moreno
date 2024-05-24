import React, { useState } from 'react';
import axios from 'axios';
import letraIcon from '../images/letra.png';
import './Form.css';
import '../App.css';

const Form = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleForm = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFieldClick = (e) => {
    e.stopPropagation(); // Evita que el evento se propague y colapse la sección al hacer clic en los campos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      // Limpia los campos del formulario después del envío
      setFormData({ name: '', email: '', message: '' });
      alert('Mensaje enviado correctamente');
    } catch (error) {
      console.error(error);
      alert('Error al enviar el mensaje');
    }
  };

  return (
    <div className={`container ${isExpanded ? 'expanded' : ''}`} onClick={toggleForm}>
      <div className="container-header">
        <img src={letraIcon} alt="Contact" /> Contact me
      </div>
      {isExpanded && (
        <div className="form-container" onClick={handleFieldClick}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              className="form-input"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              className="form-textarea"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button className="form-button" type="submit">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;