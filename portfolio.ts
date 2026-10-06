export type AccountSummary={pnl?:number;count?:number};
export function aggregate(accounts:AccountSummary[]):{pnl:number;count:number}{return accounts.reduce<{pnl:number;count:number}>((s,a)=>({pnl:s.pnl+(a.pnl||0),count:s.count+(a.count||0)}),{pnl:0,count:0});}
