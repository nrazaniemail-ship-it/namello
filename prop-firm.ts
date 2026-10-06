export type PropRules={startBalance:number;dailyLossPct:number;maxLossPct:number;targetPct:number;minDays:number};
export function limits(r:PropRules){return {daily:r.startBalance*r.dailyLossPct/100,max:r.startBalance*r.maxLossPct/100,target:r.startBalance*r.targetPct/100};}
