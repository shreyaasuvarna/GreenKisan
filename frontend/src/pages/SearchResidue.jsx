// // // // // // frontend/src/pages/SearchResidue.jsx

// // // // // import React, { useEffect, useState } from "react";
// // // // // import { Link, useNavigate } from "react-router-dom";

// // // // // import "../styles/SearchResidue.css";

// // // // // import { useLanguage } from "../context/LanguageContext"; // added for translations

// // // // // export default function SearchResidue() {
// // // // //   const navigate = useNavigate();
// // // // //   const { t } = useLanguage(); // added for translations

// // // // //   const [residues, setResidues] = useState([]);
// // // // //   const [filtered, setFiltered] = useState([]);

// // // // //   const [filters, setFilters] = useState({
// // // // //     cropName: "",
// // // // //     residueType: "",
// // // // //     location: "",
// // // // //     minQuantity: "",
// // // // //   });

// // // // //   useEffect(() => {
// // // // //     fetch("http://localhost:5000/api/residue/all")
// // // // //       .then((res) => res.json())
// // // // //       .then((data) => {
// // // // //         setResidues(data);
// // // // //         setFiltered(data);
// // // // //       });
// // // // //   }, []);

// // // // //   const handleSearch = () => {
// // // // //     const url = new URL("http://localhost:5000/api/residue/search");

// // // // //     Object.keys(filters).forEach((key) => {
// // // // //       if (filters[key]) url.searchParams.append(key, filters[key]);
// // // // //     });

// // // // //     fetch(url)
// // // // //       .then((res) => res.json())
// // // // //       .then((data) => setFiltered(data));
// // // // //   };

// // // // //   const handleChange = (e) => {
// // // // //     setFilters({ ...filters, [e.target.id]: e.target.value });
// // // // //   };

// // // // //   return (
// // // // //     <div className="search-container">
// // // // //       <h1>{t("searchCropResidues") ?? "Search Crop Residues"}</h1>

// // // // //       <div className="filters">
// // // // //         <select id="cropName" onChange={handleChange}>
// // // // //           <option value="">{t("cropOption") ?? "Crop"}</option>
// // // // //           <option value="Paddy">{t("paddy") ?? "Paddy"}</option>
// // // // //           <option value="Wheat">{t("wheat") ?? "Wheat"}</option>
// // // // //           <option value="Rice">{t("rice") ?? "Rice"}</option>
// // // // //           <option value="Maize">{t("maize") ?? "Maize"}</option>
// // // // //         </select>

// // // // //         <select id="residueType" onChange={handleChange}>
// // // // //           <option value="">{t("residueOption") ?? "Residue"}</option>
// // // // //           <option value="Straw">{t("straw") ?? "Straw"}</option>
// // // // //           <option value="Husk">{t("husk") ?? "Husk"}</option>
// // // // //           <option value="Leaf">{t("leaf") ?? "Leaf"}</option>
// // // // //         </select>

// // // // //         <input
// // // // //           id="location"
// // // // //           type="text"
// // // // //           placeholder={t("locationPlaceholderShort") ?? "Location"}
// // // // //           onChange={handleChange}
// // // // //         />

// // // // //         <input
// // // // //           id="minQuantity"
// // // // //           type="number"
// // // // //           placeholder={t("minQtyPlaceholder") ?? "Min Qty"}
// // // // //           onChange={handleChange}
// // // // //         />

// // // // //         <button onClick={handleSearch}>{t("search") ?? "Search"}</button>
// // // // //       </div>

// // // // //       <div className="residue-list">
// // // // //         {filtered.length === 0 ? (
// // // // //           <p>{t("noResiduesFound") ?? "No residues found."}</p>
// // // // //         ) : (
// // // // //           filtered.map((r) => (
// // // // //             <div className="residue-card" key={r._id}>
// // // // //               <h3>{r.cropName}</h3>
// // // // //               <p>
// // // // //                 {t("typeLabel") ?? "Type"}: {r.residueType}
// // // // //               </p>
// // // // //               <p>
// // // // //                 {t("quantityLabel") ?? "Quantity"}: {r.quantity} {t("kg") ?? "kg"}
// // // // //               </p>
// // // // //               <p>
// // // // //                 {t("locationLabel") ?? "Location"}: {r.location}
// // // // //               </p>
// // // // //               <p>
// // // // //                 {t("uploaderLabel") ?? "Uploader"}: {r.uploaderName}
// // // // //               </p>

// // // // //               <div className="image-row">
// // // // //                 {r.images.map((img, idx) => (
// // // // //                   <img key={idx} src={img} alt={t("residueImageAlt") ?? "residue"} />
// // // // //                 ))}
// // // // //               </div>

// // // // //               <div style={{ marginTop: 8 }}>
// // // // //                 <Link to={`/book-residue/${r._id}`} className="login-btn">
// // // // //                   {t("bookNow") ?? "Book Now"}
// // // // //                 </Link>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React, { useState } from 'react';
// // // // import { Search, MapPin, Package, Leaf, Filter, ShoppingCart, Phone, X } from 'lucide-react';

// // // // const SearchResidue = () => {
// // // //   const [language, setLanguage] = useState('en');
// // // //   const [filters, setFilters] = useState({
// // // //     cropName: '',
// // // //     residueType: '',
// // // //     location: '',
// // // //     minQuantity: ''
// // // //   });
// // // //   const [showFilters, setShowFilters] = useState(false);
// // // //   const [selectedItem, setSelectedItem] = useState(null);

// // // //   // Mock data
// // // //   const [residues] = useState([
// // // //     {
// // // //       id: 1,
// // // //       cropName: 'Paddy',
// // // //       residueType: 'Straw',
// // // //       quantity: 500,
// // // //       location: 'Mangaluru',
// // // //       uploaderName: 'Rajesh Kumar',
// // // //       uploaderContact: '+91 98765 43210',
// // // //       price: 5,
// // // //       images: ['https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400']
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       cropName: 'Wheat',
// // // //       residueType: 'Husk',
// // // //       quantity: 300,
// // // //       location: 'Udupi',
// // // //       uploaderName: 'Priya Shetty',
// // // //       uploaderContact: '+91 98765 43211',
// // // //       price: 4,
// // // //       images: ['https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400']
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       cropName: 'Coconut',
// // // //       residueType: 'Shell',
// // // //       quantity: 800,
// // // //       location: 'Kundapur',
// // // //       uploaderName: 'Suresh Rao',
// // // //       uploaderContact: '+91 98765 43212',
// // // //       price: 3,
// // // //       images: ['https://images.unsplash.com/photo-1589216532372-1c2ddb29a88d?w=400']
// // // //     }
// // // //   ]);

