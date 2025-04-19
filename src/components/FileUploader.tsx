
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploaderProps {
  onFileUpload: (files: File[]) => void;
  uploadedFiles: File[];
}

export const FileUploader: React.FC<FileUploaderProps> = ({ 
  onFileUpload, 
  uploadedFiles 
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const pdfFiles = acceptedFiles.filter(file => file.type === 'application/pdf');
    onFileUpload(pdfFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: true
  });

  const removeFile = (fileToRemove: File) => {
    onFileUpload(uploadedFiles.filter(file => file !== fileToRemove));
  };

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={cn(
          'p-8 rounded-2xl text-center cursor-pointer transition-colors duration-200',
          'backdrop-blur-sm border border-white/10 bg-black/20',
          'hover:border-[#00ffd5]/50',
          isDragActive 
            ? 'border-[#00ffd5] bg-[#00ffd5]/10' 
            : ''
        )}
      >
        <input {...getInputProps()} />
        <p className="text-gray-300">
          {isDragActive 
            ? 'Drop your PDF files here' 
            : 'Drag & drop PDF files, or click to select'}
        </p>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          {uploadedFiles.map((file) => (
            <div 
              key={file.name} 
              className="flex items-center justify-between rounded-2xl p-4 backdrop-blur-sm border border-white/10 bg-black/20"
            >
              <div className="flex items-center space-x-3">
                <FileText className="text-[#00ffd5]" />
                <span className="text-gray-300">{file.name}</span>
              </div>
              <button 
                onClick={() => removeFile(file)}
                className="text-red-400 hover:bg-red-400/10 p-2 rounded-full transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
