// // // // // // //frontend/ src/pages/AddCropResidue.jsx



// // // // //import React, { useState } from "react";
// // // // //import { useNavigate } from "react-router-dom";
// // // // //import "../styles/AddCropResidue.css";

// // // // //export default function AddCropResidue() {
// // // //   //const navigate = useNavigate();

// // // //   //const [form, setForm] = useState({
// // // //     //cropName: "",
// // // //     //residueType: "",
// // // //     //quantity: "",
// // // //     //location: "",
// // // //     //uploaderName: "",
// // // //     //uploaderContact: "",
// // // //   //});

// // // //   //const [images, setImages] = useState([]);
// // // //   //const [preview, setPreview] = useState([]);

// // // //   //const handleChange = (e) => {
// // // //     //setForm({ ...form, [e.target.id]: e.target.value });
// // // //   //};

// // // //   //const handleFileChange = (e) => {
// // // //    // const files = [...e.target.files];
// // // //     //setImages(files);

// // // //     //const urls = files.map((file) => URL.createObjectURL(file));
// // // //     //setPreview(urls);
// // // //   //};

// // // //   // const handleSubmit = async (e) => {
// // // //   //   e.preventDefault();

// // // //   //   const data = new FormData();
// // // //   //   Object.keys(form).forEach((key) => data.append(key, form[key]));
// // // //   //   images.forEach((img) => data.append("images", img));


// // // //   //    const farmerId = localStorage.getItem("farmerId");
// // // //   //   if (!farmerId) {
// // // //   //     alert("You must be logged in as a farmer to upload residue.");
// // // //   //     return;
// // // //   //   }
// // // //   //   data.append("farmerId", farmerId);

// // // //   //   const res = await fetch("http://localhost:5000/api/residue/upload", {
// // // //   //     method: "POST",
// // // //   //     body: data,
// // // //   //   });

// // // //   //   const result = await res.json();
// // // //   //   alert(result.message);

// // // //   //   navigate("/search-residue");
// // // //   // };

// // // //   //const handleSubmit = async (e) => {
// // // //   //e.preventDefault();

// // // //   //const data = new FormData();

// // // //   // Append normal form fields
// // // //   //Object.keys(form).forEach((key) => data.append(key, form[key]));

// // // //   // Append images
// // // //   //images.forEach((img) => data.append("images", img));

// // // //   // ⭐ Fetch farmerId from localStorage
// // // //   //const farmerId = localStorage.getItem("farmerId");
// // // //   //if (!farmerId) {
// // // //     //alert("You must be logged in as a farmer to upload residue.");
// // // //     //return;
// // // //   //}

// // // //   // ⭐ Add farmerId to form-data
// // // //   //data.append("farmerId", farmerId);

// // // //   // Send to backend
// // // //   //const res = await fetch("http://localhost:5000/api/residue/upload", {
// // // //     //method: "POST",
// // // //     //body: data,
// // // //   //});

// // // //   //const result = await res.json();
// // // //   //alert(result.message);

// // // //   //navigate("/farmer-dashboard");
// // // // //};


// // // //   //return (
// // // //     //<div className="add-container">
// // // //       //<h1>Add Crop Residue</h1>

// // // //       //<form className="form-card" onSubmit={handleSubmit}>

// // // //        // <label>Crop Name</label>
// // // //         //<select id="cropName" onChange={handleChange} required>
// // // //           //<option value="">Select</option>
// // // //           //<option value="Paddy">Paddy</option>
// // // //           //<option value="Wheat">Wheat</option>
// // // //           //<option value="Rice">Rice</option>
// // // //           //<option value="Maize">Maize</option>
// // // //           //<option value="Coconut">Coconut</option>
// // // //           //<option value="Arecanut">Arecanut</option>
// // // //         //</select>

// // // //         //<label>Residue Type</label>
// // // //         //<select id="residueType" onChange={handleChange} required>
// // // //         //  <option value="">Select</option>
// // // //          // <option value="Straw">Straw</option>
// // // //           //<option value="Husk">Husk</option>
// // // //           //<option value="Shell">Shell</option>
// // // //           //<option value="Leaf">Leaf</option>
// // // //         //</select>

// // // //         //<label>Quantity (kg)</label>
// // // //         //<input id="quantity" type="number" required onChange={handleChange} />

// // // //         //<label>Location</label>
// // // //         //<input id="location" type="text" required onChange={handleChange} />

// // // //         //<label>Uploader Name</label>
// // // //         //<input id="uploaderName" type="text" onChange={handleChange} />

// // // //         //<label>Uploader Contact</label>
// // // //         //<input id="uploaderContact" type="text" onChange={handleChange} />

// // // //         //<label>Upload Images</label>
// // // //         //<input type="file" multiple accept="image/*" onChange={handleFileChange} />

// // // //         //<div className="preview-row">
// // // //           //{preview.map((p, i) => (
// // // //            // <img key={i} src={p} alt="preview" className="preview-img" />
// // // //           //))}
// // // //         //</div>

// // // //         //<button type="submit" className="upload-btn">Upload</button>
// // // //       //</form>
// // // //     //</div>
// // // //   //);
// // // // //}


// // // // // // import React, { useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import "../styles/AddCropResidue.css";

// // // // // // export default function AddCropResidue({ token }) {
// // // // // //   const navigate = useNavigate();

// // // // // //   const [form, setForm] = useState({
// // // // // //     cropName: "",
// // // // // //     residueType: "",
// // // // // //     quantity: "",
// // // // // //     location: "",
// // // // // //     uploaderName: "",
// // // // // //     uploaderContact: "",
// // // // // //   });

// // // // // //   const [images, setImages] = useState([]);
// // // // // //   const [preview, setPreview] = useState([]);

// // // // // //   const handleChange = (e) => {
// // // // // //     setForm({ ...form, [e.target.id]: e.target.value });
// // // // // //   };

// // // // // //   const handleFileChange = (e) => {
// // // // // //     const files = [...e.target.files];
// // // // // //     setImages(files);

// // // // // //     const urls = files.map((file) => URL.createObjectURL(file));
// // // // // //     setPreview(urls);
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();

// // // // // //     const data = new FormData();
// // // // // //     Object.keys(form).forEach((key) => data.append(key, form[key]));
// // // // // //     images.forEach((img) => data.append("images", img));

