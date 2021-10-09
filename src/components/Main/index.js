import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

import {fetchPicture} from '../../features/picture/pictureSlice';
import {getAllPicture} from '../../features/picture/pictureSlice';

import Card from '../Card/index';

import styles from './styles.module.scss';

function Main() {
    const dispatch = useDispatch();
    const pictures = useSelector(getAllPicture);
    const { id } = useParams();
    let query = 1;
    console.log('ID', id);

    const MoreShow = () => {
        query += 1;
        dispatch(fetchPicture(query));
    }

    useEffect((id) => {
        dispatch(fetchPicture(query, id));
    }, [dispatch, query, id]);

    const pictureList = (pictures.length > 0) ? 
            (
                pictures?.map(picture =>(
                    <Card key={picture.id} data={picture}/>
            ))
            ):(
                <p>Loading ...</p>
            );

    return (
        <div className={styles.container}>
            <h2>Cats</h2>
            <div className={styles.moviesList}>
                {pictureList}
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.loadBtn} onClick={MoreShow}>Show more</button>
            </div>
        </div>
    )
}

export default Main;
