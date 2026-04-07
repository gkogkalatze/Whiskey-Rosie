import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, ChevronRight, ShieldCheck, Package, Truck, Star } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink bg-cream">
      {/* 1. Sticky Announcement Bar */}
      <div className="bg-forest text-cream text-xs font-medium tracking-wider uppercase py-2 text-center px-4">
        Order before 4 PM for Next Day UK Delivery | Free over £150
      </div>

      {/* 2. Header */}
      <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 -ml-2 text-ink hover:text-forest transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* Desktop Navigation (Left) */}
            <nav className="hidden lg:flex space-x-8 flex-1">
              <a href="#" className="text-sm font-medium tracking-wide uppercase hover:text-forest transition-colors">Shop Whisky</a>
              <a href="#" className="text-sm font-medium tracking-wide uppercase hover:text-forest transition-colors">Gifting</a>
              <a href="#" className="text-sm font-medium tracking-wide uppercase hover:text-forest transition-colors">Rare & Collectible</a>
            </nav>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center flex-1 lg:flex-none">
              <a href="#" className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-ink">
                OAK & PROVENANCE
              </a>
            </div>

            {/* Desktop Navigation (Right) */}
            <nav className="hidden lg:flex space-x-8 flex-1 justify-end items-center">
              <a href="#" className="text-sm font-medium tracking-wide uppercase hover:text-forest transition-colors">Discover</a>
              <a href="#" className="text-sm font-medium tracking-wide uppercase hover:text-forest transition-colors">Journal</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4 flex-1 justify-end lg:flex-none lg:ml-8">
              <button className="p-2 text-ink hover:text-forest transition-colors hidden sm:block">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-ink hover:text-forest transition-colors hidden sm:block">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-ink hover:text-forest transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-burgundy rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* 3. Premium Hero */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80" 
              alt="Premium Whisky Pour" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-ink/40"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl text-cream font-medium mb-6 leading-tight">
              Exceptional Whisky,<br />Expertly Curated.
            </h1>
            <p className="text-lg md:text-xl text-cream/90 mb-10 max-w-2xl mx-auto font-light">
              Discover rare single malts and perfect gifts, sourced from the world's finest distilleries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-cream text-ink font-medium tracking-wide uppercase text-sm hover:bg-cream/90 transition-colors">
                Shop Single Malts
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-cream text-cream font-medium tracking-wide uppercase text-sm hover:bg-cream/10 transition-colors">
                Explore Gifts
              </button>
            </div>
          </div>
        </section>

        {/* 4. Trust Strip */}
        <section className="bg-ink text-cream py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-cream/20">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <Truck className="w-6 h-6 mb-3 text-copper" />
                <h3 className="font-serif text-lg mb-1">Next Day UK Delivery</h3>
                <p className="text-sm text-cream/70 font-light">Free on orders over £150</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <Package className="w-6 h-6 mb-3 text-copper" />
                <h3 className="font-serif text-lg mb-1">Bespoke Secure Packaging</h3>
                <p className="text-sm text-cream/70 font-light">Zero breakage guarantee</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <ShieldCheck className="w-6 h-6 mb-3 text-copper" />
                <h3 className="font-serif text-lg mb-1">100% Authenticity</h3>
                <p className="text-sm text-cream/70 font-light">Sourced directly from distilleries</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Featured Collections */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Curated Collections</h2>
            <p className="text-ink/70 max-w-2xl mx-auto">Explore our hand-picked selection based on flavor profile and occasion.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Peaty & Smoky", img: "https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?auto=format&fit=crop&q=80" },
              { title: "Rich & Sherried", img: "https://images.unsplash.com/photo-1582226224220-56fa224c224c?auto=format&fit=crop&q=80" },
              { title: "Rare Finds", img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80" },
              { title: "Luxury Gifts", img: "https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?auto=format&fit=crop&q=80" }
            ].map((collection, idx) => (
              <a href="#" key={idx} className="group relative h-96 overflow-hidden block">
                <img 
                  src={collection.img} 
                  alt={collection.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                  <h3 className="font-serif text-xl text-cream">{collection.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center text-cream group-hover:bg-cream group-hover:text-ink transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 6. Best Sellers */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-4">Exceptional Picks</h2>
                <p className="text-ink/70">Our most sought-after bottles this month.</p>
              </div>
              <a href="#" className="hidden md:flex items-center text-sm font-medium tracking-wide uppercase hover:text-forest transition-colors">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "The Macallan 18 Year Old", type: "Sherry Oak Cask", price: "£350", img: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&q=80&w=400", badge: "Best Seller" },
                { name: "Lagavulin 16 Year Old", type: "Islay Single Malt", price: "£85", img: "https://images.unsplash.com/photo-1582226224220-56fa224c224c?auto=format&fit=crop&q=80&w=400", badge: "" },
                { name: "Yamazaki 12 Year Old", type: "Japanese Single Malt", price: "£165", img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=400", badge: "Rare" },
                { name: "Glenmorangie Signet", type: "Highland Single Malt", price: "£195", img: "https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?auto=format&fit=crop&q=80&w=400", badge: "Great Gift" }
              ].map((product, idx) => (
                <div key={idx} className="group flex flex-col">
                  <div className="relative aspect-[3/4] bg-cream mb-4 overflow-hidden flex items-center justify-center p-8">
                    {product.badge && (
                      <span className="absolute top-4 left-4 text-xs tracking-wider uppercase font-medium bg-ink text-cream px-3 py-1 z-10">
                        {product.badge}
                      </span>
                    )}
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                      <button className="w-full py-3 bg-ink text-cream text-sm font-medium tracking-wide uppercase hover:bg-forest transition-colors">
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <span className="text-xs text-ink/60 uppercase tracking-wider mb-1">{product.type}</span>
                    <h3 className="font-serif text-lg mb-2 group-hover:text-forest transition-colors">{product.name}</h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-medium">{product.price}</span>
                      <div className="flex text-copper">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Gift Finder */}
        <section className="py-24 bg-forest text-cream relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?auto=format&fit=crop&q=80" 
              alt="Texture" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Find the Perfect Pour</h2>
            <p className="text-lg text-cream/80 mb-12 font-light">
              Answer three simple questions and let our experts guide you to the perfect bottle.
            </p>
            
            <div className="bg-cream text-ink p-8 md:p-12 shadow-2xl max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-left">
                <div className="w-full">
                  <label className="block text-xs uppercase tracking-wider text-ink/60 mb-2">I am buying for</label>
                  <select className="w-full border-b border-ink/20 py-2 bg-transparent font-serif text-lg focus:outline-none focus:border-forest">
                    <option>A Connoisseur</option>
                    <option>A Beginner</option>
                    <option>A Colleague</option>
                    <option>Myself</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block text-xs uppercase tracking-wider text-ink/60 mb-2">With a budget of</label>
                  <select className="w-full border-b border-ink/20 py-2 bg-transparent font-serif text-lg focus:outline-none focus:border-forest">
                    <option>£100 - £200</option>
                    <option>Under £100</option>
                    <option>£200 - £500</option>
                    <option>Over £500</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block text-xs uppercase tracking-wider text-ink/60 mb-2">Who likes</label>
                  <select className="w-full border-b border-ink/20 py-2 bg-transparent font-serif text-lg focus:outline-none focus:border-forest">
                    <option>Smoky & Bold</option>
                    <option>Rich & Sweet</option>
                    <option>Light & Floral</option>
                    <option>I have no idea</option>
                  </select>
                </div>
              </div>
              <button className="mt-10 w-full md:w-auto px-12 py-4 bg-ink text-cream font-medium tracking-wide uppercase text-sm hover:bg-forest transition-colors">
                Show Matches
              </button>
            </div>
          </div>
        </section>

        {/* 8. Rare Drops */}
        <section className="py-20 bg-ink text-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <span className="text-copper text-sm font-medium tracking-widest uppercase mb-4 block">The Vault</span>
                <h2 className="font-serif text-4xl md:text-5xl mb-6">Rare & Limited Allocations</h2>
                <p className="text-cream/70 text-lg font-light mb-8 max-w-md">
                  Access highly sought-after releases, independent bottlings, and single cask expressions. Stock is strictly limited.
                </p>
                <button className="px-8 py-4 border border-cream hover:bg-cream hover:text-ink transition-colors text-sm font-medium tracking-wide uppercase">
                  Enter The Vault
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80" 
                    alt="Rare Whisky" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="inline-block px-3 py-1 bg-burgundy text-cream text-xs tracking-wider uppercase mb-3">Only 3 Remaining</span>
                    <h3 className="font-serif text-2xl mb-1">Bowmore 1965 52 Year Old</h3>
                    <p className="text-cream/80">£22,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-white pt-20 pb-10 border-t border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <a href="#" className="font-serif text-2xl font-semibold tracking-tight text-ink mb-6 block">
                OAK & PROVENANCE
              </a>
              <p className="text-ink/70 text-sm mb-6 max-w-xs">
                Curators of the world's finest spirits. Exceptional whisky, expertly sourced and securely delivered.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium tracking-wide uppercase text-sm mb-6">Shop</h4>
              <ul className="space-y-4 text-sm text-ink/70">
                <li><a href="#" className="hover:text-forest transition-colors">Single Malt Scotch</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Japanese Whisky</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Rare & Collectible</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Luxury Gifts</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Corporate Gifting</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium tracking-wide uppercase text-sm mb-6">Customer Care</h4>
              <ul className="space-y-4 text-sm text-ink/70">
                <li><a href="#" className="hover:text-forest transition-colors">Delivery & Returns</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-forest transition-colors">Authenticity Guarantee</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium tracking-wide uppercase text-sm mb-6">Join The Cask Society</h4>
              <p className="text-sm text-ink/70 mb-4">
                Subscribe for early access to rare drops and expert tasting guides.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-grow border border-ink/20 px-4 py-2 text-sm focus:outline-none focus:border-forest bg-transparent"
                />
                <button type="submit" className="bg-ink text-cream px-4 py-2 text-sm font-medium tracking-wide uppercase hover:bg-forest transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>
          
          <div className="pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-ink/50">
              &copy; {new Date().getFullYear()} Oak & Provenance. All rights reserved. Must be of legal drinking age to purchase.
            </p>
            <div className="flex space-x-6 text-xs text-ink/50">
              <a href="#" className="hover:text-ink transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-ink transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
