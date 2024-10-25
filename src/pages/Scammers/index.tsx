import './styles.scss';
import user from '../../assets/images/avatar-1.png';
function Scammers() {
  return (
    <>
      <section className="alert-scam">
        <div className="alert-scam__header">
          <h2 className="alert-scam__title title">Hôm nay 21/09/2024</h2>
          <p className="alert-scam__desc">CÓ 26 CẢNH BÁO</p>
        </div>
        <ul className="scammer__list">
          <li className="scammer__item">
            <img src={user} alt="avatar" />
            <div className="scammer__info">
              <h3 className="scammer__name">Nguyen Shane</h3>
              <div className="scammer__date">#50 - 12/02/2024</div>
            </div>
          </li>
          <li className="scammer__item">
            <img src={user} alt="avatar" />
            <div className="scammer__info">
              <h3 className="scammer__name">Nguyen Shane</h3>
              <div className="scammer__date">#50 - 12/02/2024</div>
            </div>
          </li>
          <li className="scammer__item">
            <img src={user} alt="avatar" />
            <div className="scammer__info">
              <h3 className="scammer__name">Nguyen Shane</h3>
              <div className="scammer__date">#50 - 12/02/2024</div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Scammers;