// // // // // //     try {
// // // // // //       const res = await fetch("http://localhost:5000/api/residue/upload", {
// // // // // //         method: "POST",
// // // // // //         headers: { Authorization: `Bearer ${token}` },
// // // // // //         body: data,
// // // // // //       });

// // // // // //       const result = await res.json();
// // // // // //       alert(result.message);

// // // // // //       navigate("/search-residue"); // or wherever you want after upload
// // // // // //     } catch (err) {
// // // // // //       console.error("Failed to upload residue:", err);
// // // // // //       alert("Upload failed. Try again.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="add-container">
// // // // // //       <h1>Add Crop Residue</h1>
// // // // // //       <form className="form-card" onSubmit={handleSubmit}>
// // // // // //         <label>Crop Name</label>
// // // // // //         <select id="cropName" onChange={handleChange} required>
// // // // // //           <option value="">Select</option>
// // // // // //           <option value="Paddy">Paddy</option>
// // // // // //           <option value="Wheat">Wheat</option>
// // // // // //           <option value="Rice">Rice</option>
// // // // // //           <option value="Maize">Maize</option>
// // // // // //           <option value="Coconut">Coconut</option>
// // // // // //           <option value="Arecanut">Arecanut</option>
// // // // // //         </select>

// // // // // //         <label>Residue Type</label>
// // // // // //         <select id="residueType" onChange={handleChange} required>
// // // // // //           <option value="">Select</option>
// // // // // //           <option value="Straw">Straw</option>
// // // // // //           <option value="Husk">Husk</option>
// // // // // //           <option value="Shell">Shell</option>
// // // // // //           <option value="Leaf">Leaf</option>
// // // // // //         </select>

// // // // // //         <label>Quantity (kg)</label>
// // // // // //         <input id="quantity" type="number" required onChange={handleChange} />

// // // // // //         <label>Location</label>
// // // // // //         <input id="location" type="text" required onChange={handleChange} />

// // // // // //         <label>Uploader Name</label>
// // // // // //         <input id="uploaderName" type="text" onChange={handleChange} />

// // // // // //         <label>Uploader Contact</label>
// // // // // //         <input id="uploaderContact" type="text" onChange={handleChange} />

// // // // // //         <label>Upload Images</label>
// // // // // //         <input type="file" multiple accept="image/*" onChange={handleFileChange} />

// // // // // //         <div className="preview-row">
// // // // // //           {preview.map((p, i) => (
// // // // // //             <img key={i} src={p} alt="preview" className="preview-img" />
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         <button type="submit" className="upload-btn">Upload</button>
// // // // // //       </form>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import "../styles/AddCropResidue.css";

// // // // // export default function AddCropResidue({ token }) {
// // // // //   const navigate = useNavigate();

// // // // //   const [form, setForm] = useState({
// // // // //     cropName: "",
// // // // //     residueType: "",
// // // // //     quantity: "",
// // // // //     location: "",
// // // // //     uploaderName: "",
// // // // //     uploaderContact: "",
// // // // //   });

// // // // //   const [images, setImages] = useState([]);
// // // // //   const [preview, setPreview] = useState([]);

// // // // //   const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

// // // // //   const handleFileChange = (e) => {
// // // // //     const files = [...e.target.files];
// // // // //     setImages(files);
// // // // //     setPreview(files.map((file) => URL.createObjectURL(file)));
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     const data = new FormData();
// // // // //     Object.keys(form).forEach((key) => data.append(key, form[key]));
// // // // //     images.forEach((img) => data.append("images", img));

// // // // //     try {
// // // // //       const res = await fetch("http://localhost:5000/api/residue/upload", {
// // // // //         method: "POST",
// // // // //         headers: { Authorization: `Bearer ${token}` },
// // // // //         body: data,
// // // // //       });
// // // // //       const result = await res.json();
// // // // //       alert(result.message);
// // // // //       navigate("/farmer-dashboard"); // Redirect to dashboard after upload
// // // // //     } catch (err) {
// // // // //       console.error("Upload failed:", err);
// // // // //       alert("Upload failed. Try again.");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="add-container">
// // // // //       <h1>Add Crop Residue</h1>
// // // // //       <form className="form-card" onSubmit={handleSubmit}>
// // // // //         <label>Crop Name</label>
// // // // //         <select id="cropName" onChange={handleChange} required>
// // // // //           <option value="">Select</option>
// // // // //           <option value="Paddy">Paddy</option>
// // // // //           <option value="Wheat">Wheat</option>
// // // // //           <option value="Rice">Rice</option>
// // // // //           <option value="Maize">Maize</option>
// // // // //           <option value="Coconut">Coconut</option>
// // // // //           <option value="Arecanut">Arecanut</option>
// // // // //         </select>

// // // // //         <label>Residue Type</label>
// // // // //         <select id="residueType" onChange={handleChange} required>
// // // // //           <option value="">Select</option>
// // // // //           <option value="Straw">Straw</option>
// // // // //           <option value="Husk">Husk</option>
// // // // //           <option value="Shell">Shell</option>
// // // // //           <option value="Leaf">Leaf</option>
// // // // //         </select>

// // // // //         <label>Quantity (kg)</label>
// // // // //         <input id="quantity" type="number" required onChange={handleChange} />

// // // // //         <label>Location</label>
// // // // //         <input id="location" type="text" required onChange={handleChange} />

// // // // //         <label>Uploader Name</label>
// // // // //         <input id="uploaderName" type="text" onChange={handleChange} />

// // // // //         <label>Uploader Contact</label>
// // // // //         <input id="uploaderContact" type="text" onChange={handleChange} />

// // // // //         <label>Upload Images</label>
// // // // //         <input type="file" multiple accept="image/*" onChange={handleFileChange} />

// // // // //         <div className="preview-row">
// // // // //           {preview.map((p, i) => (
// // // // //             <img key={i} src={p} alt="preview" className="preview-img" />
// // // // //           ))}
// // // // //         </div>

// // // // //         <button type="submit" className="upload-btn">Upload</button>
// // // // //       </form>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import "../styles/AddCropResidue.css";

// // // // import { useLanguage } from "../context/LanguageContext"; // ✅ added

// // // // export default function AddCropResidue() {
// // // //   const navigate = useNavigate();
// // // //   const { t } = useLanguage(); // ✅ added

// // // //   const [form, setForm] = useState({
// // // //     cropName: "",
// // // //     residueType: "",
// // // //     quantity: "",
// // // //     location: "",
// // // //     uploaderName: "",
// // // //     uploaderContact: "",
// // // //   });

