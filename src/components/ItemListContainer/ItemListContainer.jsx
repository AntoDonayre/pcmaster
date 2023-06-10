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
    'https://www.gigabyte.com/FileUpload/global/News/1876/o202105181422055711.jpg',
    'https://cdn.shopify.com/s/files/1/1780/7915/files/ASUS_Intel_Gaming_Pro_Desktop_PC_-_From_TPSTech_-_Main_Banner.jpg?v=1638683789',
    'https://cdn.shopify.com/s/files/1/1780/7915/files/Razer_Viper_Razer_DeathAdder_V2_Mini_From_tpstech-main_banner.jpg?v=1654588178',
    'https://avp.asus.com/wp-content/uploads/2021/03/Display_ProArt_banner.jpg',
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