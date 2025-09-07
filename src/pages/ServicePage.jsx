import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation

const ServicePage = () => {
  const { serviceName } = useParams();
  const [webTechnologies, setWebTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (serviceName === 'web-development') {
      fetch('/api/web-technologies') // Use relative URL
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
      {serviceName === 'web-development' && (
        <div className="web-selector">
          {webTechnologies.length > 0 ? (
            webTechnologies.map((technology) => (
              // Use technology.name for the link and a proper key
              <Link to={`/service-detail/${technology.name.toLowerCase()}`} key={technology.id}>
                <div className="web-card">
                  <div className="web-card-background"
                    // Use technology.icon_path for the image
                    style={{ backgroundImage: `url(../${technology.icon_path})` }}>
                    <div className="title-bg">
                      <div className="web-type">
                        {/* Use technology.name for the title */}
                        {technology.name}
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
