import {
  tenth,
  fourth,
  second,
  third,
  fivth,
  sixth,
  seventh,
  eighth,
} from '../../assets';
import Countdown from '../../components/CountDown/CountDown';
import UnderConstructionLeft from './UnderConstructionLeft';
import UnderConstructionRight from './UnderConstructionRight';

function UnderConstructionPage() {
  return (
    <>
      <Countdown
        targetDate={new Date('2023-06-15T00:00:00')}
        initialDays={2}
        initialHours={6}
        initialMinutes={30}
        initialSeconds={60}
      />
      <div className="under__construction__images__main">
        <div className="under__construction__title">
          <h2>PHASES OF PHASE ZERO</h2>
        </div>
        <div className="under__construction__images__wrapper">
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                  <UnderConstructionLeft
                    imageTop={tenth}
                    imageBottom={second}
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                  <UnderConstructionRight
                    imageTop={third}
                    imageBottom={fourth}
                  />
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                  <UnderConstructionLeft imageTop={fivth} imageBottom={sixth} />
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                  <UnderConstructionRight
                    imageTop={seventh}
                    imageBottom={eighth}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnderConstructionPage;