// // // //   const [images, setImages] = useState([]);
// // // //   const [preview, setPreview] = useState([]);

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.id]: e.target.value });
// // // //   };

// // // //   const handleFileChange = (e) => {
// // // //     const files = [...e.target.files];
// // // //     setImages(files);

// // // //     const urls = files.map((file) => URL.createObjectURL(file));
// // // //     setPreview(urls);
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const data = new FormData();

// // // //     Object.keys(form).forEach((key) => data.append(key, form[key]));
// // // //     images.forEach((img) => data.append("images", img));

// // // //     const farmerId = localStorage.getItem("farmerId");
// // // //     if (!farmerId) {
// // // //       alert(t("mustLoginFarmer") ?? "You must be logged in as a farmer to upload residue.");
// // // //       return;
// // // //     }

// // // //     data.append("farmerId", farmerId);

// // // //     const res = await fetch("http://localhost:5000/api/residue/upload", {
// // // //       method: "POST",
// // // //       body: data,
// // // //     });

// // // //     const result = await res.json();
// // // //     alert(result.message);

// // // //     navigate("/farmer-dashboard");
// // // //   };

// // // //   return (
// // // //     <div className="add-container">
// // // //       <h1>{t("addCropResidue") ?? "Add Crop Residue"}</h1>

// // // //       <form className="form-card" onSubmit={handleSubmit}>

// // // //         <label>{t("cropName") ?? "Crop Name"}</label>
// // // //         <select id="cropName" onChange={handleChange} required>
// // // //           <option value="">{t("select") ?? "Select"}</option>
// // // //           <option value="Paddy">{t("paddy") ?? "Paddy"}</option>
// // // //           <option value="Wheat">{t("wheat") ?? "Wheat"}</option>
// // // //           <option value="Rice">{t("rice") ?? "Rice"}</option>
// // // //           <option value="Maize">{t("maize") ?? "Maize"}</option>
// // // //           <option value="Coconut">{t("coconut") ?? "Coconut"}</option>
// // // //           <option value="Arecanut">{t("arecanut") ?? "Arecanut"}</option>
// // // //         </select>

// // // //         <label>{t("residueType") ?? "Residue Type"}</label>
// // // //         <select id="residueType" onChange={handleChange} required>
// // // //           <option value="">{t("select") ?? "Select"}</option>
// // // //           <option value="Straw">{t("straw") ?? "Straw"}</option>
// // // //           <option value="Husk">{t("husk") ?? "Husk"}</option>
// // // //           <option value="Shell">{t("shell") ?? "Shell"}</option>
// // // //           <option value="Leaf">{t("leaf") ?? "Leaf"}</option>
// // // //         </select>

// // // //         <label>{t("quantityKg") ?? "Quantity (kg)"}</label>
// // // //         <input id="quantity" type="number" required onChange={handleChange} />

// // // //         <label>{t("location") ?? "Location"}</label>
// // // //         <input id="location" type="text" required onChange={handleChange} />

// // // //         <label>{t("uploaderName") ?? "Uploader Name"}</label>
// // // //         <input id="uploaderName" type="text" onChange={handleChange} />

// // // //         <label>{t("uploaderContact") ?? "Uploader Contact"}</label>
// // // //         <input id="uploaderContact" type="text" onChange={handleChange} />

// // // //         <label>{t("uploadImages") ?? "Upload Images"}</label>
// // // //         <input type="file" multiple accept="image/*" onChange={handleFileChange} />

// // // //         <div className="preview-row">
// // // //           {preview.map((p, i) => (
// // // //             <img key={i} src={p} alt={t("previewAlt") ?? "preview"} className="preview-img" />
// // // //           ))}
// // // //         </div>

// // // //         <button type="submit" className="upload-btn">
// // // //           {t("upload") ?? "Upload"}
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState } from 'react';
// // // import { Upload, X, MapPin, User, Phone, Package, Leaf, ArrowLeft, CheckCircle, Camera } from 'lucide-react';

// // // const AddCropResidue = () => {
// // //   const [language, setLanguage] = useState('en');
// // //   const [form, setForm] = useState({
// // //     cropName: '',
// // //     residueType: '',
// // //     quantity: '',
// // //     location: '',
// // //     uploaderName: '',
// // //     uploaderContact: ''
// // //   });
// // //   const [images, setImages] = useState([]);
// // //   const [previews, setPreviews] = useState([]);
// // //   const [submitted, setSubmitted] = useState(false);

// // //   const translations = {
// // //     en: {
// // //       title: 'Add Crop Residue',
// // //       cropName: 'Crop Name',
// // //       selectCrop: 'Select Crop',
// // //       residueType: 'Residue Type',
// // //       selectType: 'Select Type',
// // //       quantity: 'Quantity (kg)',
// // //       location: 'Location',
// // //       uploaderName: 'Your Name',
// // //       uploaderContact: 'Contact Number',
// // //       uploadImages: 'Upload Images (Max 5)',
// // //       submit: 'Submit',
// // //       back: 'Back to Dashboard',
// // //       success: 'Crop residue uploaded successfully!',
// // //       error: 'Please fill all required fields',
// // //       crops: {
// // //         paddy: 'Paddy',
// // //         wheat: 'Wheat',
// // //         rice: 'Rice',
// // //         maize: 'Maize',
// // //         coconut: 'Coconut',
// // //         arecanut: 'Arecanut'
// // //       },
// // //       types: {
// // //         straw: 'Straw',
// // //         husk: 'Husk',
// // //         shell: 'Shell',
// // //         leaf: 'Leaf'
// // //       }
// // //     },
// // //     kn: {
// // //       title: 'ಬೆಳೆ ಅವಶೇಷ ಸೇರಿಸಿ',
// // //       cropName: 'ಬೆಳೆ ಹೆಸರು',
// // //       selectCrop: 'ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ',
// // //       residueType: 'ಅವಶೇಷದ ಪ್ರಕಾರ',
// // //       selectType: 'ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ',
// // //       quantity: 'ಪ್ರಮಾಣ (ಕೆಜಿ)',
// // //       location: 'ಸ್ಥಳ',
// // //       uploaderName: 'ನಿಮ್ಮ ಹೆಸರು',
// // //       uploaderContact: 'ಸಂಪರ್ಕ ಸಂಖ್ಯೆ',
// // //       uploadImages: 'ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (ಗರಿಷ್ಠ 5)',
// // //       submit: 'ಸಲ್ಲಿಸು',
// // //       back: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ',
// // //       success: 'ಬೆಳೆ ಅವಶೇಷವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ!',
// // //       error: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ',
// // //       crops: {
// // //         paddy: 'ಅಕ್ಕಿ',
// // //         wheat: 'ಗೋಧಿ',
// // //         rice: 'ಅನ್ನ',
// // //         maize: 'ಮೆಕ್ಕೆಜೋಳ',
// // //         coconut: 'ತೆಂಗಿನಕಾಯಿ',
// // //         arecanut: 'ಅಡಿಕೆ'
// // //       },
// // //       types: {
// // //         straw: 'ತುಳ್ಳು',
// // //         husk: 'ಹುಲ್ಲು',
// // //         shell: 'ಚಿಪ್ಪು',
// // //         leaf: 'ಎಲೆ'
// // //       }
// // //     }
// // //   };

