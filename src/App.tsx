// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRoutes from './Routes/HomeRoutes';
import Navbar from './Layouts/nav/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <HomeRoutes />
    </>
  );
}
