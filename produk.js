const fs = require('fs');

// Membaca data dari file JSON
const readData = () => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error membaca file:', err);
            return;
        }
        const products = JSON.parse(data);
        console.log('Data Produk:', products);
    });
};

// Menambahkan produk baru
const addProduct = (newProduct) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error membaca file:', err);
            return;
        }
        const products = JSON.parse(data);
        products.push(newProduct);

        fs.writeFile('data.json', JSON.stringify(products, null, 4), (err) => {
            if (err) {
                console.log('Error menulis file:', err);
            } else {
                console.log('Produk berhasil ditambahkan!');
            }
        });
    });
};

// Mengupdate produk berdasarkan ID
const updateProduct = (productId, updatedData) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error membaca file:', err);
            return;
        }
        const products = JSON.parse(data);
        const productIndex = products.findIndex(p => p.id === productId);

        if (productIndex === -1) {
            console.log('Produk tidak ditemukan');
            return;
        }

        // Update data produk
        products[productIndex] = { ...products[productIndex], ...updatedData };

        fs.writeFile('data.json', JSON.stringify(products, null, 4), (err) => {
            if (err) {
                console.log('Error menulis file:', err);
            } else {
                console.log('Produk berhasil diupdate!');
            }
        });
    });
};

// Menghapus produk berdasarkan ID
const deleteProduct = (productId) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error membaca file:', err);
            return;
        }
        let products = JSON.parse(data);
        products = products.filter(p => p.id !== productId);

        fs.writeFile('data.json', JSON.stringify(products, null, 4), (err) => {
            if (err) {
                console.log('Error menulis file:', err);
            } else {
                console.log('Produk berhasil dihapus!');
            }
        });
    });
};

// Contoh penggunaan:
// Membaca data produk
readData();

// Menambahkan produk baru
const newProduct = {
    "id": 2,
    "name": "Coca Cola 330ml",
    "price": 7000,
    "old_price": null,
    "image_url": "./assets/images/coca_cola.jpg",
    "stock": 100
};
addProduct(newProduct);

// Mengupdate produk dengan ID 2
updateProduct(2, { "stock": 120 });

// Menghapus produk dengan ID 1
deleteProduct(1);
