import { PageLayout } from '../pages';
import '../../styles/_styles.scss';

export default function ResourcePage() {
  return (
    <PageLayout>
      <div className="container" style={{ margin: '0 5em' }}>
        <div className="jc-center">
          <span className="text-s">
            <div className="header-two jc-center">Resources</div>
            <ul>
              <li>
                <a href="/add-device">Video: How to Add a Device</a>
              </li>
              <br />
              <li>Guide: Managing Maintenance Schedules</li>
              <br />
              <li>Tutorial: Setting Up Notifications</li>
            </ul>
            <p>
              Contact Us If you need further assistance, feel free to contact
              our support team: Email: support@housecheckup.com
            </p>
          </span>
        </div>
      </div>
    </PageLayout>
  );
}
