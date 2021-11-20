const peopleDb = [
    {name: 'Kirill', age: 19},
    {name: 'Nek', age: 19},
    {name: 'Vadim', age: 21},
    {name: 'Lera', age: 18}
]
const divText = document.getElementById('divText');

function findPersonByName(){
    const name = prompt(`Введите имя`);
    const people = peopleDb.find(x => x.name.toLowerCase() === name.toLowerCase());

    alert(`${people.name} ${people.age}`);
}

function addToDB(name, age){
    peopleDb.push({name: name, age: age});
    alert(`Добавлено`);
}
function deletePeople(){
    const name = prompt(`Имя для удаления`);
    if(confirm(`Вы уверены?`)){
        peopleDb.splice(peopleDb.findIndex(x => x.name.toLowerCase() === name.toLowerCase()), 1);
        alert('Дело сделано');
    }
    else {
        alert('Отмена');
    }
}
function showPeopleDb(){
    divText.textContent = '';
    peopleDb.forEach(x => {
        divText.textContent += `${x.name} ${x.age}\n`;
    });
}