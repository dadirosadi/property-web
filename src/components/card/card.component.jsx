import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../redux/home/home.actions';
import { ReactComponent as Love } from '../../assets/love.svg';
import { ReactComponent as BathRoom } from '../../assets/bath-room.svg';
import { ReactComponent as BadRoom } from '../../assets/bad-room.svg';
import { ReactComponent as Building } from '../../assets/building.svg';
import { ReactComponent as Ground } from '../../assets/ground.svg';
import './card.styles.scss';

const Card = ({ item }) => {
  const dispatch = useDispatch()
  const { type } = useSelector((state) => state.home)
  const { price, imageUrl } = item;

  return (
    <>
      <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: type === "detail" ? `url(${imageUrl})` : `url('https://res.cloudinary.com/practicaldev/image/fetch/s--1nt6RlXf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.ibb.co/RDWCvDg/Screen-Shot-2019-04-24-at-10-30-40-PM.png')`
          }}
        />{
          type === "detail" ? <><div className='label-info'>
            <span className='sell'>Dijual</span>
            <span className='nego'>Nego</span>
            <span className='love'><Love /></span>
          </div>

            <div className='price-info'>
              <span className='installment'><span className='price'>Rp {price} jt</span> Cicilan Rp 2,6 jt/bln</span>
            </div>
            <div className='room-info'>
              <span className='bad-room'><BadRoom className='img' /> K.Tidur </span>
              <span className='bath-room'><BathRoom className='img' /> K.Mandi</span>
              <span className='width-room'><Building className='img' /> 64m2</span>
              <span className='heigh-room'><Ground className='img' /> 25m2</span>
            </div>
            <button className='custom-button' onClick={() => {
              type === 'detail' && dispatch(getDetail(item, 'map'))
              type === 'map' && dispatch(getDetail(item, 'detail'))
            }}>
              {type === 'detail' && 'Buka Map'}
              {type === 'map' && 'Tutup Map'}
              {!type && 'Lihat Detail'}
            </button> </> :
            <div>
              <h2>Jalan Sukajadi</h2>
              <p className='info-map' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <button className='custom-button' onClick={() => {
                dispatch(getDetail(item, 'detail'))
              }}> Tutup </button>
            </div>

        }

      </div>
    </>
  );
};

export default Card;