// // //   const t = (key) => {
// // //     const keys = key.split('.');
// // //     let value = translations[language];
// // //     for (const k of keys) {
// // //       value = value?.[k];
// // //     }
// // //     return value || key;
// // //   };

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.id]: e.target.value });
// // //   };

// // //   const handleFileChange = (e) => {
// // //     const files = Array.from(e.target.files).slice(0, 5);
// // //     setImages(files);
// // //     const urls = files.map(file => URL.createObjectURL(file));
// // //     setPreviews(urls);
// // //   };

// // //   const removeImage = (index) => {
// // //     const newImages = images.filter((_, i) => i !== index);
// // //     const newPreviews = previews.filter((_, i) => i !== index);
// // //     setImages(newImages);
// // //     setPreviews(newPreviews);
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
    
// // //     if (!form.cropName || !form.residueType || !form.quantity || !form.location) {
// // //       alert(t('error'));
// // //       return;
// // //     }

// // //     setSubmitted(true);
// // //     setTimeout(() => {
// // //       setSubmitted(false);
// // //       setForm({
// // //         cropName: '',
// // //         residueType: '',
// // //         quantity: '',
// // //         location: '',
// // //         uploaderName: '',
// // //         uploaderContact: ''
// // //       });
// // //       setImages([]);
// // //       setPreviews([]);
// // //     }, 2000);
// // //   };

// // //   if (submitted) {
// // //     return (
// // //       <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
// // //         <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md">
// // //           <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
// // //           <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('success')}</h2>
// // //           <button
// // //             onClick={() => setSubmitted(false)}
// // //             className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition"
// // //           >
// // //             {t('back')}
// // //           </button>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
// // //       <div className="max-w-4xl mx-auto">
// // //         <div className="flex items-center justify-between mb-8">
// // //           <button className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition">
// // //             <ArrowLeft size={20} />
// // //             <span>{t('back')}</span>
// // //           </button>
// // //           <select
// // //             value={language}
// // //             onChange={(e) => setLanguage(e.target.value)}
// // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
// // //           >
// // //             <option value="en">English</option>
// // //             <option value="kn">ಕನ್ನಡ</option>
// // //           </select>
// // //         </div>

// // //         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
// // //           <div className="bg-gradient-to-r from-green-500 to-green-600 p-8">
// // //             <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
// // //               <Leaf size={36} />
// // //               <span>{t('title')}</span>
// // //             </h1>
// // //           </div>

// // //           <div className="p-8 space-y-6">
// // //             <div>
// // //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// // //                 {t('cropName')} *
// // //               </label>
// // //               <div className="relative">
// // //                 <Package className="absolute left-3 top-3 text-gray-400" size={20} />
// // //                 <select
// // //                   id="cropName"
// // //                   value={form.cropName}
// // //                   onChange={handleChange}
// // //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
// // //                 >
// // //                   <option value="">{t('selectCrop')}</option>
// // //                   <option value="Paddy">{t('crops.paddy')}</option>
// // //                   <option value="Wheat">{t('crops.wheat')}</option>
// // //                   <option value="Rice">{t('crops.rice')}</option>
// // //                   <option value="Maize">{t('crops.maize')}</option>
// // //                   <option value="Coconut">{t('crops.coconut')}</option>
// // //                   <option value="Arecanut">{t('crops.arecanut')}</option>
// // //                 </select>
// // //               </div>
// // //             </div>

// // //             <div>
// // //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// // //                 {t('residueType')} *
// // //               </label>
// // //               <div className="relative">
// // //                 <Leaf className="absolute left-3 top-3 text-gray-400" size={20} />
// // //                 <select
// // //                   id="residueType"
// // //                   value={form.residueType}
// // //                   onChange={handleChange}
// // //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
// // //                 >
// // //                   <option value="">{t('selectType')}</option>
// // //                   <option value="Straw">{t('types.straw')}</option>
// // //                   <option value="Husk">{t('types.husk')}</option>
// // //                   <option value="Shell">{t('types.shell')}</option>
// // //                   <option value="Leaf">{t('types.leaf')}</option>
// // //                 </select>
// // //               </div>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// // //                   {t('quantity')} *
// // //                 </label>
// // //                 <input
// // //                   id="quantity"
// // //                   type="number"
// // //                   value={form.quantity}
// // //                   onChange={handleChange}
// // //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
// // //                   placeholder="0"
// // //                 />
// // //               </div>

// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// // //                   {t('location')} *
// // //                 </label>
// // //                 <div className="relative">
// // //                   <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
// // //                   <input
// // //                     id="location"
// // //                     type="text"
// // //                     value={form.location}
// // //                     onChange={handleChange}
// // //                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
// // //                     placeholder="Village/Town"
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// // //                   {t('uploaderName')}
// // //                 </label>
// // //                 <div className="relative">
// // //                   <User className="absolute left-3 top-3 text-gray-400" size={20} />
// // //                   <input
// // //                     id="uploaderName"
// // //                     type="text"
// // //                     value={form.uploaderName}
// // //                     onChange={handleChange}
// // //                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
// // //                     placeholder="Your name"
// // //                   />
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// // //                   {t('uploaderContact')}
// // //                 </label>
// // //                 <div className="relative">
// // //                   <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
// // //                   <input
// // //                     id="uploaderContact"
// // //                     type="tel"
// // //                     value={form.uploaderContact}
// // //                     onChange={handleChange}
// // //                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
// // //                     placeholder="+91 XXXXX XXXXX"
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div>
// // //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// // //                 {t('uploadImages')}
// // //               </label>
// // //               <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition">
// // //                 <input
// // //                   type="file"
// // //                   multiple
// // //                   accept="image/*"
// // //                   onChange={handleFileChange}
// // //                   className="hidden"
// // //                   id="fileInput"
// // //                 />
// // //                 <label htmlFor="fileInput" className="cursor-pointer block">
// // //                   <Camera size={48} className="mx-auto text-gray-400 mb-2" />
// // //                   <p className="text-gray-600">Click to upload or drag and drop</p>
// // //                   <p className="text-sm text-gray-400 mt-1">PNG, JPG up to 5 images</p>
// // //                 </label>
// // //               </div>

