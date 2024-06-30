import { useHistory } from 'react-router-dom';
import '../../styles/_styles.scss';
import { PageLayout } from '../pages';
import './_deviceHowToVideos.scss';

function DeviceHowToVideos() {
  const history = useHistory();

  return (
    <PageLayout>
      <div className="how-to-container">
        <div className="header-two jc-center">How To Videos</div>
        <div className="jc-center">
          <iframe
            width="297"
            height="223"
            src="https://www.youtube.com/embed/sOcfx5o9-B4"
          />
        </div>
        <div className="column jc-center">
          <div className="row jc-center">
            <button
              className="btn btn_asLink text-s"
              href="https://www.youtube.com/watch?v=sOcfx5o9-B4"
            >
              Helpful Video 1
            </button>
          </div>
          <div className="row jc-center">
            <button
              className="btn btn_asLink text-s"
              href="https://www.youtube.com/watch?v=_g8gQ1gg1FM"
            >
              Helpful Video 2
            </button>
          </div>
          <div className="row jc-center">
            <button
              className="btn btn_asLink text-s"
              href="https://www.youtube.com/watch?v=1bRsFAMgZRQ"
            >
              Helpful Video 3
            </button>
          </div>
        </div>
        <div className="row jc-center">
          <p className="btn" onClick={() => history.goBack()}>
            Back
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default DeviceHowToVideos;
