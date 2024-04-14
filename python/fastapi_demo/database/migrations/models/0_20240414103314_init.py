from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        CREATE TABLE IF NOT EXISTS "clas" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(32) NOT NULL
);
COMMENT ON COLUMN "clas"."name" IS '班级名称';
CREATE TABLE IF NOT EXISTS "student" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(32) NOT NULL,
    "pwd" VARCHAR(32) NOT NULL,
    "clas_id" INT NOT NULL REFERENCES "clas" ("id") ON DELETE CASCADE
);
COMMENT ON COLUMN "student"."name" IS '姓名';
COMMENT ON COLUMN "student"."pwd" IS '密码';
COMMENT ON COLUMN "student"."clas_id" IS '班级';
CREATE TABLE IF NOT EXISTS "teacher" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(32) NOT NULL,
    "pwd" VARCHAR(32) NOT NULL,
    "tnumber" VARCHAR(32) NOT NULL
);
COMMENT ON COLUMN "teacher"."name" IS '姓名';
COMMENT ON COLUMN "teacher"."pwd" IS '密码';
COMMENT ON COLUMN "teacher"."tnumber" IS '工号';
CREATE TABLE IF NOT EXISTS "course" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "name" VARCHAR(32) NOT NULL,
    "teacher_id" INT NOT NULL REFERENCES "teacher" ("id") ON DELETE CASCADE
);
COMMENT ON COLUMN "course"."name" IS '课程名称';
COMMENT ON COLUMN "course"."teacher_id" IS '教师';
CREATE TABLE IF NOT EXISTS "aerich" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "version" VARCHAR(255) NOT NULL,
    "app" VARCHAR(100) NOT NULL,
    "content" JSONB NOT NULL
);
CREATE TABLE IF NOT EXISTS "student_course" (
    "student_id" INT NOT NULL REFERENCES "student" ("id") ON DELETE CASCADE,
    "course_id" INT NOT NULL REFERENCES "course" ("id") ON DELETE CASCADE
);"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        """
