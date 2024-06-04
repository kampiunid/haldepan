import Link from 'next/link'
import { generateExcerpt } from '../../utils/excerptGenerator';

const Card = ({ item, dark }) => {
  const baseURL = process.env.NEXTAUTH_URL;
  const excerptTitle = generateExcerpt(item.title,46);
  return (
      <>
        <div className='gallery_item_thumb' style={{ width: '100px', height: '77px', overflow: 'hidden', flex: 'none' }}>
          <div style={{ width: '100px', height: '77px', backgroundImage: `url(${item.img || baseURL + '/images/gallery-5.jpg'})`, backgroundSize: 'cover' }}></div>
        </div>
        <div className='gallery_item_content'>
          <div className='post-meta'>
            <div className='meta-categories text-uppercase'>
              <Link href={`/posts/${item.catSlug}`}>{item.catSlug}</Link>
            </div>
            <div className='meta-date'>
              <span>{item.createdAt.substring(0, 10)} {" "}</span>
            </div>
          </div>
          <h4 className='title'>
            <Link href={`/posts/${item.slug}`}>{excerptTitle}</Link>
          </h4>  
        </div>
      </>
  );
};

export default Card;
