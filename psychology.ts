export function tiltLike(lossStreak:number,lotJumpPct:number,lossAfterWinPct:number){return Math.min(100,Math.round(lossStreak*18+Math.max(0,lotJumpPct-10)*1.2+lossAfterWinPct*0.25));}
