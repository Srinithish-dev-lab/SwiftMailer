// // src/Components/IntegrationGuide.jsx
// import React, { useState } from "react";
// import {
//   FiCheckCircle,
//   FiCode,
//   FiChevronDown,
//   FiChevronUp,
//   FiBookOpen,
// } from "react-icons/fi";

// export default function IntegrationGuide() {
//   const steps = [
//     "Clone the SwiftMailer repository to your local machine.",
//     "Update the MongoDB 'swiftmailer' collection with your own Gmail and App Password. ⚠️ Do NOT use the default email in this project.",
//     "In your frontend React app, import EmailListUploader and FileUploader components.",
//     "Set up state variables for subject, message, emails, and files.",
//     "Configure the backend endpoint to fetch your credentials from MongoDB.",
//     "Use the 'Send Emails' button to test sending emails. Always review the email list and attachments before sending.",
//     "Never use the original email (the one in this repo) to send emails — create your own Gmail App Password.",
//   ];

//   const [openStep, setOpenStep] = useState(null);
//   const [activeTab, setActiveTab] = useState("frontend");

//   const toggleStep = (index) => {
//     setOpenStep(openStep === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen max-w-6xl mx-auto p-8 space-y-12">
//       {/* Header */}
//       <div className="text-center space-y-3">
//         <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
//           SwiftMailer Integration Guide
//         </h1>
//         <p className="text-gray-600 text-lg">
//           This guide helps you integrate SwiftMailer into your project using your own Gmail App Password.
//           ⚠️ Never use the default email credentials included in this repository.
//         </p>
//       </div>

//       {/* Diagram / Flow */}
//       <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
//         <h2 className="text-2xl font-semibold text-blue-600 flex items-center mb-4">
//           <FiBookOpen className="mr-2" /> Email Flow Diagram
//         </h2>
//         <p className="text-gray-700 mb-4">
//           The flow below shows how emails are sent securely using your own credentials:
//         </p>
//         <div className="flex justify-center">
//           <img
//             src="./flow-Diagram.png"
//             alt="Email Flow Diagram"
//             className="w-full max-w-xl border rounded-lg shadow-md"
//           />
//         </div>
//         <p className="mt-2 text-red-600 font-medium">
//           ⚠️ Warning: Replace the default email in the repo with your own Gmail and App Password.<br />⚠️ Warning: Do NOT send emails using the repo owner's credentials.
//         </p>
//       </section>

//       {/* Code Examples */}
//       <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
//         <h2 className="text-2xl font-semibold text-indigo-600 flex items-center mb-6">
//           <FiCode className="mr-2" /> Integration Examples
//         </h2>

//         {/* Tabs */}
//         <div className="flex gap-4 mb-4">
//           <button
//             onClick={() => setActiveTab("frontend")}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "frontend"
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//           >
//             Frontend (React)
//           </button>
//           <button
//             onClick={() => setActiveTab("backend")}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeTab === "backend"
//               ? "bg-indigo-600 text-white"
//               : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//               }`}
//           >
//             Backend (Node.js)
//           </button>
//         </div>

//         {/* Code Blocks */}
//         {activeTab === "frontend" && (
//           <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-sm overflow-x-auto">
//             <code>
//               {`// Frontend (React) - Pseudocode

// 1. Import EmailListUploader and FileUploader components
// 2. Setup state variables: subject, message, emails, files
// 3. Use <EmailListUploader /> and <FileUploader /> in your component
// 4. On "Send Emails" button click:
//     a. Validate inputs
//     b. Create FormData and append subject, message, emails, files
//     c. POST FormData to backend endpoint
//     d. Show success or error notification`}
//             </code>
//           </pre>
//         )}

//         {activeTab === "backend" && (
//           <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl text-sm overflow-x-auto">
//             <code>
//               {`// Backend (Node.js) - Pseudocode

// 1. Setup Express server and MongoDB connection
// 2. Define "credential" model for Gmail credentials
// 3. Create POST /sendmail endpoint:
//     a. Retrieve Gmail credentials from MongoDB
//     b. Accept subject, message, emails, and attachments
//     c. Setup Nodemailer transporter with your Gmail + App Password
//     d. Loop over emails:
//         i. Send email with subject, message, attachments
//     e. Return success or failure response
// 4. Start server on port 3000`}
//             </code>
//           </pre>
//         )}

//       </section>

//       {/* Step-by-Step Guide */}
//       <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
//         <h2 className="text-2xl font-semibold text-green-600 flex items-center mb-4">
//           <FiCheckCircle className="mr-2" /> Integration Steps
//         </h2>

//         <ul className="space-y-3">
//           {steps.map((step, index) => (
//             <li key={index} className="border rounded-xl overflow-hidden">
//               <button
//                 onClick={() => toggleStep(index)}
//                 className="w-full flex justify-between items-center p-4 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
//               >
//                 <span>Step {index + 1}</span>
//                 {openStep === index ? <FiChevronUp /> : <FiChevronDown />}
//               </button>

