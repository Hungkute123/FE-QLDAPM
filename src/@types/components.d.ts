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
  path?: string;
}

interface IListProduct {
  listproducts?: Array<any>;
  path?: string;
  numCol?: number;
}

interface IModal {
  isOpen?: boolean;
  setIsOpen?: any;
}

interface IButton {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  width?: string | number;
  height?: string | number;
}

interface IInput extends IStyle {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: string | number | date;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  maxLength?: number | undefined;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onkeypress?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  onkeyup?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  type?: 'text' | 'password' | 'date';
  background?: Property.Background<string | number> | undefined;
  borderRadius?: string | undefined;
  width?: string | undefined;
  height?: string | undefined;
  className?: string | undefined;
  error?: any;
  colorText?: string;
  marginLabel?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  showPassword?: boolean;
  zIndex?: number;
  handleAction?: any;
  titleAction?: string;
  isDisable?: boolean;
  buttonAction?: any;
}

interface IGroupOption {
  title?: string;
  name?: string;
  listOption?: Array<{ title: string; id: number }>;
}

interface ICarousel {
  listbanner: Array<any>;
}
interface IGroupCategory {
  idparent?: number;
  numCol?: number;
}
interface IListCategory {
  title?: string;
  idparent?: number;
  keymap: number;
}
interface ICategory {
  className?: string | undefined;
}

interface IProduct {
  Description: string;
  IDCategory: number;
  IDProduct: string;
  IDShop: number;
  Image: string;
  NameProduct: string;
  PackagingSize: string;
  Price: string;
  Quantity: number;
  Rating: any;
  Status: number;
  TypeProduct: string;
  View: number;
  Votes: number;
  Weight: string;
}

interface ILoader {
  className?: string;
  colorLoader?: string;
  height?: number;
  width?: number;
  isLoadMore?: boolean;
}
