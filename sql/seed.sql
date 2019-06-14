insert into cohorts (
    cohort_name,
    cohort_location,
    cohort_type,
    start_month,
    start_year
)
values 
    ('Atlanta Immersive October 2015', 'Atlanta, GA', 'Immersive', 10, 15),
    ('Atlanta Immersive February 2016', 'Atlanta, GA', 'Immersive', 2, 16),
    ('Atlanta Immersive May 2016', 'Atlanta, GA', 'Immersive', 5, 16),
    ('Atlanta Immersive July 2016', 'Atlanta, GA', 'Immersive', 7, 16),
    ('Atlanta Immersive September 2016', 'Atlanta, GA', 'Immersive', 9, 16),
    ('Atlanta Immersive November 2016', 'Atlanta, GA', 'Immersive', 11, 16),
    ('Atlanta Immersive February 2017', 'Atlanta, GA', 'Immersive', 2, 17),
    ('Atlanta Immersive April 2017', 'Atlanta, GA', 'Immersive', 4, 17),
    ('Atlanta Immersive June 2017', 'Atlanta, GA', 'Immersive', 6, 17),
    ('Atlanta Immersive September 2017', 'Atlanta, GA', 'Immersive', 9, 17),
    ('Atlanta Immersive November 2017', 'Atlanta, GA', 'Immersive', 11, 17),
    ('Atlanta Immersive January 2018', 'Atlanta, GA', 'Immersive', 1, 18),
    ('Atlanta Immersive April 2018', 'Atlanta, GA', 'Immersive', 4, 18),
    ('Atlanta Immersive June 2018', 'Atlanta, GA', 'Immersive', 6, 18),
    ('Atlanta Immersive September 2018', 'Atlanta, GA', 'Immersive', 9, 18),
    ('Atlanta Immersive November 2018', 'Atlanta, GA', 'Immersive', 11, 18),
    ('Atlanta Immersive February 2019', 'Atlanta, GA', 'Immersive', 2, 19),
    ('Atlanta Immersive April 2019', 'Atlanta, GA', 'Immersive', 4, 19),
    ('Atlanta Immersive June 2019', 'Atlanta, GA', 'Immersive', 6, 19),
    ('Atlanta Immersive August 2019', 'Atlanta, GA', 'Immersive', 8, 19),
    ('Atlanta Immersive November 2019', 'Atlanta, GA', 'Immersive', 11, 19),
    ('Atlanta Immersive January 2020', 'Atlanta, GA', 'Immersive', 1, 20),
    ('Atlanta Immersive April 2020', 'Atlanta, GA', 'Immersive', 4, 20),
    ('Atlanta Immersive May 2020', 'Atlanta, GA', 'Immersive', 5, 20),
    ('Atlanta Immersive August 2020', 'Atlanta, GA', 'Immersive', 8, 20),
    ('Atlanta Flex September 2018', 'Atlanta, GA', 'Flex', 9, 18),
    ('Atlanta Flex April 2019', 'Atlanta, GA', 'Flex', 4, 19),
    ('Atlanta Flex August 2019', 'Atlanta, GA', 'Flex', 8, 19),
    ('Houston Immersive November 2016', 'Houston, TX', 'Immersive', 11, 16),
    ('Houston Immersive April 2017', 'Houston, TX', 'Immersive', 4, 17),
    ('Houston Immersive September 2017', 'Houston, TX', 'Immersive', 9, 17),
    ('Houston Immersive November 2017', 'Houston, TX', 'Immersive', 11, 17),
    ('Houston Immersive February 2018', 'Houston, TX', 'Immersive', 2, 18),
    ('Houston Immersive April 2018', 'Houston, TX', 'Immersive', 4, 18),
    ('Houston Immersive June 2018', 'Houston, TX', 'Immersive', 6, 18),
    ('Houston Immersive September 2018', 'Houston, TX', 'Immersive', 9, 18),
    ('Houston Immersive November 2019', 'Houston, TX', 'Immersive', 11, 19),
    ('Houston Immersive February 2019', 'Houston, TX', 'Immersive', 2, 19),
    ('Houston Immersive April 2019', 'Houston, TX', 'Immersive', 4, 19),
    ('Houston Immersive June 2019', 'Houston, TX', 'Immersive', 6, 19),
    ('Houston Immersive August 2019', 'Houston, TX', 'Immersive', 8, 19),
    ('Houston Immersive November 2020', 'Houston, TX', 'Immersive', 11, 20),
    ('Houston Immersive January 2020', 'Houston, TX', 'Immersive', 1, 20),
    ('Houston Immersive April 2020', 'Houston, TX', 'Immersive', 4, 20),
    ('Houston Flex September 2018', 'Houston, TX', 'Flex', 9, 18),
    ('Houston Flex June 2019', 'Houston, TX', 'Flex', 6, 19),
    ('Houston Flex September 2019', 'Houston, TX', 'Flex', 9, 19);


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

