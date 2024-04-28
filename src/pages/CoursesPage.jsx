import CoursesListTable from "../components/courses/CoursesListTable";
import CreateCourse from "../components/courses/CreateCourse";

const CoursesPage = () => {
  return (
    <div>
      <CreateCourse />
      <CoursesListTable />
    </div>
  );
};
export default CoursesPage;
