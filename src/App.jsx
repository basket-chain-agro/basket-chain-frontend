import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';

const products = [
  { id: 'pretty-savas', name: 'Pretty Savas', seller: "Jake's Farm", location: 'Abuja', price: '₦24,000/20kg', image: '/images/pretty-savas.png' },
  { id: 'tomato-jos', name: 'Tomato Jos', seller: "John's Farm", location: 'Lagos', price: '₦50,000/140kg', image: '/images/tomato-jos.png' },
  { id: 'senkes-rice', name: 'Senkes Rice', seller: "John's Farm", location: 'Lagos', price: '₦70,000/Bag', image: '/images/senkes-rice.png' },
  { id: 'agric-fowl', name: 'Agric Fowl', seller: "Jeckerson's Farm", location: 'Calabar', price: '₦25,000/Fowl', image: '/images/agric-fowl.png' },
  { id: 'golden-cow', name: 'Golden Cow', seller: "Ahmed's Farm", location: 'Benue', price: '₦1,100,000/270kg', image: '/images/golden-cow.png' },
  { id: 'royal-cocoa', name: 'Royal Cocoa', seller: "Ojong's Farm", location: 'Cross River', price: '₦45,000/25kg', image: '/images/royal-cocoa.png' },
  { id: 'arewa-goat', name: 'Arewa Goat', seller: "John's Farm", location: 'Makurdi', price: '₦95,000/30kg', image: '/images/arewa-goat.png' },
  { id: 'groundnuts', name: 'Groundnuts', seller: "Jeckerson's Farm", location: 'Calabar', price: '₦80,000/100kg', image: '/images/groundnuts.png' },
  { id: 'large-yams', name: 'Large Yams', seller: "Chidi's Farm", location: 'Anambra', price: '₦120,000 for 100 Tubers', image: '/images/large-yams.png' },
  { id: 'healthy-broilers', name: 'Healthy Broilers', seller: "Tunde' Poultry", location: 'Ogun', price: '₦8,500/Live Bird', image: '/images/healthy-broilers.png' },
  { id: 'polished-local-rice', name: 'Polished Local Rice', seller: 'Apakali Hub', location: 'Ebonyi', price: '₦72,000/50kg', image: '/images/polished-local-rice.png' },
  { id: 'red-sokoto-goat', name: 'Red Sokoto Goat', seller: 'Danladi Ranches', location: 'Sokoto', price: '₦65,000/25kg', image: '/images/red-sokoto-goat.png' },
  { id: 'sweet-potatoes', name: 'Sweet Potatoes', seller: 'Plateau Harvest', location: 'Jos', price: '₦40,000/Bag', image: '/images/sweet-potatoes.png' },
  { id: 'export-grade-oranges', name: 'Export Grade Oranges', seller: 'Benue Orchard', location: 'Makurdi', price: '₦15,000/Basket', image: '/images/export-grade-oranges.png' },
  { id: 'smoked-catfish', name: 'Smoked Catfish', seller: 'Delta Aquaculture', location: 'Warri', price: '₦95,000/30kg', image: '/images/smoked-catfish.png' },
  { id: 'fresh-habanero', name: 'Fresh Habanero (Atarodo)', seller: "Tunde' Poultry", location: 'Gombe', price: '₦18,000/Basket', image: '/images/fresh-habanero.png' },
];

