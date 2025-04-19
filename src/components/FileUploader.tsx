
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Trash2 } from 'lucide-react';

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
    <div>
      <div 
        {...getRootProps()} 
        className={`
          p-8 border-2 border-dashed rounded-lg text-center cursor-pointer
          ${isDragActive ? 'border-primary bg-primary/10' : 'border-border'}
        `}
      >
        <input {...getInputProps()} />
        <p className="text-muted-foreground">
          {isDragActive 
            ? 'Drop your PDF files here' 
            : 'Drag & drop PDF files, or click to select'}
        </p>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          {uploadedFiles.map((file) => (
            <div 
              key={file.name} 
              className="flex items-center justify-between bg-secondary p-2 rounded"
            >
              <div className="flex items-center space-x-2">
                <FileText className="text-primary" />
                <span>{file.name}</span>
              </div>
              <button 
                onClick={() => removeFile(file)}
                className="text-destructive hover:bg-destructive/10 p-1 rounded"
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
