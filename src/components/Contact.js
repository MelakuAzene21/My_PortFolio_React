// Updated Contact.js
// Changes: Removed unnecessary useEffect for AOS (already in App.js), added real form submission using fetch to backend,
// improved validation, added loading state for professionalism, updated alert to more user-friendly messages,
// made the form more professional with labels and better placeholders.
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const BASE_URL =
        process.env.NODE_ENV === "production"
            ? "https://my-portfolio-backend-1-lh7p.onrender.com"
            : "http://localhost:5000";
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.');
            return;
        }
        setError(null);
        setLoading(true);
        setSuccess(false);

        try {
            const response = await fetch(`${BASE_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (err) {
            setError('An error occurred while sending the message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            name="contact"
            className="w-full min-h-screen dark:bg-gray-900 dark:text-gray-300 flex justify-center items-center p-4"
        >
            <div className="flex flex-col max-w-[600px] w-full ">
                <div
                    className="pb-8 flex flex-col justify-center w-full h-full items-center text-gray-800 dark:text-gray-300"
                    data-aos="fade-down"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 ">
                        Contact
                    </p>
                    <p className="py-4 text-center">
                        Feel free to reach out and send me a message!
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                    data-aos="fade-up"
                >
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">Message sent successfully!</p>}
                    <label htmlFor="name" className="text-gray-800 dark:text-gray-300">Your Name</label>
                    <input
                        id="name"
                        className="bg-[#020d33a8] p-3 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="email" className="text-gray-800 dark:text-gray-300">Your Email</label>
                    <input
                        id="email"
                        className="bg-[#020d30ae] p-3 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="message" className="text-gray-800 dark:text-gray-300">Your Message</label>
                    <textarea
                        id="message"
                        className="bg-[#020d33a8] p-3 rounded-md shadow-lg resize-none transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        name="message"
                        rows="5"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        className="dark:text-white text-gray-700 border-2 border-cyan-500 hover:bg-cyan-500 hover:border-transparent px-6 py-3 mx-auto rounded-full shadow-lg transition-transform duration-300 hover:scale-110 disabled:opacity-50"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : "Let's Collaborate"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;