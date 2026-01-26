"use client";

import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

export default function FileUpload({ onFileSelect }: {onFileSelect?: (file: File | null) => void;}) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    onFileSelect?.(null);
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); handleFileChange(e.dataTransfer.files?.[0]);}}
      className="flex flex-col justify-center items-center w-full py-10 border-2 border-dashed border-primary/50 bg-primary/5 rounded-lg cursor-pointer hover:border-primary transition-colors"
    >
      <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={(e) => handleFileChange(e.target.files?.[0])}/>

      {!file ? (
        <div className="text-center">
          <FiUploadCloud className="text-primary mx-auto mb-3" size={36} />
          <p className="text-sm font-semibold text-dark">Drag and drop your receipt here</p>
          <p className="text-xs text-gray-500 mt-1">or click to browse from your device</p>
          <p className="text-xs text-gray-400 mt-2">PNG, JPG, GIF up to 10MB</p>
        </div>
      ) : (
        <div className="text-center">
          <FiImage className="text-primary mx-auto mb-4" size={40} />
          <p className="text-base font-semibold text-dark">{file.name}</p>
          <p className="text-sm text-gray-500 mt-1">
            {(file.size / 1024).toFixed(1)} KB
          </p>
          <button onClick={removeFile} className="mt-4 inline-flex gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors font-medium">
            <FiTrash2 size={18}/> Remove File
          </button>
        </div>
      )}
    </div>
  );
}
