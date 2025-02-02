from io import BytesIO
from fastapi import FastAPI, HTTPException
from fastapi.responses import StreamingResponse
from minio import Minio
import os
from dotenv import load_dotenv
from urllib.parse import quote

load_dotenv()

app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")

MINIO_ENDPOINT = os.getenv("MINIO_ENDPOINT")
MINIO_ACCESS_KEY = os.getenv("MINIO_ACCESS_KEY")
MINIO_SECRET_KEY = os.getenv("MINIO_SECRET_KEY")
NEXT_PUBLIC_NAME = os.getenv("NEXT_PUBLIC_NAME")

minio_client = Minio(
    MINIO_ENDPOINT,
    access_key=MINIO_ACCESS_KEY,
    secret_key=MINIO_SECRET_KEY,
    secure=False
)

@app.get("/api/py/download-latest/{bucket_name}")
def download_latest_file(bucket_name: str, object_name: str):
    try:
        response = minio_client.get_object(bucket_name, object_name)
        file_stream = BytesIO(response.read())
        file_name = quote(f"{NEXT_PUBLIC_NAME}_{object_name}")

        return StreamingResponse(file_stream, media_type="application/octet-stream", headers={"Content-Disposition": f"attachment; filename*=UTF-8''{file_name}"})
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))