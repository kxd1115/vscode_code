import { fetchDetailAPI, type detailDataType } from "@/apis/detail";
import { NavBar, DotLoading } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Detail = () => {

  const [detail, setDetail] = useState<detailDataType | null>(null);

  // 获取路由参数
  const [params] = useSearchParams();
  const id = params.get('id');
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await fetchDetailAPI(id!);
        setDetail(res.data.data);
      } catch (error) {
        throw new Error('fetch detail error')
      }
    };
    getDetail();
  }, [id])

  const navigate = useNavigate();
  const back = () => {
    navigate(-1); // 返回上一层
  }

  // 数据返回之前 loading渲染占位
  if (!detail) {
    return (
      <DotLoading color='white' />
    )
  }
  // 数据返回之后 正式渲染内容
  return (
    <div>
      <NavBar onBack={back}>{detail?.title}</NavBar>
      <div dangerouslySetInnerHTML={
        {__html: detail?.content,}
      }></div>
    </div>
  )
};

export default Detail;