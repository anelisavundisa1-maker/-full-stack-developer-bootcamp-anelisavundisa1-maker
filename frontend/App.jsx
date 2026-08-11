import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


const API = "http://localhost:3000/api/brews";


function App() {
  const [brews, setBrews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(null);
  const [filter, setFilter] = useState("");


  const [beans, setBeans] = useState("");
  const [method, setMethod] = useState("");
  const [coffeeGrams, setCoffeeGrams] = useState("");
  const [waterGrams, setWaterGrams] = useState("");
  const [rating, setRating] = useState("");
  const [tastingNotes, setTastingNotes] = useState("");


  const getBrews = () => {
    axios.get(API).then((res) => setBrews(res.data));
  };


  useEffect(() => {
    getBrews();
  }, []);


  const clearForm = () => {
    setBeans("");
    setMethod("");
    setCoffeeGrams("");
    setWaterGrams("");
    setRating("");
    setTastingNotes("");
  };


  const openAdd = () => {
    clearForm();
    setEditing(null);
    setShowForm(true);
  };


  const openEdit = (brew) => {
    setEditing(brew);
    setBeans(brew.beans);
    setMethod(brew.method);
    setCoffeeGrams(brew.coffeeGrams);
    setWaterGrams(brew.waterGrams);
    setRating(brew.rating);
    setTastingNotes(brew.tastingNotes);
    setShowForm(true);
  };


  const saveBrew = () => {
    if (
      !beans ||
      !method ||
      !coffeeGrams ||
      !waterGrams ||
      !rating ||
      !tastingNotes
    ) {
      alert("Please complete all fields.");
      return;
    }


    const data = {
      beans,
      method,
      coffeeGrams,
      waterGrams,
      rating,
      tastingNotes,
    };
const request = editing
      ? axios.put(`${API}/${editing.id}`, data)
      : axios.post(API, data);
    request.then(() => {
      clearForm();
      setEditing(null);
      setShowForm(false);
      getBrews();
    });
  };


  const deleteBrew = () => {
    if (!editing) return;


    axios.delete(`${API}/${editing.id}`).then(() => {
      setEditing(null);
      setShowForm(false);
      clearForm();
      getBrews();
    });
  };


  const getColor = (rating) => {
    if (rating >= 4) return "#45d483";
    if (rating >= 2) return "#ffad42";
    return "#ff6969";
  };


  const displayedBrews = filter
    ? brews.filter((brew) => brew.method === filter)
    : brews;


  return (
    <div className="page">
      <main className="app">


        <header>
          <h1>Brews: {brews.length}</h1>


          <button className="add-button" onClick={openAdd}>
            Add
          </button>
        </header>


        <select
          className="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Filter by method</option>
          <option value="Aeropress">Aeropress</option>
          <option value="V60">V60</option>
          <option value="Drip coffee">Drip coffee</option>
        </select>


        <section>
          {displayedBrews.map((brew) => (
            <div className="brew" key={brew.id}>


              <div
                className="rating"
                style={{ backgroundColor: getColor(brew.rating) }}
              >
                {brew.rating}
              </div>


              <div className="brew-info">
                <h2>{brew.beans}</h2>


                <div className="tags">
                  <span>{brew.method}</span>
                  <span>☕ {brew.coffeeGrams}g</span>
                  <span>💧 {brew.waterGrams}g</span>
                </div>


                <p>{brew.tastingNotes}</p>
              </div>


              <button
                className="edit"
                onClick={() => openEdit(brew)}
              >
                ✎
              </button>


            </div>
          ))}
        </section>


      </main>


      {showForm && (
        <div className="overlay">
          <div className="modal">


            <div className="modal-title">
              <h2>{editing ? "Edit a brew" : "Add a brew"}</h2>


              <button
                className="close"
                onClick={() => setShowForm(false)}
              >
                ×
              </button>
            </div>


            <label>Beans</label>
            <input
              value={beans}
              onChange={(e) => setBeans(e.target.value)}
            />


            <label>Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="">Select a method</option>
              <option value="Aeropress">Aeropress</option>
              <option value="V60">V60</option>
              <option value="Drip coffee">Drip coffee</option>
            </select>


            <div className="two">
              <div>
                <label>Coffee grams</label>
                <input
                  type="number"
                  value={coffeeGrams}
                  onChange={(e) => setCoffeeGrams(e.target.value)}
                />
              </div>


              <div>
                <label>Water grams</label>
                <input
                  type="number"
                  value={waterGrams}
                  onChange={(e) => setWaterGrams(e.target.value)}
                />
              </div>
            </div>


            <label>Rating out of 5</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />


            <label>Tasting notes</label>
            <input
              value={tastingNotes}
              onChange={(e) => setTastingNotes(e.target.value)}
            />


            <div className="buttons">
              {editing && (
                <button className="delete" onClick={deleteBrew}>
                  Delete
                </button>
              )}


              <button className="save" onClick={saveBrew}>
                Save
              </button>
            </div>


          </div>
        </div>
      )}
    </div>
  );
}


export default App;




