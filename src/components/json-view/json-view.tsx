type DataProps = {
  data: { id: string; name: string }[];
};

export function JsonView({ data }: DataProps) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
