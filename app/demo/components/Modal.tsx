import React from 'react';

export default function Modal({ open, onClose, children }) {
  return (
    // Backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-colors ${
        open ? 'visible bg-black/40 backdrop-blur-sm' : 'invisible'
      }`}
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
        className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all ${
          open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}