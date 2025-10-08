import { useState } from 'react'
import * as XLSX from "xlsx"

const EmailListUploader = ({emails, setEmails, emailFileInputRef}) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 1️⃣ get the first uploaded file

    const reader = new FileReader(); // 2️⃣ FileReader to read file content

    reader.onload = (event) => {
      const data = event.target.result; // 3️⃣ raw file data

      const workbook = XLSX.read(data, { type: "array" }); // 4️⃣ read Excel file as workbook

      const sheetName = workbook.SheetNames[0]; // 5️⃣ get first sheet name
      const worksheet = workbook.Sheets[sheetName]; // 6️⃣ get worksheet object

      // 7️⃣ convert worksheet to JSON
      const emailList = XLSX.utils.sheet_to_json(worksheet, { header: "A" });

      // 8️⃣ map to extract values from column A
      const totalEmailList = emailList.map((item) => item.A);

      setEmails(totalEmailList); // 9️⃣ update React state
    };

    reader.readAsArrayBuffer(file); // 10️⃣ read the file as array buffer
  };


  return (
    <div className="flex flex-col gap-2 mt-5">
      <span className="font-semibold">Upload your email list (.xls or .xlsx) <span className="text-red-500">*</span>:</span>
      <input
        type="file"
        ref={emailFileInputRef}
        required
        accept=".xls,.xlsx"
        onChange={handleFileChange}
        className="border rounded-lg bg-white p-2"
      />

      {/* Emails Preview */}
      {emails.length > 0 && (
        <>
          <span className="font-semibold">Emails Preview : {emails.length} emails</span>
          <div className="mt-2 border rounded-lg bg-white p-2 max-h-36 overflow-auto">
            <ul className="list-decimal list-inside text-gray-700 space-y-2">
              {emails.map((email, index) => (
                <li key={index}>{email}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default EmailListUploader