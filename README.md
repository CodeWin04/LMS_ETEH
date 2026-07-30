# LMS_ETEH
This repository is set up for the development of a Learning Management System for ETEH-Eaglete2EagleHub
# 🎓 Learning Management System (LMS)

A comprehensive, modern Learning Management System designed to streamline course delivery, tracking, and educational management for instructors and students.

---

## 📌 Features (Planned & In Progress)

- **Course Management:** Create, structure, and manage modules, lessons, and multimedia content.
- **User Roles & Permissions:** Distinct dashboards and capabilities for Administrators, Donors, Instructors, and Students.
- **Progress Tracking:** Interactive analytics and completion metrics for student learning journeys.
- **Assessments & Quizzes:** Built-in tools for creating quizzes, assignments, and automated grading.
- **Responsive UI:** Clean, accessible, and responsive user interface across desktop and mobile views.

---

## 🚀 Getting Started

## 🛠️ Prerequisites

Before running the application, ensure you have the following installed on your system:

- **Python 3.10+** (Verify with `python --version` or `python3 --version`)
- **pip** (Python package manager)
- **Virtual Environment Tool** (`venv` comes built-in with Python 3)
- **Database Engine:** SQLite (default for local development) or PostgreSQL / MySQL (for production)

---

## 🚀 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/CodeWin04/LMS_ETEH.git](https://github.com/CodeWin04/LMS_ETEH.git)
   cd lms-eteh


   # Windows (PowerShell / Command Prompt)
python -m venv venv
.\venv\Scripts\activate

# macOS / Linux
python3 -m venv venv
source venv/bin/activate


pip install -r requirements.txt

FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your_secret_key_here
DATABASE_URL=sqlite:///lms.db

flask db upgrade

flask run

├── app/
│   ├── static/          # CSS, JS, and image assets
│   ├── templates/       # HTML Jinja templates
│   ├── models.py        # Database models (SQLAlchemy)
│   ├── routes.py        # URL endpoints and view logic
│   └── __init__.py      # App factory initialization
├── migrations/          # Database migration files
├── .env.example         # Sample environment configurations
├── .gitignore           # Git ignore patterns
├── config.py            # App configurations
├── requirements.txt     # Python dependency list
└── README.md            # Project documentation
