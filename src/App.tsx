import { Route, Routes } from "react-router";
import { ROUTES } from "./shared/constants/routes";
import { TasksPage } from "./features/tasks/components/tasksPage/tasksPage";
import { ArchivePage } from "./pages/archivePage";
import { TrashPage } from "./pages/trashPage";
import { NotFound } from "./pages/notFound";
import { HomePage } from "./pages/homePage";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />}>
        <Route index element={<TasksPage />} />
      </Route>
      <Route path={ROUTES.archive} element={<ArchivePage />} />
      <Route path={ROUTES.trash} element={<TrashPage />} />
      <Route path={ROUTES.notFound} element={<NotFound />} />
    </Routes>
  );
}

export default App;
