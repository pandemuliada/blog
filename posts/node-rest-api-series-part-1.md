---
title: 'Node REST API Series - Part 1'
description: 'Series membuat REST API menggunakan NodeJS'
slug: 'node-rest-api-series-part-1'
createdAt: '2020-04-14'
heroImage: '/static/posts/node-rest-api-series/how-rest-work.png  '
categories: ['nodejs', 'backend', 'express']
---

Sekitar beberapa minggu yang lalu (sampai sekarang) saya sedang mempelajari backend yaitu membuat sebuah REST API menggunakan Node. Jadi kali ini saya ingin membuat sebuah series kecil-kecilan terkait membuat REST API menggunakan Node.

## Apa itu REST

Menurut beberapa sumber yang saya baca, _"REST adalah sebuah arsitektur metode komunikasi yang menggunakan protokol HTTP untuk melakukan pertukaran data"_.

Menurut pengalaman saya, sebuah aplikasi biasanya dipisah antara backend dan frontend guna memudahkan pengembangannya. Sehingga developer bisa fokus ke jobdesk mereka masing-masing.

Nah, di sisi backend biasanya menggunakan arsitektur REST yang ciri utamanya adalah responsenya yang berbentuk JSON.

Gimana cara kerjanya? Gini, Client akan melakukan request ke server dengan menggunakan method HTTP (get, post, put, delete, etc) dan server akan memproses data dan selanjutnya mengirimkan respon ke client.

![Something](/static/posts/node-rest-api-series/how-rest-work.png)

_So, what are you waiting for? open your code editor and let's begin!_

---

## Ngoding Kita, Yuhuu 🎉

Pertama kita buat folder dan lakukan init project, oiya, saya makenya `yarn`, kalau kalian pakenya npm nanti sesuaikan aja commandnya, cek [disini](https://classic.yarnpkg.com/en/docs/migrating-from-npm/). Ketik command dibawah di terminal (cmd, powershell or whatever you use)

    mkdir node-rest-api && cd node-rest-api

    npm init -y
    ## OR ##
    yarn init -y

Selanjutnya kita install package-package yang diperlukan. Disini saya akan memakai express.

    yarn add express nodemon cors

Selanjutnya buat file dengan nama `server.js`

    const express = require('express')
    const app = express()
    const cors = require('cors')

    const port = 3000 || process.env.PORT

    app.use(cors())

    app.get('/', (req, res) => {
      res.send({ message: 'Hello node for backend!' })
    })

    app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))

Selanjutnya kita ubah `package.json` di bagian `main` dan `scripts`, dependenciesnya jangan diubah ya, karena itu otomatis ditambahkan ketika menambah package

    {
      "name": "node-rest-api",
      "version": "1.0.0",
      "main": "server.js",
      "license": "MIT",
      "scripts": {
        "start": "nodemon server.js"
      },
      "dependencies": {
        "cors": "^2.8.5",
        "express": "^4.17.1",
        "nodemon": "^2.0.3"
      }
    }

Sekarang ketik `yarn start` di terminal dan ketik [`http://localhost:3000`](http://localhost:3000) di browser anda, apa yang tampil?

Jika yang tampil adalah `{ "message": "Helo node for backend!" }` . Congratulation, you have create your first nodejs backend using express~ 🥳🎉

Oke sekarang akan saya jelaskan mulai dari file `server.js` . Jadi apa yang sebenarnya telah kita lakukan?

- Line 1 : import package express
- Line 2 : instansiasi express, biar bisa make fungsi-fungsinya express
- Line 3 : import package `cors` . Gunanya apa? misal api kita ini ada di server yang berbeda dengan frontend kita bisa melakukan CORS (Cross-Origin Resource Sharing) atau bisa saling sharing data. Contoh frontend ada di `www.pandemuliada.com` sementara backend (rest api) ada di `www.apinyamul.com`
- Line 5 : Mendefinisikan port berapa yang akan digunakan, disini saya set 3000
- Line 7 : Menggunakan `cors` pada express
- Line 9 - 11 : Buat route dengan path `/`,
- Line 13 : Menjalankan server sesuai dengan port yang telah di definisikan diatas

Selanjutnya di `package.json` fokusnya sebenarnya cuma di bagian `scripts` dimana saya membuat script `start` sehingga memudahkan kita untuk start server. Jadinya untuk jalankan servernya, kita make `yarn start` atau `npm run start` daripada ngetik `nodemon server.js`.

So, what's next Mul? Di part 2 kita akan lanjut membuat membuat route, controller, model menggunakan [Sequelize](https://sequelize.org/).
