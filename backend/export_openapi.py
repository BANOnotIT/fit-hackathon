import json

from medical_app import app

print(json.dumps(app.openapi()))
