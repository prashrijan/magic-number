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

    generateBoard()
})