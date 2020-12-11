import React from 'react';
import { getDetail } from '../../redux/home/home.actions';
import { useDispatch } from 'react-redux'
import { ReactComponent as Love } from '../../assets/love.svg';
import { ReactComponent as BathRoom } from '../../assets/bath-room.svg';
import { ReactComponent as BadRoom } from '../../assets/bad-room.svg';
import { ReactComponent as Building } from '../../assets/building.svg';
import { ReactComponent as Ground } from '../../assets/ground.svg';
import './collection-item.styles.scss';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch()
  const { price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='label-info'>
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
        dispatch(getDetail(item, 'detail'))
      }}>
        Lihat Detail
        </button>
    </div>
  );
};

export default CollectionItem;