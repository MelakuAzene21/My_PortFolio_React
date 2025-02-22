import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div
            name="contact"
            className="w-full min-h-screen bg-gradient-to-b from-[#0a192f] to-[#1e2a38] flex justify-center items-center p-4"
        >
            <div className="flex flex-col max-w-[600px] w-full">
                <div
                    className="pb-8 flex flex-col justify-center w-full h-full items-center"
                    data-aos="fade-down"
                >
                    <p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300">
                        Contact
                    </p>
                    <p className="text-gray-300 py-4 text-center">
                        Feel free to reach out and send me a message!
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-4"
                    data-aos="fade-up"
                >
                    <input
                        className="bg-[#ccd6f6] p-3 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        className="bg-[#ccd6f6] p-3 rounded-md shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        className="bg-[#ccd6f6] p-3 rounded-md shadow-lg resize-none transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        className="text-white border-2 border-cyan-500 hover:bg-cyan-500 hover:border-transparent px-6 py-3 mx-auto rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
                        type="submit"
                    >
                        Let's Collaborate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