//               <div
//                 className={`transition-all duration-300 ${openStep === index
//                   ? "max-h-40 p-4 border-t bg-gray-50 text-gray-600"
//                   : "max-h-0 overflow-hidden"
//                   }`}
//               >
//                 {step}
//               </div>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-gray-500 text-sm mt-10">
//         © {new Date().getFullYear()} SwiftMailer.
//         ⚠️ Only use your own email credentials. Do NOT misuse the repository's default email.
//       </footer>
//     </div>
//   );
// }


// src/Components/IntegrationGuide.jsx
import React, { useState } from "react";
import { FiCheckCircle, FiCode, FiChevronDown, FiChevronUp, FiBookOpen } from "react-icons/fi";

export default function IntegrationGuide() {
  const steps = [
    "Clone the SwiftMailer repository to your local machine.",
    "Update the MongoDB 'swiftmailer' collection with your own Gmail and App Password. ⚠️ Do NOT use the default email in this project.",
    "In your frontend React app, import EmailListUploader and FileUploader components.",
    "Set up state variables for subject, message, emails, and files.",
    "Configure the backend endpoint to fetch your credentials from MongoDB.",
    "Use the 'Send Emails' button to test sending emails. Always review the email list and attachments before sending.",
    "Never use the original email (the one in this repo) to send emails — create your own Gmail App Password.",
  ];

  const [openStep, setOpenStep] = useState(null);
  const [activeTab, setActiveTab] = useState("frontend");

  const toggleStep = (index) => setOpenStep(openStep === index ? null : index);

  return (
    <div className="min-h-screen max-w-6xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
          SwiftMailer Integration Guide
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
          Integrate SwiftMailer using your own Gmail App Password<br />
          ⚠️ Never use the default credentials included in this repository.
        </p>
      </div>

      {/* Diagram / Flow */}
      <section className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-blue-600 flex items-center mb-4">
          <FiBookOpen className="mr-2" /> Email Flow Diagram
        </h2>
        <p className="text-gray-700 mb-4">
          This diagram shows how emails are securely sent using your own credentials:
        </p>
        <div className="flex justify-center">
          <img
            src="./flow-diagram.png"
            alt="Email Flow Diagram"
            className="w-full max-w-xl border rounded-xl shadow-md"
          />
        </div>
        <p className="mt-2 text-red-600 font-medium">
          ⚠️ Warning: Replace the default email in the repo with your own Gmail and App Password.
        </p>
      </section>

      {/* Code Examples */}
      <section className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-indigo-600 flex items-center mb-6">
          <FiCode className="mr-2" /> Integration Examples
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "frontend"
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
          >
            Frontend (React)
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "backend"
              ? "bg-indigo-600 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
              }`}
          >
            Backend (Node.js)
          </button>
        </div>

        {/* Pseudocode */}
        {activeTab === "frontend" && (
          <pre className="bg-gray-900/90 text-gray-100 p-5 rounded-2xl overflow-x-auto ring-1 ring-gray-700 shadow-lg">
            <code>
              {`// Frontend (React) - Pseudocode

1. Import EmailListUploader and FileUploader
2. Setup state: subject, message, emails, files
3. Render <EmailListUploader /> and <FileUploader />
4. On "Send Emails" click:
   - Validate fields
   - Create FormData with subject, message, emails, files
   - POST to backend endpoint
   - Show success/error notification`}
            </code>
          </pre>
        )}

        {activeTab === "backend" && (
          <pre className="bg-gray-900/90 text-gray-100 p-5 rounded-2xl overflow-x-auto ring-1 ring-gray-700 shadow-lg">
            <code>
              {`// Backend (Node.js) - Pseudocode

1. Setup Express + MongoDB connection
2. Define "credential" model for Gmail credentials
3. POST /sendmail endpoint:
   - Retrieve Gmail credentials from MongoDB
   - Accept subject, message, emails, attachments
   - Setup Nodemailer transporter with Gmail + App Password
   - Loop over emails and send
4. Return success/failure response
5. Start server on port 3000`}
            </code>
          </pre>
        )}
      </section>

      {/* Step-by-Step Guide */}
      <section className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-green-600 flex items-center mb-4">
          <FiCheckCircle className="mr-2" /> Integration Steps
        </h2>

        <ul className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="border rounded-2xl overflow-hidden transition-all shadow-sm hover:shadow-lg">
              <button
                onClick={() => toggleStep(index)}
                className="w-full flex justify-between items-center p-4 text-gray-800 font-medium hover:bg-indigo-50 transition-all duration-300"
              >
                <span>Step {index + 1}</span>
                {openStep === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${openStep === index
                  ? "max-h-64 p-4 border-t bg-gray-50/80 text-gray-600"
                  : "max-h-0"
                  }`}
              >
                {step}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} SwiftMailer. ⚠️ Only use your own email credentials.
      </footer>
    </div>
  );
}
