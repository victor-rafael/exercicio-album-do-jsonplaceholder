import { useNavigate } from 'react-router-dom';

export const Button = () => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  }
  return (
    <button onClick={handleBackButton}>Voltar</button>
  );
}