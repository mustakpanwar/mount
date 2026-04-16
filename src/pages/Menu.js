import React, { useMemo, useState } from 'react';

const menuByCategory = {
  signatures: [
    { name: 'Saffron Butter Chicken', note: 'charred chicken, tomato-makhani, smoked fenugreek', price: '$24', tag: 'Chef Pick' },
    { name: 'Nalli Rogan Josh', note: 'slow braised lamb shank, Kashmiri chilli, cardamom', price: '$31', tag: 'Classic' },
    { name: 'Truffle Dal Makhani', note: 'overnight black lentils, cultured butter, truffle oil', price: '$20', tag: 'Vegetarian' }
  ],
  smallPlates: [
    { name: 'Avocado Bhel', note: 'puffed rice, mint chutney, tamarind pearls', price: '$14', tag: 'Vegan' },
    { name: 'Chili Prawn Koliwada', note: 'crispy prawns, lime aioli', price: '$19', tag: 'Seafood' },
    { name: 'Paneer Tikka Flight', note: 'classic, achari and hariyali marinades', price: '$18', tag: 'Vegetarian' }
  ],
  beverages: [
    { name: 'Masala Old Fashioned', note: 'bourbon, chai bitters, orange smoke', price: '$17', tag: 'Cocktail' },
    { name: 'Rose Lychee Spritz', note: 'sparkling rosé, lychee, rosewater', price: '$15', tag: 'Cocktail' },
    { name: 'Saffron 75', note: 'citrus, saffron cordial, soda (NA option available)', price: '$13', tag: 'No-Alcohol Option' }
  ]
};

const tabs = [
  { id: 'signatures', label: 'Signatures' },
  { id: 'smallPlates', label: 'Small Plates' },
  { id: 'beverages', label: 'Beverages' }
];

const Menu = () => {
  const [active, setActive] = useState('signatures');
  const items = useMemo(() => menuByCategory[active], [active]);

  return (
    <section className="content-section">
      <p className="eyebrow">Menu</p>
      <h1>Curated for international tastes.</h1>
      <p>From regional Indian classics to modern cocktails, each item is crafted for flavor and presentation.</p>

      <div className="tabs" role="tablist" aria-label="Menu categories">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={active === tab.id ? 'active' : ''}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {items.map((item) => (
          <article className="menu-row" key={item.name}>
            <div>
              <div className="menu-title-row">
                <h3>{item.name}</h3>
                <span className="menu-tag">{item.tag}</span>
              </div>
              <p>{item.note}</p>
            </div>
            <strong>{item.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Menu;
