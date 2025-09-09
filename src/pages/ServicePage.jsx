import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams, Link } from 'react-router-dom'; // Import Link for navigation
import 'react-loading-skeleton/dist/skeleton.css';

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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="web-choose">
      {serviceName === 'web-development' && (
        <div className="web-selector">
          {webTechnologies.length > 0 ? (
            webTechnologies.map((technology) => (
              // Use technology.name for the link and a proper key
              <Link to={`/service-detail/${technology.name.toLowerCase()}`} key={technology.id}>
                <div className="web-card">
                  {loading ? (
                    // Skeleton takes the place of background div
                    <Skeleton
                      className="web-card-background"
                      height={200} // match the height of your background card
                      borderRadius={12}
                    />
                  ) : (
                    <div
                      className="web-card-background"
                      style={{ backgroundImage: `url(../${technology.icon_path})` }}
                    >
                      <div className="title-bg">
                        <div className="web-type">{technology.name}</div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))
          ) : (
            // Optionally render empty skeleton cards while loading
            loading && Array(4).fill().map((_,i)=>(
              <Link key={i} to="#">
                <div className="web-card">
                  {
                    <>
                    <Skeleton
                      className="web-card-background"
                      baseColor="#2d2d39"
                      highlightColor="#7d7c7cff"
                      height={200} // match the height of your background card
                    />
                      <div className="title-bg">
                        {/* <div className="web-type">{technology.name}</div> */}
                      </div>
                    </>
                  }
                </div>
              </Link>
            ))
          )}
          </div>
        )}
      </section>
  );
};

export default ServicePage;
