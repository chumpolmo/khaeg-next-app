export default function Footer() {
  return(<footer className="w-full text-slate-800 py-6 px-4 border-t border-slate-500">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm">&copy; 2026 By Beritokai. All rights reserved.</p>
      <div className="flex gap-6 text-sm">
        <a href="#" className="hover:text-white transition-colors">About Us</a>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </footer>);
}