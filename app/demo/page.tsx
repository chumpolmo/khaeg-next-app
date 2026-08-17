import Header from "../components/header";
import Footer from "../components/footer";
import { ToDoPage } from "./components/ToDoPage";

export default function Demo() {
  return (
  <div>
    <Header />

    <ToDoPage />

    <div className="max-w-sm mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mt-20 mb-6">
      <div className="h-32 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      
      <div className="relative flex flex-col items-center px-6 pb-6">
        <div className="-mt-16 mb-4">
          <img className="w-28 h-28 rounded-full border-4 border-white dark:border-slate-800 shadow-md object-cover" 
              src="/images/profile.jpg" 
              alt="User profile" />
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">Jane Doe</h3>
        <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Frontend Developer</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-3">
          หลงใหลในการสร้างสรรค์ User Interface ที่สวยงามและใช้งานง่ายด้วย Tailwind CSS
        </p>

        <div className="mt-6 flex gap-3">
          <button className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact
          </button>
          <button className="px-5 py-2 border border-slate-300 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition">
            Follow
          </button>
        </div>

        <div className="flex mt-6 space-x-4">
          <a href="#" className="text-slate-400 hover:text-blue-500">
            <img className="w-10 h-10 rounded-full border border-white dark:border-slate-800 shadow-md object-cover" 
              src="/icons/twitter.png" 
              alt="Twitter" />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-600">
            <img className="w-10 h-10 rounded-full border border-white dark:border-slate-800 shadow-md object-cover" 
              src="/icons/facebook.png" 
              alt="Facebook" />
          </a>
          <a href="#" className="text-slate-400 hover:text-pink-600">
            <img className="w-10 h-10 rounded-full border border-white dark:border-slate-800 shadow-md object-cover" 
              src="/icons/instagram.png" 
              alt="Instagram" />
          </a>
          <a href="#" className="text-slate-400 hover:text-slate-800">
            <img className="w-10 h-10 rounded-full border border-white dark:border-slate-800 shadow-md object-cover" 
              src="/icons/githubcopilot.png" 
              alt="GitHub" />
          </a>
        </div>
      </div>
    </div>

    <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: `url('https://unsplash.com')` }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 p-4 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Tailwind CSS Cover</h1>
        <p className="text-lg mb-8">ออกแบบหน้าเว็บอย่างรวดเร็ว</p>
        <a href="#" className="bg-indigo-600 px-6 py-3 rounded-lg">เริ่มต้นใช้งาน</a>
      </div>
    </section>

    <div className="border-b border-gray-200 p-4">
        <h2 className="text-2xl font-semibold text-gray-800">หัวข้อบทความ</h2>
    </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img className="w-full h-48 object-cover" src="https://unsplash.com" alt="Card Image" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title 1</h3>
              <p className="text-gray-600 text-sm">รายละเอียดเบื้องต้นของ Card ใบนี้ สามารถใส่ข้อความได้ตามต้องการ</p>
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">อ่านเพิ่มเติม</button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img className="w-full h-48 object-cover" src="https://unsplash.com" alt="Card Image" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title 2</h3>
              <p className="text-gray-600 text-sm">รายละเอียดเบื้องต้นของ Card ใบนี้ สามารถใส่ข้อความได้ตามต้องการ</p>
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">อ่านเพิ่มเติม</button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img className="w-full h-48 object-cover" src="https://unsplash.com" alt="Card Image" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title 3</h3>
              <p className="text-gray-600 text-sm">รายละเอียดเบื้องต้นของ Card ใบนี้ สามารถใส่ข้อความได้ตามต้องการ</p>
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">อ่านเพิ่มเติม</button>
            </div>
          </div>
        </div>

    <div className="border-b border-gray-200 p-4">
        <h2 className="text-2xl font-semibold text-gray-800">หัวข้อบทความ</h2>
    </div>


    <div className="p-6 max-w-full mx-auto">
      <div className="overflow-x-auto rounded-xl shadow-md bg-white">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-800 text-white text-sm uppercase tracking-wider">
              <th className="px-6 py-4">ชื่อ</th>
              <th className="px-6 py-4">ตำแหน่ง</th>
              <th className="px-6 py-4">สถานะ</th>
              <th className="px-6 py-4">เงินเดือน</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 divide-y divide-gray-200">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">สมชาย ใจดี</td>
              <td className="px-6 py-4">Developer</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">ทำงานอยู่</span></td>
              <td className="px-6 py-4">45,000 ฿</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">วิ a</td>
              <td className="px-6 py-4">Designer</td>
              <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">พักร้อน</span></td>
              <td className="px-6 py-4">38,000 ฿</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">สมหญิง รักงาน</td>
              <td className="px-6 py-4">Manager</td>
              <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">ทำงานอยู่</span></td>
              <td className="px-6 py-4">65,000 ฿</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Footer />

  </div>
  );
}