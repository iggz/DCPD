insert into cohorts (
    cohort_name,
    cohort_location,
    cohort_type,
    start_month,
    start_year
)
values (
    'Atlanta Immersive April 2019', 'Atlanta, GA', 'Immersive', 4, 19
);

insert into projects (
    project_name,
    project_description,
    github_repo,
    cohort_id,
    project_url,
    added_date
)
values (
    'super awesome fun time project', 'sample project to test database', 'github.com', 1, 'project.com', '6/12/2019'
);