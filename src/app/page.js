
import StudentContextProvider from './components/context-api/StudentContextProvider';
import StudentList from './components/Student/StudentList';

export default function App() {
  return (
    <>

    
    <StudentContextProvider>
      <StudentList />
    </StudentContextProvider>

    </>

  );
}
