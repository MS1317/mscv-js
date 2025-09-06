import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation

const ServicePage = () => {
  const { serviceName } = useParams();
  const [webTechnologies, setWebTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch web technologies only if serviceName is 'web'
    if (serviceName === 'web') {
      fetch('http://localhost:3001/api/web-technologies')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setWebTechnologies(data);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    } else {
      setLoading(false); // Not fetching for other services
    }
  }, [serviceName]); // Re-run effect if serviceName changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="web-choose">
      {/* <h1>Service: {serviceName}</h1> */}
      {serviceName === 'web' && (
        <div className="web-selector">
          {webTechnologies.length > 0 ? (
            webTechnologies.map((technology) => (
              <Link to={`/service-detail/${technology["web-link"]}`} key={technology["web-link"]}>
                <div className="web-card">
                  <div className="web-card-background"
                    style={{ backgroundImage: `url(../assets/web/${technology["web-icon"]})` }}>
                    <div className="title-bg">
                      <div className="web-type">
                        {technology["web-technology"]}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </div>
      )}
      {/* More content for other services can go here */}
    </section>
  );
};

export default ServicePage;