// // // //   const [filtered, setFiltered] = useState(residues);

// // // //   const translations = {
// // // //     en: {
// // // //       title: 'Search Crop Residues',
// // // //       searchPlaceholder: 'Search by crop, type, or location...',
// // // //       filters: 'Filters',
// // // //       clearFilters: 'Clear All',
// // // //       cropName: 'Crop',
// // // //       residueType: 'Residue Type',
// // // //       location: 'Location',
// // // //       minQuantity: 'Min Quantity',
// // // //       apply: 'Apply',
// // // //       noResults: 'No residues found',
// // // //       available: 'Available',
// // // //       kg: 'kg',
// // // //       perKg: 'per kg',
// // // //       bookNow: 'Book Now',
// // // //       contact: 'Contact',
// // // //       viewDetails: 'View Details',
// // // //       closeDetails: 'Close'
// // // //     },
// // // //     kn: {
// // // //       title: 'ಬೆಳೆ ಅವಶೇಷಗಳನ್ನು ಹುಡುಕಿ',
// // // //       searchPlaceholder: 'ಬೆಳೆ, ಪ್ರಕಾರ, ಅಥವಾ ಸ್ಥಳದಿಂದ ಹುಡುಕಿ...',
// // // //       filters: 'ಫಿಲ್ಟರ್‌ಗಳು',
// // // //       clearFilters: 'ಎಲ್ಲವನ್ನೂ ತೆರವು ಮಾಡಿ',
// // // //       cropName: 'ಬೆಳೆ',
// // // //       residueType: 'ಅವಶೇಷ ಪ್ರಕಾರ',
// // // //       location: 'ಸ್ಥಳ',
// // // //       minQuantity: 'ಕನಿಷ್ಠ ಪ್ರಮಾಣ',
// // // //       apply: 'ಅನ್ವಯಿಸಿ',
// // // //       noResults: 'ಯಾವುದೇ ಅವಶೇಷಗಳು ದೊರಕಲಿಲ್ಲ',
// // // //       available: 'ಲಭ್ಯವಿದೆ',
// // // //       kg: 'ಕೆಜಿ',
// // // //       perKg: 'ಪ್ರತಿ ಕೆಜಿ',
// // // //       bookNow: 'ಬುಕ್ ಮಾಡಿ',
// // // //       contact: 'ಸಂಪರ್ಕ',
// // // //       viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
// // // //       closeDetails: 'ಮುಚ್ಚಿ'
// // // //     }
// // // //   };

// // // //   const t = (key) => translations[language][key] || key;

// // // //   const handleFilterChange = (e) => {
// // // //     setFilters({ ...filters, [e.target.id]: e.target.value });
// // // //   };

// // // //   const applyFilters = () => {
// // // //     let result = residues;

// // // //     if (filters.cropName) {
// // // //       result = result.filter(r => r.cropName.toLowerCase().includes(filters.cropName.toLowerCase()));
// // // //     }
// // // //     if (filters.residueType) {
// // // //       result = result.filter(r => r.residueType.toLowerCase().includes(filters.residueType.toLowerCase()));
// // // //     }
// // // //     if (filters.location) {
// // // //       result = result.filter(r => r.location.toLowerCase().includes(filters.location.toLowerCase()));
// // // //     }
// // // //     if (filters.minQuantity) {
// // // //       result = result.filter(r => r.quantity >= parseInt(filters.minQuantity));
// // // //     }

// // // //     setFiltered(result);
// // // //     setShowFilters(false);
// // // //   };

// // // //   const clearFilters = () => {
// // // //     setFilters({ cropName: '', residueType: '', location: '', minQuantity: '' });
// // // //     setFiltered(residues);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
// // // //       {/* Header */}
// // // //       <header className="bg-white shadow-md sticky top-0 z-40">
// // // //         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
// // // //           <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
// // // //           <select
// // // //             value={language}
// // // //             onChange={(e) => setLanguage(e.target.value)}
// // // //             className="px-4 py-2 border border-gray-300 rounded-lg"
// // // //           >
// // // //             <option value="en">English</option>
// // // //             <option value="kn">ಕನ್ನಡ</option>
// // // //           </select>
// // // //         </div>
// // // //       </header>

// // // //       {/* Main Content */}
// // // //       <main className="max-w-7xl mx-auto px-4 py-8">
// // // //         {/* Search Bar */}
// // // //         <div className="bg-white rounded-xl shadow-lg p-4 mb-6">
// // // //           <div className="flex flex-col md:flex-row gap-4">
// // // //             <div className="flex-1 relative">
// // // //               <Search className="absolute left-3 top-3 text-gray-400" size={20} />
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder={t('searchPlaceholder')}
// // // //                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
// // // //                 onChange={(e) => {
// // // //                   const value = e.target.value.toLowerCase();
// // // //                   setFiltered(residues.filter(r => 
// // // //                     r.cropName.toLowerCase().includes(value) ||
// // // //                     r.residueType.toLowerCase().includes(value) ||
// // // //                     r.location.toLowerCase().includes(value)
// // // //                   ));
// // // //                 }}
// // // //               />
// // // //             </div>
// // // //             <button
// // // //               onClick={() => setShowFilters(!showFilters)}
// // // //               className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center space-x-2"
// // // //             >
// // // //               <Filter size={20} />
// // // //               <span>{t('filters')}</span>
// // // //             </button>
// // // //           </div>

// // // //           {/* Filter Panel */}
// // // //           {showFilters && (
// // // //             <div className="mt-4 pt-4 border-t border-gray-200">
// // // //               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
// // // //                 <input
// // // //                   id="cropName"
// // // //                   type="text"
// // // //                   placeholder={t('cropName')}
// // // //                   value={filters.cropName}
// // // //                   onChange={handleFilterChange}
// // // //                   className="px-4 py-2 border border-gray-300 rounded-lg"
// // // //                 />
// // // //                 <input
// // // //                   id="residueType"
// // // //                   type="text"
// // // //                   placeholder={t('residueType')}
// // // //                   value={filters.residueType}
// // // //                   onChange={handleFilterChange}
// // // //                   className="px-4 py-2 border border-gray-300 rounded-lg"
// // // //                 />
// // // //                 <input
// // // //                   id="location"
// // // //                   type="text"
// // // //                   placeholder={t('location')}
// // // //                   value={filters.location}
// // // //                   onChange={handleFilterChange}
// // // //                   className="px-4 py-2 border border-gray-300 rounded-lg"
// // // //                 />
// // // //                 <input
// // // //                   id="minQuantity"
// // // //                   type="number"
// // // //                   placeholder={t('minQuantity')}
// // // //                   value={filters.minQuantity}
// // // //                   onChange={handleFilterChange}
// // // //                   className="px-4 py-2 border border-gray-300 rounded-lg"
// // // //                 />
// // // //               </div>
// // // //               <div className="flex gap-2">
// // // //                 <button
// // // //                   onClick={applyFilters}
// // // //                   className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
// // // //                 >
// // // //                   {t('apply')}
// // // //                 </button>
// // // //                 <button
// // // //                   onClick={clearFilters}
// // // //                   className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
// // // //                 >
// // // //                   {t('clearFilters')}
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         {/* Results */}
// // // //         <div className="mb-4 text-gray-600">
// // // //           {filtered.length} {t('available')}
// // // //         </div>