// // //               {previews.length > 0 && (
// // //                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
// // //                   {previews.map((preview, index) => (
// // //                     <div key={index} className="relative group">
// // //                       <img
// // //                         src={preview}
// // //                         alt={`Preview ${index + 1}`}
// // //                         className="w-full h-24 object-cover rounded-lg"
// // //                       />
// // //                       <button
// // //                         type="button"
// // //                         onClick={() => removeImage(index)}
// // //                         className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
// // //                       >
// // //                         <X size={16} />
// // //                       </button>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </div>

// // //             <button
// // //               onClick={handleSubmit}
// // //               className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-lg flex items-center justify-center space-x-2"
// // //             >
// // //               <Upload size={24} />
// // //               <span>{t('submit')}</span>
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddCropResidue;

// // import React, { useState } from 'react';
// // import { Upload, X, MapPin, User, Phone, Package, Leaf, ArrowLeft, CheckCircle, Camera } from 'lucide-react';

// // const AddCropResidue = () => {
// //   const [language, setLanguage] = useState('en');
// //   const [form, setForm] = useState({
// //     cropName: '',
// //     residueType: '',
// //     quantity: '',
// //     location: '',
// //     uploaderName: '',
// //     uploaderContact: ''
// //   });
// //   const [images, setImages] = useState([]);
// //   const [previews, setPreviews] = useState([]);
// //   const [submitted, setSubmitted] = useState(false);

// //   const translations = {
// //     en: {
// //       title: 'Add Crop Residue',
// //       cropName: 'Crop Name',
// //       selectCrop: 'Select Crop',
// //       residueType: 'Residue Type',
// //       selectType: 'Select Type',
// //       quantity: 'Quantity (kg)',
// //       location: 'Location',
// //       uploaderName: 'Your Name',
// //       uploaderContact: 'Contact Number',
// //       uploadImages: 'Upload Images (Max 5)',
// //       submit: 'Submit',
// //       back: 'Back to Dashboard',
// //       success: 'Crop residue uploaded successfully!',
// //       error: 'Please fill all required fields',
// //       crops: {
// //         paddy: 'Paddy',
// //         wheat: 'Wheat',
// //         rice: 'Rice',
// //         maize: 'Maize',
// //         coconut: 'Coconut',
// //         arecanut: 'Arecanut'
// //       },
// //       types: {
// //         straw: 'Straw',
// //         husk: 'Husk',
// //         shell: 'Shell',
// //         leaf: 'Leaf'
// //       }
// //     },
// //     kn: {
// //       title: 'ಬೆಳೆ ಅವಶೇಷ ಸೇರಿಸಿ',
// //       cropName: 'ಬೆಳೆ ಹೆಸರು',
// //       selectCrop: 'ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ',
// //       residueType: 'ಅವಶೇಷದ ಪ್ರಕಾರ',
// //       selectType: 'ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ',
// //       quantity: 'ಪ್ರಮಾಣ (ಕೆಜಿ)',
// //       location: 'ಸ್ಥಳ',
// //       uploaderName: 'ನಿಮ್ಮ ಹೆಸರು',
// //       uploaderContact: 'ಸಂಪರ್ಕ ಸಂಖ್ಯೆ',
// //       uploadImages: 'ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (ಗರಿಷ್ಠ 5)',
// //       submit: 'ಸಲ್ಲಿಸು',
// //       back: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ',
// //       success: 'ಬೆಳೆ ಅವಶೇಷವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ!',
// //       error: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ',
// //       crops: {
// //         paddy: 'ಅಕ್ಕಿ',
// //         wheat: 'ಗೋಧಿ',
// //         rice: 'ಅನ್ನ',
// //         maize: 'ಮೆಕ್ಕೆಜೋಳ',
// //         coconut: 'ತೆಂಗಿನಕಾಯಿ',
// //         arecanut: 'ಅಡಿಕೆ'
// //       },
// //       types: {
// //         straw: 'ತುಳ್ಳು',
// //         husk: 'ಹುಲ್ಲು',
// //         shell: 'ಚಿಪ್ಪು',
// //         leaf: 'ಎಲೆ'
// //       }
// //     }
// //   };

// //   const t = (key) => {
// //     const keys = key.split('.');
// //     let value = translations[language];
// //     for (const k of keys) {
// //       value = value?.[k];
// //     }
// //     return value || key;
// //   };

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.id]: e.target.value });
// //   };

// //   const handleFileChange = (e) => {
// //     const files = Array.from(e.target.files).slice(0, 5);
// //     setImages(files);
// //     const urls = files.map(file => URL.createObjectURL(file));
// //     setPreviews(urls);
// //   };

// //   const removeImage = (index) => {
// //     const newImages = images.filter((_, i) => i !== index);
// //     const newPreviews = previews.filter((_, i) => i !== index);
// //     setImages(newImages);
// //     setPreviews(newPreviews);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     if (!form.cropName || !form.residueType || !form.quantity || !form.location) {
// //       alert(t('error'));
// //       return;
// //     }

// //     setSubmitted(true);
// //     setTimeout(() => {
// //       setSubmitted(false);
// //       setForm({
// //         cropName: '',
// //         residueType: '',
// //         quantity: '',
// //         location: '',
// //         uploaderName: '',
// //         uploaderContact: ''
// //       });
// //       setImages([]);
// //       setPreviews([]);
// //     }, 2000);
// //   };

