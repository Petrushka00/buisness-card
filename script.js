const themeButton = document.getElementById("themeToggle")

const savedTheme = localStorage.getItem("theme")

if (savedTheme){
    document.querySelector("html").setAttribute("data-theme", savedTheme)
}else{
    document.querySelector("html").setAttribute("date-theme", "dark")
    localStorage.setItem("theme", "dark")
}


themeToggle.addEventListener("click", function() {
    const currentTheme = document.querySelector("html").getAttribute("data-theme");
    
    if (currentTheme == "dark") {
        document.querySelector("html").setAttribute("data-theme", "light" );
        localStorage.setItem("theme", "light");
        this.textContent = "Темная тема";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        this.textContent = "Светлая тема";
    }
});

if (savedTheme == "dark") {
    themeToggle.textContent = "Светлая тема";
} else {
    themeToggle.textContent = "Темная тема";
}





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

//Фильтрация по категориям


function filterSkills(){
    let filtred;
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
});

//Поиск

function searchSkill(){
    let filtered;
    if (selectedCategory == "all") {
        filtered = skillData;
    } else {
        filtered = skillData.filter(skill => skill.categories.includes(selectedCategory));
    }
    
   
    if (searchText.trim() !== "") {
        const query = searchText.toLowerCase().trim();
        filtered = filtered.filter(skill => skill.name.toLowerCase().includes(query));
    }
    
    
    if (filtered.length == 0) {
        wrapper.innerHTML = `<p class="skills-message">Ничего не найдено</p>`;
        return;
    }

    wrapper.innerHTML = filtered.map(skill => `<p class="skill-name">${skill.name}</p>`).join("")
}

searchInput.addEventListener("input", function(){
    searchText=this.value;
    searchSkill()
})



