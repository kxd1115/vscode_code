## 依赖安装

```shell
# 框架
pip install fastapi

# 部署工具(服务器)
pip install uvicorn

# 创建项目文件夹
# -- main.py
# -- 
#
#

# 启动项目
# main 代表要启动的文件名
# app 定义的FastAPI类名
uvicorn main:app --reload
```

### 测试软件
```shell
sudo apt update
sudo apt install snapd

# 通过snap安装
snap install postman
```
postmap

#### hello world

```py
# 导入FastAPI
# FastAPI继承自Starlette类
from fastapi import FastAPI

# 创建实例
app = FastAPI()

@app.get("/") # "/" 请求路径，并使用get操作
async def root():
    return {"message": "Hello world"}
```

#### 交互式API文档

http://127.0.0.1:8000/docs

#### 可选的API文档

http://127.0.0.1:8000/redoc


### 其他常用请求

```py
@app.post("/")
@app.put("/")
@app.delete("/")
```

## 路径参数

```py
@app.get("/items/{item_id}")
async def read_item(item_id:str):
    return {"item_id": item_id}

# http://127.0.0.1:8000/items/foo
```

### Pydantic

用于数据校验

#### 顺序很重要

路径操作是按照顺序依次运行的

```py
# /users/me需要在/users/{user_id}的前面
@app.get("/users/me")
async def read_user_me():
    return {"user_id": "the current user"}

@app.get("/users/{user_id}")
async def read_user(user_id:str):
    return {"user_id": user_id}
```

#### 预设值

使用`Enum`，将变量声明为枚举类型

```py
from fastapi import FastAPI
from enum import Enum

app = FastAPI()

# 继承自str的枚举类型，枚举变量全部是字符串
class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"

@app.get("/models/{model_name}")
async def get_model(model_name: ModelName):
    if model_name is ModelName.alexnet:
        return {"model_name": model_name, "message": 'Deep Learning FTW!'}
    # if model_name.value == "lenet":
    if model_name is ModelName.lenet:
        return {"model_name": model_name, "message": "LeCNN all the images"}
    return {"model_name": model_name, "message": "Have some residuals"}
# http://127.0.0.1:8000/models/alexnet
```

## 查询参数

查询参数不是路径的固定部分，是可选的，并且可以设置默认值

#### 默认值

* 下面的示例中，`skip=0`和`limit=10`是查询参数的默认值

```py
from fastapi import FastAPI

app = FastAPI()

fake_items_db = [
    {"item_name": "Foo"},
    {"item_name": "Bar"},
    {"item_name": "Baz"},
]

@app.get("/items/")
async def read_item(skip:int = 0, limit:int = 10):
    return fake_items_db[skip:skip + limit]
# http://127.0.0.1:8000/items/
# 等同于
# http://127.0.0.1:8000/items/?skip=0&limit=10
```

#### 可选参数

```py
@app.get("/items/{item_id}")
async def read_item(item_id:str, q:str | None = None):
    # 可选参数q，默认值为None
    if q:
        return {"item_id": item_id, "q": q}
    return {"item_id": item_id}
```
> 以上是看fastapi官方文档学习的部分
---
> 以下时看视频学习的部分

## 请求体

请求体: 用来从客户端发送数据给API
响应体: API发送给客户端的数据

### HTTP协议

* 基于TCP/IP协议
* 基于请求：响应模式
  * 请求从客户端发送后，服务端响应请求并返回
* 无状态保存
  * 不进行状态保存(协议自身不对请求和响应之间的通信状态进行保存)
* 短链接

#### HTTP请求协议和响应协议
HTTP请求和响应
* 请求协议
  * 请求首行
    * 请求方式: `get/post`...
    * 请求路径: IP地址
    * 请求协议: `HTTP/1.1`...
  * 请求头
    * content-type(告诉服务器我请求的数据的格式，不同的content-type，严格对应不同的请求体数据格式)
      * application/json
      * text/plain
      * text/html
    * user-agent
    * ...
  * 请求体(username/password...)
    * 只有POST请求才有请求体
* 响应协议
  * 响应首行
    * 响应协议
    * 状态码
      * 200
      * 4XX
      * 5XX
      * 3XX
  * 响应头
    * 响应日期
    * content-type: (告诉客户端我返回的数据的格式，严格对应响应体中的数据格式)
    * content-length
    * ...
  * 响应体
    * 
#### restful开发规范

应用程序编程接口(API接口)，就是应用程序对外提供了一个操作数据的入口，可以使函数或者类方法，也可以是一个url地址或者一个网络地址

目前主要的接口实现规范：

* restful: 表述性状态转移，适用于前后端分离的应用模式中
  * 面向资源开发
  * 对于数据资源，分别使用`POST/GET/UPDATE/DELETE/PUT`等请求动作来表达对数据的增删改查
* RPC