const sellerProductsSeed = [
  { id: 'pretty-savas-1', name: 'Pretty Savas', code: '#BNU-YAM-2026-001', quantity: '4,500 Tubers', price: '₦2,500', unit: 'Tuber', image: '/images/pretty-savas.png', category: 'Tubers & Roots', description: '', minimumOrder: '20', totalQuantity: '4500', harvestDate: '', shelfLife: '', storage: 'Dry Storage', packaging: 'Sacks/Bag', pickupLocation: 'After Zimbabwe, Bogobri, Cross River', delivery: true, deliveryRadius: 'Within 100km', status: 'Active' },
  { id: 'tomato-jos-1', name: 'Tomato Jos', code: '#BNU-TOM-2026-002', quantity: '500kg', price: '₦52,500', unit: '100KG', image: '/images/tomato-jos.png', category: 'Vegetables', description: '', minimumOrder: '5', totalQuantity: '500', harvestDate: '', shelfLife: '', storage: 'Room Temperature', packaging: 'Crates', pickupLocation: '', delivery: true, deliveryRadius: '', status: 'Active' },
  { id: 'senkes-rice-1', name: 'Senkes Rice', code: '#BNU-SNKR-2026-002', quantity: '500kg', price: '₦70,000', unit: 'Bag', image: '/images/senkes-rice.png', category: 'Grains & Cereals', description: '', minimumOrder: '5', totalQuantity: '500', harvestDate: '', shelfLife: '', storage: 'Dry Storage', packaging: 'Sacks/Bag', pickupLocation: '', delivery: true, deliveryRadius: '', status: 'Active' },
  { id: 'agric-fowl-1', name: 'Agric Fowl', code: '#BNU-AGF-2026-002', quantity: '500', price: '₦25,000', unit: 'Fowl', image: '/images/agric-fowl.png', category: 'Livestock Products', description: '', minimumOrder: '1', totalQuantity: '500', harvestDate: '', shelfLife: '', storage: 'Room Temperature', packaging: 'Custom Packaging', pickupLocation: '', delivery: true, deliveryRadius: '', status: 'Active' },
  { id: 'pretty-savas-2', name: 'Pretty Savas', code: '#BNU-YAM-2026-001', quantity: '4,500 Tubers', price: '₦2,500', unit: 'Tuber', image: '/images/pretty-savas.png', category: 'Tubers & Roots', description: '', minimumOrder: '20', totalQuantity: '4500', harvestDate: '', shelfLife: '', storage: 'Dry Storage', packaging: 'Sacks/Bag', pickupLocation: 'After Zimbabwe, Bogobri, Cross River', delivery: true, deliveryRadius: 'Within 100km', status: 'Active' },
  { id: 'tomato-jos-2', name: 'Tomato Jos', code: '#BNU-TOM-2026-002', quantity: '500kg', price: '₦52,500', unit: '100KG', image: '/images/tomato-jos.png', category: 'Vegetables', description: '', minimumOrder: '5', totalQuantity: '500', harvestDate: '', shelfLife: '', storage: 'Room Temperature', packaging: 'Crates', pickupLocation: '', delivery: true, deliveryRadius: '', status: 'Active' },
  { id: 'senkes-rice-2', name: 'Senkes Rice', code: '#BNU-SNKR-2026-002', quantity: '500kg', price: '₦70,000', unit: 'Bag', image: '/images/senkes-rice.png', category: 'Grains & Cereals', description: '', minimumOrder: '5', totalQuantity: '500', harvestDate: '', shelfLife: '', storage: 'Dry Storage', packaging: 'Sacks/Bag', pickupLocation: '', delivery: true, deliveryRadius: '', status: 'Active' },
  { id: 'agric-fowl-2', name: 'Agric Fowl', code: '#BNU-AGF-2026-002', quantity: '500', price: '₦25,000', unit: 'Fowl', image: '/images/agric-fowl.png', category: 'Livestock Products', description: '', minimumOrder: '1', totalQuantity: '500', harvestDate: '', shelfLife: '', storage: 'Room Temperature', packaging: 'Custom Packaging', pickupLocation: '', delivery: true, deliveryRadius: '', status: 'Active' },
];

const initialWishlist = ['pretty-savas', 'tomato-jos', 'golden-cow', 'royal-cocoa'];

const requestSeed = [
  { id: 'req-1', productId: 'golden-cow', productName: 'Golden Cow', image: '/images/request-cow.png', farmer: 'John Adebayo', quantity: '2', date: 'Dec 22, 2025', total: '₦3,500,000', status: 'Pending' },
  { id: 'req-2', productId: 'arewa-goat', productName: 'Billy Goat', image: '/images/request-goat.png', farmer: 'Chisom Ajah', quantity: '1', date: 'Dec 22, 2025', total: '₦500,000', status: 'Pending' },
  { id: 'req-3', productId: 'healthy-broilers', productName: 'Pinkie Piglets', image: '/images/request-piglets.png', farmer: 'John Adebayo', quantity: '7', date: 'Dec 19, 2025', total: '₦2,670,000', status: 'Accepted' },
  { id: 'req-4', productId: 'agric-fowl', productName: 'Native Fowl', image: '/images/request-native-fowl.png', farmer: 'Smith Richmond', quantity: '2', date: 'Nov 30, 2025', total: '₦45,000', status: 'Accepted' },
];

