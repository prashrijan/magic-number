document.addEventListener('DOMContentLoaded', () => {
    function generateBoard(){
        const gridBody = document.querySelector('.grid-board tbody')

        for(let i = 0; i < 3; i++){
            const row = document.createElement('tr')
            for(let j = 0; j < 3; j++){
                const cell = document.createElement('td')
                const input = document.createElement('input')
                input.type = "text"
                input.dataset.row = i
                input.dataset.col = j
                input.maxLength = 1
                cell.appendChild(input)
                row.appendChild(cell)
            }
            gridBody.appendChild(row)
        }
    }

    function spreadTheBoard(){
        const board = Array.from({length:3}, () => (Array(3).fill(0)))
        const inputs = document.querySelectorAll(".grid-board tbody input")
        let hasEmptyCells = false;

        inputs.forEach(input => {
            const row = parseInt(input.getAttribute('data-row'))
            const col = parseInt(input.getAttribute('data-col'))
            const value = parseInt(input.value)

            if(value === ""){
                hasEmptyCells = true
            }else{
                board[row][col] = value
            }
        })

        if(hasEmptyCells){
            alert("Please enter all the fields")
        }

        return board
    }

    function isMagicNumber(){
        const result = document.querySelector('.result')
        const grid = spreadTheBoard();
        
        let sumRow1 = grid[0][0] + grid[0][1] + grid[0][2]
        let sumRow2 = grid[1][0] + grid[1][1] + grid[1][2]
        let sumRow3 = grid[2][0] + grid[2][1] + grid[2][2]
    
    
        let sumCol1 = grid[0][0] + grid[1][0] + grid[2][0]
        let sumCol2 = grid[0][1] + grid[1][1] + grid[2][1]
        let sumCol3 = grid[0][2] + grid[1][2] + grid[2][2]
    
        let sumDiag1 = grid[0][0] + grid[1][1] + grid[2][2]
        let sumDiag2 = grid[0][2] + grid[1][1] + grid[2][0]

        
        let allSums = [
            sumRow1, sumRow2, sumRow3, sumCol1, sumCol2, sumCol3, sumDiag1, sumDiag2
        ]


        const isMagicArray =  allSums.every(sums => sums === allSums[0])
        
        if(isMagicArray){
            result.innerHTML = "You solved it!! Congrats"
        }else{
            result.innerHTML = "It was not the right solution. Hard Luck"
        }
    }

    const checkBtn = document.querySelector('.check-btn');
    checkBtn.addEventListener('click', isMagicNumber)

    generateBoard()
})