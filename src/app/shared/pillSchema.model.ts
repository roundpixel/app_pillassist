import { Pill } from './pill.model';

export class PillSchema {
  public id: number;
  public patientId: number;
  public name: string;
  public quantity: number;
  public pills: Pill[];
  public description: string;
  public isAllergic: any;
  public isImportant: any;
  public isDaily: any;
  public isWeekly: any;
  public isMonthly: any;
  public isEveryEachDay: any;
  public isEveryMonday: any;
  public isEveryTuesday: any;
  public isEveryWednesday: any;
  public isEveryThursDay: any;
  public isEveryFriday: any;
  public isEverySaturday: any;
  public isEverySunday: any;
  public startDate: any;
  public endDate: any;
  public showEvery: boolean;
}