// // // //         {filtered.length === 0 ? (
// // // //           <div className="bg-white rounded-xl shadow-lg p-12 text-center">
// // // //             <Package size={64} className="mx-auto text-gray-400 mb-4" />
// // // //             <p className="text-xl text-gray-600">{t('noResults')}</p>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {filtered.map((residue) => (
// // // //               <div
// // // //                 key={residue.id}
// // // //                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
// // // //               >
// // // //                 <div className="relative h-48 overflow-hidden">
// // // //                   <img
// // // //                     src={residue.images[0]}
// // // //                     alt={residue.cropName}
// // // //                     className="w-full h-full object-cover"
// // // //                   />
// // // //                   <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
// // // //                     ₹{residue.price} {t('perKg')}
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="p-6">
// // // //                   <h3 className="text-xl font-bold text-gray-800 mb-2">{residue.cropName}</h3>
                  
// // // //                   <div className="space-y-2 mb-4">
// // // //                     <div className="flex items-center text-gray-600">
// // // //                       <Leaf size={16} className="mr-2" />
// // // //                       <span className="text-sm">{residue.residueType}</span>
// // // //                     </div>
// // // //                     <div className="flex items-center text-gray-600">
// // // //                       <Package size={16} className="mr-2" />
// // // //                       <span className="text-sm">{residue.quantity} {t('kg')}</span>
// // // //                     </div>
// // // //                     <div className="flex items-center text-gray-600">
// // // //                       <MapPin size={16} className="mr-2" />
// // // //                       <span className="text-sm">{residue.location}</span>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="flex gap-2">
// // // //                     <button
// // // //                       onClick={() => setSelectedItem(residue)}
// // // //                       className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition text-sm font-semibold"
// // // //                     >
// // // //                       {t('viewDetails')}
// // // //                     </button>
// // // //                     <button
// // // //                       onClick={() => alert(`Booking ${residue.cropName}`)}
// // // //                       className="flex-1 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition flex items-center justify-center space-x-1 text-sm font-semibold"
// // // //                     >
// // // //                       <ShoppingCart size={16} />
// // // //                       <span>{t('bookNow')}</span>
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </main>

// // // //       {/* Details Modal */}
// // // //       {selectedItem && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
// // // //           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
// // // //             <div className="relative">
// // // //               <img
// // // //                 src={selectedItem.images[0]}
// // // //                 alt={selectedItem.cropName}
// // // //                 className="w-full h-64 object-cover"
// // // //               />
// // // //               <button
// // // //                 onClick={() => setSelectedItem(null)}
// // // //                 className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100"
// // // //               >
// // // //                 <X size={24} />
// // // //               </button>
// // // //             </div>

// // // //             <div className="p-8">
// // // //               <h2 className="text-3xl font-bold text-gray-800 mb-4">{selectedItem.cropName}</h2>
              
// // // //               <div className="grid grid-cols-2 gap-4 mb-6">
// // // //                 <div className="bg-blue-50 p-4 rounded-lg">
// // // //                   <p className="text-sm text-gray-600 mb-1">Type</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">{selectedItem.residueType}</p>
// // // //                 </div>
// // // //                 <div className="bg-green-50 p-4 rounded-lg">
// // // //                   <p className="text-sm text-gray-600 mb-1">Quantity</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">{selectedItem.quantity} {t('kg')}</p>
// // // //                 </div>
// // // //                 <div className="bg-purple-50 p-4 rounded-lg">
// // // //                   <p className="text-sm text-gray-600 mb-1">Price</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">₹{selectedItem.price} {t('perKg')}</p>
// // // //                 </div>
// // // //                 <div className="bg-orange-50 p-4 rounded-lg">
// // // //                   <p className="text-sm text-gray-600 mb-1">Location</p>
// // // //                   <p className="text-lg font-semibold text-gray-800">{selectedItem.location}</p>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="border-t pt-4 mb-6">
// // // //                 <p className="text-sm text-gray-600 mb-2">Seller Information</p>
// // // //                 <p className="font-semibold text-gray-800">{selectedItem.uploaderName}</p>
// // // //                 <div className="flex items-center text-gray-600 mt-2">
// // // //                   <Phone size={16} className="mr-2" />
// // // //                   <span>{selectedItem.uploaderContact}</span>
// // // //                 </div>
// // // //               </div>

// // // //               <button
// // // //                 onClick={() => alert(`Booking ${selectedItem.cropName}`)}
// // // //                 className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition text-lg font-semibold flex items-center justify-center space-x-2"
// // // //               >
// // // //                 <ShoppingCart size={24} />
// // // //                 <span>{t('bookNow')}</span>
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SearchResidue;

// // // import React, { useState } from 'react';
// // // import { Search, MapPin, Package, Leaf, Filter, ShoppingCart, Phone, X } from 'lucide-react';

// // // const SearchResidue = () => {
// // //   const [language, setLanguage] = useState('en');
// // //   const [filters, setFilters] = useState({
// // //     cropName: '',
// // //     residueType: '',
// // //     location: '',
// // //     minQuantity: ''
// // //   });
// // //   const [showFilters, setShowFilters] = useState(false);
// // //   const [selectedItem, setSelectedItem] = useState(null);

// // //   // Mock data
// // //   const [residues] = useState([
// // //     {
// // //       id: 1,
// // //       cropName: 'Paddy',
// // //       residueType: 'Straw',
// // //       quantity: 500,
// // //       location: 'Mangaluru',
// // //       uploaderName: 'Rajesh Kumar',
// // //       uploaderContact: '+91 98765 43210',
// // //       price: 5,
// // //       images: ['https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400']
// // //     },
// // //     {
// // //       id: 2,
// // //       cropName: 'Wheat',
// // //       residueType: 'Husk',
// // //       quantity: 300,
// // //       location: 'Udupi',
// // //       uploaderName: 'Priya Shetty',
// // //       uploaderContact: '+91 98765 43211',
// // //       price: 4,
// // //       images: ['https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400']
// // //     },
// // //     {
// // //       id: 3,
// // //       cropName: 'Coconut',
// // //       residueType: 'Shell',
// // //       quantity: 800,
// // //       location: 'Kundapur',
// // //       uploaderName: 'Suresh Rao',
// // //       uploaderContact: '+91 98765 43212',
// // //       price: 3,
// // //       images: ['https://images.unsplash.com/photo-1589216532372-1c2ddb29a88d?w=400']
// // //     }
// // //   ]);

