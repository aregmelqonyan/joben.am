from pydantic import BaseModel, Field, FilePath
from typing import Optional
from datetime import datetime
from typing import List, Optional
from uuid import UUID
from fastapi import UploadFile, Form, File


class UserCreate(BaseModel):
    username: str
    email: str
    contact_info: str
    password: str

class UserSchema(BaseModel):
    user_id: int
    username: str
    email: str

class UserOutput(BaseModel):
    email: str
    user_id: int
    class Config:
        orm_mode = True

class UserContact(BaseModel):
    email: str
    contact_info: str
    username: str
    location: str

class UserEducation(BaseModel):
    place: str
    field_of_study: str
    description: str
    start_date: datetime
    end_date: Optional[datetime] = None

class UserExperience(BaseModel):
    profession: str
    job_type: str
    company: str
    location: str
    description: str
    start_date: datetime
    end_date: Optional[datetime] = None

class CompanyUserOutput(BaseModel):
    email: str
    user_id: int
    company: str
    class Config:
        orm_mode = True

class EmailData(BaseModel):
    email: str
    first_name: str
    last_name: str
    job_title: str
    contact_info: int
    user_email: str
    

class TokenPayload(BaseModel):
    sub: str
    exp: int
    class Config:
        orm_mode=True


    
class SystemUser(BaseModel):
    user_id: int
    email: str
    password: str

class CompanySystemUser(BaseModel):
    user_id: int
    email: str
    password: str
    company: str

class CompanyUserCreate(BaseModel):
    username: str
    email: str
    contact_info: str
    password: str
    company: str

class CompanyUserSchema(BaseModel):
    user_id: int
    username: str
    email: str
    company: str

class CompanyVerificationCreate(BaseModel):
    company: str
    email: str
    input_code: str

class CompanyRequestDetails(BaseModel):
    email: str
    password: str
    company: str
    
class RequestDetails(BaseModel):
    email: str
    password: str


class VerificationCreate(BaseModel):
    email: str
    input_code: str


class Token(BaseModel):
    access_token: str
    refresh_token: str

class TokenCompany(BaseModel):
    access_token: str
    refresh_token: str
    company: str 

class DataToken(BaseModel):
    id: Optional[str] = None

class changepassword(BaseModel):
    email:str
    old_password:str
    new_password:str

class TokenCreate(BaseModel):
    user_id:str
    access_token:str
    refresh_token:str
    status:bool
    created_date:datetime



class JobCreateSchema(BaseModel):
    title: str
    description: str
    company_name: str
    location: str
    job_type: str
    industry: str
    level: str
    education_level: Optional[str] = None
    required_skills: Optional[str] = None
    deadline: Optional[datetime] = None
    contact_information: Optional[str] = None
    remote_work: str

    class Config:
        orm_mode = True

class JobSchema(JobCreateSchema):
    job_id: int

    class Config:
        orm_mode = True

class JobDetailSchema(JobSchema):
    date_posted: datetime
    views: int = 0

    class Config:
        orm_mode = True

