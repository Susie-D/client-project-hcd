import { PageLayout } from '../pages';
import '../../styles/_styles.scss';
import { IntakeFormUnder_Sink } from '../../components/components';

// CUSTOM COMPONENTS
function Under_SinkIntake() {
  return (
    <PageLayout>
      <div className="header-three jc-center">Intake Screen</div>
      <div className="">
        <div className="header-two jc-center">Undersink Inspection</div>
        <IntakeFormUnder_Sink />
        <div className="row jc-center"></div>
      </div>
    </PageLayout>
  );
}
('');

export default Under_SinkIntake;
