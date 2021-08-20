import React from 'react'
import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components'
import './detailBlog.scss'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory()
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-content">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            <Gap height={20} />
            <Link title="Kembali ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
