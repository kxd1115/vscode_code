import ssl
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

TORTOISE_ORM = {
  'connections': {
      'engine': 'tortoise.backends.asyncpg',
      'credentials': {
        'host': '127.0.0.1',
        'port': '5432',
        'user': 'postgres',
        'password': '1217kxd.',
        'database': 'fastapi',
        "ssl": ctx
      }
    },
    'apps': {
      # 配置对应的orm模型文件，可以将模型按照业务拆分，全部存入列表
      # 例如students.py, teachers.py.....
      # aerich.models aerich自带的models
      'models': ['database.models', "aerich.models"],
      'default_connection': 'default'
      }
}