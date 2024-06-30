import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
import TrackingFridgeForm from '../../components/TrackingForm/TrackingFridgeForm';

export default function FridgeTrackingPage() {
    console.log('are we in the fridge?', FridgeTrackingPage)
  return (
    <div className="login-container">
        <PageLayout>
        <div className="header-three jc-center">Intake Screen</div>
        <div className="">
            <div className="header-two jc-center">Refrigerator</div>
            <div className="header-three jc-center">Maintance Tracking</div>
            <TrackingFridgeForm />
            <div className="row jc-center">
            </div>
        </div>
        </PageLayout>
    </div>
  );
}