// // //   const [filtered, setFiltered] = useState(residues);

// // //   const translations = {
// // //     en: {
// // //       title: 'Search Crop Residues',
// // //       searchPlaceholder: 'Search by crop, type, or location...',
// // //       filters: 'Filters',
// // //       clearFilters: 'Clear All',
// // //       cropName: 'Crop',
// // //       residueType: 'Residue Type',
// // //       location: 'Location',
// // //       minQuantity: 'Min Quantity',
// // //       apply: 'Apply',
// // //       noResults: 'No residues found',
// // //       available: 'Available',
// // //       kg: 'kg',
// // //       perKg: 'per kg',
// // //       bookNow: 'Book Now',
// // //       contact: 'Contact',
// // //       viewDetails: 'View Details',
// // //       closeDetails: 'Close',
// // //       seller: 'Seller Information'
// // //     },
// // //     kn: {
// // //       title: 'ಬೆಳೆ ಅವಶೇಷಗಳನ್ನು ಹುಡುಕಿ',
// // //       searchPlaceholder: 'ಬೆಳೆ, ಪ್ರಕಾರ, ಅಥವಾ ಸ್ಥಳದಿಂದ ಹುಡುಕಿ...',
// // //       filters: 'ಫಿಲ್ಟರ್‌ಗಳು',
// // //       clearFilters: 'ಎಲ್ಲವನ್ನೂ ತೆರವು ಮಾಡಿ',
// // //       cropName: 'ಬೆಳೆ',
// // //       residueType: 'ಅವಶೇಷ ಪ್ರಕಾರ',
// // //       location: 'ಸ್ಥಳ',
// // //       minQuantity: 'ಕನಿಷ್ಠ ಪ್ರಮಾಣ',
// // //       apply: 'ಅನ್ವಯಿಸಿ',
// // //       noResults: 'ಯಾವುದೇ ಅವಶೇಷಗಳು ದೊರಕಲಿಲ್ಲ',
// // //       available: 'ಲಭ್ಯವಿದೆ',
// // //       kg: 'ಕೆಜಿ',
// // //       perKg: 'ಪ್ರತಿ ಕೆಜಿ',
// // //       bookNow: 'ಬುಕ್ ಮಾಡಿ',
// // //       contact: 'ಸಂಪರ್ಕ',
// // //       viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
// // //       closeDetails: 'ಮುಚ್ಚಿ',
// // //       seller: 'ಮಾರಾಟಗಾರ ಮಾಹಿತಿ'
// // //     }
// // //   };

// // //   const t = (key) => translations[language][key] || key;

// // //   const handleFilterChange = (e) => {
// // //     setFilters({ ...filters, [e.target.id]: e.target.value });
// // //   };

// // //   const applyFilters = () => {
// // //     let result = residues;

// // //     if (filters.cropName) {
// // //       result = result.filter(r => r.cropName.toLowerCase().includes(filters.cropName.toLowerCase()));
// // //     }
// // //     if (filters.residueType) {
// // //       result = result.filter(r => r.residueType.toLowerCase().includes(filters.residueType.toLowerCase()));
// // //     }
// // //     if (filters.location) {
// // //       result = result.filter(r => r.location.toLowerCase().includes(filters.location.toLowerCase()));
// // //     }
// // //     if (filters.minQuantity) {
// // //       result = result.filter(r => r.quantity >= parseInt(filters.minQuantity));
// // //     }

// // //     setFiltered(result);
// // //     setShowFilters(false);
// // //   };

// // //   const clearFilters = () => {
// // //     setFilters({ cropName: '', residueType: '', location: '', minQuantity: '' });
// // //     setFiltered(residues);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
// // //       {/* Header */}
// // //       <header className="bg-white shadow-md sticky top-0 z-40 border-b border-gray-200">
// // //         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
// // //           <h1 className="text-2xl font-bold text-gray-800">{t('title')}</h1>
// // //           <select
// // //             value={language}
// // //             onChange={(e) => setLanguage(e.target.value)}
// // //             className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
// // //           >
// // //             <option value="en">English</option>
// // //             <option value="kn">ಕನ್ನಡ</option>
// // //           </select>
// // //         </div>
// // //       </header>

// // //       {/* Main Content */}
// // //       <main className="max-w-7xl mx-auto px-6 py-8">
// // //         {/* Search Bar */}
// // //         <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
// // //           <div className="flex flex-col md:flex-row gap-4">
// // //             <div className="flex-1 relative">
// // //               <Search className="absolute left-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
// // //               <input
// // //                 type="text"
// // //                 placeholder={t('searchPlaceholder')}
// // //                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
// // //                 onChange={(e) => {
// // //                   const value = e.target.value.toLowerCase();
// // //                   setFiltered(residues.filter(r => 
// // //                     r.cropName.toLowerCase().includes(value) ||
// // //                     r.residueType.toLowerCase().includes(value) ||
// // //                     r.location.toLowerCase().includes(value)
// // //                   ));
// // //                 }}
// // //               />
// // //             </div>
// // //             <button
// // //               onClick={() => setShowFilters(!showFilters)}
// // //               className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center justify-center space-x-2 shadow-md"
// // //             >
// // //               <Filter size={20} />
// // //               <span>{t('filters')}</span>
// // //             </button>
// // //           </div>

