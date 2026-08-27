const skillData = [
    { name: 'Python', categories: ['backend', 'tools'] },
    { name: 'FastAPI', categories: ['backend']},
    { name: 'SQLAlchemy', categories: ['backend', 'database']},
    { name: 'Alembic', categories: ['backend', 'database']},
    { name: 'Django', categories: ['backend']},
    { name: 'HTML', categories: ['frontend']},
    { name: 'CSS', categories: ['frontend']},
    { name: 'JavaScript', categories: ['frontend', 'backend']},
    { name: 'SQL', categories: ['backend', 'database']},
    { name: 'Git', categories: ['tools']},
    { name: 'MySQL', categories: ['backend', 'database']},
    { name: 'PyCharm', categories: ['tools']},
    { name: 'Visual Studio Code', categories: ['tools']}
];

const wrapper = document.querySelector(".skill-wrapper");
const searchInput = document.querySelector(".search-input");
const filterButtons = document.querySelectorAll(".category-btn");

let selectedCategory = "all";
let searchText = "";


let filtred;
function filterSkills(){
    if (selectedCategory == "all"){
        filtred = skillData;
    }
    else{
        filtred = skillData.filter(skill => skill.categories.includes(selectedCategory))
    }

    wrapper.innerHTML = filtred.map(skill => `<p class="skill-name">${skill.name}</p>`).join("")

}

filterButtons.forEach(btn => {
    btn.addEventListener("click", function(){
        filterButtons.forEach(b => b.classList.remove("active"));     //classList - содержит все css-классы
        this.classList.add("active");
        
        selectedCategory =this.dataset.filter
        filterSkills()
    })
})




