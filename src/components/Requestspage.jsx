import  { useState} from "react"

const requests = [{
    id: 1,
    tab: "Action Required",
    avatar: "/Nestle.png",
    buyerName: "Nestlé Nigeria Procurement",
    status: "Verified Cooperate",
    location: "Lagos State",
    product: "White Maize (Premium)",
    batch: "Batch#KAD-MAZ-089",
    quantity: "20 Tons",
    price: "@₦625/kg",
    postedAt: "22 mins ago",
    total: "₦12,000,000",
    action: "View Quote",
},

{
    id: 2,
    tab: "Action Required",
    avatar: "/Sundry.png",
    buyerName: "Sundry Foods (Kilimanjaro)",
    status: "Verified SME",
    location: "Port Harcourt",
    product: "Scotch Bonnet",
    batch: "Batch#BEN-PEP-055",
    quantity: "100kg",
    price: "@₦625/kg",
    counter: "₦4,500/kg",
    postedAt: "22 mins ago",
    total: "₦450,000",
    action: "Respond"
},

{
    id: 3,
    tab: "Action Required",
    avatar: "/Shoprite.png",
    buyerName: "Shoprite",
    status: "Verified Retailer",
    location: "Ikeja",
    product: "Sweet Potatoes",
    batch: "Batch#JIG-SES-004",
    quantity: "2.5 Tons",
    price: "@₦800/kg",
    counter: "₦740/kg",
    postedAt: "3 hours ago",
    total: "₦1,850,000",
    action: "Respond" 
},
{
    id: 4,
    tab: "Action Required",
    avatar: "/Nestle.png",
    buyerName: "Nestlé Nigeria Procurement",
    status: "Verified Cooperate",
    location: "Lagos State",
    product: "White Maize (Premium)",
    batch: "Batch#KAD-MAZ-089",
    quantity: "20 Tons",
    price: "@₦625/kg",
    postedAt: "22 mins ago",
    total: "₦12,000,000",
    action: "View Quote",

},

{
    id: 5,
     tab: "Action Required",
    avatar: "/Sundry.png",
    buyerName: "Sundry Foods (Kilimanjaro)",
    status: "Verified SME",
    location: "Port Harcourt",
    product: "Scotch Bonnet",
    batch: "Batch#BEN-PEP-055",
    quantity: "100kg",
    price: "@₦625/kg",
    counter: "₦4,500/kg",
    postedAt: "22 mins ago",
    total: "₦450,000",
    action: "O-"

},

{
id: 6,
    tab: "Action Required",
    avatar: "/Sundry.png",
    buyerName: "Sundry Foods (Kilimanjaro)",
    status: "Verified SME",
    location: "Port Harcourt",
    product: "Scotch Bonnet",
    batch: "Batch#BEN-PEP-055",
    quantity: "100kg",
    price: "@₦625/kg",
    counter: "₦4,500/kg",
    postedAt: "22 mins ago",
    total: "₦450,000",
    action: "O-"
},

{
    id: 7,
    tab: "Action Required",
    avatar: "/Shoprite.png",
    buyerName: "Shoprite",
    status: "Verified Retailer",
    location: "Ikeja",
    product: "Sweet Potatoes",
    batch: "Batch#JIG-SES-004",
    quantity: "2.5 Tons",
    price: "@₦800/kg",
    counter: "₦740/kg",
    postedAt: "3 hours ago",
    total: "₦1,850,000",
    action: "Respond" 
},

{
id: 8,
    tab: "Action Required",
    avatar: "/Nestle.png",
    buyerName: "Nestlé Nigeria Procurement",
    status: "Verified Cooperate",
    location: "Lagos State",
    product: "White Maize (Premium)",
    batch: "Batch#KAD-MAZ-089",
    quantity: "20 Tons",
    price: "@₦625/kg",
    postedAt: "22 mins ago",
    total: "₦12,000,000",
    action: "View Quote",
},

{
    id: 9,
    tab: "Action Required",
    avatar: "/Nestle.png",
    buyerName: "Nestlé Nigeria Procurement",
    status: "Verified Cooperate",
    location: "Lagos State",
    product: "White Maize (Premium)",
    batch: "Batch#KAD-MAZ-089",
    quantity: "20 Tons",
    price: "@₦625/kg",
    postedAt: "22 mins ago",
    total: "₦12,000,000",
    action: "View Quote",
},

{
    id: 10,
     tab: "Action Required",
    avatar: "/Shoprite.png",
    buyerName: "Shoprite",
    status: "Verified Retailer",
    location: "Ikeja",
    product: "Sweet Potatoes",
    batch: "Batch#JIG-SES-004",
    quantity: "2.5 Tons",
    price: "@₦800/kg",
    counter: "₦740/kg",
    postedAt: "3 hours ago",
    total: "₦1,850,000",
    action: "Respond" 
   
}

]

