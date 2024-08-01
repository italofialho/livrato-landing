import { z, ZodType } from "zod";

import { SimulatorForm } from "./interface";

export const SimulatorSchema: ZodType<SimulatorForm> = z.object({
  goalName: z.string(),
  initialValue: z.coerce
    .number({
      required_error: "required field",
      invalid_type_error: "Preencha o valor inicial.",
    })
    .min(0, "O valor mínimo deve ser zero."),
  monthlyValue: z.coerce
    .number({
      required_error: "required field",
      invalid_type_error: "Preencha o valor mensal inicial.",
    })
    .min(0, "O valor mínimo deve ser zero."),
  interestRate: z.coerce
    .number({
      required_error: "required field",
      invalid_type_error: "Preencha a taxa.",
    })
    .min(1, "O valor mínimo deve ser um."),
  isAnnualRate: z.boolean({
    required_error: "required field",
    invalid_type_error: "Preencha se a taxa é anual ou mensal.",
  }),
  timePeriod: z.coerce
    .number({
      required_error: "required field",
      invalid_type_error: "Preencha o período que o valor ficará investido.",
    })
    .min(1, "O valor mínimo deve ser um."),
  isYears: z.boolean({
    required_error: "required field",
    invalid_type_error: "Preencha se valor ficará por meses ou anos.",
  }),
});

export type SimulatorFormData = z.infer<typeof SimulatorSchema>;
