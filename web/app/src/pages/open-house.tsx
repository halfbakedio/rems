import { Button } from "@material-tailwind/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Loader } from "@components/loader";
import AuthService from "@services/auth";
import { useAppDispatch, useTypedSelector } from "@store/index"; // FIXME
import {
  fetchOpenHouseById,
  selectOpenHouse,
  selectOpenHouses,
  selectStatus,
} from "~features/open-house";

const OpenHouse = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const status = useTypedSelector(selectStatus);
  const openHouses = useTypedSelector(selectOpenHouses);

  const { id } = useParams();
  const parsedId = id === undefined ? 0 : parseInt(id);

  const loading = () => status === "loading" ? true : false;
  const openHouse = () => selectOpenHouse(openHouses, parsedId);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (!user) {
      navigate("/login");
      window.location.reload();
    }

    dispatch(fetchOpenHouseById(parsedId));
  }, []);

  return (
    <>
      {loading() && (
        <div className="text-center py-24">
          <Loader />
        </div>
      )}
      {!loading() && openHouses && (
        <div className="flex flex-col h-full py-24">
          <div className="flex flex-none justify-center text-5xl">
            Welcome to:
          </div>
          <div className="flex flex-none justify-center text-5xl">
            {openHouse()?.property.address}
          </div>
          <div className="flex flex-none justify-center text-5xl mt-32">
            <Button variant="gradient">Sign in</Button>
          </div>
          <div className="flex flex-auto"></div>
          <div className="flex flex-none justify-center text-5xl">
            Hosted by: {openHouse()?.agent.name}
          </div>
        </div>
      )}
    </>
  );
};

export default OpenHouse;
