import React from 'react'
import { RegisterBg } from '../../../assets'
import { Button, Gap } from '../../atoms'
import './blogItem.scss'
import { useHistory } from 'react-router-dom'

const BlogItem = () => {
    const history = useHistory()
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="img-post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')} />
            </div>
        </div>
    )
}

export default BlogItem
