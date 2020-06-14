---
title: 'REST API with Node - Part 2'
description: 'Series membuat REST API menggunakan Node JS & Express. Di part kedua ini kita akan melakukan mengenal yang namanya model, controller, migration dan routes'
slug: 'rest-api-with-node-part-2'
createdAt: '2020-06-14'
heroImage: 'https://res.cloudinary.com/pandemuliada/image/upload/v1592149083/blog/woman-who-code_cuzz7s.jpg'
categories: ['nodejs', 'backend', 'express', 'sequelize']
---

Welcome to Node Series - Part 2! Sesuai janji kemarin kita akan lanjut untuk mengenal `routes`, `controller` dan `model` menggunakan Sequelize. Kalau kalian sudah pernah mencoba framework seperti _Laravel_ atau _Code Igniter_ pasti sudah tidak asing lagi dengan 3 hal diatas. Oke, langsung saja kita mulai.

## Requirements

Beberapa hal yang perlu dipersiapkan

- _Development Environtment_, aku pribadi pakai [Laragon](https://laragon.org/). XAMPP juga boleh
- Keinginan untuk mengikuti tulisan ini, hehe

Oke tanpa basa basi lagi, kita mulai saja cekidot!

---

## Instalasi & Konfigurasi Sequelize

Pertama kita install dulu package sequelize, dan jenis database yang dipakai. Pada contoh kali ini kita pakai mysql

```bash
yarn add sequelize-cli sequelize mysql2
```

Selanjutnya kita lakukan _init_ sequelize nya dengan command berikut

```bash
yarn sequelize-cli init
```

Nah lewat _command_ diatas sequelize bakal meng-_generate_ file yang diperlukan. Strukturnya nanti kira-kira akan seperti ini.

```
// Struktur Direktori

- config
	-- config.json
- migrations
- models
	-- index.js
- seeders

... other files
```

Baik banget ya sequelize. Jadinya kalian gak usah repot buat configurasi sendiri. Kalau bahasa Balinya _"Nampi beres gen!" —_ yang artinya _"terima jadi aja" 😂_

<iframe style="margin-bottom: 15px" src="https://giphy.com/embed/WuGSL4LFUMQU" width="100%" height="374" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Selanjutnya kita tentuin nama database yang bakal dipakai. Jadi kita ubah sedikit configurasinya

```json
// config/config.json

{
  "development": {
    "username": "root",
    "password": null,
    "database": "node_series_development",
    "host": "127.0.0.1", // atau localhost juga bisa
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
		...
    "database": "node_series_test",
		...
  },
  "production": {
    ...
    "database": "node_series_production",
	...
  }
}
```

Nama database yang nanti dipakai adalah `node_series_development`, karena sequelize mengatur secara default project dalam fase development. Jika nanti sudah fase production tinggal ubah setinggan di `models/index.js`. Maka database yang dipakai otomatis adalah `node_series_production`. Berikut caranya.

```js
// models/index.js

...
// FROM THIS
const env = process.env.NODE_ENV || 'development'

// TO THIS
const env = 'production'
...
```

Selanjutnya tinggal buat databasenya lewat Laragon ataupun XAMPP dan sesuaikan nama databasenya dengan yang ada di `config.json`. Sesuai artikel ini namanya adalah `node_series_development`.

Oke konfigurasi sudah selesai, Ayo kita lanjut untuk modelnya.

---

## Model & Migration

Langsung saja kita eksekusi _command_ untuk buat model dan migrationnya.

```bash
yarn sequelize-cli model:generate --name Category --attributes name:string
```

Apa maksud dari _command_ diatas? Menurut pemahamannya Mul gini maksudnya _"Sequelize buatin dong model dengan nama **Category** dan attributnya itu **name** trus tipe datanya **string** sekalian juga generate file **migrationnya**"_. _Got it?_ semoga ngerti ya. Kira-kira hasilnya bakal jadi kayak gini.

```
// Struktur Direktori

...
- migrations
	-- 2020xxx-create-category.js
- models
	-- category.js
	-- index.js
...
```

_"Mul apaan tuh model sama migration?"_ santai boy, kita telaah satu-satu.

### 1. Migration - 2020xxx-create-category.js

```jsx
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Categories')
  },
}
```

Menurut pemahamannya Mul _"**Migration** adalah gambaran dari struktur dari tabel yang akan dibuat"_.

Di file migration ini kita menentukan nama table dan kolom-kolomnya. Jadi kalian tidak usah membuat tabel manual lewat _phpmyadmin_, _adminer_ atau sejenisnya.

Terdapat 2 function disana yaitu `up` dan `down` ketika migration dijalankan maka function yang dijalankan adalah `up` yaitu membuat tabel beserta kolom dan tipe datanya, dan apapun konfigurasi yang terdapat di file migration tersebut. Jika ingin menghapus table kita tinggal melakukan yang namanya _rollback_ (migration di -_undo_). Langsung saja kita coba jalankan migrationnya dengan perintah berikut.

```bash
yarn sequelize-cli db:migrate
```

Sekarang coba lihat di database kalian pasti ada table dengan nama `categories`. Untuk melakukan rollback bisa lihat _command_ dibawah.

```bash
yarn sequelize-cli db:migrate:undo
```

Jika tablenya terhapus berarti sukses dan migrationnya berhasil di-_rollback_. MANTAP JIWA! Setelah itu jalanin ulang lagi ya migrationnya. Jika sudah mari kita lanjooot~

### 1. Model - category.js

```javascript
'use strict'
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      name: DataTypes.STRING,
    },
    {}
  )
  Category.associate = function (models) {
    // associations can be defined here
  }
  return Category
}
```

Setelah _surfing_ cukup lama dengan berbagai gaya di internet untuk menemukan pengertian dari model. Akhirnya nemu yang pas dari [_jagongoding.com_](http://jagongoding.com/)

> **Model** bertugas untuk mengatur, menyiapkan, memanipulasi dan mengorganisasikan data (dari database) sesuai dengan instruksi dari controller — [_jagongoding.com_](http://jagongoding.com/)

Jadi bisa dikatakan model digunakan untuk membantu kita melakukan _query_ ke tabel bersangkutan. Dalam kasus ini tabelnya adalah `categories`. Contoh penggunaan model ada di controller, Jadi tunggu apa lagi, _let's create our first controller ~swuush_

---

## Controller

Sesuai namanya doi yang bakal ngatur atau mengolah request dari client dan juga memberikan response atas request tersebut. Semoga doi kalian kayak si controller ya, biar pas melakukan request ada response-nya. Gak cuma di read aja request-nya tapi gak dikasi response. Hiyayayaya kasian 😂

Bercanda ya hehe. Kita lanjut buat folder `controllers` dan didalamnya buat file dengan nama `category.controller.js`. Dan ketik kode dibawah ini.

```javascript
// controllers/category.controller.js

const Category = require('../models')['Category']

function index(req, res) {
  Category.findAll()
    .then(data => {
      res.json({
        data,
      })
    })
    .catch(err => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

function store(req, res) {
  Category.create({ ...req.body })
    .then(data => {
      res.json({
        data,
      })
    })
    .catch(err => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

function update(req, res) {
  Category.update({ ...req.body }, { where: { id: req.params.id } })
    .then(data => {
      Category.findByPk(req.params.id).then(data => {
        res.json({
          data,
        })
      })
    })
    .catch(err => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

function destroy(req, res) {
  let deletedCategory = null

  Category.findByPk(req.params.id).then(data => {
    deletedCategory = data
  })

  Category.destroy({ where: { id: req.params.id } })
    .then(deleted => {
      res.json({
        data: deletedCategory,
      })
    })
    .catch(err => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}

module.exports = {
  index,
  store,
  update,
  destroy,
}
```

Aku akan jelasin salah satu fungsi yang telah kita buat di controller yaitu `store`. Dimana fungsinya adalah untuk menyimpan data ke tabel bersangkutan.

```javascript
function store(req, res) {
  Category.create({ ...req.body })
    .then(data => {
      res.json({
        data,
      })
    })
    .catch(err => {
      res.json({
        message: 'Something when wrong!',
      })
    })
}
```

Pada contoh diatas kita memanggil fungsi `create` dari model `Category`. Fungsi ini _(create)_ menerima parameter berupa `object` yang berisi data request (`req.body`) client. Dalam kasus ini data yang dikirim oleh client hanya `name`. Jika category berhasil di buat, maka kita berikan response dalam bentuk json yang berisi data yang telah dibuat, jika gagal kita berikan response pesan error. Untuk fungsi-fungsi lain yang ada pada model bisa kalian explore sendiri di dokumentasinya [sequelize](https://sequelize.org/master/class/lib/model.js~Model.html).

---

## Routes

Nah kita belum bisa nih melakukan request ke backend, karena routenya belum ada. Jadi kita buat dulu _routes_-nya. Silahkan ikuti kode dibawah ya.

```javascript
// routes/category.route.js

const Route = require('express')['Router']()

const {
  index,
  store,
  update,
  destroy,
} = require('../controllers/category.controller')

Route.get('/', index)
Route.post('/', store)
Route.put('/:id', update)
Route.delete('/:id', destroy)

module.exports = Route
```

```javascript
// routes/index.js

const Router = require('express')['Router']()
const CategoryRoutes = require('./category.route')

module.exports = () => {
  Router.use('/categories', CategoryRoutes)

  return Router
}
```

Kita ubah juga kode file `server.js`

```javascript
// server.js

const express = require('express')
const app = express()
const cors = require('cors')

const appRoutes = require('./routes')

const port = 3000 || process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({ message: 'Hello node for backend!' })
})

app.use(appRoutes())

app.listen(port, () =>
  console.log(`Server is running on <http://localhost>:${port}`)
)
```

Nah jadi apa yang kita lakukan diatas? Kita me-_register_ route untuk category, agar client (frontend) bisa melakukan request ke backend. Sekarang jika kalian coba di browser kalian ke url `[http://localhost:3000/categories](http://localhost:3000/categories)` pasti akan menampilan tanda array kosong karena memang belum ada data di table category. Jadi kalian bisa coba menambahkan data category lewat `curl` di terminal atau lewat Postman maupun Insomnia.

```bash
curl -d "name=New Category" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:3000/categories
```

Jika kalian coba lagi hit url `[localhost:3000/categories](http://localhost:3000/categories)` di browser, maka akan tampil tuh datanya. Oke kita simpulkan dulu alur kerjanya gimana.

Jadi pertama client (frontend) bakal melakukan request ke url / route yang sudah di-_register_ di backend. Misal route yang di-_request_ adalah `[localhost:3000/categories](<http://localhost:3000/categories>)`. Maka, route akan meneruskan request ke controller di fungsi yang bersangkutan yaitu `index`. Nah, di fungsi ini kita menggunakan model bersangkutan (`Category`) untuk mengambil semua data dari database. Dalam kasus ini mengambil data dari tabel `categories`. Jika berhasil, maka controller akan memberikan response berupa json yang berisi data semua category. Jika gagal maka akan diberikan response error.

Gambarannya kira-kira seperti dibawah

```
Client (Front End) -> Request ke Backend -> Route -> Controller -> Model -> Controller -> Response
```

Akhirnya selesai juga. Gampang kan? Untuk selanjutnya bisa kalian explore sendiri. kalian bisa coba untuk buat contoh lain seperti `Item`, bagaimana melakukan relasi antar tabel, membuat middleware, dan lain-lain.

<iframe style="margin-bottom: 15px" src="https://giphy.com/embed/3ohzdIuqJoo8QdKlnW" width="480" height="222" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Oke jadi sekian dulu tulisan ini. Semoga bermanfaat and _don't forget to share it to your friends. See youu~_

### Github Repository

Codenya cek disini ya, tinggal ganti branchnya aja ke part 2.  
**[Node Rest Api Series Repository](https://github.com/pandemuliada/node-rest-api-series)**
