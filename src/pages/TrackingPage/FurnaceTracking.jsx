import { PageLayout } from '../pages';
import TrackingFormFurnace from '../../components/TrackingForm/TrackingFurnaceForm';
import '../../styles/_styles.scss';

export default function FurnaceIntakePage() {
  return (
    <PageLayout>
      <div className="tracking-container">
        <div className="header-three jc-center">Intake Screen</div>
        <div className="header-two jc-center">Furnace</div>
        <div className="header-three jc-center">Maintenance Tracking</div>
        <TrackingFormFurnace />
        <div className="row jc-center"></div>
      </div>
    </PageLayout>
  );
}
