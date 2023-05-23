//Lista de productos

const productos = [
    { nombre: "Procesador Ryzen5 5600g", precio: 679.90, stock: 5, id: "CPURZ55600G", img: "https://cyccomputer.pe/36781-large_default/procesador-amd-ryzen-5-5600g-39ghz-16mb-6core-am4-.jpg", idCat: "componentes" },
    { nombre: "Memoria RAM Corsair 16GB/3200Mhz", precio: 259.90, stock: 10, id: "RAMCOR3200", img: "https://cyccomputer.pe/42252-large_default/memoria-16gb-2x8gb-ddr4-corsair-vengeance-rgb-pro-sl-white-bus-3200mhz-comp-amd-pncmh16gx4m2e3200c16w.jpg", idCat: "componentes" },
    { nombre: "Monitor Asus Proart 27", precio: 1429.00, stock: 10, id: "PA278QV", img: "https://www.infotec.com.pe/71823-thickbox_default/monitor-asus-proart-27-pa278qv-panel-ips-wqhd-2560x1440-hdmi-dp-usb-hub.jpg", idCat: "componentes" },
    { nombre: "CASE Antryx RX 430U White", precio: 249.00, stock: 10, id: "AC-RX430UW", img: "https://www.infotec.com.pe/67664-thickbox_default/case-antryx-rx-430u-white-ac-rx430uw-sin-fuente-vidrio-templado-led-rgb.jpg", idCat: "componentes" },
    { nombre: "Mouse Razer Deathradder V2 Mini", precio: 119.00, stock: 10, id: "RZ01-03340100-R3U1", img: "https://www.infotec.com.pe/40051-thickbox_default/mouse-gamer-razer-deathadder-v2-mini-rz01-03340100-r3u1-dpi-8500-rgb.jpg", idCat: "componentes" },
    { nombre: "Coller cpu Aerocool Mirage 5 ARGB Intel/AMD", precio: 149.00, stock: 10, id: "018013", img: "https://www.infotec.com.pe/46921-thickbox_default/cooler-para-procesador-aerocool-mirage-5-argb-intel-amd.jpg", idCat: "componentes" },
    { nombre: "Pc de escritorio Ryzen5 5600X - GTX1050ti", precio: 2575.00, stock: 10, id: "DESKRZ5600X", img: "https://www.infotec.com.pe/71843-large_default/computadora-swain-amd-ryzen-5-5600x-8gb-500gb-ssd-t-video-gtx-1050ti-4gb.jpg", idCat: "pc-escritorio" },
    { nombre: "Laptop Gigabyte Aorus RTX3070", precio: 6999.00, stock: 10, id: "LAPGIGARTX3070", img: "https://www.infotec.com.pe/74345-large_default/laptop-gamer-gigabyte-aorus-5-se4-73la513sh-i7-12700h-16gb-512gb-t-video-rtx-3070-8gb-156-fhd-windows-11.jpg", idCat: "laptops" },
    { nombre: "Pc Create Intel I3 10105 8GB", precio: 1429.00, stock: 10, id: "016648", img: "https://www.infotec.com.pe/71908-thickbox_default/computadora-create-intel-i3-10105-8gb-500gb-ssd-185-hd.jpg", idCat: "pc-escritorio" },
    { nombre: "Pc KRATOS Ryzen 5 5600X 16GB", precio: 4419.00, stock: 10, id: "010709", img: "https://www.infotec.com.pe/72778-thickbox_default/computadora-kratos-ryzen-5-5600x-16gb-500gb-ssd-t-video-rtx-3060-12gb.jpg", idCat: "pc-escritorio" },
    { nombre: "Laptop Asus TUF FX517ZC", precio: 4189.00, stock: 10, id: "FX517ZC", img: "https://www.infotec.com.pe/74358-thickbox_default/laptop-gamer-asus-tuf-fx517zc-hn005w-i5-12450h-16gb-ddr5-512gb-ssd-t-video-rtx-3050-4gb-156-fhd-wv-144hz-windows-11.jpg", idCat: "laptops" },
    { nombre: "Laptop Asus EXPERTBOOK", precio: 3929.00, stock: 10, id: "B1400CEAE", img: "https://www.infotec.com.pe/66812-thickbox_default/laptop-asus-expertbook-b1400ceae-ek2456r-i5-1135g7-8gb-512gb-ssd-14-fhd-windows-10-pro-90nx0421-m28090.jpg", idCat: "laptops" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}