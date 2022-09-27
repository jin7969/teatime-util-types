import { PropsWithRequiredChildren } from "../src";
import { expectType } from "tsd";
import { ReactNode } from "react";

interface Props {
  id: number;
}

let PropsWithRequiredChildrenValue: PropsWithRequiredChildren<Props>;

test("PropsWithRequiredChildren util type test", () => {
  expectType<Props & { children: ReactNode }>(PropsWithRequiredChildrenValue);
});
