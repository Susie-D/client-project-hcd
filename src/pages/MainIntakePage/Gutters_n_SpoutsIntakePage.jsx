import { PageLayout } from '../pages';
import '../../styles/_styles.scss';
import { IntakeFormGutters_n_Spouts } from '../../components/components';

// CUSTOM COMPONENTS

export default function Gutters_n_SpoutsPage() {
  return (
    <PageLayout>
      <div className="header-three jc-center">Intake Screen</div>
      <div className="">
        <div className="header-two jc-center">Gutters n' Spouts</div>
        <IntakeFormGutters_n_Spouts />
        <div className="row jc-center"></div>
      </div>
    </PageLayout>
  );
}