const navItems = [
  { label: "Dashboard", icon: "/dashboard.png" },
  { label: "Produce", icon: "/spa.png" },
  { label: "Requests", icon: "/all_inbox.png" },
  { label: "Orders", icon: "/truck.png" },
  { label: "Wallet", icon: "/wallet.png" },
]
     const tabs = ["Action Required", "Waiting for Buyer", "Archived", "Sold Out(1)"]

    export  const Requestspage = () => {
    const [search, setSearch] = useState("")
    const [activeTab, setActiveTab] = useState("Action Required")
    const filteredRequests = requests.filter((request) => {
    const matchesTab = request.tab === activeTab
    const matchesSearch = 
    request.buyerName.toLowerCase().includes(search.toLowerCase()) ||
    request.batch.toLowerCase().includes(search.toLowerCase())
    return matchesTab && matchesSearch
    })

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-white text-gray-900 md:flex-row">
        <aside className="order-2 flex w-full shrink-0 items-center justify-around border-t border-gray-100
        bg-white px-2 py-2 md:order-1 md:h-screen md:w-28 md:flex-col md:justify-start md:overflow-y-auto md:border-t-0 md:py-6">
        <img 
        src="/logo.png"
        alt="Basket Chain"
        className="hidden h-10 w-10 shrink-0 object-contain md:mb-12 md:block" />

            <nav className="flex w-full justify-around md:my-auto md:w-auto md:flex-col md:items-center md:gap-6 lg:gap-10 xl:gap14">
                {navItems.map((item) => 
                <a
                key={item.label}
                href="#"
                className={`flex flex-col items-center gap-1 text-xs md:gap-2 md:text-sm ${
          item.active
            ? "font-medium text-green-600"
            : "text-gray-300 hover:text-gray-600"
        }`}
        >
             <img
              src={item.active ? item.activeIcon : item.icon}
               alt="" className="h-6 w-6 md:h-8 md:w-8"/>
            <span>{item.label}</span>
            </a>
              )} 
            </nav>
        </aside>

        {/* Main header */}
        <main className="order-1 min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden p-4 md:order-2 md:p-8">
       <div className="mb-4 flex items-center justify-end gap-4">
       <button type="button" aria-label="Notifications" className="text-gray-500 hover:text-gray-800">
       <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
       <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
       </svg>
       </button>
       <img src="/avatar.png" alt="Profile" className="h-9 w-9 rounded-full object-cover" />
        </div>
        <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold">Quote Requests</h1>
                <p className="mt-1 text-gray-500">Manage incoming offers and active negotiations</p>
            </div>

            <div className="flex gap-3">
                <button type="button" className="rounded-full bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700">Add New Product</button>
                <button type="button" className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium hover:bg-gray-100 ">Download Stock Report</button>
            </div>

        </header>

        {/* Section */}
        <section className="mt-6 flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => (
      <button
        key={tab}
        type="button"
        onClick={() => setActiveTab(tab)}
        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
          activeTab === tab
            ? "bg-green-600 text-white"
            : "text-gray-400 hover:text-gray-700"
        }`}
      >
        {tab}
      </button>
    ))} 
  </div>

    <div className="flex w-full  items-center gap-2 md:w-auto">
        <input
         type="text"
         placeholder="Search by Buyer or Batch ID..." 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         className="min-w-0 flex-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm outline-none
         focus:border-green-600 focus:ring-1 focus:ring-green-600 md:w-72 md:flex-none"
         />
         {search  &&(
            <button 
            type="button"
            onClick={() => setSearch("")}
            className="text-sm text-gray-500 hover:text-gray-800"
            >
            Clear
            </button>
         )}
         <button 
         type="button"
         aria-label="Search"
         className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white hover:bg-green-700">

             <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5">
         <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
         </svg>
         </button>
        </div>
      </section>

        {/* Card Section*/}
    
        <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredRequests.map((request) =>  (
                <article 
                key={request.id} 
                className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                    <div className="flex items-center gap-3">

                         <img src={request.avatar} alt={`${request.buyerName} logo`} 
                         className="h-12 w-12 shrink-0 rounded-full object-cover"
                         />
                         <div className="min-w-0">
                         <h3 className="truncate text-sm font-semibold">{request.buyerName}</h3>
                         <p className="text-xs text-gray-400">{request.status} . {request.location}</p>
                         </div>
                    </div>

                    <div className="mt-6">
                    <h2 className=" text-xl font-bold">{request.product}</h2>
                    <p className="mt-1 text-xs text-gray-400">{request.batch}</p>
                    </div>

                    <div className="mt-5 flex items-baseline gap-3">
                    <p className="text-lg font-medium">{request.quantity}</p>
                    <p className="text-sm text-gray-400">{request.price}</p>
                    </div>

                    {request.counter &&
                     <p className=" mt-3 text-sm font-medium text-yellow-500">Buyer just countered: {request.counter}</p>}

                   <p className="mt-2 text-xs text-gray-400">{request.postedAt}</p>
                   <h2 className="mt-auto pt-8 text-3xl font-extrabold">{request.total}</h2>
                   <button 
                   type="button"
                   className="mt-4 w-full py-2 text-center text-sm font-semibold hover:text-green-700 ">{request.action}</button>
                   </article>
            )
            )}

            {filteredRequests.length === 0 && (
                <p className="col-span-full py-12 text-center text-gray-500">No requests found.</p>
            )}
        </section>
       </main>
       </div>
  )
}
export default Requestspage
