import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
import IntakeFormFridge from '../../components/IntakeForm/IntakeFormFridge';

function FridgeIntakePage() {
  return (
    <PageLayout>
      <div className="header-three jc-center">Intake Screen</div>
      <div className="">
        <div className="header-two jc-center">Fridge</div>
        <IntakeFormFridge />
        <div className="row jc-center">
        </div>
      </div>
    </PageLayout>
  );
}

export default FridgeIntakePage;