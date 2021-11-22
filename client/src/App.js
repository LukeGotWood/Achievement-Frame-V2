import React, { useEffect, useState } from "react";

import Achievements from "./components/Achievements/Achievements";
import useHttp from "./hooks/useHttp";

function App() {
  const [achievements, setAchievements] = useState([]);
  const [fetchAchievements, isLoading, error] = useHttp();

  useEffect(() => {
    fetchAchievements(
      {
        url: "/api/achievements",
      },
      (data) => {
        const loadedAchievements = [];

        for (const achievementKey in data) {
          loadedAchievements.push({
            id: achievementKey,
            text: data[achievementKey].text,
          });
        }

        setAchievements(loadedAchievements);
      }
    );
  }, [fetchAchievements]);

  return (
    <React.Fragment>
      <Achievements
        items={achievements}
        loading={isLoading}
        error={error}
        onFetch={fetchAchievements}
      />
    </React.Fragment>
  );
}

export default App;
