from fastapi import APIRouter

select = APIRouter()

@select.get('/select')
# 当声明的参数不是路径参数时，操作函数会自动把它解释为查询参数
async def get_user(kd, xl, gj):
  return {
    "kd": kd,
    "xl": xl,
    "gj": gj
  }