interface IResponseSearchProduct {
  data: Array<IProduct>;
  message: string;
  Path: string;
}

interface IResponseCountSearchProduct {
  data: number;
  message: string;
  Path: string;
}
