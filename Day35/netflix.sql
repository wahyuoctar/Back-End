USE wahyu_netflix_excercise;

SELECT * FROM movies;
SELECT * FROM actors;
SELECT * FROM genres;
SELECT * FROM studios;
SELECT * FROM conn_actor_movie;
SELECT * FROM conn_movie_genre;

SELECT * FROM conn_actor_movie AS am
JOIN conn_movie_genre AS mg
JOIN actors ON actors.id = am.actor_id
JOIN movies ON movies.id = am.movie_id = mg.movie_id
JOIN studios ON studios.id = movies.studio_id
JOIN genres ON genres.id = mg.genre_id;
