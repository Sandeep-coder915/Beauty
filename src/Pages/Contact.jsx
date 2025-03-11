import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const ContactForm= () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');

  const handleClear = (e) => {
    e.preventDefault();
    setName('');
    setPhone('');
    setEmail('');
    setReason('');
    setMessage('');
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!name || !phone || !email || !reason || !message) {
      toast.error('Please fill in all fields before submitting!');
      return;
    }

    emailjs.sendForm('service_2qgc2lp', 'template_peo6c8o', form.current, '77GhrP483V-tWB0LE')
      .then(() => {
        toast.success('Message sent successfully!');
        handleClear(e);
      }, (error) => {
        toast.error(`Failed to send message: ${error.text}`);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center p-6  ">
      <ToastContainer />
      <h1 className="text-3xl font-bold">Contact Us 💖</h1>
      <div className='flex flex-col items-center text-justify p-6 '>     <h2>Get in Touch with Beauty at Home – Your Comfort, Our Care!</h2>

<p>📍 Location: Currently serving Amritsar, Punjab</p>
<p>📞 Phone: 8360161602</p>
<p>⏳ Response Time: Our team will get back to you within 24-48 hours.</p>

<p>Simply fill out the contact form below, and we’ll reach out as soon as possible. Your beauty, our priority! ✨💆‍♀️💅</p></div>


      <form ref={form} onSubmit={handleSendMessage} className="w-full max-w-lg    p-6 rounded-lg shadow-lg">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="user_name"
          placeholder="Name"
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          name="user_phone"
          placeholder="Phone Number"
          type="tel"
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="user_email"
          placeholder="Email"
          type="email"
          className="w-full p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          onChange={(e) => setReason(e.target.value)}
          value={reason}
          name="user_reason"
          className="w-full text-green-50 p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Reason for Contact</option>
          <option value="Product Inquiry">Product Inquiry</option>
          <option value="Order Issue">Order Issue</option>
          <option value="Feedback">Feedback</option>
          <option value="General Question">General Question</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          name="user_message"
          placeholder="Message for Us"
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between gap-5">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">SEND MESSAGE</button>
          <button onClick={handleClear} className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">CLEAR MESSAGE</button>
        </div>
      </form>
    </div>
  );
};



export default ContactForm;
