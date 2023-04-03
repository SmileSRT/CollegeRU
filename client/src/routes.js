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
    CURRICULUM_ROUTE,
    STANDARTSEDU_ROUTE,
    COURSES_ROUTE,
    OPENDOORS_ROUTE,
    ABIMATERIALS_ROUTE,
    PAY_ROUTE,
    TIMETABLE_ROUTE,
    CURATORS_ROUTE,
    STUMATERIALS_ROUTE,
    EMPLOYMENT_ROUTE
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
import StandartsEdu from "./pages/StandartsEdu.jsx"
import Courses from "./pages/Courses.jsx"
import OpenDoors from "./pages/OpenDoors.jsx"
import AbiMaterials from "./pages/AbiMaterials.jsx"
import Pay from "./pages/Pay.jsx"
import TimeTable from "./pages/TimeTable.jsx"
import Curators from "./pages/Curators.jsx"
import StuMaterials from "./pages/StuMaterials.jsx"
import Employment from "./pages/Employment.jsx"

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About,
        title: 'ЗНАНИЕ | Основные сведения'
    },
    {
        path: ABITURIENTS_ROUTE,
        Component: Abiturients,
        title: 'ЗНАНИЕ | Абитуриентам'
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
        title: 'ЗНАНИЕ | Сотрудники'
    },
    {
        path: INDEX_ROUTE,
        Component: Index,
        title: 'ЗНАНИЕ | Колледж'
    },
    {
        path: STRUCTURE_ROUTE,
        Component: Structure,
        title: 'ЗНАНИЕ | Структура и органы управления'
    },
    {
        path: DOCUMENTS_ROUTE,
        Component: Documents,
        title: 'ЗНАНИЕ | Официальные документы'
    },
    {
        path: PAIDSERVICE_ROUTE,
        Component: PaidService,
        title: 'ЗНАНИЕ | Платные образовательные услуги'
    },
    {
        path: PROFESSORS_ROUTE,
        Component: Professors,
        title: 'ЗНАНИЕ | Педагогический состав'
    },
    {
        path: TECHSUPPORT_ROUTE,
        Component: TechSupport,
        title: 'ЗНАНИЕ | Материальное техническое обеспечение и оснащенность образовательного процесса'
    }, 
    {
        path: CURRICULUM_ROUTE,
        Component: CurriculumGraffic,
        title: 'ЗНАНИЕ | Учебные планы'
    },
    {
        path: STANDARTSEDU_ROUTE,
        Component: StandartsEdu,
        title: 'ЗНАНИЕ | Образовательные стандарты и требования'

    },
    {
        path: COURSES_ROUTE,
        Component: Courses,
        title: 'ЗНАНИЕ | Подготовительные курсы'
    },
    {
        path: OPENDOORS_ROUTE,
        Component: OpenDoors,
        title: 'ЗНАНИЕ | Дни открытых дверей'
    },
    {
        path: ABIMATERIALS_ROUTE,
        Component: AbiMaterials,
        title: 'ЗНАНИЕ | Дополнительные материалы'
    },
    {
        path: PAY_ROUTE,
        Component: Pay,
        title: 'ЗНАНИЕ | Оплата обучения'
    },
    {
        path: TIMETABLE_ROUTE,
        Component: TimeTable,
        title: 'ЗНАНИЕ | Расписание'
    },
    {
        path: CURATORS_ROUTE,
        Component: Curators,
        title: 'ЗНАНИЕ | Кураторы групп'
    },
    {
        path: STUMATERIALS_ROUTE,
        Component: StuMaterials,
        title: 'ЗНАНИЕ | Дополнительные материалы'
    },
    {
        path: EMPLOYMENT_ROUTE,
        Component: Employment,
        title: 'ЗНАНИЕ | Трудоустройство'
    }

]

export const authRoutes = [

]