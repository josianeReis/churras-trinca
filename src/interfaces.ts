/* eslint-disable camelcase */
export interface ScheduleInterface {
  id?: number;
  week_day: string;
  from: string;
  to: string;
}

export interface SubjectInterface {
  id: number;
  name: string;
}

export interface TeacherInterface {
  id: string;
  name: string;
  avatar: string;
  whatsapp: string;
}

export interface ClassItemInterace {
  id: number;
  subject_id: number;
  cost: number;
  summary: string;
  teacher: TeacherInterface;
  schedules: ScheduleInterface[];
}
