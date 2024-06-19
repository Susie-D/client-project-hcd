import { useHistory } from 'react-router-dom';
import { PageLayout } from '../pages';
import Logo from '../../assets/HouseCheckup.svg?react';
import '../../styles/_styles.scss';

// CUSTOM COMPONENTS
import IntakeFormBase from '../../components/IntakeForm/IntakeFormBase';

function FurnaceIntakePage() {
    const history = useHistory();



  return (
    <PageLayout>
      <div className="header-three jc-center">Intake Screen</div>
      <div className="">
      <div className="header-two jc-center">Furnace</div>
        <IntakeFormBase />
        {/* <> $ additional_device_info will go here! </> */}
        <div className="row jc-center">
        <button 
                className="btn"
                onClick={() => {
                history.push('/user');
                }}
                >Back
            </button>
            {/* <button
                className="btn"
                type="button"
                onClick={() => {
                history.push('/tracking-intake');
                }}
                >Next
            </button> */}
            <button
                className="btn"
                type="submit"
                onSubmit={(event) => {
                event.preventDefault();
                }}
                >Submit
            </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default FurnaceIntakePage;