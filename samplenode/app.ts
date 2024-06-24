let intervals: number[][] = [[1,3],[2,6],[8,10],[15,18]]

function MergeIntervals(intervals: number[][]) {

    //Sorting of an Array.
    let result = intervals.sort((a, b) => a[0] - b[0])
    let ans: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        let start  = intervals[i][0];
        let end = intervals[i][1];
        if (ans.length && end <= ans[ans.length - 1][1]) {
                continue;
        }
        for (let j = i + 1; j < intervals.length; j++) {
            let arrj_0 = intervals[j][0];
            let arrj_1 = intervals[j][1];

            if (arrj_0 <= end) {
                end = Math.max(end, arrj_1);
            }
            else {
                break;
            }
        }
        ans.push([start, end]);
    }
    console.log("ans", ans);
}
MergeIntervals(intervals)