// // //           {/* Filter Panel */}
// // //           {showFilters && (
// // //             <div className="mt-6 pt-6 border-t border-gray-200">
// // //               <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
// // //                 <input
// // //                   id="cropName"
// // //                   type="text"
// // //                   placeholder={t('cropName')}
// // //                   value={filters.cropName}
// // //                   onChange={handleFilterChange}
// // //                   className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
// // //                 />
// // //                 <input
// // //                   id="residueType"
// // //                   type="text"
// // //                   placeholder={t('residueType')}
// // //                   value={filters.residueType}
// // //                   onChange={handleFilterChange}
// // //                   className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
// // //                 />
// // //                 <input
// // //                   id="location"
// // //                   type="text"
// // //                   placeholder={t('location')}
// // //                   value={filters.location}
// // //                   onChange={handleFilterChange}
// // //                   className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
// // //                 />
// // //                 <input
// // //                   id="minQuantity"
// // //                   type="number"
// // //                   placeholder={t('minQuantity')}
// // //                   value={filters.minQuantity}
// // //                   onChange={handleFilterChange}
// // //                   className="px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-blue-500"
// // //                 />
// // //               </div>
// // //               <div className="flex gap-3">
// // //                 <button
// // //                   onClick={applyFilters}
// // //                   className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-md font-medium"
// // //                 >
// // //                   {t('apply')}
// // //                 </button>
// // //                 <button
// // //                   onClick={clearFilters}
// // //                   className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition shadow-md font-medium"
// // //                 >
// // //                   {t('clearFilters')}
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>

// // //         {/* Results Count */}
// // //         <div className="mb-6 text-gray-700 font-medium text-lg">
// // //           {filtered.length} {t('available')}
// // //         </div>

// // //         {/* Results Grid */}
// // //         {filtered.length === 0 ? (
// // //           <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-100">
// // //             <Package size={64} className="mx-auto text-gray-400 mb-4" />
// // //             <p className="text-xl text-gray-600">{t('noResults')}</p>
// // //           </div>
// // //         ) : (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //             {filtered.map((residue) => (
// // //               <div
// // //                 key={residue.id}
// // //                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
// // //               >
// // //                 <div className="relative h-48 overflow-hidden bg-gray-100">
// // //                   <img
// // //                     src={residue.images[0]}
// // //                     alt={residue.cropName}
// // //                     className="w-full h-full object-cover"
// // //                   />
// // //                   <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-md">
// // //                     ₹{residue.price} {t('perKg')}
// // //                   </div>
// // //                 </div>

// // //                 <div className="p-6">
// // //                   <h3 className="text-xl font-bold text-gray-800 mb-3">{residue.cropName}</h3>
                  
// // //                   <div className="space-y-2 mb-4">
// // //                     <div className="flex items-center text-gray-600">
// // //                       <Leaf size={16} className="mr-2 text-green-600" />
// // //                       <span className="text-sm">{residue.residueType}</span>
// // //                     </div>
// // //                     <div className="flex items-center text-gray-600">
// // //                       <Package size={16} className="mr-2 text-blue-600" />
// // //                       <span className="text-sm font-medium">{residue.quantity} {t('kg')}</span>
// // //                     </div>
// // //                     <div className="flex items-center text-gray-600">
// // //                       <MapPin size={16} className="mr-2 text-red-600" />
// // //                       <span className="text-sm">{residue.location}</span>
// // //                     </div>
// // //                   </div>

// // //                   <div className="flex gap-2 pt-2 border-t border-gray-200">
// // //                     <button
// // //                       onClick={() => setSelectedItem(residue)}
// // //                       className="flex-1 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm font-semibold shadow-sm"
// // //                     >
// // //                       {t('viewDetails')}
// // //                     </button>
// // //                     <button
// // //                       onClick={() => alert(`Booking ${residue.cropName}`)}
// // //                       className="flex-1 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center justify-center space-x-1 text-sm font-semibold shadow-sm"
// // //                     >
// // //                       <ShoppingCart size={16} />
// // //                       <span>{t('bookNow')}</span>
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </main>

// // //       {/* Details Modal */}
// // //       {selectedItem && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
// // //           <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
// // //             <div className="relative">
// // //               <img
// // //                 src={selectedItem.images[0]}
// // //                 alt={selectedItem.cropName}
// // //                 className="w-full h-64 object-cover"
// // //               />
// // //               <button
// // //                 onClick={() => setSelectedItem(null)}
// // //                 className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 shadow-lg transition"
// // //               >
// // //                 <X size={24} className="text-gray-700" />
// // //               </button>
// // //             </div>

// // //             <div className="p-8">
// // //               <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedItem.cropName}</h2>
              
// // //               <div className="grid grid-cols-2 gap-4 mb-6">
// // //                 <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
// // //                   <p className="text-sm text-gray-600 mb-1">Type</p>
// // //                   <p className="text-lg font-semibold text-gray-800">{selectedItem.residueType}</p>
// // //                 </div>
// // //                 <div className="bg-green-50 p-4 rounded-lg border border-green-100">
// // //                   <p className="text-sm text-gray-600 mb-1">Quantity</p>
// // //                   <p className="text-lg font-semibold text-gray-800">{selectedItem.quantity} {t('kg')}</p>
// // //                 </div>
// // //                 <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
// // //                   <p className="text-sm text-gray-600 mb-1">Price</p>
// // //                   <p className="text-lg font-semibold text-gray-800">₹{selectedItem.price} {t('perKg')}</p>
// // //                 </div>
// // //                 <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
// // //                   <p className="text-sm text-gray-600 mb-1">Location</p>
// // //                   <p className="text-lg font-semibold text-gray-800">{selectedItem.location}</p>
// // //                 </div>
// // //               </div>

// // //               <div className="border-t pt-4 mb-6 border-gray-200">
// // //                 <p className="text-sm font-semibold text-gray-700 mb-3">{t('seller')}</p>
// // //                 <p className="font-semibold text-gray-800 text-lg">{selectedItem.uploaderName}</p>
// // //                 <div className="flex items-center text-gray-600 mt-2">
// // //                   <Phone size={18} className="mr-2 text-green-600" />
// // //                   <span className="font-medium">{selectedItem.uploaderContact}</span>
// // //                 </div>
// // //               </div>

// // //               <button
// // //                 onClick={() => alert(`Booking ${selectedItem.cropName}`)}
// // //                 className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition text-lg font-semibold flex items-center justify-center space-x-2 shadow-lg"
// // //               >
// // //                 <ShoppingCart size={24} />
// // //                 <span>{t('bookNow')}</span>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default SearchResidue;
// // import React, { useState, useEffect } from "react";
// // import { Search, MapPin, Package, Leaf, Filter, ShoppingCart, ArrowLeft } from "lucide-react";
// // import { Link } from "react-router-dom";

// // const SearchResidue = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [residues, setResidues] = useState([]);
// //   const [filteredResidues, setFilteredResidues] = useState([]);
// //   const [showFilters, setShowFilters] = useState(false);
// //   const [filters, setFilters] = useState({
// //     cropName: "",
// //     residueType: "",
// //     location: "",
// //     minQuantity: "",
// //   });

