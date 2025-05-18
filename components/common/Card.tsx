// components/common/Card.tsx
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden max-w-sm">
      <Image src={image} alt={title} width={400} height={200} className="object-cover w-full h-48" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
