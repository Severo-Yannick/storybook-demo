import { useState, ChangeEvent, FormEvent } from 'react';
import './form.css';

interface FormData {
  username: string;
  password: string;
}

export const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = (): boolean => {
    return Boolean(formData.password && formData.username);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateForm() && console.log('Form submitted!', formData);
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          aria-label="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          aria-label="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={!validateForm()}>Submit</button>
    </form>
  );
};
