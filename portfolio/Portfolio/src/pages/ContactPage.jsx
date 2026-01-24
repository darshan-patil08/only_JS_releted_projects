import React, { useState } from 'react'
import { LucideArrowRight, Mail, Copy, ExternalLink } from 'lucide-react'
import { toast } from 'sonner'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all fields');
            return;
        }

        const recipientEmail = 'try.darsh08@gmail.com';
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

        // Create Gmail web link (opens in browser)
        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Gmail in new tab
        window.open(gmailLink, '_blank');

        // Show success toast
        toast.success('Opening Gmail...', {
            description: 'Compose window should open in a new tab',
        });

        // Clear form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div id="contact" className='min-h-screen w-full py-10 px-4'>
            <section className='my-10 w-full scroll-mt-28 md:mb-20 flex flex-col items-center justify-center'>
                <div className='text-center max-w-4xl px-4'>
                    <h2 className="font-bold text-[rgb(var(--text-primary))] mt-2 mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
                        Get In Touch
                    </h2>
                    <p className='text-[rgb(var(--text-primary))] text-sm sm:text-base md:text-lg mb-8'>
                        Please contact me directly at{' '}
                        <a href="mailto:try.darsh08@gmail.com" className='underline text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]'>
                            try.darsh08@gmail.com
                        </a>{' '}
                        or through this form.
                    </p>
                </div>

                <form className='flex flex-col w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-4 gap-6 mt-6'>
                    {/* Name Field */}
                    <div className='flex flex-col gap-2 w-full'>
                        <label
                            htmlFor="contact-name"
                            className='text-sm font-medium text-[rgb(var(--text-primary))] pl-1'
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="contact-name"
                            name="name"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Your Name'
                            className='w-full p-3 border border-[rgb(var(--border-secondary))] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--text-accent))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-secondary))] transition-all'
                        />
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col gap-2 w-full'>
                        <label
                            htmlFor="contact-email"
                            className='text-sm font-medium text-[rgb(var(--text-primary))] pl-1'
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="contact-email"
                            name="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='your.email@example.com'
                            className='w-full p-3 border border-[rgb(var(--border-secondary))] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--text-accent))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-secondary))] transition-all'
                        />
                    </div>

                    {/* Message Field */}
                    <div className='flex flex-col gap-2 w-full'>
                        <label
                            htmlFor="contact-message"
                            className='text-sm font-medium text-[rgb(var(--text-primary))] pl-1'
                        >
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows="8"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder='Your message here...'
                            className='w-full p-3 border border-[rgb(var(--border-secondary))] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--text-accent))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-secondary))] resize-y min-h-[150px] transition-all'
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 h-11 px-8 w-full sm:w-auto self-center mt-2"
                    >
                        <Mail size={16} />
                        Send via Gmail
                        <LucideArrowRight size={15} />
                    </button>
                </form>
            </section>
        </div>
    )
}

export default ContactPage