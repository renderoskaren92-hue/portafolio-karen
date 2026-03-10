function mostrarSeccion(id) {
    const secciones = document.querySelectorAll('.section');
    secciones.forEach(sec => sec.style.display = 'none');
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.style.display = 'block';
    
        if(id === 'habilidades') {
            const skills = document.querySelectorAll('.skill-progress');
            skills.forEach(skill => {
                skill.style.width = skill.classList[1] === 'html' ? '50%' :
                                   skill.classList[1] === 'sql' ? '50%' :
                                   skill.classList[1] === 'jira' ? '55%' :
                                   skill.classList[1] === 'testrail' ? '50%' :
                                   skill.classList[1] === 'pruebas' ? '80%' :
                                   skill.classList[1] === 'ingles' ? '50%' : '0';
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
});

const perfilSobreMi = document.querySelector('.perfil-sobre-mi img');
const frase = document.getElementById('frase-celebre');
perfilSobreMi.addEventListener('mouseover', () => { frase.style.display = 'block'; });
perfilSobreMi.addEventListener('mouseout', () => { frase.style.display = 'none'; });