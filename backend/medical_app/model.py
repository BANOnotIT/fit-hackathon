from pydantic import BaseModel, Field

class UserSchema(BaseModel):
    fullname: str = Field(...)
    username: str = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "fullname": "Keks Sladok",
                "username": "keksik",
                "password": "weakpassword"
            }
        }

class UserLoginSchema(BaseModel):
    username: str = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "username": "keksik",
                "password": "weakpassword"
            }
        }
