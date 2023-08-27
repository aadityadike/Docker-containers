import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import axios from "axios";

import "./App.css";

const queryClient = new QueryClient();

interface currentTimeProps {
  api: string;
}

const CurrentTime: React.FC<currentTimeProps> = (children) => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [children],
    queryFn: () => axios.get(`${children}`).then((res) => res.data),
  });

  if (isLoading) return <>`Loading ${children}... `</>;

  if (error) return <>"An error has occurred: " + {error}</>;

  return (
    <div className="App">
      <p>---</p>
      <p>API: {data.api}</p>
      <p>Time from DB: {data.now}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
};

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hey Team! 👋</h1>
      <CurrentTime api="/api/golang/" />
      <CurrentTime api="/api/node/" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
