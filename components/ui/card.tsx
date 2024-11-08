import React from 'react';
import { Button } from './button';
import { Handle, Position } from 'react-flow-renderer';

interface CardData {
  label: string;
  description: string;
  textCta: string;
  tags: string;
}

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="card p-6 w-80 h-60 border rounded-md shadow-md bg-white">
      <div className="flex flex-row justify-between">
        <h3 className="text-xl text-black font-medium">{data.label}</h3>
        <button className="flex flex-col items-center space-y-1 p-2 bg-transparent hover:bg-gray-200 rounded-md">
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
        </button>
      </div>
      <p className="text-md text-Grey py-4">{data.description}</p>
      <p className="mb-4 text-primaryBlue font-bold text-xs bg-lightBlue rounded-l-full rounded-r-full px-2 py-1 inline-block">
        {data.tags}
      </p>

      {/* Handles for edges */}
      <Handle type="source" position={Position.Right} id="a" />
      <Handle type="target" position={Position.Left} id="b" />

      <Button variant="outline">{data.textCta}</Button>
    </div>
  );
};

export default Card;
