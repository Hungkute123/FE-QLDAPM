interface IIconTick {
  className?: string;
}

interface ITabs {
  titleTabs: Array<string | any>;
  bodyTabs: Array<JSX.Element>;
  classNameHeaderContainer?: string;
  classNameHeader?: string;
  initialNum?: number;
  contentBody?: any;
}

interface ICardProduct {
  title?: string;
  price?: string;
  thumbnail?: string;
  rate?: number;
  chapter?: number;
}

interface IListProduct {
  listproducts?: Array<any>;
  numCol?: number;
}
