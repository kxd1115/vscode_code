from fastapi import APIRouter
from database.models import Student

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

@studentAPI.post("/{student_id}")
async def add_student(student_id: int):
    return {
      "操作": "添加id={student_id}的学生"
    }

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