// //   if (submitted) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
// //         <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md border border-green-100">
// //           <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
// //           <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('success')}</h2>
// //           <button
// //             onClick={() => setSubmitted(false)}
// //             className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md"
// //           >
// //             {t('back')}
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
// //       {/* Header */}
// //       <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
// //         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
// //           <button 
// //             onClick={() => window.history.back()}
// //             className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition"
// //           >
// //             <ArrowLeft size={20} />
// //             <span className="font-medium">{t('back')}</span>
// //           </button>
// //           <select
// //             value={language}
// //             onChange={(e) => setLanguage(e.target.value)}
// //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700"
// //           >
// //             <option value="en">English</option>
// //             <option value="kn">ಕನ್ನಡ</option>
// //           </select>
// //         </div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="max-w-6xl mx-auto px-6 py-8">
// //         <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
// //           {/* Title Section */}
// //           <div className="bg-gradient-to-r from-green-500 to-green-600 p-8">
// //             <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
// //               <Leaf size={36} />
// //               <span>{t('title')}</span>
// //             </h1>
// //           </div>

// //           {/* Form Section */}
// //           <div className="p-8 space-y-6">
// //             {/* Crop Name */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                 {t('cropName')} *
// //               </label>
// //               <div className="relative">
// //                 <Package className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
// //                 <select
// //                   id="cropName"
// //                   value={form.cropName}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700 appearance-none cursor-pointer"
// //                 >
// //                   <option value="">{t('selectCrop')}</option>
// //                   <option value="Paddy">{t('crops.paddy')}</option>
// //                   <option value="Wheat">{t('crops.wheat')}</option>
// //                   <option value="Rice">{t('crops.rice')}</option>
// //                   <option value="Maize">{t('crops.maize')}</option>
// //                   <option value="Coconut">{t('crops.coconut')}</option>
// //                   <option value="Arecanut">{t('crops.arecanut')}</option>
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Residue Type */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                 {t('residueType')} *
// //               </label>
// //               <div className="relative">
// //                 <Leaf className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
// //                 <select
// //                   id="residueType"
// //                   value={form.residueType}
// //                   onChange={handleChange}
// //                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700 appearance-none cursor-pointer"
// //                 >
// //                   <option value="">{t('selectType')}</option>
// //                   <option value="Straw">{t('types.straw')}</option>
// //                   <option value="Husk">{t('types.husk')}</option>
// //                   <option value="Shell">{t('types.shell')}</option>
// //                   <option value="Leaf">{t('types.leaf')}</option>
// //                 </select>
// //               </div>
// //             </div>

// //             {/* Quantity and Location */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                   {t('quantity')} *
// //                 </label>
// //                 <input
// //                   id="quantity"
// //                   type="number"
// //                   value={form.quantity}
// //                   onChange={handleChange}
// //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700"
// //                   placeholder="0"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                   {t('location')} *
// //                 </label>
// //                 <div className="relative">
// //                   <MapPin className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
// //                   <input
// //                     id="location"
// //                     type="text"
// //                     value={form.location}
// //                     onChange={handleChange}
// //                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700"
// //                     placeholder="Village/Town"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Contact Info */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                   {t('uploaderName')}
// //                 </label>
// //                 <div className="relative">
// //                   <User className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
// //                   <input
// //                     id="uploaderName"
// //                     type="text"
// //                     value={form.uploaderName}
// //                     onChange={handleChange}
// //                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700"
// //                     placeholder="Your name"
// //                   />
// //                 </div>
// //               </div>

// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                   {t('uploaderContact')}
// //                 </label>
// //                 <div className="relative">
// //                   <Phone className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
// //                   <input
// //                     id="uploaderContact"
// //                     type="tel"
// //                     value={form.uploaderContact}
// //                     onChange={handleChange}
// //                     className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700"
// //                     placeholder="+91 XXXXX XXXXX"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Image Upload */}
// //             <div>
// //               <label className="block text-sm font-semibold text-gray-700 mb-2">
// //                 {t('uploadImages')}
// //               </label>
// //               <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition bg-gray-50">
// //                 <input
// //                   type="file"
// //                   multiple
// //                   accept="image/*"
// //                   onChange={handleFileChange}
// //                   className="hidden"
// //                   id="fileInput"
// //                 />
// //                 <label htmlFor="fileInput" className="cursor-pointer block">
// //                   <Camera size={48} className="mx-auto text-gray-400 mb-3" />
// //                   <p className="text-gray-700 font-medium mb-1">Click to upload or drag and drop</p>
// //                   <p className="text-sm text-gray-500">PNG, JPG up to 5 images</p>
// //                 </label>
// //               </div>

// //               {/* Image Previews */}
// //               {previews.length > 0 && (
// //                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
// //                   {previews.map((preview, index) => (
// //                     <div key={index} className="relative group">
// //                       <img
// //                         src={preview}
// //                         alt={`Preview ${index + 1}`}
// //                         className="w-full h-24 object-cover rounded-lg border-2 border-gray-200"
// //                       />
// //                       <button
// //                         type="button"
// //                         onClick={() => removeImage(index)}
// //                         className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-md"
// //                       >
// //                         <X size={16} />
// //                       </button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>

// //             {/* Submit Button */}
// //             <button
// //               onClick={handleSubmit}
// //               className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-lg flex items-center justify-center space-x-2"
// //             >
// //               <Upload size={24} />
// //               <span>{t('submit')}</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddCropResidue;

// import React, { useState } from 'react';
// import { Upload, X, MapPin, User, Phone, Package, Leaf, ArrowLeft, CheckCircle, Camera } from 'lucide-react';

// const AddCropResidue = () => {
//   const [language, setLanguage] = useState('en');
//   const [form, setForm] = useState({
//     cropName: '',
//     residueType: '',
//     quantity: '',
//     location: '',
//     uploaderName: '',
//     uploaderContact: ''
//   });
//   const [images, setImages] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [submitted, setSubmitted] = useState(false);

