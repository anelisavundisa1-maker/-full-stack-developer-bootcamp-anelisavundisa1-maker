import { useEffect, useState } from 'react'

const emptyBrew = {
  beans: '',
  method: '',
  coffeeGrams: '',
  waterGrams: '',
  rating: 0,
  notes: '',
}

export default function BrewForm({
  mode,
  brew,
  methods,
  onClose,
  onSave,
  onDelete,
}) {
  const [form, setForm] = useState(emptyBrew)

  useEffect(() => {
    setForm(brew ? { ...brew } : emptyBrew)
  }, [brew])

  const handleChange = (field) => (event) => {
    const value =
      field === 'coffeeGrams' || field === 'waterGrams' || field === 'rating'
        ? Number(event.target.value)
        : event.target.value
    setForm((current) => ({ ...current, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSave(form)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <div className="modal-header">
          <h2>{mode === 'edit' ? 'Edit a brew' : 'Add a brew'}</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <form className="brew-form" onSubmit={handleSubmit}>
          <label>
            Beans
            <input
              type="text"
              value={form.beans}
              onChange={handleChange('beans')}
              placeholder="Coffee beans"
              required
            />
          </label>

          <label>
            Method
            <select
              value={form.method}
              onChange={handleChange('method')}
              required
            >
              <option value="">Select a method</option>
              {methods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
          </label>

          <div className="side-by-side">
            <label>
              Coffee grams
              <input
                type="number"
                value={form.coffeeGrams}
                onChange={handleChange('coffeeGrams')}
                min="0"
                required
              />
            </label>

            <label>
              Water grams
              <input
                type="number"
                value={form.waterGrams}
                onChange={handleChange('waterGrams')}
                min="0"
                required
              />
            </label>
          </div>

          <label>
            Rating (out of 5)
            <select value={form.rating} onChange={handleChange('rating')}>
              {[0, 1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>

          <label>
            Tasting notes
            <input
              type="text"
              value={form.notes}
              onChange={handleChange('notes')}
              placeholder="Tasting notes"
            />
          </label>

          <div className="form-actions">
            {mode === 'edit' && (
              <button
                type="button"
                className="delete-button"
                onClick={() => onDelete(form.id)}
              >
                Delete
              </button>
            )}

            <button type="submit" className="primary-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}