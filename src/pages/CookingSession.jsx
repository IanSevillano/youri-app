import { useEffect, useState } from "react";

import {
  getAiResult,
} from "../api/cooking.api";

function CookingSession() {

  const [taskId, setTaskId] =
    useState(null);

  const [aiResult, setAiResult] =
    useState(null);

  useEffect(() => {

    if (!taskId) return;

    const interval = setInterval(
      async () => {

        const response =
          await getAiResult(taskId);

        if (
          response.data.status ===
          "completed"
        ) {

          setAiResult(
            response.data.result
          );

          clearInterval(interval);
        }

      },

      3000
    );

    return () =>
      clearInterval(interval);

  }, [taskId]);
  return (

    <div>

      {aiResult && (

        <div>

          <img
            src={
              aiResult.character.sprite
            }
          />

          <p>
            {
              aiResult.character.dialog
            }
          </p>

        </div>

      )}

    </div>
  );
}

export default CookingSession;