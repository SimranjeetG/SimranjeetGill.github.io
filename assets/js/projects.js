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
            description: "Created a flight reservation function by loading data, creating DB tables, and executing DDL and DML queries. Designed ER diagrams and conceptual models, created database objects, and wrote SQL queries to normalize and populate data into tables from the provided raw files. Generated test data to simulate passenger details, flight details, and available seats",
            categories: ['featured', 'Project']
        },
        {
            image: 'assets/images/edms.jpeg',
            pdf: 'assets/pdf/process.pdf',
            title: 'Document Management and Approval Workflow Automation',
            description: "Analyzed AS-IS manual processes and implemented a TO-BE Electronic Document Management System (EDMS) for workflow automation.",
            categories: ['featured', 'Project']
        },

        {
            image: 'assets/images/data.jpeg',
            pdf: 'assets/pdf/Project3.pdf',
            title: 'E-Commerce Data Lakehouse Implementation and Analysis',
            technologies: ['Microsoft Fabric', 'PowerBI'],
            description: "This project involved creating an end-to-end data pipeline using Microsoft Fabric to build a structured Data Lakehouse, which was then visualized with Power BI to generate insights on sales and return trends.",
            categories: ['featured', 'Project']
        },

        {
            image: 'assets/images/hr.jpeg',
            link: 'https://public.tableau.com/app/profile/simranjeet.gill/vizzes',
            title: 'HR Analytics Dashboard',
            technologies: ['Tableau', 'EXCEL'],
            description: "Created a dashboard that provides comprehensive insights into workforce data, enhancing HR decision-making and operational efficiency.",
            categories: ['featured', 'Project']
        },
        {
            image: 'assets/images/credit.jpeg',
            link: 'https://public.tableau.com/app/profile/simranjeet.gill/vizzes',
            title: 'Credit Card Complaint Dashboard',
            technologies: ['Tableau', 'EXCEL'],
            description: "Designed an interactive dashboard that visualizes comprehensive credit card complaint data, highlighting total complaints, response times, trends, geographic distribution, issue categorization, and submission methods, providing enhanced insights for complaint management.",
            categories: ['featured', 'Project']
        },
        {
            image: 'assets/images/R.png',
            pdf: 'assets/pdf/Project2.pdf',
            title: 'Customer Sentiment Analysis',
            technologies: ['R', 'EXCEL'],
            description: "Analyzed women's e-commerce clothing reviews to gain insights into customer satisfaction and fashion trends. Employed R programming for comprehensive data exploration, cleaning, transformation, analysis, and visualization, utilizing techniques such as sentiment analysis and statistical modeling.",
            categories: ['featured', 'Project']
        },
        {
            image: 'assets/images/research.jpg',
            pdf: 'assets/pdf/research1.pdf',
            title: 'Impact of an advertisement on consumer buying behaviour',
            technologies: ['Excel', 'G*Power', 'Smartpls'],
            description: "Identified the impact of advertisements on consumer buying behavior in the FMCG industry. Designed structural and measurement models, performed G*Power analysis, and used descriptive research methods to study the influencing factors.",
            categories: ['featured', 'Research']
        },
    ];

    let projects = [];
    if (slug === 'all') {
        projects = projects_obj.map(project_mapper);
    } else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects.join('')).fadeIn();
};

let project_mapper = project => {
    let link = project.link ? project.link : project.pdf ? project.pdf : project.pptx;
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
                        <h2><a href="${link}" target="_blank">${project.title}</a></h2>
                        <p class="paragraph-text-normal">${project.description}</p>
                    </article>

                    <div class="card__meta">
                        ${project.technologies ? project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join(', ') : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
};


let selected = (slug) => {
    render_projects(slug);
};
