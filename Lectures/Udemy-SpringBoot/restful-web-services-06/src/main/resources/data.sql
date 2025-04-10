insert into user_details(id, birth_date, name)
values(1001, current_date(), 'Bibi');

insert into user_details(id, birth_date, name)
values(1002, current_date(), 'Ranga');

insert into user_details(id, birth_date, name)
values(1003, current_date(), 'Mr.P');

insert into post(id, description, user_id)
values(2001, 'I Want to Learn AWS', 1001);

insert into post(id, description, user_id)
values(2002, 'I Want to Learn DevOps', 1002);

insert into post(id, description, user_id)
values(2003, 'I Want to Learn Cloud', 1001);