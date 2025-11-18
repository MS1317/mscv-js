import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PortfolioShowcase = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("*");
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        if (!response.ok) throw new Error("HTTP error", response.status);
        const data = await response.json();
        const allCategory = { id: "*", name: "ALL" };
        setCategories([allCategory, ...data]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const fetchPortfolioItems = async () => {
      try {
        const response = await fetch("/api/portfolio");
        if (!response.ok) throw new Error("HTTP error", response.status);
        const data = await response.json();
        setPortfolioItems(data);
      } catch (error) {
        console.error("Error fetching portfolio items:", error);
      }
    };

    fetchCategories();
    fetchPortfolioItems();
  }, []);

  const handleFilterClick = (filterValue) => {
    setActiveCategory(filterValue);
  };

  const filteredItems =
    activeCategory === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category_id === activeCategory);

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="text-white fw-bold mb-3 title-spacing">
          Portfolio <span className="gradient-text">Showcase</span>
        </h2>
        {/* Category Navigation */}
        <nav className="portfolio-nav mb-5">
          <ul className="nav gap-4">
            {categories.map((category) => (
              <li key={category.id} className="nav-item">
                <button
                  className={`nav-link filter-btn ${
                    activeCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => handleFilterClick(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <Link
              target="_blank"
              className="grid-item"
              key={item.id}
              to={item.url}
            >
              <div className="portfolio-card fade-in">
                <div className="portfolio-image-wrapper">
                  <img
                    src={
                      item.preview
                        ? "/assets/portfolio-preview/" + item.preview
                        : "https://placehold.co/600x400/6e708b/FFF?font=poppins&text=No+Image"
                    }
                    alt={item.name}
                    className="portfolio-image"
                  />
                  <div className="portfolio-overlay">
                    <h5 className="portfolio-title">{item.name}</h5>
                    <p className="portfolio-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
