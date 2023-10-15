type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type User = {
  id: number;

  name: string;
  email: string;
  birthDate: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
