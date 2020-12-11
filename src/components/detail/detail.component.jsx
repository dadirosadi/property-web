import React from 'react';
import { useDispatch } from 'react-redux'
import { getDetail } from '../../redux/home/home.actions';
import './detail.styles.scss';
import Card from '../card/card.component';

const DetailPage = ({ item }) => {
    const dispatch = useDispatch()

    return <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={() => dispatch(getDetail(null, ''))}>&times;</span>
            <div className='card'>
                <Card id={1} item={item} />
            </div>
        </div>
    </div>
};

export default DetailPage;
