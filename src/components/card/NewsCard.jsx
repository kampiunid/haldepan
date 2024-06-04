import Link from 'next/link'
import { generateExcerpt } from '../../utils/excerptGenerator';

const Card = ({ item, dark }) => {
  const baseURL = process.env.NEXTAUTH_URL;
  const excerptTitle = generateExcerpt(item.title,75);
  //const excerptDesc = generateExcerpt(item.desc,100).replace(/<[^>]+>/g, ''); // Menghapus tag HTML
  return (
      <>
        <div className="row mb-3">
          <div className="col-lg-4 col-md-4">
            <div className="position-relative rounded" style={{ paddingBottom: '65%', height: 0, overflow: 'hidden' }}>
              <img 
                src={item.img || `${baseURL}/images/gallery-5.jpg`} 
                alt='business' 
                className="position-absolute top-0 start-0 w-100 h-100" 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className='col-lg-8 col-md-8'>
            <div className='trending-news-item'>
              <div className='trending-news-content'>
                <div className='post-meta'>
                  <div className='meta-categories'>
                    <Link href={`/posts/${item.catSlug}`}>{item.catSlug}</Link>
                  </div>
                  <div className='meta-date'>
                    <span>{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
                <h3 className='title'>
                  <Link href={`/posts/${item.slug}`}>{excerptTitle}</Link>
                </h3>
                <h5>
                  <Link href={`/posts/${item.slug}`} passHref>
                    <button className="btn btn-sm btn-outline-secondary mt-2">Selengkapnya</button>
                  </Link>
                </h5>
                
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Card;
