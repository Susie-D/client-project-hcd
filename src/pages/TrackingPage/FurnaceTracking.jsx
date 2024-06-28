import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
import TrackingFormFurnace from '../../components/TrackingForm/TrackingFurnaceForm';

export default function FurnaceIntakePage() {
  return (
    <div className="login-container">
        <PageLayout>
        <div className="header-three jc-center">Intake Screen</div>
        <div className="">
            <div className="header-two jc-center">Furnace</div>
            <div className="header-three jc-center">Maintance Tracking</div>
            <TrackingFormFurnace />
            <div className="row jc-center">
            </div>
        </div>
        </PageLayout>
    </div>
  );
}