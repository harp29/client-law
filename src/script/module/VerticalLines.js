//each box needs an id

class VerticalLines{
    constructor(){

    }

    createLines(){
        let verticalLinesBox = document.querySelector('.loading__grid-holder'),
            line;

        for(let i = 0; i <= 4; i++){
            line = document.createElement('div');
            line.id = i+1;
            line.classList.add('box');
            line.style.left = i * (100 / 5) + '%';
            verticalLinesBox.append(line);
        }

    }
};

export default VerticalLines;