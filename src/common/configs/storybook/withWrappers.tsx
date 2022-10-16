type Props = {
  locationPath: string;
  routhPath: string;
};

const withWrappers = ({}: Props) => {
  return (
    <QueryClientProvider>
      <Router>
        <Route></Route>
      </Router>
    </QueryClientProvider>
  );
};

export default withWrappers;
