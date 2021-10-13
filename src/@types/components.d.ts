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
