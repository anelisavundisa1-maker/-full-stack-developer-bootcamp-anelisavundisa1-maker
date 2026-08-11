import { useMemo, useState } from 'react'
import BrewCard from './components/brewCard'
import BrewForm from './components/BrewForm'
import './App.css'

const methods = ['Aeropress', 'Drip coffee', 'V60', 'French press', 'Espresso']

const initialBrews = [
  {
    id: 1,
    beans: 'Zimbabwean highlands',
    method: 'Aeropress',
    coffeeGrams: 15,
    waterGrams: 200,
    rating: 3,
    notes: 'Bright, balanced, soft finish',
  },
  {
    id: 2,
    beans: 'Nigerian dark roast',
    method: 'Drip coffee',
    coffeeGrams: 10,
    waterGrams: 120,
    rating: 5,
    notes: 'Nutty and bold',
  },
  {
    id: 3,
    beans: 'Italian decaf',
    method: 'V60',
    coffeeGrams: 20,
    waterGrams: 180,
    rating: 1,
    notes: 'Light, smooth, low acidity',
  },
]

export default function App() {
  const [brews, setBrews] = useState(initialBrews)
  const [filterMethod, setFilterMethod] = useState('')
  const [modalState, setModalState] = useState({
    open: false,
    mode: 'add',
    brew: null,
  })

  const filteredBrews = useMemo(() => {
    if (!filterMethod) return brews
    return brews.filter((brew) => brew.method === filterMethod)
  }, [brews, filterMethod])

  const openAdd = () => {
    setModalState({ open: true, mode: 'add', brew: null })
  }

  const openEdit = (brew) => {
    setModalState({ open: true, mode: 'edit', brew })
  }

  const closeModal = () => {
    setModalState({ open: false, mode: 'add', brew: null })
  }

  const saveBrew = (brewData) => {
    if (modalState.mode === 'edit') {
      setBrews((current) =>
        current.map((item) => (item.id === brewData.id ? brewData : item))
      )
    } else {
      setBrews((current) => [
        ...current,
        { ...brewData, id: Date.now() },
      ])
    }
    closeModal()
  }

  const deleteBrew = (id) => {
    setBrews((current) => current.filter((item) => item.id !== id))
    closeModal()
  }

  return (
    <div className="app-shell">
      <div className="list-card">
        <header className="list-header">
          <h1>Brew log</h1>
          <button className="primary-button" onClick={openAdd}>
            Add
          </button>
        </header>

        <div className="filter-row">
          <select
            value={filterMethod}
            onChange={(e) => setFilterMethod(e.target.value)}
          >
            <option value="">Filter by method</option>
            {methods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div className="divider" />

        <div className="brew-list">
          {filteredBrews.map((brew) => (
            <BrewCard key={brew.id} brew={brew} onEdit={() => openEdit(brew)} />
          ))}
        </div>
      </div>

      {modalState.open && (
        <BrewForm
          mode={modalState.mode}
          brew={modalState.brew}
          methods={methods}
          onClose={closeModal}
          onSave={saveBrew}
          onDelete={deleteBrew}
        />
      )}
    </div>
  )
}