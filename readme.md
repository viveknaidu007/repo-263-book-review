```md
# Book Review Platform

## Frontend Setup
```sh
cd book-review-frontend
npm install
npm run dev
```
- Open the frontend at: [http://localhost:5173/](http://localhost:5173/)

---

## Backend Setup
```sh
cd book-review_platform
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
```

### Create Superuser for Admin Panel
```sh
python manage.py createsuperuser
```

---

## Access the Admin Panel
1. Go to: [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)
2. Log in with your superuser credentials.
3. Add books and give ratings.
4. Ratings will be displayed on the frontend UI.

---

## Notes
- Ensure **backend and frontend servers** are running simultaneously.
- Use `npm run build` for production frontend deployment.
- Use `python manage.py runserver` to start the backend server.
```
