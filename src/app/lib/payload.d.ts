declare interface IPost {
  id: number;
  body: string;
  title: string;
}

declare interface IComment {
  id: number;
  body: string;
  name: string;
  email: string;
}

declare interface IUser {
  company: ICompany;
  id: number;
  name: string;
  username: string;
  website: string;
  email: string;
}

declare interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

declare interface IAddress {
  city: string;
  geo: {
    lat: number;
    lng: number;
  };
  street: string;
  suite: string;
  zipcode: string;
}
