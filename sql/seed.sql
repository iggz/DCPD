insert into cohorts (
    cohort_name,
    cohort_location,
    cohort_type,
    start_month,
    start_year
)
values 
    ('ATL Imm 10/2015', 'ATL, GA', 'Imm', 10, 15),
    ('ATL Imm 2/2016', 'ATL, GA', 'Imm', 2, 16),
    ('ATL Imm 5/2016', 'ATL, GA', 'Imm', 5, 16),
    ('ATL Imm 7/2016', 'ATL, GA', 'Imm', 7, 16),
    ('ATL Imm 9/2016', 'ATL, GA', 'Imm', 9, 16),
    ('ATL Imm 11/2016', 'ATL, GA', 'Imm', 11, 16),
    ('ATL Imm 2/2017', 'ATL, GA', 'Imm', 2, 17),
    ('ATL Imm 4/2017', 'ATL, GA', 'Imm', 4, 17),
    ('ATL Imm 6/2017', 'ATL, GA', 'Imm', 6, 17),
    ('ATL Imm 9/2017', 'ATL, GA', 'Imm', 9, 17),
    ('ATL Imm 11/2017', 'ATL, GA', 'Imm', 11, 17),
    ('ATL Imm 1/2018', 'ATL, GA', 'Imm', 1, 18),
    ('ATL Imm 4/2018', 'ATL, GA', 'Imm', 4, 18),
    ('ATL Imm 6/2018', 'ATL, GA', 'Imm', 6, 18),
    ('ATL Imm 9/2018', 'ATL, GA', 'Imm', 9, 18),
    ('ATL Imm 11/2018', 'ATL, GA', 'Imm', 11, 18),
    ('ATL Imm 2/2019', 'ATL, GA', 'Imm', 2, 19),
    ('ATL Imm 4/2019', 'ATL, GA', 'Imm', 4, 19),
    ('ATL Imm 6/2019', 'ATL, GA', 'Imm', 6, 19),
    ('ATL Imm 8/2019', 'ATL, GA', 'Imm', 8, 19),
    ('ATL Imm 11/2019', 'ATL, GA', 'Imm', 11, 19),
    ('ATL Imm 1/2020', 'ATL, GA', 'Imm', 1, 20),
    ('ATL Imm 4/2020', 'ATL, GA', 'Imm', 4, 20),
    ('ATL Imm 5/2020', 'ATL, GA', 'Imm', 5, 20),
    ('ATL Imm 8/2020', 'ATL, GA', 'Imm', 8, 20),
    ('ATL Flex 9/2018', 'ATL, GA', 'Flex', 9, 18),
    ('ATL Flex 4/2019', 'ATL, GA', 'Flex', 4, 19),
    ('ATL Flex 8/2019', 'ATL, GA', 'Flex', 8, 19),
    ('HOU Imm 11/2016', 'HOU, TX', 'Imm', 11, 16),
    ('HOU Imm 4/2017', 'HOU, TX', 'Imm', 4, 17),
    ('HOU Imm 9/2017', 'HOU, TX', 'Imm', 9, 17),
    ('HOU Imm 11/2017', 'HOU, TX', 'Imm', 11, 17),
    ('HOU Imm 2/2018', 'HOU, TX', 'Imm', 2, 18),
    ('HOU Imm 4/2018', 'HOU, TX', 'Imm', 4, 18),
    ('HOU Imm 6/2018', 'HOU, TX', 'Imm', 6, 18),
    ('HOU Imm 9/2018', 'HOU, TX', 'Imm', 9, 18),
    ('HOU Imm 11/2019', 'HOU, TX', 'Imm', 11, 19),
    ('HOU Imm 2/2019', 'HOU, TX', 'Imm', 2, 19),
    ('HOU Imm 4/2019', 'HOU, TX', 'Imm', 4, 19),
    ('HOU Imm 6/2019', 'HOU, TX', 'Imm', 6, 19),
    ('HOU Imm 8/2019', 'HOU, TX', 'Imm', 8, 19),
    ('HOU Imm 11/2020', 'HOU, TX', 'Imm', 11, 20),
    ('HOU Imm 1/2020', 'HOU, TX', 'Imm', 1, 20),
    ('HOU Imm 4/2020', 'HOU, TX', 'Imm', 4, 20),
    ('HOU Flex 9/2018', 'HOU, TX', 'Flex', 9, 18),
    ('HOU Flex 6/2019', 'HOU, TX', 'Flex', 6, 19),
    ('HOU Flex 9/2019', 'HOU, TX', 'Flex', 9, 19);


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