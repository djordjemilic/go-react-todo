import { Box } from "@mantine/core";
import useSWR from "swr";
import AddToDo from "./components/add-to-do.component";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data, mutate } = useSWR("api/todos", fetcher);

  return (
    <Box>
      {JSON.stringify(data)}

      <AddToDo />
    </Box>
  );
}

export default App;
