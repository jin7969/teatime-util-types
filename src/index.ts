export type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12";

export type LastDate = "28" | "29" | "30" | "31";

export type FirstDayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type PropsWithRequiredChildren<P = unknown> = P & {
  children: React.ReactNode;
};
