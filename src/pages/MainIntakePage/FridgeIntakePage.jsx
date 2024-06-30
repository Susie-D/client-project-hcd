import { PageLayout } from '../pages';
import '../../styles/_styles.scss';
import { IntakeFormFridge } from '../../components/components';

// CUSTOM COMPONENTS
export default function FridgeIntakePage() {
  return (
    <PageLayout>
      <div className="header-three jc-center">Intake Screen</div>
      <div className="">
        <div className="header-two jc-center">Fridge</div>
        <IntakeFormFridge />
        <div className="row jc-center"></div>
      </div>
    </PageLayout>
  );
}
