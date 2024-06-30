import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
import IntakeFormUnder_Sink from '../../components/IntakeForm/IntakeFormUnder_Sink';

function Under_SinkIntake (){
    return (
        <PageLayout>
          <div className="header-three jc-center">Intake Screen</div>
          <div className="">
            <div className="header-two jc-center">Undersink Inspection</div>
            <IntakeFormUnder_Sink />
            <div className="row jc-center">
            </div>
          </div>
        </PageLayout>
      );
}''

export default Under_SinkIntake;