import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
import IntakeFormFurnace from '../../components/IntakeForm/IntakeFormFurnace';

function FurnaceIntakePage() {
  return (
    <PageLayout>
      <div className="header-three jc-center">Intake Screen</div>
      <div className="">
        <div className="header-two jc-center">Furnace</div>
        <IntakeFormFurnace />
        <div className="row jc-center">
        </div>
      </div>
    </PageLayout>
  );
}

export default FurnaceIntakePage;