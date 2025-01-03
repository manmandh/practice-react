import React from 'react';

interface InputFieldProps {
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  rows?: number;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type = 'text', placeholder, rows, className }) => {
  return (
    <div>
      <label className="block text-sm font-primary-500 text-gray-700">{label}</label>
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          rows={rows}
          className={`mt-1 p-3 font-primary-500 block w-full border outline-none border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black ${className}`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className={`mt-1 p-3 font-primary-500 block w-full border outline-none border-gray-300 rounded-md shadow-sm ${className}`}
        />
      )}
    </div>
  );
};

export default InputField;
