export type StockItem = {
  name: string;
  ticker: string;
  link: string;
  price: number;
  img: string;
};

export type GistResponse = {
  questions: {
    question: string;
    id: string;
    yes: {
      description: string;
      data: StockItem[];
    };
    no: {
      description: string;
      data: StockItem[];
    };
  }[];
};
