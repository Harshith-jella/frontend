
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
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={cn(
          'p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200',
          'hover:border-primary/50 hover:bg-primary/5',
          isDragActive 
            ? 'border-primary bg-primary/10' 
            : 'border-border'
        )}
      >
        <input {...getInputProps()} />
        <p className="text-muted-foreground">
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
              className="flex items-center justify-between bg-secondary/50 p-3 rounded-lg border border-border"
            >
              <div className="flex items-center space-x-3">
                <FileText className="text-primary" />
                <span className="text-sm">{file.name}</span>
              </div>
              <button 
                onClick={() => removeFile(file)}
                className="text-destructive hover:bg-destructive/10 p-2 rounded-full transition-colors"
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
