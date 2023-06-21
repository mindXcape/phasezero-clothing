import Title from 'components/Title/Title';
import { pz_lifestyle1, pz_lifestyle2, phone_screen } from 'assets/index';

function Collection() {
  return (
    <>
      <Title title="COLLECTION" />
      <div className="collection__container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 order-lg-1 order-md-1">
              <div className="collection__image">
                <img src={pz_lifestyle1} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 order-lg-2 order-md-3">
              <div className="collection__image">
                <img src={phone_screen} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-3 order-md-2">
              <div className="collection__image">
                <img src={pz_lifestyle2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
