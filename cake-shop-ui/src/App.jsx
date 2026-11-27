import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import CakeCard from './components/CakeCard'

function App() {
  return (
    <div>
      <Header />
      <Banner />

      <main className="products">
        <CakeCard name="Chocolate Truffle" flavour="Rich dark chocolate" price={650} emoji="🎂" inStock={true} />
        <CakeCard name="Strawberry Cupcake" flavour="Fresh strawberry cream" price={120} emoji="🧁" inStock={true} />
        <CakeCard name="Red Velvet Slice" flavour="Cream cheese frosting" price={180} emoji="🍰" inStock={false} />
        <CakeCard name="Glazed Donut" flavour="Sweet sugar glaze" price={90} emoji="🍩" inStock={true} />
        <CakeCard name="Choco Chip Cookie" flavour="Crunchy and chewy" price={60} emoji="🍪" inStock={true} />
      </main>
    </div>
  )
}

export default App