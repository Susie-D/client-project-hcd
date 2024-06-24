import { Footer, MobileNav } from '../../components/components';
import Logo from '../../assets/HouseCheckup.svg?react';

export default function PageLayout({ children }) {
  return (
    <>
      <MobileNav />
      <div className="row jc-center">
        <Logo style={{ width: '30%', marginBottom: '10px' }} />
      </div>
      {children}
      <Footer />
    </>
  );
}
