import { useState, useEffect } from 'react'
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../Service/Config';
import ImageReel from '../ImageReel/ImageReel';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();
  const images = [
    'https://www.evetech.co.za/repository/ProductImages/asus-tuf-gaming-laptop-banner-1586px-615px-v1.jpg',
    'https://www.abboudtrading.com/content/files/images/Razer-VIPER-V2-PRO-Banner.jpg',
    'https://storage-asset.msi.com/event/nb/2017/GF-GV-Series-page/images/banner.jpg',
    'https://www.asus.com/WebsitesBanner/IT/banners/p24rsk1fqxnayxwt/p24rsk1fqxnayxwt-0_0_desktop_1X.jpg',
    'https://storage-asset.msi.com/latam/picture/banner/banner_16783521984447e5ca580af0979a0b58212253a23d.jpeg',
    'https://static.gigabyte.com/StaticFile/Image/Global/318275f385f70b115f765392ef405dc5/PromotionBanner/276/webp/1920',
    'https://static.gigabyte.com/StaticFile/Image/Global/3c9e6ce6b1ca39023805be6aec30a8ea/PromotionBanner/280/webp/1920',
  ];
  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCategoria])
  return (
    <>
      <div className='reel'>
        <ImageReel images={images} />
      </div>
      <h2 className='productsTitle'>Nuestros Productos</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer