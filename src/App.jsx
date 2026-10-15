import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';

const products = [
  { id: 'pretty-savas', name: 'Pretty Savas', seller: "Jake's Farm", location: 'Abuja', price: '₦24,000/20kg', image: 'photo-1550583724-b2692b85b150' },
  { id: 'tomato-jos', name: 'Tomato Jos', seller: "John's Farm", location: 'Lagos', price: '₦50,000/140kg', image: 'photo-1546094096-0df4bcaaa337' },
  { id: 'senkes-rice', name: 'Senkes Rice', seller: "John's Farm", location: 'Lagos', price: '₦70,000/Bag', image: 'photo-1586201375761-83865001e31c' },
  { id: 'agric-fowl', name: 'Agric Fowl', seller: "Jeckerson's Farm", location: 'Calabar', price: '₦25,000/Fowl', image: 'photo-1548550023-2bdb3c5beed7' },
  { id: 'golden-cow', name: 'Golden Cow', seller: "Ahmed's Farm", location: 'Benue', price: '₦1,100,000/270kg', image: 'photo-1516467508483-a7212febe31a' },
  { id: 'royal-cocoa', name: 'Royal Cocoa', seller: "Ojong's Farm", location: 'Cross River', price: '₦45,000/25kg', image: 'photo-1589927986089-35812388d1f4' },
  { id: 'arewa-goat', name: 'Arewa Goat', seller: "John's Farm", location: 'Makurdi', price: '₦95,000/30kg', image: 'photo-1524024973431-2ad916746881' },
  { id: 'groundnuts', name: 'Groundnuts', seller: "Jeckerson's Farm", location: 'Calabar', price: '₦80,000/100kg', image: 'photo-1567892737950-30c4db37cd89' },
  { id: 'large-yams', name: 'Large Yams', seller: "Chidi's Farm", location: 'Anambra', price: '₦120,000 for 100 Tubers', image: 'photo-1596097635121-14b63b7a0c19' },
  { id: 'healthy-broilers', name: 'Healthy Broilers', seller: "Tunde' Poultry", location: 'Ogun', price: '₦8,500/Live Bird', image: 'photo-1548550023-2bdb3c5beed7' },
  { id: 'polished-local-rice', name: 'Polished Local Rice', seller: 'Apakali Hub', location: 'Ebonyi', price: '₦72,000/50kg', image: 'photo-1586201375761-83865001e31c' },
  { id: 'red-sokoto-goat', name: 'Red Sokoto Goat', seller: 'Danladi Ranches', location: 'Sokoto', price: '₦65,000/25kg', image: 'photo-1524024973431-2ad916746881' },
  { id: 'sweet-potatoes', name: 'Sweet Potatoes', seller: 'Plateau Harvest', location: 'Jos', price: '₦40,000/Bag', image: 'photo-1596097635121-14b63b7a0c19' },
  { id: 'export-grade-oranges', name: 'Export Grade Oranges', seller: 'Benue Orchard', location: 'Makurdi', price: '₦15,000/Basket', image: 'photo-1547514701-42782101795e' },
  { id: 'smoked-catfish', name: 'Smoked Catfish', seller: 'Delta Aquaculture', location: 'Warri', price: '₦95,000/30kg', image: 'photo-1510130387422-82bed34b37e9' },
  { id: 'fresh-habanero', name: 'Fresh Habanero (Atarodo)', seller: "Tunde' Poultry", location: 'Gombe', price: '₦18,000/Basket', image: 'photo-1588252303782-cb80119abd6d' },
];

const initialWishlist = ['pretty-savas', 'tomato-jos', 'golden-cow', 'royal-cocoa'];

const requestSeed = [
  { id: 'req-1', productId: 'golden-cow', productName: 'Golden Cow', farmer: 'John Adebayo', quantity: '2', date: 'Dec 22, 2025', total: '₦3,500,000', status: 'Pending' },
  { id: 'req-2', productId: 'arewa-goat', productName: 'Billy Goat', farmer: 'Chisom Ajah', quantity: '1', date: 'Dec 22, 2025', total: '₦500,000', status: 'Pending' },
  { id: 'req-3', productId: 'healthy-broilers', productName: 'Pinkie Piglets', farmer: 'John Adebayo', quantity: '7', date: 'Dec 19, 2025', total: '₦2,670,000', status: 'Accepted' },
  { id: 'req-4', productId: 'agric-fowl', productName: 'Native Fowl', farmer: 'Smith Richmond', quantity: '2', date: 'Nov 30, 2025', total: '₦45,000', status: 'Accepted' },
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

function App() {
  const [savedIds, setSavedIds] = useState(readWishlist);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    try {
      window.localStorage.setItem('basket-chain-wishlist', JSON.stringify(savedIds));
      setNotice('');
    } catch (error) {
      console.error('Could not save wishlist', error);
      setNotice('Wishlist could not be saved on this device.');
    }
  }, [savedIds]);

  const toggleSaved = (id) => {
    setSavedIds((current) => current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]);
  };

  return (
    <div className="app-shell">
      <SideRail />
      <div className="main-panel">
        <TopBar />
        <main className="main-content">
          {notice ? <div className="storage-note">{notice}</div> : null}
          <Routes>
            <Route path="/" element={<DashboardPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/dashboard" element={<DashboardPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/marketplace" element={<MarketplacePage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/orders" element={<RequestsPage />} />
            <Route path="/wishlist" element={<WishlistPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="/products/:productId" element={<ProductDetailPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
            <Route path="*" element={<DashboardPage savedIds={savedIds} onToggleSaved={toggleSaved} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function SideRail() {
  const items = [
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
      <nav className="rail-nav">
        {items.map((item) => (
          <NavLink key={item.label} to={item.to} className={({ isActive }) => `rail-button ${isActive ? 'active' : ''}`} title={item.label} aria-label={item.label}>
            <Icon name={item.icon} size={21} />
          </NavLink>
        ))}
        <button className="rail-button logout" type="button" title="Logout" aria-label="Logout">
          <Icon name="logout" size={20} />
        </button>
      </nav>
    </aside>
  );
}

function TopBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) navigate(`/marketplace?search=${encodeURIComponent(query.trim())}`);
    else navigate('/marketplace');
  };

  return (
    <header className="topbar">
      <div className="brand">Basket Chain</div>
      <form className="search-box" onSubmit={handleSubmit}>
        <Icon name="search" size={16} />
        <input aria-label="Search products" onChange={(event) => setQuery(event.target.value)} placeholder="Search products, farmers, location..." value={query} />
      </form>
      <div className="topbar-tools">
        <button className="icon-button" type="button" aria-label="Wishlist"><Icon name="heart" size={18} /></button>
        <button className="icon-button" type="button" aria-label="Notifications"><Icon name="bell" size={18} /></button>
        <button className="avatar-circle" type="button" aria-label="Profile">R</button>
      </div>
    </header>
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
            const product = products.find((prod) => prod.id === request.productId);
            return (
              <article className="request-card" key={request.id}>
                <div className="request-thumb">
                  {product ? <img src={productImage(product.image)} alt={product.name} /> : null}
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
        <img className="detail-image" src={productImage(product.image, 900)} alt={product.name} />
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
        <img src={productImage(product.image)} alt={product.name} />
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
    orders: <><rect x="5" y="3.5" width="14" height="17" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" /></>,
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

function productImage(id, width = 620) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}

export default App;
