---
title: 'React Hooks : useEffect'
description: 'Berkenalan dengan React Hook : useEffect'
slug: 'react-hooks-use-effect'
createdAt: '2020-02-23'
heroImage: '/static/posts/use-effect.png'
categories: ['react', 'front end']
---

Halo semua, gimana kabar kalian di hari minggu ini ? semoga baik-baik saja ya. Kali ini kita akan melanjutkan mempelajari tentang react hook yaitu **useEffect**. Pada artikel sebelumnya kita sudah mempelajari yang namanya **useState**, yang belum membaca tulisan sebelumnya bisa dibaca dulu ya [disini](/posts/react-hooks-use-state).

## Apaan tuh useEffect

Nah, dalam suatu komponen di react, kita biasanya melakukan yang namanya _‘side effects’_. Contoh side effect yaitu _fetching data, subscription, dll_. Kita bisa melakukan proses tersebut di dalam lifecycle suatu komponen yaitu _componentDidMount, componentDidUpdate, componentWillUnmount_. Namun itu hanya bisa dilakukan di class komponen saja, tetapi berkat adanya hooks sekarang lifecycle tersebut bisa kita gunakan di function component.

## useEffect in Action

Berikut adalah contoh-contoh penggunaan useEffect

```jsx
useEffect(() => {
  console.log('Side Effect in akan berjalan setiap re-render')
})
```

Kode yang kita buat diatas akan dijalankan setiap kali komponen di re-render

### componentDidMount in useEffect

```jsx
useEffect(() => {
  console.log('Side Effect in akan berjalan saat render pertama kali')
}, [])
```

Kode yang kita buat diatas akan dijalankan hanya saat pertama kali komponen di render, karena disana kita menambahkan yang namanya _dependencies_, yaitu berupa array kosong (`[]`).

### componentDidUpdate in useEffect

```jsx
const [count, setCount] = useState(0)
useEffect(() => {
  console.log(
    'Side Effect in akan berjalan saat state / props valuenya berubah'
  )
}, [count])
```

Kode yang kita buat diatas akan dijalankan saat terdapat perubahan pada state `count`, karena di dalam dependencies kita menambahkan state yang mau di watch dalam hal ini adalah `count`. Jadi ketika ada ada perubahan value daripada state `count`, kode di dalam useEffect akan dijalankan. Dependencies pada useEffect bisa berisi state ataupun props, jadi kita bisa menambahkan lebih dari 1 dependency.

### componentWillUnmount in useEffect

```jsx
useEffect(() => {
  console.log('Component is mounted')
  return () => {
    console.log('Component is unmounted')
  }
})
```

Untuk melakukan unmount di function component kita perlu me-_return_ yang namanya _clean-up function_ yang berada di dalam useEffect. Jadi ketika komponen dihapus dari DOM maka kode di dalam clean-up function akan dijalankan.

Mungkin sekian dulu tulisan saya, semoga bermanfaat dan selamat mencoba. Happy coding ✌
