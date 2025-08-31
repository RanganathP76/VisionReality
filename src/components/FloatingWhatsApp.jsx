function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918050084991" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center gap-2"
    >
      <span className="text-lg">💬</span> Chat
    </a>
  );
}

export default FloatingWhatsApp;
