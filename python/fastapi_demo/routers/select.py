from fastapi import APIRouter, Query
from typing import Union, Optional

typeDefault = Query(
  default = None,
  title = 'Query String',
  min_length = 3,
  max_length = 50,
  pattern = '^fixedquery$'
)

typeRes = Union[None, str, int]

select = APIRouter()


@select.get('/select/{kd}')
# 当声明的参数不是路径参数时，操作函数会自动把它解释为查询参数
# 有默认参数时，以为该参数是可选的/非必填的
async def get_user(kd, xl=None, gj: typeRes = typeDefault):
  return {
    "kd": kd,
    "xl": xl,
    "gj": gj
  }