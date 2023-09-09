import { Counter } from "./Counter"
import ColorSetter from "./ColorSetter"
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://api.sampleapis.com/coffee/hot')
  console.log('test')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the home page</h1>
      
    <div
        className="grid grid-cols-3 gap-4"
      >
        {data.map( item =>
          <div key={item.id} className="bg-zinc-800 text-white">
            <h1
              className="text-2xl text-center"
            >{item.title}</h1>
            <div
              className="relative"
            >
              <Image
                src={item.image}
                width={200}
                height={200}
                className="object-cover aspect-square w-full max-w-xs mx-auto"
                alt={item.title}
              ></Image>
            </div>
            
            <p
              className="p-2"
            >{item.description}</p>
          </div>
        )}
    </div>
      

      <Counter />
      <ColorSetter />
    </main>
  )
}
