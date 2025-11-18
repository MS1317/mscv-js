import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';``

const ServiceDetail = () => {
  const { technology } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/projects/${technology}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [technology]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="web-choose">
      <div className="web-selector">
        {loading ? (
          Array(4).fill().map((_, i) => (
            <div className="web-card" key={i}>
              <Skeleton height={200} baseColor="#2d2d39" highlightColor="#7d7c7cff" />
            </div>
          ))
        ) : (
          projects.map(project => (
            <div className="web-card" key={project.id}>
              <div
                className="web-card-background"
                style={{ backgroundImage: `url(../${project.image_url})` }}
              >
                <div className="title-bg">
                  <div className="web-type">{project.name}</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;