"use client";

import { InvestmentOptions } from "./simulator";

interface SimulationInStorage extends InvestmentOptions {
  name: string;
}

type SimulationsInStorage = Array<SimulationInStorage>;

export function storeSimulation(simulation: SimulationInStorage) {
  const key = "simulations";

  const current = localStorage.getItem(key);
  const storage: SimulationsInStorage = !current ? [] : JSON.parse(current);

  storage.push(simulation);

  localStorage.setItem(key, JSON.stringify(storage));
}
