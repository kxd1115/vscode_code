from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "course" ADD "addr" VARCHAR(32) NOT NULL  DEFAULT '';"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE "course" DROP COLUMN "addr";"""
