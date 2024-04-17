from fastapi import APIRouter
from database.models import *
from pydantic import BaseModel
from typing import List

studentAPI = APIRouter()

@studentAPI.get("/")
async def get_students():
    # (1) 查询所有学生 all()
    # students = await Student.all() # 返回一个Queryset列表对象，必须使用异步函数才能够遍历内容
    
    # (2) 过滤查询 filter()  # 返回Queryset
    
    # (3) 查询单个学生 get()  # 返回单个对象
    
    # (4) 模糊查询 filter(clas_id__gt=2) # 返回Queryset
    # gt 大于  gte 大于等于
    # students = await Student.filter(clas_id__gt=2)
    # students = await Student.filter(clas_id__range=[1,3]) # 查询1-3班的学生
    # students = await Student.filter(clas_id__in=[1,2]) # 查询1班和2班的学生
    
    # (5) values查询
    # students = await Student.filter(clas_id__in=[1,2]).values('id', 'name', 'clas_id') # 查询1班和2班的学生
    # 通过values方法，返回一个由对象组成的列表, 包含对应列出的key
    
    students = await Student.all().values('id', 'name', 'clas_id')
    return {
      "stu": students
    }

@studentAPI.get("/{student_id}")
async def get_student(student_id: int):
    return {
      "操作": f"查看id={student_id}的学生"
    }

class studentIn(BaseModel):
    id: int
    name: str
    pwd: str
    clas_id: int
    courses: List[int] = []

@studentAPI.post("/")
async def add_student(student_in: studentIn):
  
    # 插入到数据库，仅针对一对一的数据
    # 方式1
    # student = Student(
    #   name = student_in.name,
    #   pwd = student_in.pwd,
    #   clas_id = student_in.clas_id,
    # )
    # await student.save() # 完成数据插入，数据库操作需要加await
    
    # 方式2
    student = await Student.create(
      id = student_in.id,
      name = student_in.name,
      pwd = student_in.pwd,
      clas_id = student_in.clas_id, # 一对多的绑定关系
      #course = student_in.course
    )
    
    # 补充：多对多的绑定关系
    choose_courses = await Course.filter(id__in=student_in.courses) # 获取学生的选课信息，并填充到Course中
    await student.courses.add(*choose_courses) # 使用*把列表展开
    
    return student

@studentAPI.put("/{student_id}")
async def put_student(student_id: int):
    return {
      "操作": "更新id={student_id}的学生"
    }

@studentAPI.delete("/{student_id}")
async def del_student(student_id: int):
    return {
      "操作": "删除id={student_id}的学生"
    }