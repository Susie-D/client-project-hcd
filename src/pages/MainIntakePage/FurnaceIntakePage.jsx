import { PageLayout } from '../pages';
import { IntakeFormFurnace } from '../../components/components';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
export default function FurnaceIntakePage() {
  return (
    <PageLayout>
      <div className="header-three jc-center">Intake Screen</div>
      <div className="">
        <div className="header-four jc-center">Furnace</div>
        <IntakeFormFurnace />
        <div className="row jc-center"></div>
      </div>
    </PageLayout>
  );
}