//   const translations = {
//     en: {
//       title: 'Add Crop Residue',
//       cropName: 'Crop Name',
//       selectCrop: 'Select Crop',
//       residueType: 'Residue Type',
//       selectType: 'Select Type',
//       quantity: 'Quantity (kg)',
//       location: 'Location',
//       uploaderName: 'Your Name',
//       uploaderContact: 'Contact Number',
//       uploadImages: 'Upload Images (Max 5)',
//       submit: 'Submit',
//       back: 'Back to Dashboard',
//       success: 'Crop residue uploaded successfully!',
//       error: 'Please fill all required fields',
//       crops: { paddy: 'Paddy', wheat: 'Wheat', rice: 'Rice', maize: 'Maize', coconut: 'Coconut', arecanut: 'Arecanut' },
//       types: { straw: 'Straw', husk: 'Husk', shell: 'Shell', leaf: 'Leaf' }
//     },
//     kn: {
//       title: 'ಬೆಳೆ ಅವಶೇಷ ಸೇರಿಸಿ',
//       cropName: 'ಬೆಳೆ ಹೆಸರು',
//       selectCrop: 'ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ',
//       residueType: 'ಅವಶೇಷದ ಪ್ರಕಾರ',
//       selectType: 'ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ',
//       quantity: 'ಪ್ರಮಾಣ (ಕೆಜಿ)',
//       location: 'ಸ್ಥಳ',
//       uploaderName: 'ನಿಮ್ಮ ಹೆಸರು',
//       uploaderContact: 'ಸಂಪರ್ಕ ಸಂಖ್ಯೆ',
//       uploadImages: 'ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (ಗರಿಷ್ಠ 5)',
//       submit: 'ಸಲ್ಲಿಸು',
//       back: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ',
//       success: 'ಬೆಳೆ ಅವಶೇಷವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ!',
//       error: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ',
//       crops: { paddy: 'ಅಕ್ಕಿ', wheat: 'ಗೋಧಿ', rice: 'ಅನ್ನ', maize: 'ಮೆಕ್ಕೆಜೋಳ', coconut: 'ತೆಂಗಿನಕಾಯಿ', arecanut: 'ಅಡಿಕೆ' },
//       types: { straw: 'ತುಳ್ಳು', husk: 'ಹುಲ್ಲು', shell: 'ಚಿಪ್ಪು', leaf: 'ಎಲೆ' }
//     }
//   };

//   const t = (key) => {
//     const keys = key.split('.');
//     let value = translations[language];
//     for (const k of keys) value = value?.[k];
//     return value || key;
//   };

//   const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files).slice(0, 5);
//     setImages(files);
//     setPreviews(files.map(file => URL.createObjectURL(file)));
//   };

//   const removeImage = (index) => {
//     setImages(images.filter((_, i) => i !== index));
//     setPreviews(previews.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.cropName || !form.residueType || !form.quantity || !form.location) {
//       alert(t('error'));
//       return;
//     }
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       setForm({ cropName: '', residueType: '', quantity: '', location: '', uploaderName: '', uploaderContact: '' });
//       setImages([]);
//       setPreviews([]);
//     }, 2000);
//   };

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md border border-green-100">
//           <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('success')}</h2>
//           <button
//             onClick={() => setSubmitted(false)}
//             className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md"
//           >
//             {t('back')}
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm w-full flex justify-between items-center px-6 py-4">
//         <button onClick={() => window.history.back()} className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition">
//           <ArrowLeft size={20} />
//           <span className="font-medium">{t('back')}</span>
//         </button>
//         <div className="absolute top-4 right-6">
//       <select 
//         value={language} 
//         onChange={(e) => setLanguage(e.target.value)} 
//         className="w-24 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700 text-sm"
//       >
//         <option value="en">English</option>
//         <option value="kn">ಕನ್ನಡ</option>
//       </select>
//     </div>
//       </div>

//       {/* Main Content */}
//       <div className="w-screen p-6">
//         <div className="w-full bg-white">
//           {/* Title */}
//           <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 w-full">
//             <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
//               <Leaf size={36} />
//               <span>{t('title')}</span>
//             </h1>
//           </div>

//           {/* Form */}
//           <div className="p-8 w-full space-y-6">
//             {/* Crop Name */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">{t('cropName')} *</label>
//               <div className="relative">
//                 <Package className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
//                 <select id="cropName" value={form.cropName} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700 appearance-none cursor-pointer">
//                   <option value="">{t('selectCrop')}</option>
//                   <option value="Paddy">{t('crops.paddy')}</option>
//                   <option value="Wheat">{t('crops.wheat')}</option>
//                   <option value="Rice">{t('crops.rice')}</option>
//                   <option value="Maize">{t('crops.maize')}</option>
//                   <option value="Coconut">{t('crops.coconut')}</option>
//                   <option value="Arecanut">{t('crops.arecanut')}</option>
//                 </select>
//               </div>
//             </div>

//             {/* Residue Type */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">{t('residueType')} *</label>
//               <div className="relative">
//                 <Leaf className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
//                 <select id="residueType" value={form.residueType} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700 appearance-none cursor-pointer">
//                   <option value="">{t('selectType')}</option>
//                   <option value="Straw">{t('types.straw')}</option>
//                   <option value="Husk">{t('types.husk')}</option>
//                   <option value="Shell">{t('types.shell')}</option>
//                   <option value="Leaf">{t('types.leaf')}</option>
//                 </select>
//               </div>
//             </div>

//             {/* Quantity & Location */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">{t('quantity')} *</label>
//                 <input id="quantity" type="number" value={form.quantity} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="0" />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">{t('location')} *</label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
//                   <input id="location" type="text" value={form.location} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="Village/Town" />
//                 </div>
//               </div>
//             </div>

//             {/* Uploader Info */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">{t('uploaderName')}</label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
//                   <input id="uploaderName" type="text" value={form.uploaderName} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="Your name" />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">{t('uploaderContact')}</label>
//                 <div className="relative">
//                   <Phone className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
//                   <input id="uploaderContact" type="tel" value={form.uploaderContact} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="+91 XXXXX XXXXX" />
//                 </div>
//               </div>
//             </div>

//             {/* Image Upload */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">{t('uploadImages')}</label>
//               <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition bg-gray-50">
//                 <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" id="fileInput" />
//                 <label htmlFor="fileInput" className="cursor-pointer block">
//                   <Camera size={48} className="mx-auto text-gray-400 mb-3" />
//                   <p className="text-gray-700 font-medium mb-1">Click to upload or drag and drop</p>
//                   <p className="text-sm text-gray-500">PNG, JPG up to 5 images</p>
//                 </label>
//               </div>

//               {previews.length > 0 && (
//                 <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
//                   {previews.map((preview, index) => (
//                     <div key={index} className="relative group">
//                       <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-24 object-cover rounded-lg border-2 border-gray-200" />
//                       <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-md">
//                         <X size={16} />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Submit */}
//             <button onClick={handleSubmit} className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-lg flex items-center justify-center space-x-2">
//               <Upload size={24} />
//               <span>{t('submit')}</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCropResidue;


import React, { useState } from "react";
import { Upload, X, MapPin, User, Phone, Package, Leaf, ArrowLeft, CheckCircle, Camera } from "lucide-react";
import API_URL from "../config/api";

