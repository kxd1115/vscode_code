from tortoise.models import Model

from tortoise import fields

class Student(Model):
    # pk = True 设置为主键
    # description 字段描述
    id = fields.IntField(pk=True) # 数字类型
    name = fields.CharField(max_length=32, description='姓名') # 字符串类型
    pwd = fields.CharField(max_length=32, description='密码')  # 数字类型
    
    # 一对多关系
    # related_name 反向查询使用
    clas = fields.ForeignKeyField('models.Clas', description='班级', related_name='students')

    # 多对多关系
    courses = fields.ManyToManyField('models.Course', related_name='students')

class Course(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description='课程名称')
    teacher = fields.ForeignKeyField('models.Teacher', description='教师', related_name='courses')

class Clas(Model):
  name = fields.CharField(max_length=32, description='班级名称')
  

class Teacher(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description='姓名')
    pwd = fields.CharField(max_length=32, description='密码')
    tnumber = fields.CharField(max_length=32, description='工号')