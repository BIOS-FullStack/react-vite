import './Button.css';

export const Button = ({ texto, label }) => {
	return <button>{texto || label}</button>;
};
