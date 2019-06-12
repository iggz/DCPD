insert into cohorts (
    name,
    location,
    type
)
values (
    'Atlanta Immersive April 2019', 'Atlanta, GA', 'Immersive'
);

insert into projects (
    name,
    description,
    github_repo,
    cohort_id,
    url,
    added_date
)
values (
    'super awesome fun time project', 'sample project to test database', 'github.com', 1, 'project.com', '6/12/2019'
);