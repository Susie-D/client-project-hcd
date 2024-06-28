import { useHistory } from 'react-router-dom';
import { LoginForm } from '../../components/components';
import { PageLayout } from '../pages';
import './_loginPage.scss';
import '../../styles/_styles.scss';

function LoginPage() {
  const history = useHistory();

  return (
    <div className="login-container">
      <PageLayout>
        <LoginForm />
        <div className="row jc-center">
          <p className="text-s">Need an account?&nbsp;&nbsp;</p>
          <button
            type="button"
            className="btn btn_asLink text-s"
            onClick={() => {
              history.push('/sign-up');
            }}
          >
            Sign Up
          </button>
        </div>
      </PageLayout>
    </div>
  );
}

export default LoginPage;