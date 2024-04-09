from fastapi import APIRouter, Query
from typing import Union, Optional, List
from enum import Enum
from pydantic import BaseModel, Field, field_validator
from datetime import date

datas = APIRouter()

class User(BaseModel):
  name: str
  # 进行范围约束, 默认值，最小值，最大值
  age: int = Field(default=0, gt=0, lg=100)
  birth: Union[date, None] = None
  friends: List[int] = []
  
  # 使用field_validator进行自定义校验
  @field_validator("name")
  def name_must_alpha(cls, value):
    assert value.isalpha(), "name must be alpha"
    return value

@datas.post('/data')
async def data(data: User):
  return data