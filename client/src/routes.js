import { ABOUT_ROUTE, ABITURIENTS_ROUTE, NEWS_ROUTE, CONTACT_ROUTE, PARTNERS_ROUTE, STUDENTS_ROUTE, EDUCATION_ROUTE, EMPLOYEES_ROUTE, INDEX_ROUTE } from "./utils/consts.js"
import About from './pages/About.jsx'
import Abiturients from "./pages/Abiturients.jsx"
import News from "./pages/News.jsx"
import Contact from "./pages/Contact.jsx"
import Partners from "./pages/Partners.jsx"
import Students from "./pages/Students.jsx"
import Education from "./pages/Education.jsx"
import Employees from "./pages/Employees.jsx"
import Index from "./pages/Index.jsx"

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About,
        title: 'ЗНАНИЕ | О колледже'
    },
    {
        path: ABITURIENTS_ROUTE,
        Component: Abiturients,
        title: 'ЗНАНИЕ | Поступающим'
    },
    {
        path: NEWS_ROUTE,
        Component: News,
        title: 'ЗНАНИЕ | Новости'
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact,
        title: 'ЗНАНИЕ | Контакты'
    },
    {
        path: PARTNERS_ROUTE,
        Component: Partners,
        title: 'ЗНАНИЕ | Партнерам'
    },
    {
        path: STUDENTS_ROUTE,
        Component: Students,
        title: 'ЗНАНИЕ | Студентам'
    },
    {
        path: EDUCATION_ROUTE,
        Component: Education,
        title: 'ЗНАНИЕ | Образование'
    },
    {
        path: EMPLOYEES_ROUTE,
        Component: Employees,
        title: 'ЗНАНИЕ | Сотрудника'
    },
    {
        path: INDEX_ROUTE,
        Component: Index,
        title: 'ЗНАНИЕ | Колледж'
    }
]

export const authRoutes = [

]