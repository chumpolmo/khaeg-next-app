import Header from "../components/header";
import Footer from "../components/footer";
import { toDoList } from "../data/toDoList";

export default function ToDoList(){

  let name = "Chumpol Mokarat";
  const major = "เทคโนโลยีสารสนเทศ (Information Technology)";
  let classYear = 2;
  let classSec = "ทส.ท./ทส.ต.";
  let active = true;

  // Arrow functions
  const isActive = (act: boolean) => {
     if(act)
       return <span style={{ color: "green" }}>กำลังศึกษาอยู่</span>;
     return <span style={{ color: "red" }}>ไม่ได้เป็นนักศึกษาแล้วนะ</span>;
  }

  const tmpTdl = toDoList.map((item, index) => 
    <div className="max-w-sm p-6 mb-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 w-1/4" key={index}>
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-600"></p>
        <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
        <p className="mt-2 text-sm text-gray-600">{item.author} / {item.date_added}</p>
        <p className="mt-2 text-sm text-gray-600">{isActive(item.status)}</p>
    </div>
  );

//   const isActive = (act: boolean) => (act) ? "กำลังศึกษาอยู่" : "ไม่ได้เป็นนักศึกษาแล้วนะ";

  console.log(`Name: ${name}`);
  console.log(`Major: ${major}`);

  return (
    <>
      <Header />

    <div className="relative flex justify-center mt-20 mb-8">
        <div className="w-full max-w-md p-6 bg-yellow-300 border-2 border-black rounded-none shadow-lg">
        <h3 className="text-xl font-black text-black uppercase">To Do Lists</h3>
        <p className="mt-2 text-sm font-medium text-black">ชื่อ-สกุล: {name}</p>
        <p className="mt-2 text-sm font-medium text-black">สาขาวิชา: {major}</p>
        <p className="mt-2 text-sm font-medium text-black">กลุ่มเรียน/ชั้นปี: {classSec} / {classYear}</p>
        <p className="mt-2 text-sm font-medium text-black">สถานะภาพนักศึกษา: {isActive(active)}</p>
        </div>
    </div>

    <div className="flex justify-center gap-3">
        {tmpTdl}
    </div>

    <Footer />
    </>
  );
}