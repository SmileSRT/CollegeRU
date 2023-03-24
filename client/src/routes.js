import { 
    ABOUT_ROUTE, 
    ABITURIENTS_ROUTE, 
    NEWS_ROUTE, 
    CONTACT_ROUTE, 
    PARTNERS_ROUTE, 
    STUDENTS_ROUTE, 
    EDUCATION_ROUTE, 
    EMPLOYEES_ROUTE, 
    INDEX_ROUTE, 
    STRUCTURE_ROUTE, 
    DOCUMENTS_ROUTE, 
    PAIDSERVICE_ROUTE, 
    PROFESSORS_ROUTE, 
    TECHSUPPORT_ROUTE, 
    CURRICULUM_ROUTE
} from "./utils/consts.js"
import About from './pages/About.jsx'
import Abiturients from "./pages/Abiturients.jsx"
import News from "./pages/News.jsx"
import Contact from "./pages/Contact.jsx"
import Partners from "./pages/Partners.jsx"
import Students from "./pages/Students.jsx"
import Education from "./pages/Education.jsx"
import Employees from "./pages/Employees.jsx"
import Index from "./pages/Index.jsx"
import Structure from "./pages/Structure.jsx"
import Documents from "./pages/Documents.jsx"
import PaidService from "./pages/PaidService.jsx"
import Professors from "./pages/Professors.jsx"
import TechSupport from "./pages/TechSupport.jsx"
import CurriculumGraffic from "./pages/CurriculumGraffic.jsx"

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About,
        title: 'О колледже'
    },
    {
        path: ABITURIENTS_ROUTE,
        Component: Abiturients,
        title: 'Поступающим'
    },
    {
        path: NEWS_ROUTE,
        Component: News,
        title: 'Новости'
    },
    {
        path: CONTACT_ROUTE,
        Component: Contact,
        title: 'Контакты'
    },
    {
        path: PARTNERS_ROUTE,
        Component: Partners,
        title: 'Партнерам'
    },
    {
        path: STUDENTS_ROUTE,
        Component: Students,
        title: 'Студентам'
    },
    {
        path: EDUCATION_ROUTE,
        Component: Education,
        title: 'Образование'
    },
    {
        path: EMPLOYEES_ROUTE,
        Component: Employees,
        title: 'Сотрудники'
    },
    {
        path: INDEX_ROUTE,
        Component: Index,
        title: 'Колледж'
    },
    {
        path: STRUCTURE_ROUTE,
        Component: Structure,
        title: 'Структура и органы управления'
    },
    {
        path: DOCUMENTS_ROUTE,
        Component: Documents,
        title: 'Официальные документы'
    },
    {
        path: PAIDSERVICE_ROUTE,
        Component: PaidService,
        title: 'Платные образовательные услуги'
    },
    {
        path: PROFESSORS_ROUTE,
        Component: Professors,
        title: 'Педагогический состав'
    },
    {
        path: TECHSUPPORT_ROUTE,
        Component: TechSupport,
        title: 'Материальное техническое обеспечение и оснащенность образовательного процесса'
    }, 
    {
        path: CURRICULUM_ROUTE,
        Component: CurriculumGraffic,
        title: 'Учебные планы'
    }

]

export const authRoutes = [

]