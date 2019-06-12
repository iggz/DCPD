create table cohorts (
    cohort_id serial primary key,
    cohort_name varchar(200),
    cohort_location varchar(50),
    cohort_type varchar(50),
    start_month int,
    start_year int
);

create table users (
    user_id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    user_email varchar(100),
    password varchar(200),
    cohort_id int references cohorts(cohort_id)
);

create table projects (
    project_id serial primary key,
    project_name varchar(200),
    project_description text,
    github_repo varchar(200),
    cohort_id int references cohorts(cohort_id),
    project_url varchar(200),
    added_date date
);

create table project_users (
    project_id int references projects(project_id),
    user_id int references users(user_id)
);