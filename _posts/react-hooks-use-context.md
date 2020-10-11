---
title: 'React Hooks : useContext'
description: 'Berkenalan dengan React Hook : useContext'
slug: 'react-hooks-use-context'
createdAt: '2020-03-17'
heroImage: '/static/posts/use-context.png'
categories: ['react', 'front end']
---

Halo semua, gimana kabar kalian ? semoga baik-baik saja ya. Tetap jaga kesehatan ya, dan stay at home untuk sementara. Kali ini kita akan melanjutkan mempelajari tentang react hook yaitu **useContext**.

## Apa itu useContext

Context digunakan ketika kita ingin menyimpan state secara global, sehingga state itu bisa digunakan oleh komponen-komponen lain yang membutuhkan. Context akan terasa manfaatnya jika komponen kita sudah banyak dan bertingkat-tingkat sehingga kita tidak perlu melakukan _"prop-drilling"_ untuk mengirim data ke komponen yang jauh berada di bawah.

Sebelum hooks rilis menurut saya pribadi menggunakan context caranya cukup ribet. Tapi dengan adanya useContext penggunaan context jadi lebih mudah. Langsung saja kita coba ya.

## Membuat Context

Kali ini kita menggunakan contoh kasus counter seperti sebelumnya. Pertama kita membuat contextnya dulu, saya menamainya `CounterContext.js`.

```jsx
import React, { createContext } from 'react'
const CounterContext = createContext(null)

export default CounterContext
```

Selanjutnya kita akan membuat context provider

## Membuat Context Provider

Sesuai dengan namanya context provider berfungsi untuk provide/menyediakan state atau data yang akan digunakan komponen lainnya. Saya menamainya `CounterProvider.js`

```jsx
import React, { useState } from 'react'
import CounterContext from './CounterContext'

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(1)
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider
```

Pada kode diatas kita membuat context provider dengan valuenya adalah state `count` dan fungsi untuk mengubah state `count` itu sendiri yaitu `setCount`. Selanjutnya kita akan membungkus komponen yang akan menggunakan state tersebut dengan context provider yang telah kita buat. Pada kasus ini saya akan melakukannya di file `App.js` yang berada di folder src.

## Menggunakan useContext

Disini kita membungkus komponen `App` dengan menggunakan `CounterProvider` sehingga komponen lain seperti `DeepComponent` dan `AnotherComponent` bisa menggunakan state yang ada pada context.

```jsx
// App.js

import React from 'react'

import CounterProvider from './CounterProvider'
import DeepComponent from './DeepComponent'
import AnotherComponent from './AnotherComponent'

export default function App() {
  return (
    <CounterProvider>
      <div className="App">
        <DeepComponent />
        <AnotherComponent />
      </div>
    </CounterProvider>
  )
}
```

### 1. Deep Component

Berikut adalah kode dari `DeepComponent.js`

```jsx
// DeepComponent.js

import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const DeepComponent = () => {
  const { count, setCount } = useContext(CounterContext)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  )
}

export default DeepComponent
```

### 2. Another Component

Berikut adalah kode dari `AnotherComponent.js`

```jsx
// AnotherComponent.js

import React, { useContext } from 'react'
import CounterContext from './CounterContext'

const AnotherComponent = () => {
  const { count } = useContext(CounterContext)

  return (
    <div>
      <h2>Komponen lain yang menggunakan state count</h2>
      <h3>{count}</h3>
    </div>
  )
}

export default AnotherComponent
```

Pada kedua komponen tersebut (`DeepComponent` & `AnotherComponent`) kita menggunakan hooks yang namanya `useContext`. Pada komponen `DeepComponent` kita mengambil state `count` dan fungsi `setCount` dari `CounterContext`. Sedangkan pada komponen `AnotherComponent` kita mengambil state `count` saja dari `CounterContext`.

Jadi state `count` digunakan oleh kedua komponen tersebut. Apa yang terjadi pada `AnotherComponent` ketika count ditambah di `DeepComponent` ? Jawabannya adalah count yang ada pada `AnotherComponent` juga ikut berubah. Kenapa bisa begitu?

Karena kedua komponen tersebut menggunakan satu context yang sama (`CounterContext`). Yang di dalam context tersebut terdapat state (`count`) yang dipakai oleh kedua komponen. Jadi ketika komponen `DeepComponent` mengubah state yang ada pada context tersebut (`count`) maka komponen lain yang juga menggunakan state context tersebut juga akan mendapatkan perubahannya. Inilah yang disebut sebagai **Global State**.

Misalkan state kita taruh di `DeepComponent` yang berada jauh di dalam/bawah. Tapi ternyata kita juga memerlukan state itu di komponen yang berada jauh diatasnya. Maka kita tidak bisa mengambil state tersebut. karena di React cara pengiriman data itu **top-to-down** atau dari atas kebawah. Pada kasus seperti inilah kita bisa menggunakan context.

Oke sekian dulu tulisan kali ini, semoga bermanfaat dan membantu. Untuk code penggunaan context di tulisan ini bisa di cek [disini](https://codesandbox.io/s/elegant-franklin-ck9m4)

### Links

- [React Official Docs - Context](https://reactjs.org/docs/context.html)
- [React Official Docs - useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
