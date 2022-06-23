import { useParams } from "react-router-dom";

type Params = {
  name: string;
};

const UserPage = () => {
  const params = useParams<Params>();
  console.log(params);
  return (
    <div>
      <h3>Welcome {params.name}</h3>
    </div>
  );
};
export default UserPage;
