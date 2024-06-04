import Link from 'next/link';
import { generateExcerpt } from '../../utils/excerptGenerator';

const GalleryCard = ({ item, dark }) => {
  //const baseURL = process.env.NEXTAUTH_URL;
  const baseURL = 'http://localhost:3000';
  const excerpt = generateExcerpt(item.desc, 200);
  // Membersihkan teks dari karakter yang tidak diinginkan
  const cleanedExcerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className={`post_gallery_play ${dark ? 'post_gallery_play_dark' : ''}`} style={{ position: 'relative', width: '100%', height: '450px', overflow: 'hidden' }}>
      <img 
        src={item.img || `${baseURL}/images/gallery-5.jpg`}
        alt={item.title}
        style={{
          position: 'relative',
          width: '1600px',
          height: '100%',
          objectFit: 'cover', // Gunakan object-fit: cover; untuk menjaga rasio aspek
        }}
      />
      <div className='post__gallery_play_content' style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        background: 'rgba(0, 0, 0, 0.5)', 
        color: '#fff', 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-end' 
      }}>
        <div style={{ marginBottom: '10px' }}>
          <div className='post-meta' style={{ marginBottom: '5px' }}>
            <div className='meta-categories'>
              <Link href={`/posts/${item.catSlug}`} style={{ color: '#fff', textDecoration: 'none' }}>{item.catSlug}</Link>
            </div>
            <div className='meta-date'>
              <span>{item.createdAt.substring(0, 10)}</span>
            </div>
          </div>
          <h2 className='title' style={{ margin: '5px 0' }}>
            <Link href={`/posts/${item.slug}`} style={{ textDecoration: 'none', color: '#fff' }}>{item.title}</Link>
          </h2>
          <p style={{ marginBottom: '10px', color: '#fff' }} dangerouslySetInnerHTML={{ __html: cleanedExcerpt }}></p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
