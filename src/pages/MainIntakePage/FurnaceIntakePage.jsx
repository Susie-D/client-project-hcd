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
      <div className="login-container">
        <div className="row jc-center">
          <Logo />
        </div>
        <IntakeFormBase />
        {/* <> $ additional_device_info will go here! </> */}
        <div className="row jc-center">
            <button
                type="button"
                onClick={() => {
                history.push('/tracking-intake');
                }}
            >Next
            </button>
        <p></p>
            <button 
                className="btn"
                onClick={() => {
                    history.push('/user');
                    }}
                >Back
            </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default FurnaceIntakePage;