// //   useEffect(() => {
// //     const dummyData = [
// //       {
// //         id: 1,
// //         cropName: "Rice",
// //         residueType: "Husk",
// //         location: "Mangaluru",
// //         quantity: "200 kg",
// //         price: "₹1200",
// //         image: "https://images.unsplash.com/photo-1587049352851-f5ee2f45a4d1",
// //       },
// //       {
// //         id: 2,
// //         cropName: "Wheat",
// //         residueType: "Straw",
// //         location: "Udupi",
// //         quantity: "150 kg",
// //         price: "₹950",
// //         image: "https://images.unsplash.com/photo-1593554779511-68df00c8e02c",
// //       },
// //     ];
// //     setResidues(dummyData);
// //     setFilteredResidues(dummyData);
// //   }, []);

// //   useEffect(() => {
// //     let data = residues;

// //     if (searchTerm) {
// //       data = data.filter((item) =>
// //         item.cropName.toLowerCase().includes(searchTerm.toLowerCase())
// //       );
// //     }

// //     if (filters.cropName) data = data.filter((i) => i.cropName === filters.cropName);
// //     if (filters.residueType) data = data.filter((i) => i.residueType === filters.residueType);
// //     if (filters.location) data = data.filter((i) => i.location === filters.location);
// //     if (filters.minQuantity) {
// //       data = data.filter(
// //         (i) => parseInt(i.quantity) >= parseInt(filters.minQuantity)
// //       );
// //     }

// //     setFilteredResidues(data);
// //   }, [searchTerm, filters, residues]);

// //   return (
// //     <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 to-blue-50 overflow-x-hidden">

// //       {/* FULL-WIDTH TOP BAR */}
// //       <div className="w-full flex items-center bg-white/50 py-4 px-4 shadow">
// //         <Link
// //           to="/industry-dashboard"
// //           className="flex items-center text-green-700 font-semibold hover:text-green-900"
// //         >
// //           <ArrowLeft size={22} className="mr-2" />
// //           Back to Dashboard
// //         </Link>
// //       </div>

// //       {/* TITLE */}
// //       <h1 className="text-4xl font-bold text-green-700 text-center mt-6">
// //         Search Agricultural Residue
// //       </h1>

// //       {/* SEARCH + FILTER FULL WIDTH */}
// //       <div className="w-full flex flex-col md:flex-row gap-4 px-4 mt-8">

// //         <div className="relative w-full">
// //           <Search className="absolute left-3 top-3 text-gray-500" size={22} />
// //           <input
// //             type="text"
// //             placeholder="Search by crop name…"
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-white shadow
// //                        focus:ring-2 focus:ring-green-500"
// //           />
// //         </div>

// //         <button
// //           onClick={() => setShowFilters(!showFilters)}
// //           className="px-8 py-4 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 flex items-center gap-2"
// //         >
// //           <Filter size={20} />
// //           Filters
// //         </button>
// //       </div>

// //       {/* FILTERS */}
// //       {showFilters && (
// //         <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 bg-green-100 px-4 py-4 mt-4 shadow">

// //           <select
// //             className="p-3 rounded-lg border border-gray-300"
// //             onChange={(e) => setFilters({ ...filters, cropName: e.target.value })}
// //           >
// //             <option value="">Crop Name</option>
// //             <option>Rice</option>
// //             <option>Wheat</option>
// //           </select>

// //           <select
// //             className="p-3 rounded-lg border border-gray-300"
// //             onChange={(e) => setFilters({ ...filters, residueType: e.target.value })}
// //           >
// //             <option value="">Residue Type</option>
// //             <option>Husk</option>
// //             <option>Straw</option>
// //           </select>

// //           <select
// //             className="p-3 rounded-lg border border-gray-300"
// //             onChange={(e) => setFilters({ ...filters, location: e.target.value })}
// //           >
// //             <option value="">Location</option>
// //             <option>Mangaluru</option>
// //             <option>Udupi</option>
// //           </select>

// //           <input
// //             type="number"
// //             placeholder="Min Quantity (kg)"
// //             className="p-3 rounded-lg border border-gray-300"
// //             onChange={(e) => setFilters({ ...filters, minQuantity: e.target.value })}
// //           />
// //         </div>
// //       )}

// //       {/* FULL-WIDTH GRID (SUPER BROAD) */}
// //       <div className="w-full mt-10 px-4 grid 
// //                       grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
// //                       gap-10">

// //         {filteredResidues.length > 0 ? (
// //           filteredResidues.map((item) => (
// //             <div
// //               key={item.id}
// //               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 w-full"
// //             >
// //               <img
// //                 src={item.image}
// //                 alt="residue"
// //                 className="w-full h-48 object-cover rounded-xl"
// //               />

// //               <h2 className="text-2xl font-semibold text-green-700 mt-4">{item.cropName}</h2>

// //               <p className="flex items-center text-gray-600 mt-2">
// //                 <Leaf size={20} className="mr-2 text-green-600" />
// //                 {item.residueType}
// //               </p>

// //               <p className="flex items-center text-gray-600 mt-1">
// //                 <MapPin size={20} className="mr-2 text-red-500" />
// //                 {item.location}
// //               </p>

// //               <p className="flex items-center text-gray-600 mt-1">
// //                 <Package size={20} className="mr-2 text-yellow-600" />
// //                 {item.quantity}
// //               </p>

// //               <p className="text-green-700 font-bold mt-2 text-xl">{item.price}</p>

// //               <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg 
// //                                  hover:bg-green-700 transition flex items-center justify-center gap-2">
// //                 <ShoppingCart size={20} /> Book Now
// //               </button>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center text-gray-600 col-span-full">No residues found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SearchResidue;

// import React, { useState, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   Package,
//   Leaf,
//   Filter,
//   ShoppingCart,
//   ArrowLeft,
//   Languages,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const translations = {
//   en: {
//     title: "Search Agricultural Residue",
//     searchPlaceholder: "Search by crop name…",
//     filters: "Filters",
//     cropName: "Crop Name",
//     residueType: "Residue Type",
//     location: "Location",
//     minQty: "Min Quantity (kg)",
//     noResidues: "No residues found.",
//     requestPickup: "Request Pickup",
//     back: "Back to Dashboard",
//   },
//   kn: {
//     title: "ಕೃಷಿ ಅವಶಿಷ್ಟಗಳನ್ನು ಹುಡುಕಿ",
//     searchPlaceholder: "ಬೆಳೆ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ…",
//     filters: "ಫಿಲ್ಟರ್‌ಗಳು",
//     cropName: "ಬೆಳೆಯ ಹೆಸರು",
//     residueType: "ಅವಶಿಷ್ಟದ ಪ್ರಕಾರ",
//     location: "ಸ್ಥಳ",
//     minQty: "ಕನಿಷ್ಟ ಪ್ರಮಾಣ (ಕೆ.ಜಿ)",
//     noResidues: "ಯಾವುದೇ ಅವಶಿಷ್ಟಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
//     requestPickup: "ಪಿಕಪ್ ವಿನಂತಿ ಮಾಡಿ",
//     back: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
//   },
// };

