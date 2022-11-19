import { Card, CardBody, CardText, CardTitle } from "@components/card";
import { RightArrow } from "@components/icon"

const Body = () => {
  return (
    <main className="fixed left-96 md:left-60">
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
          <Card>
            <img
              className="max-w-full h-auto md:h-48"
              src="https://res.cloudinary.com/beloved/image/upload/v1608683063/Assets/lamborghini_mxb2j7.jpg"
              alt="Bugatti"
            />
            <CardBody>
              <CardTitle className="text-lg">Lamborghini</CardTitle>
              <CardText>
                Joe made the sugar cookies; Susan decorated them. When motorists
                sped in and out of traffic.
              </CardText>
              <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
                View Details
                <RightArrow />
              </a>
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
          <Card>
            <img
              className="max-w-full h-auto md:h-48"
              src="https://res.cloudinary.com/beloved/image/upload/v1608683147/Assets/bugatti-cars-7-free-car-hd-wallpaper_j4xyj6.jpg"
              alt="Bugatti"
            />
            <CardBody>
              <CardTitle className="text-lg">Bugatti</CardTitle>
              <CardText>
                Joe made the sugar cookies; Susan decorated them. When motorists
                sped in and out of traffic.
              </CardText>
              <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
                View Details
                <RightArrow />
              </a>
            </CardBody>
          </Card>
        </div>
        <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
          <Card>
            <img
              className="max-w-full h-auto md:h-48"
              src="https://res.cloudinary.com/beloved/image/upload/v1599343428/Assets/3_znyzrd.jpg"
              alt="blog"
            />
            <CardBody>
              <CardTitle className="text-lg">Computer</CardTitle>
              <CardText>
                Joe made the sugar cookies; Susan decorated them. When motorists
                sped in and out of traffic.
              </CardText>
              <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
                View Details
                <RightArrow />
              </a>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Body;
