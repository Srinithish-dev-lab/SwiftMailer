// src/Components/Docs.jsx
import React, { useState } from "react";
import {
  FiCheckCircle,
  FiFileText,
  FiFile,
  FiImage,
  FiVideo,
  FiChevronDown,
  FiChevronUp,
  FiBookOpen,
} from "react-icons/fi";

export default function Docs() {
  const steps = [
    "Click on 'Upload your email list' and select your Excel file.",
    "Enter the subject line for your email campaign.",
    "Write your email content in the message editor.",
    "Attach files like documents, images, or videos if required.",
    "Review all uploaded emails and attachments in the preview section.",
    "Click 'Send Emails' to start sending your bulk emails instantly.",
  ];

  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (index) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
          SwiftMailer Documentation
        </h1>
        <p className="text-gray-600 text-lg">
          Learn how to send professional bulk emails seamlessly with SwiftMailer.
        </p>
      </div>

      {/* Overview Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold text-blue-600 flex items-center mb-4">
          <FiBookOpen className="mr-2" /> Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          SwiftMailer allows you to quickly send personalized bulk emails using your
          Excel contact list. You can include attachments, preview your campaign,
          and send them all with just a few clicks — making communication efficient,
          secure, and professional. <br />
          <span className="mt-2 text-red-600 font-medium">
            ⚠️ Warning: Do not misuse this tool for spamming. Always send emails responsibly.
          </span>
        </p>
      </section>

      {/* Features and Tips */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Features */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-blue-600 flex items-center mb-4">
            <FiCheckCircle className="mr-2" /> Features
          </h2>
          <ul className="text-gray-700 space-y-3">
            <li className="flex items-center gap-2">
              <FiFileText className="text-blue-500" /> Upload email lists via Excel (.xls, .xlsx)
            </li>
            <li className="flex items-center gap-2">
              <FiFile className="text-red-500" /> Compose subject and message easily
            </li>
            <li className="flex items-center gap-2">
              <FiImage className="text-green-500" /> Attach images or documents
            </li>
            <li className="flex items-center gap-2">
              <FiVideo className="text-purple-500" /> Add video attachments (MP4, MOV)
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-green-600" /> Preview emails before sending
            </li>
          </ul>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
          <h2 className="text-2xl font-semibold text-purple-600 flex items-center mb-4">
            <FiCheckCircle className="mr-2" /> Tips & Notes
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ensure email addresses are in column A of your Excel sheet.</li>
            <li>Supported file formats: PDF, DOC, DOCX, JPG, PNG, MP4.</li>
            <li>Keep subject lines concise for better engagement.</li>
            <li>Use the preview section to double-check everything before sending.</li>
          </ul>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-2xl font-semibold text-green-600 flex items-center mb-4">
          <FiCheckCircle className="mr-2" /> How to Send Emails
        </h2>

        <ul className="space-y-3">
          {steps.map((step, index) => (
            <li key={index} className="border rounded-xl overflow-hidden">
              <button
                onClick={() => toggleStep(index)}
                className="w-full flex justify-between items-center p-4 text-gray-800 font-medium hover:bg-indigo-50 transition-all duration-300"
              >
                <span>Step {index + 1}</span>
                {openStep === index ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              <div
                className={`transition-all duration-300 ${openStep === index
                    ? "max-h-40 p-4 border-t bg-gray-50 text-gray-600"
                    : "max-h-0 overflow-hidden"
                  }`}
              >
                {step}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer Note */}
      <footer className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} SwiftMailer. Built for seamless communication.
      </footer>
    </div>
  );
}