const dashboardStats = [
  { title: 'Active Requests', value: '05', tone: 'soft-green', icon: 'orders' },
  { title: 'Completed Orders', value: '21', tone: 'soft-green', icon: 'check' },
  { title: 'Saved Products', value: '03', tone: 'soft-green', icon: 'heart' },
  { title: 'New This Week', value: '45', tone: 'soft-green', icon: 'spark' },
];

const recentActivity = [
  { text: 'Your request for Cassava was accepted by Farmer John', time: '2 hrs ago', kind: 'success' },
  { text: 'You sent a request to Tomato Jos to Farmer Jackson', time: '3 hrs ago', kind: 'success' },
  { text: 'You sent a request for Senkes Rice to Farmer Jombo', time: '3 hrs ago', kind: 'success' },
];

function readWishlist() {
  try {
    const raw = window.localStorage.getItem('basket-chain-wishlist');
    return raw ? JSON.parse(raw) : initialWishlist;
  } catch (error) {
    console.error('Could not read wishlist', error);
    return initialWishlist;
  }
}

function readSellerProducts() {
  try {
    const raw = window.localStorage.getItem('basket-chain-seller-products');
    return raw ? JSON.parse(raw) : sellerProductsSeed;
  } catch (error) {
    console.error('Could not read product listings', error);
    return sellerProductsSeed;
  }
}

