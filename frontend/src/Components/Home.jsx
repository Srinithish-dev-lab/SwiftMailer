import axios from "axios"
import { useState, useRef } from "react";
import FileUploader from "./FileUploader";
import EmailListUploader from "./EmailListUploader";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
    const [status, setStatus] = useState(false);
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [emails, setEmails] = useState([])
    const [files, setFiles] = useState([]);
    const [errors, setErrors] = useState({});

    // refs for inputs
    const emailFileInputRef = useRef(null);
    const fileInputRef = useRef(null);

    const validateForm = () => {
        const newErrors = {};

        if (!subject.trim()) newErrors.subject = "Sub.";
        if (!message.trim()) newErrors.message = "Message con.";
        if (emails.length === 0) newErrors.emails = "Please upload or enter at least one email.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const Send = async () => {
        if (!validateForm()) {
            toast.error("Please fill all required fields correctly.");
            return;
        }

        setStatus(true);
        const formData = new FormData();
        formData.append("subject", subject);
        formData.append("message", message);

        // emails array
        emails.forEach((email) => formData.append("emails", email));

        // files array
        files.forEach((file) => formData.append("files", file));

        try {
    // Create a loading toast
            const toastId = toast.loading("Preparing to send emails...");
        
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/sendmail`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    onUploadProgress: (progressEvent) => {
                        const total = progressEvent.total;
                        const current = progressEvent.loaded;
                        const percentCompleted = Math.round((current / total) * 100);
                        toast.loading(`Sending emails... ${percentCompleted}%`, { id: toastId });
                    },
                }
            );
        
            if (res.data === true) {
                toast.success("Email Sent Successfully!", { id: toastId });
                setSubject("");
                setMessage("");
                setEmails([]);
                setFiles([]);
                setErrors({});
        
                if (fileInputRef.current) fileInputRef.current.value = "";
                if (emailFileInputRef.current) emailFileInputRef.current.value = "";
            } else {
                toast.error("Failed to send emails!", { id: toastId });
            }
        } catch (error) {
            toast.error("An error occurred while sending emails.", { id: toastId });
        }
        finally {
                setStatus(false);
            }
   };

    return (
        <div className="flex justify-center bg-gray-200/50 py-10 min-h-screen">
            <Toaster
                position="top-right"
                reverseOrder={false}
                containerStyle={{
                    top: '80px', 
                    right: '20px',
                }}
            />

            <div className="mx-auto w-[50%] bg-white shadow-xl p-5 rounded-xl">
                <div>
                    <p className="text-gray-700 text-lg text-center">
                        Send professional emails to your audience with ease.
                    </p>

                    {/* Subject */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="font-semibold">
                            Subject <span className="text-red-500">*</span> :
                        </label>

                        <input
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            placeholder="Subject line goes here"
                            className={`border rounded-lg bg-white p-2 ${errors.subject ? "border-red-500" : ""}`}
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 mt-5">
                        <label className="font-semibold">
                            Content <span className="text-red-500">*</span> :
                        </label>
                        <textarea
                            rows="5"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write the content of your email here"
                            className={`border rounded-lg bg-white p-2 ${errors.message ? "border-red-500" : ""}`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    {/* Email Upload */}
                    <EmailListUploader emails={emails} setEmails={setEmails} emailFileInputRef={emailFileInputRef} />
                    {errors.emails && <p className="text-red-500 text-sm mt-1">{errors.emails}</p>}

                    {/* File Upload */}
                    <FileUploader files={files} setFiles={setFiles} fileInputRef={fileInputRef} />

                    {/* Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={Send}
                            disabled={status}
                            className={`mt-5 text-white p-2 w-[25%] font-bold rounded-lg transition 
                            ${status ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"}`}
                        >
                            {status ? "Sending Mails..." : "Send Mails"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
