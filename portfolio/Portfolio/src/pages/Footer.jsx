import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='text-muted-foreground flex items-center justify-center w-full min-h-16 py-4 px-4 bg-[rgb(var(--primary))] text-sm text-center'>
                <p>© {new Date().getFullYear()} Darshan. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer