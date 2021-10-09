import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategory} from '../../features/category/categorySlice';
import {getAllCategory} from '../../features/category/categorySlice';
import styles from './styles.module.scss';

function Sidebar() {
   const dispatch = useDispatch();
   const category = useSelector(getAllCategory);

    useEffect(() => {
        dispatch(fetchCategory());
    }, [dispatch])

    return (
        <div className={styles.sidebarContainer}>
            {category.length > 0 ? (
                <nav>
                    <ul>
                        {category?.map(item => (
                            <li key={item.id}>
                                <Link to={`/category/${item.id}`}>
                                   <p> {item.name}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>) : (
                    <p>Loading ...</p>
                )}
        </div>
    )
}

export default Sidebar;
