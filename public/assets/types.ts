// types.ts

export interface Event {
  id: string;
  timestamp: number;
  type: string;
  data: Record<string, any>;
}

export interface Metric {
  id: string;
  name: string;
  value: number;
}

export interface Dimension {
  id: string;
  name: string;
  value: string;
}

export interface Session {
  id: string;
  userId: string;
  startedAt: number;
  endedAt: number | null;
  events: Event[];
}

export interface User {
  id: string;
  identifier: string;
  properties: Record<string, any>;
  sessions: Session[];
}

export enum EventType {
  PAGE_VIEW = 'page_view',
  CLICK = 'click',
  FORM_SUBMIT = 'form_submit',
}

export enum MetricType {
  COUNT = 'count',
  SUM = 'sum',
  AVERAGE = 'average',
}