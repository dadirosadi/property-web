import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './homepage.styles.scss';
import { getAllProperty } from '../../redux/home/home.actions';
import CollectionItem from '../../components/collection-item/collection-item.component';
import Detail from '../../components/detail/detail.component';


const HomePage = () => {
    const dispatch = useDispatch()
    const { data, type, item } = useSelector((state) => state.home)

    useEffect(() => {
        dispatch(getAllProperty());
    }, [dispatch])

    return <>
        <div className='homepage' >
            {data.length && data.map(property => {
                return <div key={property.id} className='collection-page'>
                    <h2 className='title'>{property.title}</h2>
                    <div className='items'>
                        {property.items.map(item => {
                            return <CollectionItem key={item.id} item={item} />
                        })}
                    </div>
                </div>
            })}
        </div >
        { type && <Detail item={item} />}
    </>
};

export default HomePage;