function App() {
  const [savedIds, setSavedIds] = useState(readWishlist);
  const [sellerProducts, setSellerProducts] = useState(readSellerProducts);
  const [wishlistNotice, setWishlistNotice] = useState('');
  const [listingNotice, setListingNotice] = useState('');
  const location = useLocation();
  const sellerMode = location.pathname.startsWith('/my-products');
  const sellerFormMode = sellerMode && location.pathname !== '/my-products';

  useEffect(() => {
    try {
      window.localStorage.setItem('basket-chain-wishlist', JSON.stringify(savedIds));
      setWishlistNotice('');
    } catch (error) {
      console.error('Could not save wishlist', error);
      setWishlistNotice('Wishlist could not be saved on this device.');
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      window.localStorage.setItem('basket-chain-seller-products', JSON.stringify(sellerProducts));
      setListingNotice('');
    } catch (error) {
      console.error('Could not save product listings', error);
      setListingNotice('Product listings could not be saved on this device.');
    }
  }, [sellerProducts]);

  const toggleSaved = (id) => {
    setSavedIds((current) => current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]);
  };

  return (
    <div className={`app-shell ${sellerMode ? 'seller-app' : ''} ${sellerFormMode ? 'seller-form-app' : ''}`}>
      {!sellerFormMode ? <TopBar sellerMode={sellerMode} /> : null}
      <div className="workspace">
        {!sellerFormMode ? <SideRail sellerMode={sellerMode} /> : null}
        <div className="main-panel">
        <main className="main-content">
          {wishlistNotice || listingNotice ? <div className="storage-note">{wishlistNotice || listingNotice}</div> : null}
          <Routes>
            <Route path="/" element={<DashboardPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/dashboard" element={<DashboardPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/marketplace" element={<MarketplacePage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/orders" element={<RequestsPage />} />
            <Route path="/wishlist" element={<WishlistPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/my-products" element={<MyProductsPage products={sellerProducts} />} />
            <Route path="/my-products/new" element={<ProductFormPage products={sellerProducts} onSave={setSellerProducts} />} />
            <Route path="/my-products/:productId/edit" element={<ProductFormPage products={sellerProducts} onSave={setSellerProducts} />} />
            <Route path="/products/:productId" element={<ProductDetailPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="*" element={<DashboardPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
          </Routes>
        </main>
        </div>
      </div>
    </div>
  );
}

function SideRail({ sellerMode = false }) {
  const items = sellerMode ? [
    { icon: 'dashboard', to: '/dashboard', label: 'Dashboard' },
    { icon: 'produce', to: '/my-products', label: 'Produce' },
    { icon: 'orders', to: '/orders', label: 'Requests' },
    { icon: 'marketplace', to: '/marketplace', label: 'Orders' },
    { icon: 'wallet', to: '/marketplace', label: 'Wallet' },
  ] : [
    { icon: 'dashboard', to: '/dashboard', label: 'Dashboard' },
    { icon: 'marketplace', to: '/marketplace', label: 'Marketplace' },
    { icon: 'orders', to: '/orders', label: 'Requests' },
    { icon: 'heart', to: '/wishlist', label: 'Wishlist' },
    { icon: 'chat', to: '/marketplace', label: 'Messages' },
    { icon: 'settings', to: '/marketplace', label: 'Settings' },
    { icon: 'help', to: '/marketplace', label: 'Help' },
  ];

  return (
    <aside className="side-rail" aria-label="Sidebar navigation">
      <nav className={`rail-nav ${sellerMode ? 'seller-rail-nav' : ''}`}>
        {items.map((item) => (
          <NavLink key={item.label} to={item.to} end={item.to === '/my-products'} className={({ isActive }) => `rail-button ${isActive ? 'active' : ''}`} title={item.label} aria-label={item.label}>
            <Icon name={item.icon} size={21} />
            {sellerMode ? <span>{item.label}</span> : null}
          </NavLink>
        ))}
        <button className="rail-button logout" type="button" title="Logout" aria-label="Logout">
          <Icon name="logout" size={20} />
        </button>
      </nav>
    </aside>
  );
}

function TopBar({ sellerMode = false }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) navigate(`/marketplace?search=${encodeURIComponent(query.trim())}`);
    else navigate('/marketplace');
  };

  return (
    <header className="topbar">
      <div className={`brand ${sellerMode ? 'seller-brand' : ''}`}>{sellerMode ? 'BC' : 'Basket Chain'}</div>
      <form className="search-box" onSubmit={handleSubmit}>
        <Icon name="search" size={16} />
        <input aria-label="Search products" onChange={(event) => setQuery(event.target.value)} placeholder="Search products, farmers, location..." value={query} />
      </form>
      <div className={`topbar-tools ${sellerMode ? 'seller-topbar-tools' : ''}`}>
        {!sellerMode ? <button className="icon-button" type="button" aria-label="Wishlist" onClick={() => navigate('/wishlist')}><Icon name="heart" size={18} /></button> : null}
        <button className="icon-button" type="button" aria-label="Notifications"><Icon name="bell" size={18} /></button>
        <button className="avatar-circle" type="button" aria-label="Profile">
          <img src="/images/profile-avatar.png" alt="" />
        </button>
      </div>
    </header>
  );
}

function MyProductsPage({ products: listings }) {
  return (
    <section className="page my-products-page">
      <div className="my-products-heading">
        <div>
          <h1>My Produce</h1>
          <p>Manage your listings and stock levels</p>
        </div>
        <Link className="add-product-button" to="/my-products/new"><span aria-hidden="true">+</span> Add New Product</Link>
      </div>
      <div className="seller-product-grid">
        {listings.map((product) => (
          <article className="seller-product-card" key={product.id}>
            <div className="seller-product-image-wrap">
              <img className="seller-product-image" src={product.image} alt={product.name} />
            </div>
            <div className="seller-product-info">
              <div className="seller-product-name">
                <h2>{product.name}</h2>
                <span className="seller-status">{product.status}</span>
              </div>
              <div className="seller-product-code">
                <span>{product.code}</span>
                <button type="button" aria-label={`Copy ${product.name} listing code`} onClick={() => navigator.clipboard?.writeText(product.code)}><Icon name="copy" size={12} /></button>
              </div>
              <p className="seller-quantity">{product.quantity} Available</p>
              <p className="seller-price">{product.price} / {product.unit}</p>
              <Link className="edit-product-button" to={`/my-products/${product.id}/edit`}>Edit Details</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const categoryOptions = ['Vegetables', 'Fruits', 'Grains & Cereals', 'Tubers & Roots', 'Nuts & Seeds', 'Herbs & Spices', 'Livestock Products', 'Other'];
const storageOptions = ['Room Temperature', 'Cold Storage', 'Refrigerated', 'Frozen', 'Dry Storage'];
const packagingOptions = ['Crates', 'Sacks/Bag', 'Cartons', 'Loose', 'Custom Packaging'];
const deliveryRadiusOptions = ['Within 10km', 'Within 25km', 'Within 50km', 'Within 100km', 'Above 100km'];
const emptyProduct = {
  name: '', code: '#BNU-NEW-2026-001', quantity: '', price: '', unit: 'Unit', image: '/images/pretty-savas.png',
  category: '', description: '', minimumOrder: '', totalQuantity: '', harvestDate: '', shelfLife: '',
  storage: '', packaging: '', pickupLocation: '', delivery: true, deliveryRadius: '', status: 'Active',
};

function ProductFormPage({ products, onSave }) {
  const { productId } = useParams();
  const navigate = useNavigate();
  const existingProduct = products.find((product) => product.id === productId);
  const editing = Boolean(productId);
  const [form, setForm] = useState(() => existingProduct ? { ...existingProduct } : { ...emptyProduct });
  const [showDelete, setShowDelete] = useState(false);

  if (editing && !existingProduct) {
    return <div className="page"><div className="no-results"><h2>Product not found</h2><p>This listing is no longer available.</p><Link className="browse-button" to="/my-products">Back to My Produce</Link></div></div>;
  }

  const update = (field) => (event) => setForm((current) => ({ ...current, [field]: event.target.value }));
  const save = (status) => (event) => {
    event.preventDefault();
    const quantitySuffix = editing
      ? existingProduct.quantity.replace(/^[\d,]+/, '')
      : form.unit ? ` ${form.unit}` : '';
    const quantity = form.totalQuantity
      ? `${Number(form.totalQuantity).toLocaleString()}${quantitySuffix}`
      : form.quantity;
    const updated = { ...form, status, quantity };
    onSave((current) => editing
      ? current.map((product) => product.id === productId ? updated : product)
      : [{ ...updated, id: `product-${Date.now()}` }, ...current]);
    navigate('/my-products');
  };
  const deleteProduct = () => {
    onSave((current) => current.filter((product) => product.id !== productId));
    navigate('/my-products');
  };

  return (
    <section className="page product-form-page">
      <div className="form-crumbs"><Link to="/my-products">Home</Link><span>›</span><Link to="/my-products">My Products</Link><span>›</span><span>{editing ? 'Edit Product' : 'Add New Product'}</span></div>
      <div className="product-form-title">
        <div>
          <h1>{editing ? 'Edit Product' : 'Add New Product'}</h1>
          <p>{editing ? 'Update your product listing details' : 'Fill in your product details to list it on the marketplace'}</p>
        </div>
        {editing ? <span className="seller-status">{form.status}</span> : null}
      </div>
      <form className="product-details-form" onSubmit={save(editing ? form.status : 'Active')}>
        <FormSection title="Basic Information">
          <FormField label="Product Name" required><input required value={form.name} onChange={update('name')} placeholder="e.g., Fresh Red Tomatoes" /></FormField>
          <FormField label="Product Category" required><select required value={form.category} onChange={update('category')}><option value="">Select a Category</option>{categoryOptions.map((option) => <option key={option}>{option}</option>)}</select></FormField>
          <FormField label="Product Description" required wide><textarea required value={form.description} onChange={update('description')} placeholder="Describe your product — quality, how it was grown, ideal use cases..." rows="3" /></FormField>
        </FormSection>
        <FormSection title="Pricing & Quantity">
          <FormField label="Price per Unit" required><div className="form-input-prefix"><span>₦</span><input required value={form.price.replace(/[₦,]/g, '')} onChange={(event) => setForm((current) => ({ ...current, price: `₦${event.target.value}` }))} placeholder="0.00" inputMode="decimal" /></div></FormField>
          <FormField label="Minimum Order Quantity" required hint="Minimum Amount a Buyer can Request"><input required type="number" min="1" value={form.minimumOrder} onChange={update('minimumOrder')} placeholder="e.g., 5" /></FormField>
          <FormField label="Total Available Quantity" required hint="Total stock you currently have available"><input required type="number" min="1" value={form.totalQuantity} onChange={update('totalQuantity')} placeholder="e.g., 500" /></FormField>
        </FormSection>
        <FormSection title="Product Details">
          <FormField label="Harvest Date"><input type="date" value={form.harvestDate} onChange={update('harvestDate')} /></FormField>
          <FormField label="Estimated Shelf Life" hint="How long product stays fresh"><input value={form.shelfLife} onChange={update('shelfLife')} placeholder="e.g., 2 weeks" /></FormField>
          <FormField label="Storage Method"><select value={form.storage} onChange={update('storage')}><option value="">Select an Option</option>{storageOptions.map((option) => <option key={option}>{option}</option>)}</select></FormField>
          <FormField label="Packaging"><select value={form.packaging} onChange={update('packaging')}><option value="">Select an Option</option>{packagingOptions.map((option) => <option key={option}>{option}</option>)}</select></FormField>
        </FormSection>
        <FormSection title="Location & Delivery">
          <FormField label="Pickup Location"><div className="form-input-prefix"><Icon name="pin" size={14} /><input value={form.pickupLocation} onChange={update('pickupLocation')} placeholder="Enter Farm Address or Nearest City" /></div></FormField>
          <FormField label="Can you arrange Delivery"><div className="delivery-options"><label><input type="radio" checked={form.delivery} onChange={() => setForm((current) => ({ ...current, delivery: true }))} /> Yes, I can deliver</label><label><input type="radio" checked={!form.delivery} onChange={() => setForm((current) => ({ ...current, delivery: false }))} /> No, buyer arranges pickup</label></div></FormField>
          <FormField label="Delivery Radius"><select value={form.deliveryRadius} onChange={update('deliveryRadius')}><option value="">Select an Option</option>{deliveryRadiusOptions.map((option) => <option key={option}>{option}</option>)}</select></FormField>
        </FormSection>
        <div className="product-form-actions">
          {editing ? <button className="delete-product-button" type="button" onClick={() => setShowDelete(true)}>Delete Product</button> : <button className="draft-product-button" type="button" onClick={save('Draft')}>Save as Draft</button>}
          <button className="publish-product-button" type="submit">{editing ? 'Save Changes' : 'Publish Product'}</button>
        </div>
      </form>
      {showDelete ? <DeleteProductDialog productName={form.name} onCancel={() => setShowDelete(false)} onConfirm={deleteProduct} /> : null}
    </section>
  );
}

function FormSection({ title, children }) {
  return <section className="form-section"><h2>{title}</h2><div className="form-grid">{children}</div></section>;
}

function FormField({ label, required = false, hint, wide = false, children }) {
  return <label className={`form-field ${wide ? 'wide' : ''}`}><span>{label}{required ? <b> *</b> : null}</span>{children}{hint ? <small>{hint}</small> : null}</label>;
}

function DeleteProductDialog({ productName, onCancel, onConfirm }) {
  return (
    <div className="delete-dialog-backdrop" role="presentation">
      <section className="delete-dialog" role="alertdialog" aria-modal="true" aria-labelledby="delete-title" aria-describedby="delete-description">
        <span className="delete-icon"><Icon name="trash" size={38} /></span>
        <h2 id="delete-title">Delete Product?</h2>
        <p id="delete-description">This will permanently remove {productName} from the marketplace. This action cannot be undone.</p>
        <div className="delete-dialog-actions">
          <button type="button" onClick={onCancel}>Cancel</button>
          <button type="button" onClick={onConfirm}>Yes, Delete</button>
        </div>
      </section>
    </div>
  );
}

function DashboardPage({ savedIds, onToggleSaved }) {
  const visibleProducts = products.slice(0, 4);

  return (
    <section className="page dashboard-page">
      <div className="welcome-row">
        <h1>Welcome back, Richie!</h1>
        <p>Here's what's happening with your marketplace activity</p>
      </div>

      <div className="stats-grid">
        {dashboardStats.map((stat) => (
          <div key={stat.title} className="stat-card">
            <div className="stat-icon"><Icon name={stat.icon} size={17} /></div>
            <div className="stat-title">{stat.title}</div>
            <div className="stat-value">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="section-title-row">
        <h2>Featured Products</h2>
        <Link to="/marketplace">View all Products <span>›</span></Link>
      </div>

      <div className="product-grid feature-grid">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} saved={savedIds.includes(product.id)} onToggleSaved={onToggleSaved} compact />
        ))}
      </div>

      <div className="section-title-row recent-row">
        <h2>Recent Activity</h2>
        <Link to="/orders">View all Activity <span>›</span></Link>
      </div>

      <div className="activity-grid">
        {recentActivity.map((activity) => (
          <div key={activity.text} className="activity-card">
            <span className="activity-check">✓</span>
            <div className="activity-copy">
              <p>{activity.text}</p>
            </div>
            <span className="time-stamp">{activity.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MarketplacePage({ savedIds, onToggleSaved }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search')?.trim().toLowerCase() || '';
  const filtered = products.filter((product) => !query || `${product.name} ${product.seller} ${product.location}`.toLowerCase().includes(query));

  return (
    <section className="page marketplace-page">
      <div className="crumbs">
        <Link to="/dashboard">Home</Link>
        <span>›</span>
        <span>Marketplace</span>
      </div>
      <h1 className="page-heading">Browse Marketplace</h1>
      <div className="market-tools">
        <div className="search-chip">
          <Icon name="search" size={15} />
          <span>Search by products, farmers, location...</span>
        </div>
        <button className="filter-pill" type="button">All Categories <span>⌄</span></button>
        <button className="filter-pill" type="button">All Location <span>⌄</span></button>
        <button className="filter-pill" type="button">Any Price <span>⌄</span></button>
        <button className="funnel-pill" type="button" aria-label="Filters">☰</button>
      </div>
      <div className="product-grid market-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} saved={savedIds.includes(product.id)} onToggleSaved={onToggleSaved} />
        ))}
      </div>
    </section>
  );
}

function RequestsPage() {
  const [filter, setFilter] = useState('All');
  const visible = requestSeed.filter((request) => filter === 'All' || request.status === filter);
  const empty = visible.length === 0;

  return (
    <section className="page requests-page">
      <div className="page-header-inline">
        <div>
          <h1 className="page-heading request-heading">My Requests</h1>
          <p className="body-sub">Track all your product requests and orders</p>
        </div>
      </div>
      <div className="filter-tabs" role="tablist" aria-label="Request states">
        {['All', 'Pending', 'Accepted', 'Declined'].map((state) => (
          <button key={state} className={`tab-button ${filter === state ? 'selected' : ''}`} role="tab" aria-selected={filter === state} type="button" onClick={() => setFilter(state)}>{state}</button>
        ))}
      </div>
      {empty ? (
        <div className="no-results">
          <h2>No requests yet</h2>
          <p>Browse the marketplace to start requesting quotes</p>
          <Link className="browse-button" to="/marketplace">Browse Products</Link>
        </div>
      ) : (
        <div className="request-list">
          {visible.map((request) => {
            return (
              <article className="request-card" key={request.id}>
                <div className="request-thumb">
                  <img src={request.image} alt={request.productName} />
                </div>
                <div className="request-details">
                  <h2>{request.productName}</h2>
                  <p>From: {request.farmer}</p>
                  <p>Quantity: {request.quantity}</p>
                  <p className="request-date">Requested: {request.date}</p>
                  <p className="request-total">{request.total} total</p>
                </div>
                <span className={`request-state ${request.status === 'Pending' ? 'pending' : 'accepted'}`}>{request.status}</span>
                <div className="request-actions">
                  <Link className="ghost-button green" to={`/orders/${request.id}`}>View Details</Link>
                  <button type="button" className={`ghost-button red ${request.status === 'Accepted' ? 'active' : ''}`}>
                    {request.status === 'Pending' ? 'Cancel Request' : 'Request Again'}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

function WishlistPage({ savedIds, onToggleSaved }) {
  const savedProducts = products.filter((product) => savedIds.includes(product.id));

  return (
    <section className="page wishlist-page">
      <div className="page-header-inline">
        <div>
          <h1 className="page-heading request-heading">My Wishlist</h1>
          <p className="body-sub">{savedProducts.length} saved products</p>
        </div>
      </div>
      {savedProducts.length === 0 ? (
        <div className="no-results centered">
          <h2>Your wishlist is empty</h2>
          <p>Save products to easily find them later</p>
          <Link className="browse-button" to="/marketplace">Browse Products</Link>
        </div>
      ) : (
        <div className="product-grid market-grid">
          {savedProducts.map((product) => (
            <ProductCard key={product.id} product={product} saved onToggleSaved={onToggleSaved} />
          ))}
        </div>
      )}
    </section>
  );
}

function ProductDetailPage({ savedIds, onToggleSaved }) {
  const { productId } = useParams();
  const product = products.find((entry) => entry.id === productId);

  if (!product) {
    return <div className="page"><div className="no-results"><h2>Product not found</h2><p>The selected product is not available.</p></div></div>;
  }

  const saved = savedIds.includes(product.id);

  return (
    <section className="page detail-page">
      <Link className="back-link" to="/marketplace"><Icon name="back" size={16} /> Back to marketplace</Link>
      <div className="detail-card">
        <img className="detail-image" src={product.image} alt={product.name} />
        <div className="detail-info">
          <p className="crumbs small"><span>Marketplace</span><span>›</span><span>View details</span></p>
          <h1>{product.name}</h1>
          <p className="detail-meta">{product.seller} • {product.location}</p>
          <div className="price-line detail-price">{product.price}</div>
          <button type="button" className="browse-button detail-toggle" onClick={() => onToggleSaved(product.id)}>
            {saved ? 'Remove from Wishlist' : 'Save to Wishlist'}
          </button>
          <p className="detail-note">This is a mock interaction only. No payment or order is being completed.</p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, saved, onToggleSaved, compact = false }) {
  return (
    <article className={`product-card ${compact ? 'compact' : ''}`}>
      <div className="product-photo">
        <img src={product.image} alt={product.name} />
        <button type="button" onClick={() => onToggleSaved(product.id)} className={`save-badge ${saved ? 'saved' : ''}`} aria-label={`${saved ? 'Remove from wishlist' : 'Save to wishlist'}`}>
          <Icon name="heart" size={14} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <div className="seller-row">
          <span className="seller-dot">{product.seller.charAt(0)}</span>
          <span>{product.seller}</span>
          <span className="location-tag"><Icon name="pin" size={12} /> {product.location}</span>
        </div>
        <div className="price-row">{product.price}</div>
        <Link className="view-button" to={`/products/${product.id}`}>View Details</Link>
      </div>
    </article>
  );
}

function Icon({ name, size = 18, fill = 'none' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill,
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  const icons = {
    dashboard: <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="4" width="6" height="3.6" rx="1" /><rect x="14" y="10" width="6" height="10" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1.5" /></>,
    marketplace: <><path d="M4 9h16l-1.3 9.4a2 2 0 0 1-2 1.6H7.3a2 2 0 0 1-2-1.6L4 9Z" /><path d="M7.5 9V7.5A4.5 4.5 0 0 1 12 3a4.5 4.5 0 0 1 4.5 4.5V9" /></>,
    produce: <><path d="M12 21c-4.2-2.4-6.3-5.4-6.3-9.2A5.3 5.3 0 0 1 11 6.5c0 3.1.3 5.2 1 7.2.6-3.6 2.3-5.8 5.4-7.2 1.2 5.9-.6 11.4-5.4 14.5Z" /><path d="M12 14c-.5-3.7-2.4-6-5.3-7.1" /></>,
    orders: <><rect x="5" y="3.5" width="14" height="17" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" /></>,
    wallet: <><rect x="4" y="6" width="16" height="14" rx="2" /><path d="M4 9h16M7 6V4h10v2m-1 7h.01" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" /></>,
    trash: <><path d="M4 7h16M10 11v6m4-6v6M6 7l1 13h10l1-13M9 7V4h6v3" /></>,
    heart: <path d="M12 20.2 4.9 13a4.8 4.8 0 0 1 6.8-6.8L12 6.5l.3-.3a4.8 4.8 0 1 1 6.8 6.8L12 20.2Z" />,
    chat: <><path d="M5 18.5V6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H9l-4 2.5Z" /><path d="M8 9h8M8 12h5" /></>,
    settings: <><circle cx="12" cy="12" r="3.5" /><path d="M19 12a7.5 7.5 0 0 0-.1-1l2-1.5-1.8-3.1-2.3 1a7.3 7.3 0 0 0-1.7-1V2.8H9.9v2.5a7.3 7.3 0 0 0-1.7 1l-2.3-1L4.1 9.5l2 1.5a7.5 7.5 0 0 0 0 2l-2 1.5 1.8 3.1 2.3-1a7.3 7.3 0 0 0 1.7 1v2.5h2.2v-2.5a7.3 7.3 0 0 0 1.7-1l2.3 1 1.8-3.1-2-1.5Z" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.8 9.5a2.3 2.3 0 1 1 4 1.7c-.8.8-2 1.4-2 3.3M12 17h.01" /></>,
    logout: <><path d="M10 17H6.5A1.5 1.5 0 0 1 5 15.5v-7A1.5 1.5 0 0 1 6.5 7H10" /><path d="M13 9l4 3-4 3M17 12H9" /></>,
    search: <><circle cx="11" cy="11" r="5.8" /><path d="m16 16 4 4" /></>,
    bell: <><path d="M15 17h5l-1.5-1.5v-5A6.5 6.5 0 0 0 12 4a6.5 6.5 0 0 0-6.5 6.5v5L4 17h5m3 3a2.5 2.5 0 0 1-2.5-2.5h5A2.5 2.5 0 0 1 12 20Z" /></>,
    pin: <><path d="M12 21s6-5.2 6-10.5A6 6 0 1 0 6 10.5C6 15.8 12 21 12 21Z" /><circle cx="12" cy="10.5" r="2.2" /></>,
    back: <><path d="m15 18-6-6 6-6" /></>,
    check: <><path d="M5 12.5 9.2 16.7 19 6.9" /></>,
    spark: <><path d="m12 2 1.7 5.3L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.7L12 2Z" /></>,
  };

  return <svg {...common}>{icons[name] || null}</svg>;
}

export default App;
