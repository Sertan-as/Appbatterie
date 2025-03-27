import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    modele: "",
    lieu: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
    setMessage("✅ Votre demande a été prise en compte, nous allons vous faire un retour.");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center", fontFamily: "Arial" }}>
      <h1>📅 Prendre un Rendez-vous</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="modele" placeholder="Modèle du téléphone" value={formData.modele} onChange={handleChange} required />
        <select name="lieu" value={formData.lieu} onChange={handleChange} required>
          <option value="">Choisissez un lieu</option>
          <option value="ElectroDepotToulon">ElectroDepotToulon</option>
          <option value="Lyon">Lyon</option>
          <option value="Marseille">Marseille</option>
        </select>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit" style={{ background: "blue", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
          Envoyer la demande
        </button>
      </form>
      {message && <p style={{ color: "green", marginTop: "20px" }}>{message}</p>}
    </div>
  );
}

export default App;
