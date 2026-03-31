import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-full p-5 bg-gray-200 flex flex-col items-center gap-2">
            <div className="flex gap-5 text-gray-800">
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms & Conditions</Link>
            </div>
            <p className="text-sm text-gray-800">© 2026 Buddhimanta. All rights reserved.</p>
        </footer>
    );
}

export default Footer;