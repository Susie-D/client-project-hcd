import { PageLayout } from '../pages';
import { useHistory } from 'react-router-dom';
import { SignUpForm } from '../../components/components';
import Logo from '../../assets/HouseCheckup.svg?react';
import './_signUpPage.scss';

function SignUpPage() {
  const history = useHistory();

  return (
    <div className="signUp-container">
      <PageLayout>
        <SignUpForm />
        <div className="row jc-center">
          <p className="text-s">Have an account?&nbsp;&nbsp;</p>
          <button
            type="button"
            className="btn btn_asLink text-s"
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </button>
        </div>
      </PageLayout>
    </div>
  );
}

export default SignUpPage;
