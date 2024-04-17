from fastapi import APIRouter
from database.models import *
from pydantic import BaseModel
from typing import List
from fastapi.exceptions import HTTPException

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
    
    # (6) 一对多查询，多对多查询
    stu = await Student.get(name="Dennis")
    stu_clas = await stu.clas.values('name') # 直接通过1对多键进行查询
    
    # students = await Student.all().values('id', 'name', 'clas_id')
    students = await Student.all().values('name', 'clas__name', "courses__name") # 查询所有学生，并返回对应班级的名称
    
    # (7) 多对多查询
    # courses_all = await stu.courses.all() # 查询单个学生的所有报课信息
    # stu_courses = await stu.courses.all().values("name", "teacher__name") # 查询单个学生的所有报课信息，对应的老师名字
    #stu_courses = await stu.courses.all().values("name", "teacher__name") # 查询单个学生的所有报课信息，对应的老师名字， 课程信息
    # 通过一对多和多对多列进行查询其他表中的信息
    
    return {
      # "stu": stu,
      # "clas": stu_clas
      # "clas__name": students
      "stu_courses": students
    }

@studentAPI.get("/{student_id}")
async def get_student(student_id: int):
    stu = await Student.get(id=student_id)
    return stu

class studentIn(BaseModel):
    id: int # 这里由于在初始化的时候没有将ID设置为自增，导致后面更新数据时需要填写id
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
      id = student_in.id, # 遗留错误，这里不应该出现需要填写id的情况
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
async def put_student(student_id: int, student_in: studentIn):
    data = student_in.dict()
    courses = data.pop("courses") # 删除多对多字段，并取出该字段
    await Student.filter(id=student_id).update(**data) # **把字典展开为一个对象
    
    # 更新多对多字段
    edit_stu = await Student.get(id=student_id)
    choose_courses = await Course.filter(id__in=courses) # 获取学生的选课信息，并填充到Course中
    
    # 补充：多对多字段更新，需要先删除再添加
    # 删除旧的多对多字段
    await edit_stu.courses.clear()
    # 添加新的多对多字段
    await edit_stu.courses.add(*choose_courses)
    
    return {
      "操作": "更新id={student_id}的学生"
    }

@studentAPI.delete("/{student_id}")
async def del_student(student_id: int):
    deleteCount = await Student.filter(id=student_id).delete()
    if not deleteCount:
      raise HTTPException(status_code=404, detail=f"学生id={student_id}不存在")
    return {
      "操作": "删除id={student_id}的学生"
    }