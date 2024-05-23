const data = [
    {
        id: '1',
        question: 'What is Computer Science',
        answer: 'A field in which computer is studied 😂'
    },
    {
        id: '2',
        question: 'What is JavaScript',
        answer: 'A programming language commonly used for web development.'
    },
    {
        id: '3',
        question: 'What is artificial intelligence (AI)',
        answer: 'The simulation of human intelligence processes by machines, especially computer systems.'
    },
    {
        id: '4',
        question: 'What is HTML',
        answer: 'HyperText Markup Language, used for structuring web pages and their content.'
    },
    {
        id: '5',
        question: 'What is CSS',
        answer: 'Cascading Style Sheets, used for styling web pages and their presentation.'
    }
];


const accordianWrapper = document.querySelector('.accordian')

function createAccordianData(){
    accordianWrapper.innerHTML = data.map(dataItem=>`
    <div class='acordianItem' >
    <div class='accordian_title' >
    <h3>${dataItem.question}</h3>
    <i class='fa-solid fa-arrow-down'></i>
    </div>
    <div class='accordian_content' >
    <p>${dataItem.answer}</p>
    </div>
    </div>
    `).join(" ")
}

createAccordianData();

const getaccordianTitles = document.querySelectorAll('.accordian_title')

console.log(getaccordianTitles)

getaccordianTitles.forEach(currentItem =>{
    currentItem.addEventListener('click',(e)=>{
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active')
        }else{
            let getAlreadyAddedActiveClasses = document.querySelectorAll('.active')
            getAlreadyAddedActiveClasses.forEach(currentActiveItem=>{
                currentActiveItem.classList.remove('active')
            })
            currentItem.classList.add('active')
        }
    })
})