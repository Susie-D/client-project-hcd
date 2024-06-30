import { MobileNav, TrackingFurnaceForm } from '../../components/components';
import '../../styles/_styles.scss';

export default function FurnaceTrackingPage() {
  return (
    <>
      <MobileNav />
      <div className="tracking-container">
        <div className="header-three jc-center">Intake Screen</div>

        <div className="header-four jc-center">Furnace</div>
        <br />
        <div className="header-three jc-center">Maintenance Tracking</div>
        <TrackingFurnaceForm />
        <div className="row jc-center"></div>
      </div>
    </>
  );
}
