const judgeVegetable = function(vegetables, metric) {
    let winningVal = (vegetables[0])[metric];
    let winner = (vegetables[0]).submitter;
    for (let i = 1; i < vegetables.length; i++) {
        if ((vegetables[i])[metric] > winningVal) {
            winningVal = (vegetables[i])[metric];
            winner = (vegetables[i]).submitter;
        }
    }
    return winner;
}


const vegetables = [{
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
    }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));