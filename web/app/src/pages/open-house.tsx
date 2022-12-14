import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AuthService from "@services/auth";
import PropertyService from "@services/property";

interface IErrorMessage {
  message: string;
}

interface IProperty {
  address: string;
}

interface IAgent {
  name: string;
}

interface IOpenHouse {
  id: number;
  startAt: string;
  endAt: string;
  property: IProperty;
  agent: IAgent;
}

const OpenHouse = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<IErrorMessage | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [openHouse, setOpenHouse] = useState<IOpenHouse | undefined>(undefined);

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await PropertyService.getOpenHouse(id);
        setOpenHouse(result.data.openHouse);
        setErrorMessage(undefined);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage({ message: "derped out" });
        setIsLoading(false);
      }
    };

    const user = AuthService.getCurrentUser();

    if (user) {
      fetch();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {openHouse && (
        <div className="flex flex-col h-full py-24">
          <div className="flex flex-none justify-center text-5xl">
            Welcome to:
          </div>
          <div className="flex flex-none justify-center text-5xl">
            {openHouse.property.address}
          </div>
          <div className="flex flex-none justify-center text-5xl mt-32">
            <Button variant="gradient">Sign in</Button>
          </div>
          <div className="flex flex-auto"></div>
          <div className="flex flex-none justify-center text-5xl">
            Hosted by: {openHouse.agent.name}
          </div>
        </div>
      )}
    </>
  );
};

export default OpenHouse;
