export type ErrorMessage = {
  message: string;
};

export type Property = {
  address: string;
};

export type Agent = {
  name: string;
};

export type OpenHouse = {
  id: number;
  startAt: string;
  endAt: string;
  property: Property;
  agent: Agent;
};