// const SearchResidue = () => {
//   const [language, setLanguage] = useState("en");
//   const t = translations[language];

//   const [searchTerm, setSearchTerm] = useState("");
//   const [residues, setResidues] = useState([]);
//   const [filteredResidues, setFilteredResidues] = useState([]);
//   const [showFilters, setShowFilters] = useState(false);

//   const [filters, setFilters] = useState({
//     cropName: "",
//     residueType: "",
//     location: "",
//     minQuantity: "",
//   });

//   useEffect(() => {
//     const dummyData = [
//       {
//         id: 1,
//         cropName: "Rice",
//         residueType: "Husk",
//         location: "Mangaluru",
//         quantity: "200 kg",
//         price: "₹1200",
//         image: "https://images.unsplash.com/photo-1587049352851-f5ee2f45a4d1",
//       },
//       {
//         id: 2,
//         cropName: "Wheat",
//         residueType: "Straw",
//         location: "Udupi",
//         quantity: "150 kg",
//         price: "₹950",
//         image: "https://images.unsplash.com/photo-1593554779511-68df00c8e02c",
//       },
//     ];
//     setResidues(dummyData);
//     setFilteredResidues(dummyData);
//   }, []);

//   useEffect(() => {
//     let data = residues;

//     if (searchTerm) {
//       data = data.filter((item) =>
//         item.cropName.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (filters.cropName) data = data.filter((i) => i.cropName === filters.cropName);
//     if (filters.residueType) data = data.filter((i) => i.residueType === filters.residueType);
//     if (filters.location) data = data.filter((i) => i.location === filters.location);

//     if (filters.minQuantity) {
//       data = data.filter(
//         (i) => parseInt(i.quantity) >= parseInt(filters.minQuantity)
//       );
//     }

//     setFilteredResidues(data);
//   }, [searchTerm, filters, residues]);

//   return (
//     <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 to-blue-50 overflow-x-hidden">

//       {/* TOP BAR FULL WIDTH */}
//       <div className="w-full flex items-center justify-between bg-white/60 backdrop-blur py-4 px-6 shadow">

//         {/* BACK BUTTON */}
//         <Link
//           to="/industry-dashboard"
//           className="flex items-center text-green-700 font-semibold hover:text-green-900"
//         >
//           <ArrowLeft size={22} className="mr-2" />
//           {t.back}
//         </Link>

//         {/* LANGUAGE TOGGLE */}
//         <button
//           onClick={() => setLanguage(language === "en" ? "kn" : "en")}
//           className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700"
//         >
//           <Languages size={20} />
//           {language === "en" ? "ಕನ್ನಡ" : "English"}
//         </button>
//       </div>

//       {/* TITLE */}
//       <h1 className="text-4xl font-bold text-green-700 text-center mt-6">
//         {t.title}
//       </h1>

//       {/* SEARCH + FILTER */}
//       <div className="w-full flex flex-col md:flex-row gap-4 px-4 mt-8">

//         {/* Search */}
//         <div className="relative w-full">
//           <Search className="absolute left-3 top-3 text-gray-500" size={22} />
//           <input
//             type="text"
//             placeholder={t.searchPlaceholder}
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-white shadow
//                        focus:ring-2 focus:ring-green-500"
//           />
//         </div>

//         {/* Filter Button */}
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="px-8 py-4 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 flex items-center gap-2"
//         >
//           <Filter size={20} />
//           {t.filters}
//         </button>
//       </div>

//       {/* FILTERS BOX */}
//       {showFilters && (
//         <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 bg-green-100 px-4 py-4 mt-4 shadow">

//           <select
//             className="p-3 rounded-lg border border-gray-300"
//             onChange={(e) => setFilters({ ...filters, cropName: e.target.value })}
//           >
//             <option value="">{t.cropName}</option>
//             <option>Rice</option>
//             <option>Wheat</option>
//           </select>

//           <select
//             className="p-3 rounded-lg border border-gray-300"
//             onChange={(e) => setFilters({ ...filters, residueType: e.target.value })}
//           >
//             <option value="">{t.residueType}</option>
//             <option>Husk</option>
//             <option>Straw</option>
//           </select>

//           <select
//             className="p-3 rounded-lg border border-gray-300"
//             onChange={(e) => setFilters({ ...filters, location: e.target.value })}
//           >
//             <option value="">{t.location}</option>
//             <option>Mangaluru</option>
//             <option>Udupi</option>
//           </select>

//           <input
//             type="number"
//             placeholder={t.minQty}
//             className="p-3 rounded-lg border border-gray-300"
//             onChange={(e) => setFilters({ ...filters, minQuantity: e.target.value })}
//           />
//         </div>
//       )}

//       {/* GRID (FULL WIDTH, SUPER BROAD) */}
//       <div className="w-full mt-10 px-4 grid 
//                       grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
//                       gap-10">

//         {filteredResidues.length > 0 ? (
//           filteredResidues.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 w-full"
//             >
//               <img
//                 src={item.image}
//                 alt="residue"
//                 className="w-full h-48 object-cover rounded-xl"
//               />

//               <h2 className="text-2xl font-semibold text-green-700 mt-4">
//                 {item.cropName}
//               </h2>

//               <p className="flex items-center text-gray-600 mt-2">
//                 <Leaf size={20} className="mr-2 text-green-600" />
//                 {item.residueType}
//               </p>

//               <p className="flex items-center text-gray-600 mt-1">
//                 <MapPin size={20} className="mr-2 text-red-500" />
//                 {item.location}
//               </p>

//               <p className="flex items-center text-gray-600 mt-1">
//                 <Package size={20} className="mr-2 text-yellow-600" />
//                 {item.quantity}
//               </p>

//               <p className="text-green-700 font-bold mt-2 text-xl">{item.price}</p>

