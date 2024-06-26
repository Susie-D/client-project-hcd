import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
import IntakeFormFridge from '../../components/IntakeForm/IntakeFormFridge';

function FridgeIntakePage() {
  return (
    <PageLayout>
      <div className="login-container">
      <div className="row jc-center">
        </div>
        <IntakeFormFridge />
        <div className="row jc-center">
        </div>
      </div>
    </PageLayout>
  );
}

export default FridgeIntakePage;