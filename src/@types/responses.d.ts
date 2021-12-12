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

interface IStatistic {
  IDYear: string;
  IDMonth: string;
  CountUserRegister: number;
  CountOrder: number;
}
