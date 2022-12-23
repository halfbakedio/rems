import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AuthService from "@services/auth";
import { useAppDispatch, useTypedSelector } from "@store/index"; // FIXME
import {
  fetchOpenHouseById,
  selectOpenHouses,
  selectStatus,
} from "~features/open-house/";

const OpenHouse = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const status = useTypedSelector(selectStatus);
  const openHouses = useTypedSelector(selectOpenHouses);

  const { id } = useParams();

  const parseId = (id: string | undefined) => id === undefined ? 0 : parseInt(id);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (!user) {
      navigate("/login");
    }

    dispatch(fetchOpenHouseById(parseId(id)));
  }, []);

  return (
    <>
      {openHouses[0] && (
        <div className="flex flex-col h-full py-24">
          <div className="flex flex-none justify-center text-5xl">
            Welcome to:
          </div>
          <div className="flex flex-none justify-center text-5xl">
            {openHouses[0].property.address}
          </div>
          <div className="flex flex-none justify-center text-5xl mt-32">
            <Button variant="gradient">Sign in</Button>
          </div>
          <div className="flex flex-auto"></div>
          <div className="flex flex-none justify-center text-5xl">
            Hosted by: {openHouses[0].agent.name}
          </div>
        </div>
      )}
    </>
  );
};

export default OpenHouse;
