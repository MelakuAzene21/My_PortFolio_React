import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation (can be expanded)
        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }
        // Handle form submission (e.g., send to server)
        alert('Message sent successfully!'); // Feedback message
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <div className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Send me a message</p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <input
                        className='bg-[#ccd6f6] p-2 mb-4 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        className='my-4 p-2 bg-[#ccd6f6] rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                        type="email"
                        placeholder='Email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        className='bg-[#ccd6f6] p-2 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500'
                        name="message"
                        rows="10"
                        placeholder='Message'
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button
                        className='text-white border-2 border-cyan-500 hover:bg-cyan-500 hover:border-transparent px-4 py-3 my-8 mx-auto flex items-center transition duration-300 rounded'
                        type='submit'
                    >
                        Let's Collaborate
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