const AddCropResidue = () => {
  const [language, setLanguage] = useState("en");
  const [form, setForm] = useState({
    cropName: "",
    residueType: "",
    quantity: "",
    location: "",
    uploaderName: "",
    uploaderContact: "",
  });
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const translations = {
    en: {
      title: "Add Crop Residue",
      cropName: "Crop Name",
      selectCrop: "Select Crop",
      residueType: "Residue Type",
      selectType: "Select Type",
      quantity: "Quantity (kg)",
      location: "Location",
      uploaderName: "Your Name",
      uploaderContact: "Contact Number",
      uploadImages: "Upload Images (Max 5)",
      submit: "Submit",
      back: "Back to Dashboard",
      success: "Crop residue uploaded successfully!",
      error: "Please fill all required fields",
      uploadError: "Upload failed. Please try again.",
      crops: { paddy: "Paddy", wheat: "Wheat", rice: "Rice", maize: "Maize", coconut: "Coconut", arecanut: "Arecanut" },
      types: { straw: "Straw", husk: "Husk", shell: "Shell", leaf: "Leaf" }
    },
    kn: {
      title: "ಬೆಳೆ ಅವಶೇಷ ಸೇರಿಸಿ",
      cropName: "ಬೆಳೆ ಹೆಸರು",
      selectCrop: "ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ",
      residueType: "ಅವಶೇಷದ ಪ್ರಕಾರ",
      selectType: "ಪ್ರಕಾರ ಆಯ್ಕೆ ಮಾಡಿ",
      quantity: "ಪ್ರಮಾಣ (ಕೆಜಿ)",
      location: "ಸ್ಥಳ",
      uploaderName: "ನಿಮ್ಮ ಹೆಸರು",
      uploaderContact: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ",
      uploadImages: "ಚಿತ್ರಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ (ಗರಿಷ್ಠ 5)",
      submit: "ಸಲ್ಲಿಸು",
      back: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
      success: "ಬೆಳೆ ಅವಶೇಷವನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಲಾಗಿದೆ!",
      error: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ತುಂಬಿ",
      uploadError: "ಅಪ್‌ಲೋಡ್ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      crops: { paddy: "ಅಕ್ಕಿ", wheat: "ಗೋಧಿ", rice: "ಅನ್ನ", maize: "ಮೆಕ್ಕೆಜೋಳ", coconut: "ತೆಂಗಿನಕಾಯಿ", arecanut: "ಅಡಿಕೆ" },
      types: { straw: "ತುಳ್ಳು", husk: "ಹುಲ್ಲು", shell: "ಚಿಪ್ಪು", leaf: "ಎಲೆ" }
    }
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) value = value?.[k];
    return value || key;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5);
    setImages(files);
    setPreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviews(previews.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.cropName || !form.residueType || !form.quantity || !form.location) {
      alert(t("error"));
      return;
    }

    const farmerId = localStorage.getItem("farmerId");
    if (!farmerId) {
      alert("You must be logged in as a farmer to upload residue.");
      return;
    }

    setLoading(true);
    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    images.forEach((img) => data.append("images", img));
    data.append("farmerId", farmerId);

    try {
      const res = await fetch(`${API_URL}/api/residue/upload`, {
        method: "POST",
        body: data,
      });
      const result = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ cropName: "", residueType: "", quantity: "", location: "", uploaderName: "", uploaderContact: "" });
          setImages([]);
          setPreviews([]);
          // Navigate to farmer dashboard (assuming you have routing set up)
          window.location.href = "/farmer-dashboard";
        }, 2000);
      } else {
        alert(result.message || t("uploadError"));
      }
    } catch (err) {
      console.error("Upload failed:", err);
      alert(t("uploadError"));
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-md border border-green-100">
          <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t("success")}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm w-full flex justify-between items-center px-6 py-4">
        <button onClick={() => window.history.back()} className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition">
          <ArrowLeft size={20} />
          <span className="font-medium">{t("back")}</span>
        </button>
        <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-24 px-2 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 bg-white text-gray-700 text-sm">
          <option value="en">English</option>
          <option value="kn">ಕನ್ನಡ</option>
        </select>
      </div>

      <div className="w-screen p-6">
        <div className="w-full bg-white">
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 w-full">
            <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
              <Leaf size={36} />
              <span>{t("title")}</span>
            </h1>
          </div>

          <div className="p-8 w-full space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t("cropName")} *</label>
              <div className="relative">
                <Package className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
                <select id="cropName" value={form.cropName} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700 appearance-none cursor-pointer">
                  <option value="">{t("selectCrop")}</option>
                  <option value="Paddy">{t("crops.paddy")}</option>
                  <option value="Wheat">{t("crops.wheat")}</option>
                  <option value="Rice">{t("crops.rice")}</option>
                  <option value="Maize">{t("crops.maize")}</option>
                  <option value="Coconut">{t("crops.coconut")}</option>
                  <option value="Arecanut">{t("crops.arecanut")}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t("residueType")} *</label>
              <div className="relative">
                <Leaf className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
                <select id="residueType" value={form.residueType} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700 appearance-none cursor-pointer">
                  <option value="">{t("selectType")}</option>
                  <option value="Straw">{t("types.straw")}</option>
                  <option value="Husk">{t("types.husk")}</option>
                  <option value="Shell">{t("types.shell")}</option>
                  <option value="Leaf">{t("types.leaf")}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("quantity")} *</label>
                <input id="quantity" type="number" value={form.quantity} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="0" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("location")} *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
                  <input id="location" type="text" value={form.location} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="Village/Town" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("uploaderName")}</label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
                  <input id="uploaderName" type="text" value={form.uploaderName} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="Your name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">{t("uploaderContact")}</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
                  <input id="uploaderContact" type="tel" value={form.uploaderContact} onChange={handleChange} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white text-gray-700" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">{t("uploadImages")}</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition bg-gray-50">
                <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" id="fileInput" />
                <label htmlFor="fileInput" className="cursor-pointer block">
                  <Camera size={48} className="mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-700 font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500">PNG, JPG up to 5 images</p>
                </label>
              </div>

              {previews.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-24 object-cover rounded-lg border-2 border-gray-200" />
                      <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition shadow-md">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={handleSubmit} disabled={loading} className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-lg font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50">
              <Upload size={24} />
              <span>{loading ? "Uploading..." : t("submit")}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCropResidue;