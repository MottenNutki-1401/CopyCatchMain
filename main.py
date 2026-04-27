from fastapi import FastAPI #import FastAPI class from the FastAPI lib
from routes.upload import router as upload_router

app = FastAPI() #create a fast api application stored in var (app)

@app.get("/") #for requests like urls so (/)
def read_root():
    return {"message:" " Backend Running...."}#run localhost to view

app.include_router(upload_router)