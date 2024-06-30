import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="container" style={{ margin: '0 5em' }}>
        <div className="jc-center">
          <span className="text-s">
            <div className="header-two jc-center">About Us</div>
            <p>
              At House Checkup Digital, our mission is to simplify home
              maintenance for homeowners by providing comprehensive resources
              and tools. We believe that maintaining your home should be
              straightforward and stress-free.
            </p>
            <ul>
              <li>
                <b>Home Maintenance Tracker App</b>
              </li>
              <p className="text-xs">
                Our House Checkup Digital App is designed to be user-friendly
                and not overbearing. You get access to a powerful tool that
                helps you keep track of all your home maintenance needs.
              </p>
              <li>
                <b>Incentives for Homeowners</b>
              </li>
              <p className="text-xs">
                We are dedicated to finding innovative ways to encourage
                homeowners to actively use our app and perform regular
                maintenance. Our incentives program is designed to motivate you
                by offering rewards for completing maintenance tasks and using
                the app consistently.
              </p>
            </ul>
            <p className="text-xs">
              Contact Us If you need further assistance, feel free to contact
              our support team: Email: support@housecheckup.com
            </p>
          </span>
        </div>
      </div>
    </PageLayout>
  );
}
