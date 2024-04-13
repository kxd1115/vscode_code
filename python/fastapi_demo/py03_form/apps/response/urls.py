from fastapi import APIRouter
from typing import Union, List
from pydantic import BaseModel, EmailStr

user = APIRouter()

# 响应格式
class UserIn(BaseModel):
  username: str
  password: str
  email: EmailStr
  full_name: Union[str, None] = None

# 返回格式
class UserOut(BaseModel):
  username: str
  email: EmailStr
  full_name: Union[str, None] = None
  
class Item(BaseModel):
  name: str
  description: Union[str, None] = None
  price: float = 10.5
  tags: List[str] = []

items = {
  "foo": {"name": "Foo", "price": 50.2},
  "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tags": ["foo", "bar"]},
  "baz": {"name": "Baz", "description": None, "price": 50.2, "tags": []},
}

# 通过response_model隐藏关键信息
@user.post('/user', response_model=UserOut)
async def response(user: UserIn):
  return user

# 排除预设的值 response_model_exclude_unset=True 
# 排除为None的值 response_model_exclude_none=True
# 排除为默认值的值 response_model_exclude_defaults=True
# 保留对应字段 response_model_exclude_include = {}
# 排除某些字段 response_model_exclude = {}
@user.get('/items/{item_id}', response_model=Item, response_model_exclude_unset=True)
async def read_item(item_id: str):
  return items[item_id]