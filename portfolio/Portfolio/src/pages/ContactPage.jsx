import React from 'react'
import { LucideArrowRight } from 'lucide-react'

const ContactPage = () => {
    return (
        <div className='min-h-screen w-full py-10 px-4'>
            <section className='my-10 w-full scroll-mt-28 md:mb-20 flex flex-col items-center justify-center'>
                <div className='text-center max-w-4xl px-4'>
                    <h2 id="contact" className="font-bold text-[rgb(var(--text-primary))] mt-2 mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight">
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
                            htmlFor="name"
                            className='text-sm font-medium text-[rgb(var(--text-primary))] pl-1'
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Your Name'
                            className='w-full p-3 border border-[rgb(var(--border-secondary))] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--text-accent))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-secondary))] transition-all'
                        />
                    </div>

                    {/* Email Field */}
                    <div className='flex flex-col gap-2 w-full'>
                        <label
                            htmlFor="email"
                            className='text-sm font-medium text-[rgb(var(--text-primary))] pl-1'
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='your.email@example.com'
                            className='w-full p-3 border border-[rgb(var(--border-secondary))] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--text-accent))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-secondary))] transition-all'
                        />
                    </div>

                    {/* Message Field */}
                    <div className='flex flex-col gap-2 w-full'>
                        <label
                            htmlFor="message"
                            className='text-sm font-medium text-[rgb(var(--text-primary))] pl-1'
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="8"
                            placeholder='Your message here...'
                            className='w-full p-3 border border-[rgb(var(--border-secondary))] rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--text-accent))] bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-secondary))] resize-y min-h-[150px] transition-all'
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 h-11 px-8 w-full sm:w-auto self-center mt-2"
                    >
                        Send Message
                        <LucideArrowRight size={15} />
                    </button>
                </form>
            </section>
        </div>
    )
}

export default ContactPage