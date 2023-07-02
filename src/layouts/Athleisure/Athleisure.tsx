import { aab, aac } from 'assets/Images';
import Title from 'components/Title/Title';

function Athleisure() {
  return (
    <>
      <Title title="A for Artist" />
      <div>
        <div className="athleisure__container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 col-sm-6">
              <div className="athleisure__video">
                <img src={aac} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 col-sm-6">
              <div className="athleisure__video">
                <img src={aab} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Athleisure;
