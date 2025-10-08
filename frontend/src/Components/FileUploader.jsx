import { useState } from "react";
import { FiFileText, FiFile, FiImage, FiVideo } from "react-icons/fi";


export default function FileUploader({files, setFiles, fileInputRef}) {
    

    const handleFileChange = (e) => {
        // e.target.files is a FileList, not a normal array.
        // so Array.from converts it into an array so we can map over it easily.
        setFiles(Array.from(e.target.files));
    };

    const getFileIcon = (fileName) => {
        const ext = fileName.split(".").pop().toLowerCase();
        switch (ext) {
            case "pdf":
                return <FiFile className="inline text-red-500 mr-2" />;
            case "txt":
            case "doc":
            case "docx":
                return <FiFileText className="inline text-blue-500 mr-2" />;
            case "jpg":
            case "jpeg":
            case "png":
                return <FiImage className="inline text-green-500 mr-2" />;
            case "xlsx":
            case "xls":
                return <FiFileText className="inline text-green-500 mr-2" />;
            case "mp4":
            case "mov":
            case "avi":
            case "mkv":
                return <FiVideo className="inline text-purple-500 mr-2" />;

            default:
                return <FiFile className="inline text-gray-500 mr-2" />;
        }
    };

    return (
        <div className="flex flex-col gap-2 mt-5">
            <span className="font-semibold">Attach files: (optional)</span>
            <input
                type="file"
                ref={fileInputRef}
                multiple
                onChange={handleFileChange}
                className="border rounded-lg bg-white p-2"
            />

            {/* Files Preview */}
            {files.length > 0 && (
                <>
                    <span className="font-semibold">Files preview:</span>
                    <div className="border rounded-lg bg-white p-2">
                        <ul className="space-y-2">
                            {files.map((file, index) => (
                                <li key={index} className="text-gray-700 flex items-center">
                                    {getFileIcon(file.name)}
                                    <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}
