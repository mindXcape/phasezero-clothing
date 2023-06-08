import { displaypic, athleisureback, athleisurefront } from '../../assets';
import '../../scss/main.scss';
import Title from '../../components/Title/Title';

function Athleisure() {
  return (
    <>
      <Title title="ATHLEISURE" />
      <div className="container my-4">
        <div className="athleisure__container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-9 col-sm-6">
              <div className="athleisure__video">
                <img src={displaypic} alt="" />
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-3 col-sm-6">
              <div className="athleisure__image__container">
                <div className="row">
                  <div className="col-md-6 col-6 col-lg-12 ">
                    <div className="athleisure__image mb-3">
                      <img src={athleisureback} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6 col-6 col-lg-12">
                    <div className="athleisure__image">
                      <img src={athleisurefront} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Athleisure;
