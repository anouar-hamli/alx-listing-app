// components/common/Button.tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  const buttonStyle =
    variant === 'primary'
      ? 'bg-blue-500 text-white hover:bg-blue-600'
      : 'bg-gray-300 text-black hover:bg-gray-400';

  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium ${buttonStyle}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
