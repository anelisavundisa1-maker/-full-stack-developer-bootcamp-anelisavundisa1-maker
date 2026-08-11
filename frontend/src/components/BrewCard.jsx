function BrewCard({ brew, onEdit }) {
  const getRatingClass = (rating) => {
    if (rating >= 4) {
      return "rating-good";
    }


    if (rating >= 2) {
      return "rating-medium";
    }


    return "rating-low";
  };
  return (
    <div className="brew-card">

      <div className={`rating-circle ${getRatingClass(brew.rating)}`}>
        {brew.rating}
      </div>
      <div className="brew-details">
        <h2>{brew.beans}</h2>

        <div className="brew-tags">
          <span className="brew-tag">
            {brew.method}
          </span>
          <span className="brew-tag">
            ☕ {brew.coffeeGrams}g
          </span>


          <span className="brew-tag">
            💧 {brew.waterGrams}g
          </span>


        </div>


      </div>


      <button
        className="edit-button"
        onClick={() => onEdit(brew)}
        aria-label={`Edit ${brew.beans}`}
      >
        ✎
      </button>


    </div>
  );
}
export default BrewCard;
