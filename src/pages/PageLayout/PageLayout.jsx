import { Footer, Nav } from '../../components/components';

export default function PageLayout({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
