
dev:
	uvicorn medical_app:app --reload

prepare:
	virtualenv venv
	source venv/bin/activate
	pip3 install -r requirements.txt
	source venv/bin/activate

openapi.json: export_openapi.py $(wildcard medical_app/**.py)
	python3 export_openapi.py > openapi.json

