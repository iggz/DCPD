create table cohorts (
    id serial primary key,
    name varchar(200),
    location varchar(50),
    type varchar(50)
);

create table users (
    id serial primary key,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(100),
    password varchar(200),
    cohort_id int references cohorts(id)
);

create table projects (
    id serial primary key,
    name varchar(200),
    description text,
    github_repo varchar(200),
    cohort_id int references cohorts(id),
    url varchar(200),
    added_date date
);

create table project_users (
    project_id int references projects(id),
    user_id int references users(id)
);