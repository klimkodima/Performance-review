export interface IActivity {
  value: number;
  name: string;
}

export interface ICardActivity {
  activities: IActivity[];
  totalTime: number;
}

export interface IGridBox {
  xs: number;
  md: number;
  lg: number;
}

export interface IPieOption {
  title: {
    text: string;
    textStyle: {
      fontWeight: string;
      fontSize: string;
    };
    top: string;
  };
  animation: false;
  color: string[];
  labelLine: {
    color: string;
  };
  label: {
    show: true;
    color: string;
    fontWeight: 500;
    fontSize: string;
    formatter: string;
  };
  series: [
    {
      name: string;
      type: string;
      radius: string;
      data: IActivity[];
      labelLine: {
        lineStyle: {
          color: string;
        };
      };
      emphasis: {
        disabled: boolean;
      };
      top: string;
    }
  ];
}
