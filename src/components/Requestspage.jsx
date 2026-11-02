import  { useState} from "react"

const requests = [{
    id: 1,
    tab: "Action Required",
    avatar: "/Nestle.png",
    buyerName: "Nestlé Nigeria Procurement",
    status: "Verified Corperate",
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
    batch: "Batch#JIG--SES-004",
    quantity: "2.5 Tons",
    price: "@₦800/kg",
    counter: "₦740/kg",
    postedAt: "3 hours ago",
    total: "₦1,850,000",
    action: "Respond" 
}

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
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
        <aside className="w-64 shrink-0 border-r border-gray-200 bg-white p-4">
            <nav className="flex flex-col gap-1">
                <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 ">
                    <img src="/dashboard.png" alt="dashboard" className="h-5 w-5" />
                    <span>Dashboard</span>
                     </a>

                <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
                    <img src="/spa.png" alt="spa" className="h-5 w-5" />
                    <span>Produce</span>
                    </a>
            
                <a href="#" className="flex items-center gap-3 rounded-lg bg-green-50 px-3 py-2 font-medium text-green-700 ">
                    <img src="/all_inbox.png" alt="all_inbox" className="h-5 w-5" />
                    <span> Requests</span>              
                        </a>

                <a href="#" className="flex item-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100">
                    <img src="/truck.png" alt="truck" className="h-5 w-5"/>
                    <span>Orders</span>
                    </a>

                <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:bg-gray-100 ">
                    <img src="/wallet.png" alt="wallet" className="h-5 w-5"/>
                    <span>Wallet</span>
                    </a>
            </nav>
        </aside>

        {/* Main header */}
        <main className="flex-1 p-8">
        <header className="flex flex-wrap items-start justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold">Quote Requests</h1>
                <p className="mt-1 text-gray-500">Manage incoming offers and active negotiations</p>
            </div>

            <div className="flex gap-3">
                <button type="button" className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700">Add New Product</button>
                <button type="button" className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium hover:bg-gray-100 ">Download Stock Report</button>
            </div>

        </header>

        {/* Section */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200">
      <div className="flex gap-6">
      {tabs.map((tab) => (
      <button
        key={tab}
        type="button"
        onClick={() => setActiveTab(tab)}
        className={`-mb-px border-b-2 pb-3 text-sm font-medium ${
          activeTab === tab
            ? "border-green-600 text-green-700"
            : "border-transparent text-gray-500 hover:text-gray-800"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
  </section>

    <div className="mb-2 flex items-center gap-2">
        <input
         type="text"
         placeholder="Search by Buyer or Batch ID..." 
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         className="w-72 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600"
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
    </div>

        {/* Card Section*/}
    
        <section>
            {filteredRequests.map((request) =>  (
                <article key={request.id}>
                    <div>

                      <div> 
                         <img src={request.avatar} alt={`${request.buyerName} logo`}/>
                         </div>
                         <h3>{request.buyerName}</h3>
                         <p>{request.status} . {request.location}</p>
                    </div>
                    <h2>{request.product}</h2>
                    <p>{request.batch}</p>
                    <p>{request.quantity}</p>
                    <p>{request.price}</p>


                    {request.counter && <p>Buyer just countered: {request.counter}</p>}

                   <p>{request.postedAt}</p>
                   <h2>{request.total}</h2>
                   <button>{request.action}</button>
                   </article>
            )
            )}

            {filteredRequests.length === 0 && (
                <p>No requests found.</p>
            )}
        </section>
       </main>
       </div>
  )
}
export default Requestspage
