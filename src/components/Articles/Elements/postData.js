import React from 'react';
import styles from '../articles.css';

const postData = (props) => (
    <div className={styles.articlePostData}>
        <div>
            Date:
            <span>{props.data.date}</span>
        </div>
        <div>
            Author: Kumar Ojas
            <span>{props.data.author}</span>
        </div>
    </div>
) 

export default postData;
