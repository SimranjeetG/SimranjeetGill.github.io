$(document).ready(() => {
    render_projects('featured');
});

let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/sql.png',
            pdf: 'assets/pdf/Project1.pdf',
            title: 'Flight Reservation And Booking System',
            technologies: ['SQL', 'EXCEL'],
            description: "Create a flight reservation function by loading and to create DB Tables and executing DDL and DML queries. Designed ER Diagrams, and conceptual models, created database objects, and wrote SQL queries to normalize and populate data into normalized tables from the provided raw files. Generated test data to simulate Passenger details, flight details, and available seats.",
            categories: ['featured', 'Project']
        },
        {
            image: 'assets/images/research.jpg',
            pdf: 'assets/pdf/research1.pdf',
            title: 'Impact of an advertisement on consumer buying behavior',
            technologies: ['Excel', 'G*Power', 'Smartpls'],
            description: "Identify the impact of advertisement on consumer buying behaviour in the FMCG industry. Designed structural and measurement models, performed G*Power Analysis and used descriptive research method to study the factors Influencing.",
            categories: ['featured', 'Research']
        },
    ];

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
};

let project_mapper = project => {
    return `
        <div class="wrapper">      
            <div class="card radius shadowDepth1">
                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <img src="${project.image}" alt="image" class="border-tlr-radius">
                    </div>`           
                : ''}

                <div class="card__content card__padding">
                    <article class="card__article">
                        <h2><a href="${project.pdf}" target="_blank">${project.title}</a></h2>
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};

let selected = (slug) => {
    render_projects(slug);
};
