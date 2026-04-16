import React, { useState } from 'react';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('starters');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const menuTabs = [
    { id: 'starters', label: 'Starters' },
    { id: 'mains', label: 'Main Course' },
    { id: 'wraps', label: 'Wraps' },
    { id: 'drinks', label: 'Drinks & Bar' }
  ];

  const menuData = {
    starters: [
      { name: 'Veg Samosa', desc: 'Crispy pastry stuffed with spiced potatoes, peas & fresh herbs', price: '$8', veg: true },
      { name: 'Paneer Tikka', desc: 'Grilled cottage cheese with vibrant Indian spices & mint chutney', price: '$14', veg: true },
      { name: 'Chicken 65', desc: 'Deep-fried spicy chicken with curry leaves & green chilies', price: '$16', veg: false },
      { name: 'Onion Bhaji', desc: 'Golden fried onion fritters with tamarind dipping sauce', price: '$10', veg: true },
      { name: 'Seekh Kebab', desc: 'Minced lamb skewers with aromatic spices, grilled to perfection', price: '$18', veg: false },
      { name: 'Chaat Papdi', desc: 'Crispy wafers with chickpeas, yogurt, chutneys & spice blend', price: '$12', veg: true }
    ],
    mains: [
      { name: 'Butter Chicken', desc: 'Rich creamy tomato-based curry with tender chicken pieces', price: '$22', veg: false },
      { name: 'Dal Makhani', desc: 'Slow-cooked black lentils simmered overnight in spiced butter', price: '$18', veg: true },
      { name: 'Lamb Rogan Josh', desc: 'Kashmiri style braised lamb in aromatic red gravy', price: '$28', veg: false },
      { name: 'Palak Paneer', desc: 'Cottage cheese cubes in velvety spiced spinach gravy', price: '$20', veg: true },
      { name: 'Chicken Biryani', desc: 'Fragrant long-grain basmati rice layered with spiced chicken', price: '$24', veg: false },
      { name: 'Prawn Masala', desc: 'Coastal-style prawns tossed in tangy spiced tomato base', price: '$26', veg: false }
    ],
    wraps: [
      { name: 'Chicken Tikka Wrap', desc: 'Juicy marinated chicken, fresh greens & signature masala sauce', price: '$16', veg: false },
      { name: 'Paneer Wrap', desc: 'Grilled paneer with caramelized onions, peppers & mint yogurt', price: '$14', veg: true },
      { name: 'Lamb Kathi Roll', desc: 'Spiced minced lamb with egg, crisp onions & green chutney', price: '$18', veg: false },
      { name: 'Aloo Wrap', desc: 'Spiced potato filling with chutneys, onions & fresh herbs', price: '$12', veg: true }
    ],
    drinks: [
      { name: 'Mango Lassi Mule', desc: 'House-made mango lassi with vodka, ginger beer & spice rim', price: '$16', veg: true },
      { name: 'Chai Old Fashioned', desc: 'Bourbon infused with masala chai, cardamom & smoked orange', price: '$17', veg: false },
      { name: 'Rose & Lychee Spritz', desc: 'Sparkling rose wine, lychee, rose syrup & fresh citrus', price: '$15', veg: true },
      { name: 'Virgin Saffron Punch', desc: 'Saffron-infused lemonade with basil seeds & sparkling water', price: '$10', veg: true },
      { name: 'Beer & Spirits', desc: 'Premium domestic & imported beers, whiskey, gin, rum & more', price: 'From $8', veg: false },
      { name: 'Classic Cocktails', desc: 'Mojito, Negroni, Cosmopolitan, Margarita & seasonal specials', price: 'From $14', veg: false }
    ]
  };

  return (
    <section id="menu">
      <div className="menu-inner">
        <div className="menu-header reveal">
          <div className="section-label">Our Menu</div>
          <h2 className="section-title">Crafted with <em>Passion</em></h2>
          <div className="divider"></div>
          <p>Explore traditional Indian dishes, modern fusion wraps, and handcrafted drinks.</p>
        </div>
        <div className="menu-tabs reveal">
          {menuTabs.map((tab) => (
            <button 
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} 
              data-tab={tab.id}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {menuTabs.map((tab) => (
          <div key={tab.id} className={`menu-panel ${activeTab === tab.id ? 'active' : ''}`} id={`tab-${tab.id}`}>
            {menuData[tab.id].map((item, index) => (
              <div key={index} className="menu-item">
                <div className="menu-item-info">
                  <h4>
                    {item.veg && <span className="veg-badge"></span>}
                    {item.name}
                  </h4>
                  <p>{item.desc}</p>
                </div>
                <div className="menu-item-price">{item.price}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;

