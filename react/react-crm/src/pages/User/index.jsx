import { getAllStudentAPI } from "@/apis/student";
import { useEffect, useState } from "react";

const User = () => {

  // 准备参数，用来接收后端数据
  const [reqStu, setReqStu] = useState([]);

  // 获取所有学生
  async function getStudents() {
    const res = await getAllStudentAPI();
    setReqStu(res.data.stu)
  }
  // 使用useEffect获取数据
  useEffect(() => {
    getStudents();
  }, [])

  console.log(reqStu);

  return (
    <>
      <ul>
        <li>你好</li>
      </ul>
    </>
  )
};

export default User;