//               <button className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg 
//                                  hover:bg-green-700 transition flex items-center justify-center gap-2">
//                 <ShoppingCart size={20} /> {t.requestPickup}
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-600 col-span-full">{t.noResidues}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchResidue;
import React, { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Package,
  Leaf,
  Filter,
  ShoppingCart,
  ArrowLeft,
  Languages,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import API_URL from "../config/api";


const translations = {
  en: {
    title: "Search Agricultural Residue",
    searchPlaceholder: "Search by crop name…",
    filters: "Filters",
    cropName: "Crop Name",
    residueType: "Residue Type",
    location: "Location",
    minQty: "Min Quantity (kg)",
    noResidues: "No residues found.",
    requestPickup: "Request Pickup",
    back: "Back to Dashboard",
    loading: "Loading residues...",
    error: "Failed to load residues. Please try again.",
  },
  kn: {
    title: "ಕೃಷಿ ಅವಶಿಷ್ಟಗಳನ್ನು ಹುಡುಕಿ",
    searchPlaceholder: "ಬೆಳೆ ಹೆಸರಿನಿಂದ ಹುಡುಕಿ…",
    filters: "ಫಿಲ್ಟರ್‌ಗಳು",
    cropName: "ಬೆಳೆಯ ಹೆಸರು",
    residueType: "ಅವಶಿಷ್ಟದ ಪ್ರಕಾರ",
    location: "ಸ್ಥಳ",
    minQty: "ಕನಿಷ್ಠ ಪ್ರಮಾಣ (ಕೆ.ಜಿ)",
    noResidues: "ಯಾವುದೇ ಅವಶಿಷ್ಟಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",
    requestPickup: "ಪಿಕಪ್ ವಿನಂತಿ ಮಾಡಿ",
    back: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ",
    loading: "ಅವಶಿಷ್ಟಗಳನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿದೆ...",
    error: "ಅವಶಿಷ್ಟಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
  },
};

const SearchResidue = () => {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  const [searchTerm, setSearchTerm] = useState("");
  const [residues, setResidues] = useState([]);
  const [filteredResidues, setFilteredResidues] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    cropName: "",
    residueType: "",
    location: "",
    minQuantity: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchResidues = async () => {
      try {
        const res = await fetch(`${API_URL}/api/residue/all`);
        if (!res.ok) throw new Error("Failed to fetch residues");
        const data = await res.json();
        setResidues(data);
        setFilteredResidues(data);
      } catch (err) {
        console.error("Error fetching residues:", err);
        setError(t.error);
      } finally {
        setLoading(false);
      }
    };
    fetchResidues();
  }, [t.error]);

  useEffect(() => {
    let data = residues;

    if (searchTerm) {
      data = data.filter((item) =>
        item.cropName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.cropName) data = data.filter((i) => i.cropName === filters.cropName);
    if (filters.residueType) data = data.filter((i) => i.residueType === filters.residueType);
    if (filters.location) data = data.filter((i) => i.location === filters.location);

    if (filters.minQuantity) {
      data = data.filter(
        (i) => parseInt(i.quantity) >= parseInt(filters.minQuantity)
      );
    }

    setFilteredResidues(data);
  }, [searchTerm, filters, residues]);

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-green-50 to-blue-50 overflow-x-hidden">
      {/* TOP BAR FULL WIDTH */}
      <div className="w-full flex items-center justify-between bg-white/60 backdrop-blur py-4 px-6 shadow">
        {/* BACK BUTTON */}
        <Link
          to="/industry-dashboard"
          className="flex items-center text-green-700 font-semibold hover:text-green-900"
        >
          <ArrowLeft size={22} className="mr-2" />
          {t.back}
        </Link>

        {/* LANGUAGE TOGGLE */}
        <button
          onClick={() => setLanguage(language === "en" ? "kn" : "en")}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:bg-green-700"
        >
          <Languages size={20} />
          {language === "en" ? "ಕನ್ನಡ" : "English"}
        </button>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl font-bold text-green-700 text-center mt-6">
        {t.title}
      </h1>

      {/* SEARCH + FILTER */}
      <div className="w-full flex flex-col md:flex-row gap-4 px-4 mt-8">
        {/* Search */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-gray-500" size={22} />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl bg-white shadow
                       focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="px-8 py-4 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 flex items-center gap-2"
        >
          <Filter size={20} />
          {t.filters}
        </button>
      </div>

      {/* FILTERS BOX */}
      {showFilters && (
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 bg-green-100 px-4 py-4 mt-4 shadow">
          <select
            className="p-3 rounded-lg border border-gray-300"
            onChange={(e) => setFilters({ ...filters, cropName: e.target.value })}
          >
            <option value="">{t.cropName}</option>
            <option>Rice</option>
            <option>Wheat</option>
          </select>

          <select
            className="p-3 rounded-lg border border-gray-300"
            onChange={(e) => setFilters({ ...filters, residueType: e.target.value })}
          >
            <option value="">{t.residueType}</option>
            <option>Husk</option>
            <option>Straw</option>
          </select>

          <select
            className="p-3 rounded-lg border border-gray-300"
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          >
            <option value="">{t.location}</option>
            <option>Mangaluru</option>
            <option>Udupi</option>
          </select>

          <input
            type="number"
            placeholder={t.minQty}
            className="p-3 rounded-lg border border-gray-300"
            onChange={(e) => setFilters({ ...filters, minQuantity: e.target.value })}
          />
        </div>
      )}

      {/* LOADING OR ERROR STATE */}
      {loading && (
        <div className="text-center mt-10">
          <p className="text-gray-600">{t.loading}</p>
        </div>
      )}
      {error && (
        <div className="text-center mt-10">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* GRID (FULL WIDTH, SUPER BROAD) */}
      {!loading && !error && (
        <div className="w-full mt-10 px-4 grid 
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
                        gap-10">
          {filteredResidues.length > 0 ? (
            filteredResidues.map((item) => (
              <div
                key={item._id || item.id} // Use _id if from MongoDB
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 w-full"
              >
                {item.images && item.images.length > 0 && (
                  <img
                    src={item.images[0]} // Assuming backend returns image URLs
                    alt="residue"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                )}

                <h2 className="text-2xl font-semibold text-green-700 mt-4">
                  {item.cropName}
                </h2>

                <p className="flex items-center text-gray-600 mt-2">
                  <Leaf size={20} className="mr-2 text-green-600" />
                  {item.residueType}
                </p>

                <p className="flex items-center text-gray-600 mt-1">
                  <MapPin size={20} className="mr-2 text-red-500" />
                  {item.location}
                </p>

                <p className="flex items-center text-gray-600 mt-1">
                  <Package size={20} className="mr-2 text-yellow-600" />
                  {item.quantity} kg
                </p>

                <p className="text-green-700 font-bold mt-2 text-xl">₹{item.price || "N/A"}</p> {/* Assuming price is added later */}

                <button
                  onClick={() => navigate(`/book-residue/${item._id}`)} // Replace with actual booking logic
                  className="w-full mt-4 py-3 bg-green-600 text-white rounded-lg 
                             hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} /> {t.requestPickup}
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">{t.noResidues}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResidue;
